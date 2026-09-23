/* ============================================================
   UI — umumiy xatti-harakatlar: mavzu, menyu, animatsiyalar,
   slayder, sanoq, akkordeon, filtr, toast, forma tekshiruvi.
   ============================================================ */
(function (global) {
  "use strict";

  var UI = {};

  /* ---------- 1. Mavzu ---------- */
  /* Platforma faqat kunduzgi rejimda ishlaydi — tungi rejim ataylab olib tashlangan. */
  UI.initTheme = function () {
    document.documentElement.setAttribute("data-theme", "light");
  };

  /* ---------- 2. Mobil menyu ---------- */
  UI.initBurger = function () {
    var b = document.getElementById("burger");
    var m = document.getElementById("mobileNav");
    if (!b || !m) return;
    b.addEventListener("click", function () {
      b.classList.toggle("is-open");
      m.classList.toggle("is-open");
    });
    m.addEventListener("click", function (e) {
      if (e.target.closest("a")) { b.classList.remove("is-open"); m.classList.remove("is-open"); }
    });
  };

  /* ---------- 2b. Ochiluvchi menyular (bir nechta bo'lishi mumkin) ---------- */
  UI.initDropdown = function () {
    var groups = document.querySelectorAll(".nav__more");
    if (!groups.length) return;

    function closeAll(except) {
      groups.forEach(function (g) {
        if (g === except) return;
        g.classList.remove("is-open");
        g.querySelector(".nav__link").setAttribute("aria-expanded", "false");
      });
    }

    groups.forEach(function (group) {
      var btn = group.querySelector(".nav__link");
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        var open = !group.classList.contains("is-open");
        closeAll();
        group.classList.toggle("is-open", open);
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });

    document.addEventListener("click", function (e) {
      if (!e.target.closest(".nav__more")) closeAll();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeAll();
    });
  };

  /* ---------- 2c. Qidiruv oynasi ---------- */
  UI.initSearch = function () {
    var modal = document.getElementById("searchModal");
    var open = document.getElementById("searchOpen");
    var close = document.getElementById("searchClose");
    var input = document.getElementById("searchInput");
    var out = document.getElementById("searchResults");
    if (!modal || !open) return;

    /* Qidiruv indeksini menyu + ma'lumotlar bazasidan yig'amiz */
    var INDEX = [];
    function add(nom, bolim, icon, href) { INDEX.push({ nom: nom, bolim: bolim, icon: icon, href: href }); }

    (Layout.menu || []).forEach(function (m) {
      if (m.dropdown) {
        m.dropdown.forEach(function (d) { add(d.nom, "Bo'lim", d.icon, Layout.url(d.href)); });
      } else {
        add(m.nom, "Bo'lim", "grid", Layout.url(m.href));
      }
    });
    (Layout.extra || []).forEach(function (m) {
      add(m.nom, "Bo'lim", m.icon, Layout.url(m.href));
    });
    if (global.DB) {
      DB.tashabbuslar.forEach(function (t) {
        add(t.nom, "Tashabbus", t.icon, Layout.url("bolimlar/tashabbuslar/batafsil.html?id=" + t.id));
      });
      DB.tanlovlar.forEach(function (t) {
        add(t.nom, "Tanlov", "trophy", Layout.url("bolimlar/tanlovlar/index.html#" + t.id));
      });
      DB.tadbirlar.forEach(function (e) {
        add(e.nom, "Tadbir", "calendar", Layout.url("bolimlar/tadbirlar/index.html"));
      });
      DB.yangiliklar.forEach(function (n) {
        add(n.sarlavha, "Yangilik", "newspaper", Layout.url("bolimlar/yangiliklar/maqola.html?id=" + n.id));
      });
      DB.kitoblar.forEach(function (k) {
        add(k.nom + " — " + k.muallif, "Kitob", "book", Layout.url("bolimlar/kutubxona/index.html"));
      });
    }

    function render(q) {
      q = (q || "").toLowerCase().trim();
      var list = q
        ? INDEX.filter(function (i) { return i.nom.toLowerCase().indexOf(q) > -1; }).slice(0, 12)
        : INDEX.slice(0, 8);
      out.innerHTML = list.length
        ? list.map(function (i) {
            return '<a href="' + i.href + '"><i data-ico="' + i.icon + '"></i><span>' + i.nom + "</span>" +
                   "<small>" + i.bolim + "</small></a>";
          }).join("")
        : '<div class="empty" style="padding:26px"><p class="small">Hech narsa topilmadi</p></div>';
      if (global.Icons) Icons.render(out);
    }

    function show() {
      modal.classList.add("is-open");
      render("");
      setTimeout(function () { input.focus(); }, 60);
    }
    function hide() { modal.classList.remove("is-open"); input.value = ""; }

    open.addEventListener("click", show);
    if (close) close.addEventListener("click", hide);
    modal.addEventListener("click", function (e) { if (e.target === modal) hide(); });
    input.addEventListener("input", function () { render(input.value); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") hide();
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); show(); }
    });
  };

  /* ---------- 3. Skroll: progress, sticky header, to-top ---------- */
  UI.initScroll = function () {
    var bar = document.getElementById("scrollProgress");
    var head = document.getElementById("siteHeader");
    var top = document.getElementById("toTop");
    function onScroll() {
      var y = window.pageYOffset;
      var h = document.documentElement.scrollHeight - window.innerHeight;
      if (bar) bar.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
      if (head) head.classList.toggle("is-stuck", y > 8);
      if (top) top.classList.toggle("is-on", y > 420);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    if (top) top.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  };

  /* ---------- 4. Scroll-reveal animatsiyasi ---------- */
  UI.initReveal = function (root) {
    var els = (root || document).querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      Array.prototype.forEach.call(els, function (el) { el.classList.add("is-in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    Array.prototype.forEach.call(els, function (el) { io.observe(el); });

    /* Zaxira: kuzatuvchi biror sababga ko'ra ishlamasa,
       ekranning yuqori qismidagi kontent baribir ochiladi */
    setTimeout(function () {
      Array.prototype.forEach.call(els, function (el) {
        if (!el.classList.contains("is-in") && el.getBoundingClientRect().top < window.innerHeight) {
          el.classList.add("is-in");
        }
      });
    }, 2600);
  };

  /* ---------- 5. Raqamlar sanog'i ---------- */
  UI.initCounters = function (root) {
    var els = (root || document).querySelectorAll("[data-count]");
    function run(el) {
      var target = parseFloat(el.getAttribute("data-count")) || 0;
      var dur = 1500, t0 = null;
      function step(ts) {
        if (!t0) t0 = ts;
        var p = Math.min((ts - t0) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased).toLocaleString("ru-RU").replace(/ /g, " ");
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    if (!("IntersectionObserver" in window)) {
      Array.prototype.forEach.call(els, run); return;
    }
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (e) { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } });
    }, { threshold: 0.4 });
    Array.prototype.forEach.call(els, function (el) { el.textContent = "0"; io.observe(el); });
  };

  /* ---------- 6. Progress-barlar ---------- */
  UI.initProgress = function (root) {
    var els = (root || document).querySelectorAll("[data-progress]");
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.style.width = e.target.getAttribute("data-progress") + "%";
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });
    Array.prototype.forEach.call(els, function (el) { io.observe(el); });
  };

  /* ---------- 7. Slayder (aylanuvchi rasmlar) ---------- */
  UI.Slider = function (el, opts) {
    opts = opts || {};
    var slides = el.querySelectorAll(".slide");
    var dotHost = opts.dots || el;
    var dots = dotHost.querySelectorAll(".slider__dot");
    var hoverRoot = opts.hoverRoot || el;
    var i = 0, timer = null, delay = opts.delay || 5000;

    function go(n) {
      i = (n + slides.length) % slides.length;
      Array.prototype.forEach.call(slides, function (s, k) { s.classList.toggle("is-active", k === i); });
      Array.prototype.forEach.call(dots, function (d, k) { d.classList.toggle("is-active", k === i); });
    }
    function next() { go(i + 1); }
    function prev() { go(i - 1); }
    function play() { stop(); timer = setInterval(next, delay); }
    function stop() { if (timer) clearInterval(timer); }

    Array.prototype.forEach.call(dots, function (d, k) {
      d.addEventListener("click", function () { go(k); play(); });
    });
    var pn = el.querySelector(".slider__nav--next");
    var pp = el.querySelector(".slider__nav--prev");
    if (pn) pn.addEventListener("click", function () { next(); play(); });
    if (pp) pp.addEventListener("click", function () { prev(); play(); });
    hoverRoot.addEventListener("mouseenter", stop);
    hoverRoot.addEventListener("mouseleave", play);
    document.addEventListener("visibilitychange", function () {
      document.hidden ? stop() : play();
    });

    go(0); play();
    return { go: go, next: next, prev: prev, stop: stop, play: play };
  };

  /* ---------- 8. Akkordeon ---------- */
  UI.initAccordion = function (root) {
    var accs = (root || document).querySelectorAll(".acc");
    Array.prototype.forEach.call(accs, function (acc) {
      var q = acc.querySelector(".acc__q");
      var a = acc.querySelector(".acc__a");
      if (!q || !a) return;
      q.addEventListener("click", function () {
        var open = acc.classList.contains("is-open");
        Array.prototype.forEach.call(accs, function (o) {
          o.classList.remove("is-open");
          var oa = o.querySelector(".acc__a");
          if (oa) oa.style.maxHeight = null;
        });
        if (!open) {
          acc.classList.add("is-open");
          a.style.maxHeight = a.scrollHeight + "px";
        }
      });
    });
  };

  /* ---------- 9. Filtr + qidiruv ---------- */
  /* items: NodeList; har bir element data-tags va data-text ga ega bo'lishi kerak */
  UI.initFilter = function (cfg) {
    var chips = document.querySelectorAll(cfg.chips);
    var items = document.querySelectorAll(cfg.items);
    var input = cfg.search ? document.querySelector(cfg.search) : null;
    var empty = cfg.empty ? document.querySelector(cfg.empty) : null;
    var active = "all";

    function apply() {
      var q = (input && input.value ? input.value : "").toLowerCase().trim();
      var shown = 0;
      Array.prototype.forEach.call(items, function (it) {
        var tags = (it.getAttribute("data-tags") || "").split(" ");
        var text = (it.getAttribute("data-text") || it.textContent).toLowerCase();
        var okTag = active === "all" || tags.indexOf(active) > -1;
        var okQ = !q || text.indexOf(q) > -1;
        var ok = okTag && okQ;
        it.classList.toggle("hide", !ok);
        if (ok) { shown++; it.classList.remove("is-in"); void it.offsetWidth; it.classList.add("is-in"); }
      });
      if (empty) empty.classList.toggle("hide", shown > 0);
    }

    Array.prototype.forEach.call(chips, function (c) {
      c.addEventListener("click", function () {
        Array.prototype.forEach.call(chips, function (x) { x.classList.remove("is-active"); });
        c.classList.add("is-active");
        active = c.getAttribute("data-filter") || "all";
        apply();
      });
    });
    if (input) input.addEventListener("input", apply);
    apply();
    return { apply: apply };
  };

  /* ---------- 10. Toast xabarlari ---------- */
  UI.toast = function (msg, icon) {
    var host = document.getElementById("toastHost");
    if (!host) return;
    var t = document.createElement("div");
    t.className = "toast";
    t.innerHTML = (global.Icons ? Icons.svg(icon || "check-circle") : "") + "<span>" + msg + "</span>";
    host.appendChild(t);
    setTimeout(function () {
      t.classList.add("is-out");
      setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 350);
    }, 3200);
  };

  /* ---------- 11. Forma tekshiruvi ---------- */
  UI.initForm = function (sel, onOk) {
    var form = document.querySelector(sel);
    if (!form) return;
    form.setAttribute("novalidate", "novalidate");

    function fail(field, msg) {
      field.classList.add("has-error");
      var e = field.querySelector(".field__err");
      if (e) e.innerHTML = (global.Icons ? Icons.svg("alert-circle") : "") + "<span>" + msg + "</span>";
    }
    function clear(field) { field.classList.remove("has-error"); }

    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var ok = true;
      var fields = form.querySelectorAll(".field");
      Array.prototype.forEach.call(fields, function (f) {
        clear(f);
        var inp = f.querySelector(".input, .select, .textarea");
        if (!inp) return;
        var v = (inp.value || "").trim();
        if (inp.hasAttribute("required") && !v) { fail(f, "Bu maydon to'ldirilishi shart"); ok = false; return; }
        if (inp.type === "email" && v && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) { fail(f, "Email manzil noto'g'ri"); ok = false; return; }
        if (inp.type === "tel" && v && v.replace(/\D/g, "").length < 9) { fail(f, "Telefon raqam to'liq emas"); ok = false; return; }
        if (inp.type === "password" && v && v.length < 6) { fail(f, "Parol kamida 6 belgidan iborat bo'lsin"); ok = false; return; }
        if (inp.hasAttribute("data-match")) {
          var other = form.querySelector(inp.getAttribute("data-match"));
          if (other && other.value !== v) { fail(f, "Parollar mos kelmadi"); ok = false; return; }
        }
      });
      var must = form.querySelector('input[type="checkbox"][required]');
      if (must && !must.checked) { ok = false; UI.toast("Shartlarga rozilik bildiring", "alert-circle"); }

      if (!ok) return;
      if (typeof onOk === "function") onOk(form);
      else {
        UI.toast("Ma'lumotlaringiz muvaffaqiyatli yuborildi!", "check-circle");
        form.reset();
      }
    });

    form.addEventListener("input", function (e) {
      var f = e.target.closest(".field");
      if (f) clear(f);
    });
  };

  /* ---------- 12. Query parametrini olish ---------- */
  UI.param = function (name) {
    var m = new RegExp("[?&]" + name + "=([^&#]*)").exec(location.search);
    return m ? decodeURIComponent(m[1].replace(/\+/g, " ")) : null;
  };

  /* ---------- 13. Umumiy ishga tushirish ---------- */
  UI.boot = function (after) {
    if (global.Layout) Layout.mount();
    if (typeof after === "function") after();
    if (global.Icons) Icons.render();
    UI.initTheme();
    UI.initBurger();
    UI.initDropdown();
    UI.initSearch();
    UI.initScroll();
    UI.initReveal();
    UI.initCounters();
    UI.initProgress();
    UI.initAccordion();
    document.body.classList.add("page-enter");
  };

  global.UI = UI;
})(window);

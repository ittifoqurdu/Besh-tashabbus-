/* ============================================================
   HOME — bosh sahifa mazmunini shakllantirish
   ============================================================ */
(function () {
  "use strict";

  var IMG = "assets/img/rasmlar/";

  function q(id) { return document.getElementById(id); }

  /* ---- Hero slayder ---- */
  function slider() {
    var track = q("heroTrack"), dots = q("heroDots");
    if (!track) return;
    track.innerHTML = DB.slaydlar.map(function (s) {
      return '<div class="slide"><img src="' + IMG + s.rasm + '" alt="' + s.nom + '"></div>';
    }).join("");
    dots.innerHTML = DB.slaydlar.map(function (s) {
      return '<button class="slider__dot" type="button" aria-label="' + s.nom + '"></button>';
    }).join("");
  }

  /* ---- Yuguruvchi qator ---- */
  function marquee() {
    var el = q("marquee");
    if (!el) return;
    var one = DB.marquee.map(function (m) {
      return '<span class="marquee__item"><i data-ico="' + m.icon + '"></i>' + m.t + "</span>";
    }).join("");
    el.innerHTML = one + one; /* uzluksiz aylanish uchun ikki marta */
  }

  /* ---- 5 ta tashabbus kartasi ---- */
  function initiatives() {
    var el = q("initGrid");
    if (!el) return;
    el.innerHTML = DB.tashabbuslar.map(function (t, i) {
      return '<article class="init-card tema-' + t.tema + '" data-reveal data-delay="' + (i + 1) + '">' +
        '<div class="init-card__top">' +
          '<span class="init-card__num">' + t.num + "</span>" +
          '<span class="init-card__art" aria-hidden="true">' + t.emoji + "</span>" +
        "</div>" +
        "<h3>" + t.nom + "</h3>" +
        "<p>" + t.qisqa + "</p>" +
        '<a class="btn btn--sm" href="bolimlar/tashabbuslar/batafsil.html?id=' + t.id + '">' +
          'Batafsil <i data-ico="arrow-right"></i></a>' +
      "</article>";
    }).join("");
  }

  /* ---- Statistika ---- */
  function stats() {
    var el = q("statGrid");
    if (!el) return;
    el.innerHTML = DB.statistika.map(function (s) {
      return '<div class="stat">' +
        '<span class="stat__icon"><i data-ico="' + s.icon + '"></i></span>' +
        '<div class="stat__num"><span data-count="' + s.n + '"></span></div>' +
        '<div class="stat__lbl">' + s.l + "</div></div>";
    }).join("");
  }

  /* ---- Tanlovlar (mini ro'yxat) ---- */
  /* Eng oxirgi qo'shilganlardan 6 tasi (eng so'nggisi — "Universiada" — allaqachon
     boshqa joyda ko'rsatilgani uchun bu yerda o'tkazib yuboriladi) */
  function news() {
    var el = q("newsMini");
    if (!el) return;
    el.innerHTML = DB.tanlovlar.slice().reverse().slice(1, 7).map(function (t) {
      return '<a class="news-item" href="bolimlar/tanlovlar/index.html#' + t.id + '">' +
        '<span class="news-item__img"><img src="' + IMG + t.rasm + '" alt=""></span>' +
        '<span class="news-item__body"><b>' + t.nom + "</b>" +
        '<span class="news-item__date"><i data-ico="clock"></i>' + t.muddat + " gacha</span></span></a>";
    }).join("");
  }

  /* ---- Tadbirlar (mini) ---- */
  function events() {
    var el = q("eventMini");
    if (!el) return;
    el.innerHTML = DB.tadbirlar.slice(0, 4).map(function (e, i) {
      return '<article class="card card--hover event" data-reveal data-delay="' + (i + 1) + '">' +
        '<div class="event__date"><b>' + e.kun + "</b><span>" + e.oy + "</span></div>" +
        '<div class="event__body">' +
          '<span class="badge badge--t' + e.tema + '">' + e.tur + "</span>" +
          "<h3 class='mt-1'>" + e.nom + "</h3>" +
          '<div class="meta"><span><i data-ico="map-pin"></i>' + e.joy + "</span>" +
          '<span><i data-ico="clock"></i>' + e.vaqt + "</span></div>" +
        "</div></article>";
    }).join("");
  }

  /* ---- Reyting (mini) ---- */
  function rank() {
    var el = q("rankMini");
    if (!el) return;
    el.innerHTML = DB.reyting.slice(0, 5).map(function (r) {
      var cls = r.orin <= 3 ? " rank--" + r.orin : "";
      return "<tr><td><span class='rank" + cls + "'>" + r.orin + "</span></td>" +
        '<td><div class="user-cell"><img src="' + IMG + r.avatar + '" alt=""><span><b>' + r.ism + "</b></span></div></td>" +
        "<td class='small muted'>" + r.fak + "</td>" +
        "<td><b>" + r.ball.toLocaleString("ru-RU") + "</b></td></tr>";
    }).join("");
  }

  /* ---- Ishga tushirish ---- */
  UI.boot(function () {
    slider(); marquee(); initiatives(); stats();
    news(); events(); rank();
  });

  /* Hero slayderi */
  var hs = document.getElementById("heroSlider");
  if (hs) {
    var S = UI.Slider(hs, { delay: 5600, dots: document.getElementById("heroDots"), hoverRoot: document.getElementById("hero") });
    document.querySelectorAll("[data-slider]").forEach(function (b) {
      b.addEventListener("click", function () {
        b.getAttribute("data-slider") === "next" ? S.next() : S.prev();
        S.play();
      });
    });
  }

  /* Video taqdimot tugmasi */
  var vb = document.getElementById("videoBtn");
  if (vb) vb.addEventListener("click", function () {
    UI.toast("Video taqdimot tez orada qo'shiladi", "play");
  });
})();

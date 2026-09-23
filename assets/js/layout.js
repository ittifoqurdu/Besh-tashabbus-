/* ============================================================
   LAYOUT — barcha sahifalar uchun umumiy header va footer.
   <body data-root="../../" data-page="tanlovlar"> orqali sozlanadi.
   ============================================================ */
(function (global) {
  "use strict";

  var ROOT = document.body.getAttribute("data-root") || "";
  var PAGE = document.body.getAttribute("data-page") || "";

  /* Asosiy menyu. Har bir band yo `href`, yo `dropdown` (ichki bandlar) ga ega */
  var MENU = [
    { id: "bosh", nom: "Bosh sahifa", icon: "home", href: "index.html" },
    {
      id: "markaz", nom: "Markaz haqida", icon: "info",
      dropdown: [
        { id: "rahbariyat",   nom: "Rahbariyat",       icon: "id-card",      href: "bolimlar/markaz/rahbariyat.html" },
        { id: "nizom",        nom: "Nizom",            icon: "file-text",    href: "bolimlar/markaz/nizom.html" },
        { id: "yoriqnoma",    nom: "Yo'riqnoma",       icon: "book-open",    href: "bolimlar/markaz/yoriqnoma.html" },
        { id: "tashabbuslar", nom: "Besh tashabbus",   icon: "sparkles",     href: "bolimlar/tashabbuslar/index.html" }
      ]
    },
    { id: "togaraklar", nom: "To'garaklar", icon: "users",   href: "bolimlar/togaraklar/index.html" },
    { id: "tanlovlar",  nom: "Tanlovlar",   icon: "trophy",  href: "bolimlar/tanlovlar/index.html" },
    { id: "reyting",    nom: "Reyting",     icon: "medal",   href: "bolimlar/reytinglar/index.html" },
    { id: "kutubxona",  nom: "Kutubxona",   icon: "book",    href: "bolimlar/kutubxona/index.html" },
    { id: "aloqa",      nom: "Aloqa",       icon: "phone",   href: "bolimlar/aloqa/index.html" }
  ];

  /* Asosiy menyuda ko'rinmaydigan, lekin sayt bo'ylab kerak bo'ladigan sahifalar
     (footer va qidiruv indeksi uchun) */
  var EXTRA = [
    { id: "tadbirlar",   nom: "Tadbirlar",       icon: "calendar",   href: "bolimlar/tadbirlar/index.html" },
    { id: "yangiliklar", nom: "Yangiliklar",     icon: "newspaper",  href: "bolimlar/yangiliklar/index.html" },
    { id: "statistika",  nom: "Statistika",      icon: "bar-chart",  href: "bolimlar/statistika/index.html" },
    { id: "savollar",    nom: "Savol-javob",     icon: "info",       href: "bolimlar/savollar/index.html" }
  ];

  function url(p) { return ROOT + p; }

  function flatIds(item) {
    return item.dropdown ? item.dropdown.map(function (d) { return d.id; }) : [item.id];
  }
  function isActive(item) { return flatIds(item).indexOf(PAGE) > -1; }

  function desktopItem(item) {
    if (!item.dropdown) {
      return '<a class="nav__link' + (isActive(item) ? " is-active" : "") + '" href="' + url(item.href) + '">' +
             '<i data-ico="' + item.icon + '"></i>' + item.nom + "</a>";
    }
    var open = isActive(item);
    return (
      '<div class="nav__more' + (open ? " is-open-active" : "") + '">' +
        '<button class="nav__link' + (open ? " is-active" : "") + '" type="button" aria-haspopup="true" aria-expanded="false">' +
          '<i data-ico="' + item.icon + '"></i>' + item.nom + '<i data-ico="chevron-down" class="ico-caret"></i></button>' +
        '<div class="dropdown">' + item.dropdown.map(function (d) {
          return '<a href="' + url(d.href) + '"' + (d.id === PAGE ? ' class="is-active"' : "") + '>' +
                 '<i data-ico="' + d.icon + '"></i>' + d.nom + "</a>";
        }).join("") + "</div>" +
      "</div>"
    );
  }

  function mobileItem(item) {
    if (!item.dropdown) {
      return '<a class="nav__link' + (isActive(item) ? " is-active" : "") + '" href="' + url(item.href) + '">' +
             '<i data-ico="' + item.icon + '"></i>' + item.nom + "</a>";
    }
    return (
      '<div class="mobile-group' + (isActive(item) ? " is-active" : "") + '">' +
        '<div class="mobile-group__t">' + item.nom + "</div>" +
        item.dropdown.map(function (d) {
          return '<a class="nav__link mobile-sub' + (d.id === PAGE ? " is-active" : "") + '" href="' + url(d.href) + '">' +
                 '<i data-ico="' + d.icon + '"></i>' + d.nom + "</a>";
        }).join("") +
      "</div>"
    );
  }

  function header() {
    return "" +
    '<div class="scroll-progress" id="scrollProgress"></div>' +
    '<header class="site-header" id="siteHeader">' +
      '<div class="wrap header-inner">' +

        '<a class="brand" href="' + url("index.html") + '">' +
          '<img class="brand__logo" src="' + url("assets/img/logo/urdu_logo.png") + '" alt="Urganch Davlat Universiteti">' +
        "</a>" +

        '<nav class="nav">' + MENU.map(desktopItem).join("") + "</nav>" +

        '<div class="header-actions">' +
          '<button class="icon-btn" id="searchOpen" type="button" aria-label="Qidirish" title="Qidirish"><i data-ico="search"></i></button>' +
          '<button class="burger" id="burger" type="button" aria-label="Menyu"><span></span><span></span><span></span></button>' +
        "</div>" +

      "</div>" +
    "</header>" +

    '<div class="mobile-nav" id="mobileNav">' + MENU.map(mobileItem).join("") +
      '<div class="mobile-nav__sep"></div>' +
      EXTRA.map(function (m) {
        return '<a class="nav__link' + (m.id === PAGE ? " is-active" : "") + '" href="' + url(m.href) + '"><i data-ico="' + m.icon + '"></i>' + m.nom + "</a>";
      }).join("") +
    "</div>" +

    /* Qidiruv oynasi */
    '<div class="search-modal" id="searchModal">' +
      '<div class="search-modal__box">' +
        '<div class="search-modal__row">' +
          '<i data-ico="search"></i>' +
          '<input type="search" id="searchInput" placeholder="Bo\'lim, tanlov yoki tadbir qidiring...">' +
          '<button class="icon-btn" id="searchClose" type="button" aria-label="Yopish"><i data-ico="x"></i></button>' +
        "</div>" +
        '<div class="search-results" id="searchResults"></div>' +
        '<div class="search-modal__hint">Yopish uchun <b>Esc</b> tugmasini bosing</div>' +
      "</div>" +
    "</div>";
  }

  function footer() {
    var links1 = MENU.reduce(function (acc, m) {
      if (m.dropdown) return acc.concat(m.dropdown);
      if (m.id !== "bosh") acc.push(m);
      return acc;
    }, []).map(function (m) {
      return '<a href="' + url(m.href) + '">' + m.nom + "</a>";
    }).join("");

    var links2 = EXTRA.map(function (m) {
      return '<a href="' + url(m.href) + '">' + m.nom + "</a>";
    }).join("");

    return "" +
    '<footer class="site-footer">' +
      '<div class="wrap footer-top">' +
        "<div>" +
          '<div class="footer-brand">' +
            '<img src="' + url("assets/img/logo/besh-tashabbus.svg?v=2") + '" alt="Besh muhim tashabbus logotipi">' +
            "<span><b>BESH MUHIM TASHABBUS</b><span>Urganch Davlat Universiteti</span></span>" +
          "</div>" +
          '<p class="small">Yoshlarning ma\'naviy, intellektual, jismoniy va ijtimoiy faolligini oshirishga qaratilgan yagona raqamli platforma.</p>' +
          '<div class="socials">' +
            '<a href="#" aria-label="Telegram"><i data-ico="telegram"></i></a>' +
            '<a href="#" aria-label="Instagram"><i data-ico="instagram"></i></a>' +
            '<a href="#" aria-label="Facebook"><i data-ico="facebook"></i></a>' +
            '<a href="#" aria-label="YouTube"><i data-ico="youtube"></i></a>' +
          "</div>" +
        "</div>" +
        "<div><h4>Bo'limlar</h4><div class=\"footer-links\">" + links1 + "</div></div>" +
        '<div><h4>Foydali</h4><div class="footer-links">' + links2 + "</div></div>" +
        "<div><h4>Bog'lanish</h4><div class=\"footer-links\">" +
          '<a href="#"><i data-ico="map-pin"></i> Xorazm v., Urganch sh., H. Olimjon 14</a>' +
          '<a href="tel:+998622246770"><i data-ico="phone"></i> +998 (62) 224-67-70</a>' +
          '<a href="mailto:info@urdu.uz"><i data-ico="mail"></i> info@urdu.uz</a>' +
          '<a href="#"><i data-ico="clock"></i> Du–Sha, 09:00 – 18:00</a>' +
        "</div></div>" +
      "</div>" +
      '<div class="wrap footer-bottom">' +
        "<span>&copy; 2026 Urganch Davlat Universiteti. Barcha huquqlar himoyalangan.</span>" +
        "<span>Demo platforma &middot; vaqtinchalik logotip va stock rasmlar</span>" +
      "</div>" +
    "</footer>" +
    '<button class="to-top" id="toTop" type="button" aria-label="Yuqoriga"><i data-ico="arrow-up"></i></button>' +
    '<div class="toast-host" id="toastHost"></div>';
  }

  var Layout = {
    root: ROOT,
    url: url,
    menu: MENU,
    extra: EXTRA,
    mount: function () {
      var h = document.getElementById("app-header");
      var f = document.getElementById("app-footer");
      /* outerHTML bilan almashtiramiz — shunda header elementlari to'g'ridan-to'g'ri
         <body> ning farzandi bo'ladi. Aks holda kichik o'ram <div> "position:sticky"
         uchun konteyner bo'lib qolib, sarlavha butun sahifa balandligida emas,
         faqat o'zining balandligicha "yopishqoq" bo'lib qolar edi (amalda umuman
         yopishmasdi). Shu sababli #app-header/#app-footer endi DOM'da qolmaydi. */
      if (h) h.outerHTML = header();
      if (f) f.outerHTML = footer();
    }
  };

  global.Layout = Layout;
})(window);

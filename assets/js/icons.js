/* ============================================================
   ICONS — premium chiziqli (stroke) ikonkalar to'plami
   Ishlatilishi:  <i data-ico="trophy"></i>
   Kod avtomatik ravishda inline SVG ga almashtiradi.
   ============================================================ */
(function (global) {
  "use strict";

  var P = {
    /* --- navigatsiya --- */
    home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9.5 21v-6h5v6"/>',
    sparkles: '<path d="M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9z"/><path d="M18.5 15.5l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z"/>',
    trophy: '<path d="M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M7 6H4.5A2.5 2.5 0 0 0 7 10.5"/><path d="M17 6h2.5A2.5 2.5 0 0 1 17 10.5"/><path d="M10 14h4v3h-4z"/><path d="M8 21h8"/><path d="M12 17v4"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2.5"/><path d="M8 3v4M16 3v4M3 10h18"/>',
    "calendar-days": '<rect x="3" y="5" width="18" height="16" rx="2.5"/><path d="M8 3v4M16 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>',
    newspaper: '<path d="M4 5h13v15H5.5A1.5 1.5 0 0 1 4 18.5z"/><path d="M17 9h3v9a2 2 0 0 1-3 1.7"/><path d="M7.5 8.5h6M7.5 12h6M7.5 15.5h4"/>',
    book: '<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v16H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20v6H6.5A2.5 2.5 0 0 1 4 19.5z"/>',
    "book-open": '<path d="M12 6.5C10.5 5 8.5 4.3 4 4.3V19c4.5 0 6.5.7 8 2.2"/><path d="M12 6.5C13.5 5 15.5 4.3 20 4.3V19c-4.5 0-6.5.7-8 2.2"/><path d="M12 6.5v14.7"/>',
    phone: '<path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 6.5 6.5L17 13l4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4 5.2 2 2 0 0 1 6 3z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3.5 7l8.5 6 8.5-6"/>',
    "map-pin": '<path d="M20 10.5c0 5.5-8 11-8 11s-8-5.5-8-11a8 8 0 1 1 16 0z"/><circle cx="12" cy="10.3" r="3"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18z"/>',

    /* --- 5 ta tashabbus --- */
    palette: '<path d="M12 3a9 9 0 1 0 0 18c1.2 0 2-.8 2-1.9 0-.6-.2-1-.6-1.4-.4-.4-.6-.8-.6-1.4 0-1 .9-1.8 2-1.8h1.6A4.6 4.6 0 0 0 21 10C21 6.1 17 3 12 3z"/><circle cx="7.5" cy="11" r="1.2"/><circle cx="10" cy="7" r="1.2"/><circle cx="15" cy="7.5" r="1.2"/>',
    dumbbell: '<path d="M6.5 6.5v11M3.5 9v6M17.5 6.5v11M20.5 9v6M6.5 12h11"/>',
    code: '<path d="M9 7l-5 5 5 5"/><path d="M15 7l5 5-5 5"/>',
    "book-heart": '<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v16H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M12.2 12.4l-.2.2-.2-.2c-.9-.9-2.4-.6-2.8.6-.3.7 0 1.4.5 1.9l2.5 2.4 2.5-2.4c.5-.5.8-1.2.5-1.9-.4-1.2-1.9-1.5-2.8-.6z"/>',
    "woman-star": '<circle cx="12" cy="6" r="3.2"/><path d="M6.5 21c0-4 2.5-6.6 5.5-6.6s5.5 2.6 5.5 6.6"/><path d="M18.5 3l.7 1.7 1.8.7-1.8.7-.7 1.7-.7-1.7-1.8-.7 1.8-.7z"/>',

    /* --- foydalanuvchi --- */
    users: '<circle cx="9" cy="8" r="3.4"/><path d="M2.5 20c0-3.6 2.9-5.8 6.5-5.8s6.5 2.2 6.5 5.8"/><path d="M16.5 5.2a3.4 3.4 0 0 1 0 6.4"/><path d="M18 14.6c2.1.6 3.5 2.4 3.5 5.4"/>',
    "user-check": '<circle cx="9.5" cy="8" r="3.4"/><path d="M3 20c0-3.6 2.9-5.8 6.5-5.8 1.1 0 2.1.2 3 .6"/><path d="M15.5 18.3l2 2 4-4.2"/>',
    "user-plus": '<circle cx="9.5" cy="8" r="3.4"/><path d="M3 20c0-3.6 2.9-5.8 6.5-5.8 1 0 2 .2 2.8.5"/><path d="M18 13.5v6M15 16.5h6"/>',
    "log-in": '<path d="M14 3h4.5A1.5 1.5 0 0 1 20 4.5v15a1.5 1.5 0 0 1-1.5 1.5H14"/><path d="M10 8l4 4-4 4"/><path d="M14 12H3.5"/>',
    "log-out": '<path d="M10 3H5.5A1.5 1.5 0 0 0 4 4.5v15A1.5 1.5 0 0 0 5.5 21H10"/><path d="M16 8l4 4-4 4"/><path d="M20 12H9.5"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.5 12c0-.5-.1-1-.2-1.5l1.9-1.4-2-3.4-2.2.9c-.7-.6-1.6-1.1-2.5-1.4L14.2 3H9.8l-.3 2.2c-.9.3-1.8.8-2.5 1.4l-2.2-.9-2 3.4 1.9 1.4a7.7 7.7 0 0 0 0 3l-1.9 1.4 2 3.4 2.2-.9c.7.6 1.6 1.1 2.5 1.4l.3 2.2h4.4l.3-2.2c.9-.3 1.8-.8 2.5-1.4l2.2.9 2-3.4-1.9-1.4c.1-.5.2-1 .2-1.5z"/>',
    bell: '<path d="M18 8.5a6 6 0 1 0-12 0c0 5-2 6.5-2 6.5h16s-2-1.5-2-6.5z"/><path d="M13.7 19a2 2 0 0 1-3.4 0"/>',
    "id-card": '<rect x="2.5" y="5" width="19" height="14" rx="2.5"/><circle cx="8.5" cy="11" r="2.2"/><path d="M5 16.4c.5-1.5 1.9-2.3 3.5-2.3s3 .8 3.5 2.3"/><path d="M15 10h4M15 13.5h4"/>',
    "graduation-cap": '<path d="M2.5 9L12 4.5 21.5 9 12 13.5z"/><path d="M6 11v4.5c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V11"/><path d="M21.5 9v5"/>',

    /* --- harakatlar / strelkalar --- */
    "arrow-right": '<path d="M4 12h15"/><path d="M13 6l6 6-6 6"/>',
    "arrow-left": '<path d="M20 12H5"/><path d="M11 6l-6 6 6 6"/>',
    "arrow-up": '<path d="M12 20V5"/><path d="M6 11l6-6 6 6"/>',
    "arrow-up-right": '<path d="M7 17L17 7"/><path d="M8 7h9v9"/>',
    "chevron-down": '<path d="M6 9l6 6 6-6"/>',
    "chevron-right": '<path d="M9 6l6 6-6 6"/>',
    "chevron-left": '<path d="M15 6l-6 6 6 6"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    x: '<path d="M6 6l12 12M18 6L6 18"/>',
    check: '<path d="M4.5 12.5l5 5 10-11"/>',
    "check-circle": '<circle cx="12" cy="12" r="9"/><path d="M8 12.4l2.7 2.7L16 9.5"/>',
    "alert-circle": '<circle cx="12" cy="12" r="9"/><path d="M12 7.5v5.5M12 16.3h.01"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5.5M12 7.7h.01"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M16.5 16.5L21 21"/>',
    filter: '<path d="M3.5 5h17l-6.5 8v6l-4 2v-8z"/>',
    send: '<path d="M21 3L10.5 13.5"/><path d="M21 3l-6.8 18-3.7-7.5L3 10z"/>',
    download: '<path d="M12 3v11"/><path d="M8 10.5l4 4 4-4"/><path d="M4 19h16"/>',
    share: '<circle cx="18" cy="5.5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="18.5" r="2.5"/><path d="M8.2 10.8l7.6-4M8.2 13.2l7.6 4"/>',
    play: '<circle cx="12" cy="12" r="9"/><path d="M10 8.5l6 3.5-6 3.5z"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    heart: '<path d="M12 20s-7.5-4.7-7.5-9.7A4.3 4.3 0 0 1 12 7.3a4.3 4.3 0 0 1 7.5 3c0 5-7.5 9.7-7.5 9.7z"/>',
    eye: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',
    lock: '<rect x="4.5" y="10.5" width="15" height="10" rx="2.5"/><path d="M8 10.5V7.8a4 4 0 0 1 8 0v2.7"/>',
    quote: '<path d="M9.5 6.5c-3 1.2-4.5 3.5-4.5 6.8V18h5.5v-5.5H7.8c0-1.9.7-3.2 2.4-4z"/><path d="M19.5 6.5c-3 1.2-4.5 3.5-4.5 6.8V18h5.5v-5.5h-2.7c0-1.9.7-3.2 2.4-4z"/>',

    /* --- kontent --- */
    "file-text": '<path d="M13.5 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.5z"/><path d="M13.5 3v5.5H19"/><path d="M8.5 13h7M8.5 16.5h5"/>',
    award: '<circle cx="12" cy="9" r="5.5"/><path d="M8.5 13.5L7 21l5-2.5L17 21l-1.5-7.5"/>',
    medal: '<circle cx="12" cy="14.5" r="5.5"/><path d="M8.5 9.5L6 3h4l2 4 2-4h4l-2.5 6.5"/><path d="M12 12.3l.9 1.9 2 .3-1.5 1.4.4 2-1.8-1-1.8 1 .4-2L9.1 14.5l2-.3z"/>',
    star: '<path d="M12 3.5l2.6 5.5 5.9.8-4.3 4.1 1.1 5.9-5.3-2.9-5.3 2.9 1.1-5.9L3.5 9.8l5.9-.8z"/>',
    "bar-chart": '<path d="M5 20V11M12 20V4M19 20v-6"/>',
    "trending-up": '<path d="M3 16.5l5.5-5.5 3.5 3.5L20 7"/><path d="M15 7h5v5"/>',
    layers: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3.5 12.5L12 17l8.5-4.5"/><path d="M3.5 16.5L12 21l8.5-4.5"/>',
    image: '<rect x="3" y="4.5" width="18" height="15" rx="2.5"/><circle cx="8.5" cy="10" r="1.8"/><path d="M3.5 17l4.8-4.5 3.4 3.2 3-2.7 5.8 5"/>',
    grid: '<rect x="3.5" y="3.5" width="7" height="7" rx="1.8"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.8"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.8"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.8"/>',
    list: '<path d="M8 6h13M8 12h13M8 18h13"/><path d="M3.5 6h.01M3.5 12h.01M3.5 18h.01"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5.3l3.3 2"/>',
    ticket: '<path d="M3.5 8.5V6.5A1.5 1.5 0 0 1 5 5h14a1.5 1.5 0 0 1 1.5 1.5v2a2.5 2.5 0 0 0 0 7v2A1.5 1.5 0 0 1 19 19H5a1.5 1.5 0 0 1-1.5-1.5v-2a2.5 2.5 0 0 0 0-7z"/><path d="M13.5 5v14"/>',
    target: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.8"/><circle cx="12" cy="12" r="1.4"/>',
    flame: '<path d="M12 21c3.6 0 6-2.4 6-5.6 0-4-3.4-5.6-3.4-9.4-2 1-2.9 2.6-2.9 4.3 0 1-.6 1.6-1.3 1.6-.8 0-1.4-.7-1.4-1.8C7.4 11.2 6 13 6 15.4 6 18.6 8.4 21 12 21z"/>',
    gift: '<rect x="3" y="8.5" width="18" height="4" rx="1.2"/><path d="M4.5 12.5V19a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-6.5"/><path d="M12 8.5V21"/><path d="M12 8.5S10.5 3 8 3.5s-1 5 4 5zM12 8.5s1.5-5.5 4-5 1 5-4 5z"/>',
    music: '<path d="M9 18V6l11-2v12"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="17.5" cy="16" r="2.5"/>',
    mic: '<rect x="9" y="3" width="6" height="10.5" rx="3"/><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0"/><path d="M12 18v3"/>',
    camera: '<path d="M3 8.5h3.5L8 6h8l1.5 2.5H21v10a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5z"/><circle cx="12" cy="13.5" r="3.6"/>',
    "shield-check": '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.7 12.2l2.3 2.3 4.3-4.6"/>',
    rocket: '<path d="M13.5 3.5c3.8 0 7 3.2 7 7 0 4.5-4.3 8.2-8.5 10.5-4.2-2.3-8.5-6-8.5-10.5 0-3.8 3.2-7 7-7z" opacity="0"/><path d="M5 15c-1.5 1.5-1.5 5-1.5 5s3.5 0 5-1.5"/><path d="M9.5 17.5L6.5 14.5C6.5 9 10 4 16.5 3.5 17 10 12 13.5 9.5 17.5z"/><circle cx="14.5" cy="9.5" r="1.6"/>',

    /* --- ijtimoiy tarmoqlar --- */
    telegram: '<path d="M21 4.5L2.8 11.4l4.9 1.6 1.9 5.6 2.6-3.1 4.4 3.2z"/><path d="M7.7 13l9.4-6.2-6.3 7.4"/>',
    instagram: '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17" cy="7" r="1"/>',
    facebook: '<path d="M14.5 8.5H17V5h-2.5A4 4 0 0 0 10.5 9v2H8v3.5h2.5V21H14v-6.5h2.5L17 11h-3V9.3c0-.5.2-.8.5-.8z"/>',
    youtube: '<rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="M10.5 9.5l5 2.5-5 2.5z"/>',
    sun: '<circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.2M12 19.3v2.2M4.2 12H2M22 12h-2.2M6 6L4.5 4.5M19.5 19.5L18 18M18 6l1.5-1.5M4.5 19.5L6 18"/>',
    moon: '<path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"/>'
  };

  var Icons = {
    /** Bitta ikonka SVG matnini qaytaradi */
    svg: function (name, cls) {
      var d = P[name] || P["alert-circle"];
      return (
        '<svg class="ico ' + (cls || "") + '" viewBox="0 0 24 24" fill="none" ' +
        'stroke="currentColor" stroke-width="1.9" stroke-linecap="round" ' +
        'stroke-linejoin="round" aria-hidden="true">' + d + "</svg>"
      );
    },
    /** Sahifadagi barcha <i data-ico="..."> larni almashtiradi */
    render: function (root) {
      var nodes = (root || document).querySelectorAll("i[data-ico]");
      Array.prototype.forEach.call(nodes, function (el) {
        var wrap = document.createElement("span");
        wrap.innerHTML = Icons.svg(el.getAttribute("data-ico"), el.className);
        var svg = wrap.firstChild;
        if (el.hasAttribute("data-size")) {
          var s = el.getAttribute("data-size");
          svg.style.width = s + "px";
          svg.style.height = s + "px";
        }
        el.parentNode.replaceChild(svg, el);
      });
    },
    names: Object.keys(P)
  };

  global.Icons = Icons;
})(window);

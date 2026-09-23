# Besh muhim tashabbus — ijtimoiy platforma

Urganch Davlat Universiteti talabalari uchun "Besh muhim tashabbus" doirasidagi
tanlovlar, tadbirlar, kutubxona va ijodiy loyihalarni birlashtiruvchi demo platforma.

Sof HTML + CSS + vanilla JS. Build vositasi, kutubxona yoki framework ishlatilmagan.

---

## Ishga tushirish

Eng oddiy yo'l — `index.html` faylini brauzerda ochish.

Lokal server orqali (tavsiya etiladi):

```bash
python -m http.server 5178
```

Keyin brauzerda `http://localhost:5178` manzilini oching.

---

## Papkalar tuzilmasi

```
beshtashabbus/
├── index.html                      # Bosh sahifa
├── README.md
│
├── assets/
│   ├── css/
│   │   ├── base.css                # Dizayn tokenlari, reset, tipografiya, tugmalar
│   │   ├── layout.css              # Header, navigatsiya, hero, footer
│   │   ├── components.css          # Kartochkalar, formalar, jadvallar, badge
│   │   └── animations.css          # Keyframes, scroll-reveal, marquee, blob
│   │
│   ├── js/
│   │   ├── icons.js                # ~90 ta premium chiziqli SVG ikonka
│   │   ├── data.js                 # BARCHA kontent (keyin API ga almashtiriladi)
│   │   ├── layout.js               # Umumiy header/footer generatori
│   │   ├── ui.js                   # Mavzu, slayder, filtr, forma, toast, reveal
│   │   └── home.js                 # Faqat bosh sahifa mantiqi
│   │
│   └── img/
│       ├── logo/                   # udu-logo, besh-tashabbus, favicon, naqsh
│       └── rasmlar/                # Vaqtinchalik stock rasmlar (SVG)
│
└── bolimlar/                       # Har bir bo'lim — alohida papka
    ├── markaz/                     # "Markaz haqida" ochiluvchi menyusi
    │   ├── rahbariyat.html
    │   ├── nizom.html              # Boblar bo'yicha akkordeon
    │   └── yoriqnoma.html          # Qadam-baqadam qo'llanma
    ├── tashabbuslar/
    │   ├── index.html              # 5 ta tashabbus ro'yxati
    │   └── batafsil.html           # ?id=sanat|sport|it|kitob|xotin-qizlar
    ├── togaraklar/index.html       # Barcha to'garaklar, filtr + qidiruv
    ├── tanlovlar/index.html        # Filtr + qidiruv + ariza topshirish
    ├── tadbirlar/index.html        # Taqvim, ro'yxat/kartochka ko'rinishi
    ├── yangiliklar/
    │   ├── index.html
    │   └── maqola.html             # ?id=n1..n6
    ├── kutubxona/index.html        # Kitoblar, kitobxonlar reytingi
    ├── statistika/index.html       # Diagramma, ulushlar, fakultet kesimi
    ├── aloqa/index.html            # Kontaktlar + murojaat formasi
    ├── reytinglar/index.html       # TOP-3, talabalar va fakultetlar reytingi
    └── savollar/index.html         # FAQ akkordeon
```

**Asosiy menyu** (`assets/js/layout.js` dagi `MENU` massivi): Bosh sahifa,
Markaz haqida (ochiluvchi: Rahbariyat / Nizom / Yo'riqnoma / Besh tashabbus),
To'garaklar, Tanlovlar, Reyting, Kutubxona, Aloqa. Tadbirlar, Yangiliklar,
Statistika va Savol-javob sahifalari alohida menyu bandi
sifatida ko'rsatilmaydi, lekin footer, tezkor havolalar va qidiruv orqali
to'liq ochiq turadi (`EXTRA` massivi).

---

## Asosiy imkoniyatlar

| Imkoniyat | Qayerda |
|---|---|
| Avtomatik aylanuvchi hero slayder (Ken Burns effekti) | Bosh sahifa |
| Global qidiruv oynasi (Ctrl+K / Cmd+K) | Barcha sahifalar |
| "Markaz haqida" ochiluvchi menyusi (Rahbariyat, Nizom, Yo'riqnoma, Besh tashabbus) | Barcha sahifalar |
| Qotirilgan (sticky) navigatsiya — pastga tushirilganda ham tepada qoladi | Barcha sahifalar |
| Ustunli diagramma (animatsiyali) | Statistika |
| Faqat kunduzgi rejim — tungi rejim ataylab yo'q | Barcha sahifalar |
| Scroll-reveal animatsiyalari, ketma-ket kechikish | Barcha sahifalar |
| Raqamlar sanog'i (counter) va progress-barlar | Bosh sahifa, statistika |
| Yuguruvchi qator (marquee) | Bosh sahifa |
| Jonli filtr + qidiruv | Tanlovlar, tadbirlar, yangiliklar, kutubxona, FAQ, reytinglar |
| Forma tekshiruvi (email, tel) | Aloqa |
| Toast bildirishnomalari | Barcha sahifalar |
| Akkordeon | Savol-javob |
| Skroll progress chizig'i, "yuqoriga" tugmasi | Barcha sahifalar |
| To'liq moslashuvchan dizayn (375px dan boshlab) | Barcha sahifalar |

---

## Yangi sahifa qo'shish

1. `bolimlar/<nom>/index.html` yarating.
2. `<body>` ga atributlarni qo'ying:
   ```html
   <body data-root="../../" data-page="tanlovlar">
   ```
   `data-root` — ildizga nisbatan yo'l, `data-page` — menyudagi faol bo'lim `id` si.
3. `<div id="app-header"></div>` va `<div id="app-footer"></div>` joylashtiring.
4. Oxirida skriptlarni ulang va `UI.boot()` ni chaqiring.

Menyu bandlarini o'zgartirish uchun — `assets/js/layout.js` dagi `MENU` massivi.

---

## Kontentni o'zgartirish

Barcha matnlar, tanlovlar, tadbirlar, yangiliklar va reyting `assets/js/data.js`
faylida bitta `DB` obyektida turadi. Backend ulanganda faqat shu fayl `fetch()`
chaqiruvlariga almashtiriladi — qolgan kod tegmaydi.

---

## Vaqtinchalik materiallar

- Logotiplar (`assets/img/logo/`) — o'rin egallovchi SVG. Rasmiy emblema bilan almashtiriladi.
- Rasmlar (`assets/img/rasmlar/`) — generatsiya qilingan gradient SVG placeholder'lar.
  Haqiqiy fotosuratlar bilan almashtirilganda fayl nomlarini saqlab qolish kifoya.
- Xarita (`bolimlar/aloqa/`) — Google/Yandex Maps iframe uchun bo'sh joy qoldirilgan.
- Tashabbus kartalaridagi belgilar — emoji (`data.js` dagi `emoji` maydoni).
  Brend illyustratsiyalari tayyor bo'lganda `<span class="init-card__art">` ichiga
  `<img>` qo'yish kifoya.
- Bosh sahifadagi "Akmal Karimov" — demo foydalanuvchi (`DB.foydalanuvchi`).
- Barcha ma'lumotlar demo xarakterga ega.

---

## Rang tizimi

Asosiy brend rangi — universitetning to'q yashili:

| Token | Rang | Qayerda |
|---|---|---|
| `--brand-900` | `#07281c` | Footer, eng to'q fon |
| `--brand-800` | `#0d3b29` | Logotip matni, CTA chizig'i, foydalanuvchi kartasi |
| `--brand-700` | `#124d36` | Asosiy tugmalar, faol menyu, ikonkalar |
| `--brand-600` | `#1a6344` | Hover holati |
| `--brand-500` | `#2b8560` | Diagramma, aksentlar |
| `--brand-50`  | `#eef7f2` | Yumshoq fon |

Tashabbuslar o'z rangini saqlaydi:

| Tashabbus | O'zgaruvchi | Rang |
|---|---|---|
| 01 San'at va madaniyat | `--t1` | `#7c3aed` |
| 02 Sport | `--t2` | `#16a34a` |
| 03 Axborot texnologiyalari | `--t3` | `#2563eb` |
| 04 Kitobxonlik | `--t4` | `#f59e0b` |
| 05 Xotin-qizlar bandligi | `--t5` | `#ec4899` |

Kartochkaga `tema-1` … `tema-5` klassini bersangiz, rang avtomatik qo'llanadi.

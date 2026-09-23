/* ============================================================
   DATA — platformaning barcha demo ma'lumotlari shu yerda.
   Keyinchalik backend (API) ga oson ulash uchun ajratilgan.
   ============================================================ */
(function (global) {
  "use strict";

  var DB = {};

  /* ---------- 5 ta tashabbus ---------- */
  DB.tashabbuslar = [
    {
      id: "sanat",
      num: "01",
      tema: 1,
      icon: "palette", emoji: "🎨🎵",
      nom: "San'at va madaniyat",
      qisqa: "Yoshlarning musiqa, rassomlik, adabiyot, teatr va san'atga qiziqishini oshirish",
      matn: "Birinchi tashabbus yoshlarni musiqa, rassomlik, adabiyot, teatr va san'atning boshqa turlariga jalb qilish, ularning ma'naviy olamini boyitishga qaratilgan. Universitetimizda ijodiy to'garaklar, teatr studiyasi, xor jamoasi va rassomlik ustaxonasi faoliyat yuritadi.",
      rasm: "init-1.svg",
      yonalishlar: ["Musiqa va xor", "Teatr studiyasi", "Rassomlik", "Adabiyot klubi", "Xalq amaliy san'ati"],
      stats: [
        { n: "18", l: "Ijodiy to'garak" },
        { n: "1 240", l: "Ishtirokchi" },
        { n: "36", l: "Tanlov va konsert" }
      ]
    },
    {
      id: "sport",
      num: "02",
      tema: 2,
      icon: "dumbbell", emoji: "⚽🏀",
      nom: "Sport",
      qisqa: "Yoshlarni jismoniy chiniqtirish va sportga keng jalb etish",
      matn: "Ikkinchi tashabbus talabalarni jismoniy chiniqtirish, sog'lom turmush tarzini targ'ib qilish va sportning ommaviy turlariga jalb etishni ko'zda tutadi. Universitet sport majmuasida 12 turdagi seksiya ishlaydi.",
      rasm: "init-2.svg",
      yonalishlar: ["Futbol", "Voleybol", "Kurash", "Shaxmat", "Yengil atletika", "Stol tennisi"],
      stats: [
        { n: "12", l: "Sport seksiyasi" },
        { n: "2 380", l: "Sportchi talaba" },
        { n: "44", l: "Musobaqa" }
      ]
    },
    {
      id: "it",
      num: "03",
      tema: 3,
      icon: "code", emoji: "💻",
      nom: "Axborot texnologiyalari",
      qisqa: "Kompyuter texnologiyalari va internetdan samarali foydalanishni tashkil etish",
      matn: "Uchinchi tashabbus yoshlar orasida raqamli savodxonlikni oshirish, dasturlash, sun'iy intellekt va startap loyihalarini qo'llab-quvvatlashga yo'naltirilgan. IT-Park va universitet hamkorligida bepul kurslar tashkil etiladi.",
      rasm: "init-3.svg",
      yonalishlar: ["Web dasturlash", "Mobil ilovalar", "Sun'iy intellekt", "Kiberxavfsizlik", "Grafik dizayn", "Data Science"],
      stats: [
        { n: "9", l: "Bepul kurs" },
        { n: "1 860", l: "Tinglovchi" },
        { n: "58", l: "Startap loyiha" }
      ]
    },
    {
      id: "kitob",
      num: "04",
      tema: 4,
      icon: "book-heart", emoji: "📚",
      nom: "Kitobxonlik",
      qisqa: "Kitobxonlikni keng targ'ib qilish va mutolaaga bo'lgan qiziqishni oshirish",
      matn: "To'rtinchi tashabbus talabalar orasida kitobxonlik madaniyatini shakllantirish, elektron kutubxona resurslaridan foydalanishni kengaytirishga qaratilgan. Har oy 'Eng faol kitobxon' tanlovi o'tkaziladi.",
      rasm: "init-4.svg",
      yonalishlar: ["Elektron kutubxona", "Kitobxonlar klubi", "Munozara kechalari", "Audiokitoblar", "Mualliflar bilan uchrashuv"],
      stats: [
        { n: "24 500", l: "Kitob fondi" },
        { n: "3 120", l: "Faol kitobxon" },
        { n: "19", l: "Kitob tadbiri" }
      ]
    },
    {
      id: "xotin-qizlar",
      num: "05",
      tema: 5,
      icon: "woman-star", emoji: "👩🎓",
      nom: "Xotin-qizlar bandligi",
      qisqa: "Xotin-qizlarni bandligini ta'minlash va ularning tashabbuskorligini qo'llab-quvvatlash",
      matn: "Beshinchi tashabbus xotin-qizlarni kasb-hunarga o'rgatish, tadbirkorlikka jalb qilish va ijtimoiy faolligini oshirishni nazarda tutadi. Bepul kasb-hunar kurslari va biznes-inkubator dasturlari amal qiladi.",
      rasm: "init-5.svg",
      yonalishlar: ["Kasb-hunar kurslari", "Tadbirkorlik maktabi", "Mentorlik dasturi", "Grant loyihalari", "Huquqiy savodxonlik"],
      stats: [
        { n: "14", l: "Hunar kursi" },
        { n: "970", l: "Ishtirokchi qiz" },
        { n: "62", l: "Ochilgan biznes" }
      ]
    }
  ];

  /* ---------- Platforma statistikasi ---------- */
  DB.statistika = [
    { icon: "users", n: 12458, l: "Jami talabalar" },
    { icon: "user-check", n: 8732, l: "Faol talabalar" },
    { icon: "trophy", n: 48, l: "Tanlovlar" },
    { icon: "layers", n: 13, l: "Kasb-hunar to'garaklar" },
    { icon: "graduation-cap", n: 23, l: "Ilmiy to'garaklar" },
    { icon: "award", n: 2180, l: "Yutuqlar" }
  ];

  /* ---------- Yangiliklar ---------- */
  DB.yangiliklar = [
    {
      id: "n1", tema: 3, bolim: "Umumiy", rasm: "news-1.svg",
      sarlavha: "“Mustaqillik – 35 yil” ijodiy tanlovi boshlandi!",
      sana: "27.05.2024", muallif: "Matbuot xizmati", oqish: "4 daqiqa",
      qisqa: "Universitet talabalari o'rtasida Mustaqillikning 35 yilligiga bag'ishlangan she'r, esse va videorolik tanlovi e'lon qilindi.",
      matn: "Tanlov uch bosqichda o'tkaziladi. Birinchi bosqichda ishtirokchilar o'z ijodiy ishlarini platforma orqali yuklaydilar. Ikkinchi bosqichda hakamlar hay'ati eng yaxshi 30 ta ishni saralaydi. Yakuniy bosqich esa universitetning katta zalida jonli tarzda o'tkaziladi. G'oliblar diplom va qimmatbaho sovg'alar bilan taqdirlanadi."
    },
    {
      id: "n2", tema: 2, bolim: "Sport", rasm: "news-2.svg",
      sarlavha: "Talabalar o'rtasida mini futbol musobaqasi start berildi",
      sana: "25.05.2024", muallif: "Sport bo'limi", oqish: "3 daqiqa",
      qisqa: "Musobaqada 14 ta fakultet jamoasi ishtirok etmoqda. O'yinlar universitet sport majmuasida bo'lib o'tadi.",
      matn: "Musobaqa guruhlar bosqichidan boshlanadi. Har bir guruhdan ikkita jamoa chorak finalga yo'llanma oladi. Finalda g'olib chiqqan jamoa viloyat chempionatida universitetimiz sharafini himoya qiladi."
    },
    {
      id: "n3", tema: 3, bolim: "IT", rasm: "news-3.svg",
      sarlavha: "IT StartUp loyihalari tanlovi qabul bosqichi davom etmoqda",
      sana: "24.05.2024", muallif: "IT markaz", oqish: "5 daqiqa",
      qisqa: "Eng yaxshi uchta loyiha 30 mln so'mgacha grant va IT-Park rezidentligi imkoniyatini qo'lga kiritadi.",
      matn: "Loyihalar g'oyaning yangiligi, texnik yechim sifati, bozor salohiyati va jamoa tayyorgarligi mezonlari bo'yicha baholanadi. Ariza topshirish uchun tanlov sahifasi orqali loyiha taqdimotini yuboring."
    },
    {
      id: "n4", tema: 4, bolim: "Kitobxonlik", rasm: "news-4.svg",
      sarlavha: "Universitetda “Kitob bayrami” haftaligi o'tkaziladi",
      sana: "21.05.2024", muallif: "Axborot-resurs markazi", oqish: "3 daqiqa",
      qisqa: "Hafta davomida kitob ko'rgazmasi, mualliflar bilan uchrashuv va “Eng faol kitobxon” tanlovi tashkil etiladi.",
      matn: "Kitob bayrami doirasida noyob nashrlar ko'rgazmasi, badiiy o'qish kechasi va bukkrossing burchagi ochiladi. Barcha talabalar uchun kirish erkin."
    },
    {
      id: "n5", tema: 1, bolim: "San'at", rasm: "news-5.svg",
      sarlavha: "Talabalar teatr festivali g'oliblari aniqlandi",
      sana: "18.05.2024", muallif: "Ma'naviyat bo'limi", oqish: "4 daqiqa",
      qisqa: "Festivalda 9 ta fakultet teatr truppasi o'z spektakllarini namoyish etdi.",
      matn: "Bosh sovrinni Filologiya fakulteti truppasi “O'tkan kunlar” sahna asari bilan qo'lga kiritdi. G'oliblar respublika ko'rik-tanlovida ishtirok etish huquqini oldi."
    },
    {
      id: "n6", tema: 5, bolim: "Xotin-qizlar", rasm: "news-6.svg",
      sarlavha: "Tadbirkor qizlar forumi bo'lib o'tdi",
      sana: "15.05.2024", muallif: "Xotin-qizlar kengashi", oqish: "6 daqiqa",
      qisqa: "Forumda muvaffaqiyatli tadbirkor ayollar o'z tajribalari bilan o'rtoqlashdi va mentorlik dasturi taqdim etildi.",
      matn: "Forum yakunida 24 nafar talaba qiz mentorlik dasturiga qabul qilindi. Ular olti oy davomida tajribali tadbirkorlar rahnamoligida o'z biznes-g'oyalarini rivojlantiradilar."
    }
  ];

  /* ---------- Tanlovlar ---------- */
  DB.tanlovlar = [
    {
      id: "t1", tema: 1, yonalish: "San'at va madaniyat", rasm: "init-1.svg",
      nom: "“Mustaqillik – 35 yil” ijodiy tanlovi",
      qisqa: "She'r, esse va videorolik yo'nalishlarida ijodiy ishlar qabul qilinadi.",
      muddat: "10.09.2026", holat: "ochiq", ishtirokchi: 342, sovrin: "15 mln so'm", foiz: 68
    },
    {
      id: "t2", tema: 3, yonalish: "Axborot texnologiyalari", rasm: "init-3.svg",
      nom: "IT StartUp Challenge 2026",
      qisqa: "Innovatsion raqamli loyihalar uchun grant tanlovi. Eng yaxshi 3 loyiha moliyalashtiriladi.",
      muddat: "25.09.2026", holat: "ochiq", ishtirokchi: 118, sovrin: "90 mln so'm", foiz: 45
    },
    {
      id: "t3", tema: 2, yonalish: "Sport", rasm: "init-2.svg",
      nom: "Fakultetlararo mini futbol chempionati",
      qisqa: "14 ta fakultet jamoasi ishtirokidagi an'anaviy musobaqa.",
      muddat: "05.09.2026", holat: "davom", ishtirokchi: 210, sovrin: "Kubok + medallar", foiz: 82
    },
    {
      id: "t4", tema: 4, yonalish: "Kitobxonlik", rasm: "init-4.svg",
      nom: "“Eng faol kitobxon” oylik tanlovi",
      qisqa: "Eng ko'p kitob o'qigan va taqriz yozgan talabalar taqdirlanadi.",
      muddat: "30.09.2026", holat: "ochiq", ishtirokchi: 476, sovrin: "Kitob to'plami", foiz: 55
    },
    {
      id: "t5", tema: 5, yonalish: "Xotin-qizlar bandligi", rasm: "init-5.svg",
      nom: "“Tadbirkor qiz” biznes-g'oyalar tanlovi",
      qisqa: "Talaba qizlarning biznes-loyihalari uchun grant va mentorlik dasturi.",
      muddat: "18.10.2026", holat: "ochiq", ishtirokchi: 87, sovrin: "40 mln so'm", foiz: 33
    },
    {
      id: "t6", tema: 1, yonalish: "San'at va madaniyat", rasm: "news-5.svg",
      nom: "Talabalar teatr festivali",
      qisqa: "Fakultet truppalari o'rtasida sahna asarlari ko'rik-tanlovi.",
      muddat: "12.05.2026", holat: "yopiq", ishtirokchi: 96, sovrin: "Diplom + sayohat", foiz: 100
    },
    {
      id: "t7", tema: 3, yonalish: "Axborot texnologiyalari", rasm: "kitob-6.svg",
      nom: "Web dasturlash olimpiadasi",
      qisqa: "Frontend va backend yo'nalishlarida amaliy topshiriqlar bo'yicha musobaqa.",
      muddat: "02.10.2026", holat: "ochiq", ishtirokchi: 154, sovrin: "Noutbuk", foiz: 61
    },
    {
      id: "t8", tema: 2, yonalish: "Sport", rasm: "tadbir-2.svg",
      nom: "Universiada – 2026 saralash bosqichi",
      qisqa: "Yengil atletika, kurash va shaxmat bo'yicha saralash musobaqalari.",
      muddat: "28.09.2026", holat: "davom", ishtirokchi: 389, sovrin: "Terma jamoa a'zoligi", foiz: 74
    }
  ];

  /* ---------- Tadbirlar ---------- */
  DB.tadbirlar = [
    { id: "e1", kun: "05", oy: "Sen", tema: 3, nom: "Raqamli savodxonlik bo'yicha ochiq dars", joy: "IT markaz, 204-xona", vaqt: "14:00", tur: "Seminar", rasm: "tadbir-1.svg" },
    { id: "e2", kun: "09", oy: "Sen", tema: 1, nom: "“Kuz ohanglari” talabalar konserti", joy: "Katta akt-zal", vaqt: "16:30", tur: "Konsert", rasm: "tadbir-3.svg" },
    { id: "e3", kun: "14", oy: "Sen", tema: 2, nom: "Sog'lom avlod yugurish marafoni", joy: "Universitet stadioni", vaqt: "08:00", tur: "Sport", rasm: "tadbir-2.svg" },
    { id: "e4", kun: "18", oy: "Sen", tema: 4, nom: "Mualliflar bilan uchrashuv kechasi", joy: "Axborot-resurs markazi", vaqt: "15:00", tur: "Uchrashuv", rasm: "tadbir-4.svg" },
    { id: "e5", kun: "23", oy: "Sen", tema: 5, nom: "Tadbirkorlik asoslari trening-kursi", joy: "Biznes-inkubator", vaqt: "10:00", tur: "Trening", rasm: "init-5.svg" },
    { id: "e6", kun: "30", oy: "Sen", tema: 3, nom: "Hackathon: 24 soatlik dasturlash marafoni", joy: "IT-Park Xorazm", vaqt: "09:00", tur: "Hackathon", rasm: "news-3.svg" },
    { id: "e7", kun: "07", oy: "Okt", tema: 1, nom: "Xalq amaliy san'ati ko'rgazmasi", joy: "Ko'rgazmalar zali", vaqt: "11:00", tur: "Ko'rgazma", rasm: "init-1.svg" },
    { id: "e8", kun: "15", oy: "Okt", tema: 4, nom: "Kitobxonlar klubi: oylik munozara", joy: "Kutubxona, 3-qavat", vaqt: "17:00", tur: "Munozara", rasm: "init-4.svg" }
  ];

  /* ---------- Kutubxona ---------- */
  DB.kitoblar = [
    { id: "k1", nom: "O'tkan kunlar", muallif: "Abdulla Qodiriy", turkum: "Badiiy", rasm: "kitob-1.svg", til: "O'zbek", yil: 1926, sahifa: 384, reyting: 4.9 },
    { id: "k2", nom: "Algoritmlar asoslari", muallif: "T. Cormen", turkum: "IT", rasm: "kitob-2.svg", til: "Rus", yil: 2019, sahifa: 1312, reyting: 4.8 },
    { id: "k3", nom: "Sport fiziologiyasi", muallif: "N. Solihov", turkum: "Sport", rasm: "kitob-3.svg", til: "O'zbek", yil: 2021, sahifa: 268, reyting: 4.5 },
    { id: "k4", nom: "Jahon adabiyoti tarixi", muallif: "M. Qo'shjonov", turkum: "Badiiy", rasm: "kitob-4.svg", til: "O'zbek", yil: 2018, sahifa: 512, reyting: 4.6 },
    { id: "k5", nom: "San'at tarixi", muallif: "E. Gombrich", turkum: "San'at", rasm: "kitob-5.svg", til: "Ingliz", yil: 2020, sahifa: 688, reyting: 4.9 },
    { id: "k6", nom: "Zamonaviy web dasturlash", muallif: "J. Duckett", turkum: "IT", rasm: "kitob-6.svg", til: "Ingliz", yil: 2022, sahifa: 490, reyting: 4.7 }
  ];

  /* ---------- Reyting ---------- */
  DB.reyting = [
    { orin: 1, ism: "Dilnoza Ro'zmetova", fak: "Filologiya fakulteti", ball: 1840, avatar: "avatar-4.svg", tanlov: 12, sert: 9 },
    { orin: 2, ism: "Jasurbek Otajonov", fak: "Fizika-matematika", ball: 1725, avatar: "avatar-1.svg", tanlov: 11, sert: 8 },
    { orin: 3, ism: "Malika Yusupova", fak: "Xorijiy tillar", ball: 1690, avatar: "avatar-6.svg", tanlov: 10, sert: 8 },
    { orin: 4, ism: "Sardor Matnazarov", fak: "Axborot texnologiyalari", ball: 1512, avatar: "avatar-2.svg", tanlov: 9, sert: 7 },
    { orin: 5, ism: "Nilufar Qurbonova", fak: "Pedagogika", ball: 1478, avatar: "avatar-5.svg", tanlov: 9, sert: 6 },
    { orin: 6, ism: "Bekzod Rahimov", fak: "Tarix fakulteti", ball: 1330, avatar: "avatar-3.svg", tanlov: 8, sert: 6 },
    { orin: 7, ism: "Zilola Sobirova", fak: "Iqtisodiyot", ball: 1284, avatar: "avatar-4.svg", tanlov: 7, sert: 5 },
    { orin: 8, ism: "Islom Xudoyberganov", fak: "Kimyo-biologiya", ball: 1150, avatar: "avatar-1.svg", tanlov: 7, sert: 4 }
  ];

  /* ---------- Tezkor havolalar ---------- */
  DB.tezkor = [
    { icon: "trophy", nom: "Tanlovlarda ishtirok etish", href: "bolimlar/tanlovlar/index.html" },
    { icon: "calendar-days", nom: "Tadbirlar taqvimi", href: "bolimlar/tadbirlar/index.html" },
    { icon: "users", nom: "To'garaklar ro'yxati", href: "bolimlar/togaraklar/index.html" },
    { icon: "book-open", nom: "Elektron kutubxona", href: "bolimlar/kutubxona/index.html" },
    { icon: "bar-chart", nom: "Reytinglar", href: "bolimlar/reytinglar/index.html" },
    { icon: "info", nom: "Ko'p beriladigan savollar", href: "bolimlar/savollar/index.html" }
  ];

  /* ---------- FAQ ---------- */
  DB.savollar = [
    { s: "Tanlovlarda qanday ishtirok etaman?", j: "“Tanlovlar” bo'limiga kiring, o'zingizga qiziq tanlovni tanlang va “Ariza topshirish” tugmasini bosing. Ishtirok etish mutlaqo bepul." },
    { s: "Tanlovda ishtirok etish uchun to'lov talab qilinadimi?", j: "Yo'q. Platformadagi barcha tanlov va tadbirlar universitet talabalari uchun mutlaqo bepul." },
    { s: "Ijodiy ishlarni qanday topshirish mumkin?", j: "Tanlov talablariga mos ravishda faylingizni ariza orqali yoki fakultetingizdagi ma'sul tyutor orqali topshirishingiz mumkin." },
    { s: "G'oliblarga sertifikat qachon beriladi?", j: "Tanlov yakunlangach hakamlar hay'ati baholash xulosasiga ko'ra g'olib va ishtirokchilarga rasmiy sertifikatlar taqdim etiladi." },
    { s: "Reyting ballari qanday hisoblanadi?", j: "Har bir faoliyat turi uchun ball beriladi: tanlovda ishtirok – 20 ball, g'oliblik – 100 ball, tadbirda qatnashish – 10 ball, kitob taqrizi – 15 ball, volontyorlik – 25 ball." },
    { s: "Bir vaqtda nechta tanlovda qatnasha olaman?", j: "Cheklov yo'q. Ammo har bir tanlovga faqat bitta ijodiy ish yuborish mumkin." },
    { s: "Texnik muammo yuzasidan kimga murojaat qilaman?", j: "“Aloqa” bo'limi orqali xabar qoldiring yoki qo'llab-quvvatlash xizmatiga qo'ng'iroq qiling: +998 (62) 224-67-70." }
  ];

  /* ---------- Hero slayder ---------- */
  DB.slaydlar = [
    { rasm: "1.jpg", nom: "Tanlov g'oliblari taqdirlanmoqda", izoh: "Sovrinli o'rinlar sohiblariga taqdimot" },
    { rasm: "2.jpg", nom: "Innovatsion loyihalar tanlovi", izoh: "Respublika miqyosidagi g'alaba" },
    { rasm: "3.jpg", nom: "Faol talabalar taqdirlash marosimi", izoh: "Tashakkurnoma va sovg'alar topshirildi" },
    { rasm: "4.jpg", nom: "“Zakovat” intellektual o'yini finali", izoh: "Eng zukko jamoalar aniqlandi" }
  ];

  /* ---------- Yuguruvchi qator ---------- */
  DB.marquee = [
    { icon: "sparkles", t: "5 muhim tashabbus" },
    { icon: "trophy", t: "48 ta faol tanlov" },
    { icon: "users", t: "12 458 talaba" },
    { icon: "book-open", t: "24 500 kitob fondi" },
    { icon: "rocket", t: "58 startap loyiha" },
    { icon: "medal", t: "2 180 sertifikat" },
    { icon: "flame", t: "126 tadbir" }
  ];

  /* ---------- To'garaklar ---------- */
  DB.togaraklar = [
    { id: "xor", tema: 1, nom: "Xor jamoasi", rahbar: "M. Yusupova", joy: "Madaniyat markazi, 2-qavat", kun: "Dushanba, Chorshanba", azo: 34, rasm: "init-1.svg", tavsif: "Xalq va zamonaviy qo'shiqlar ijro etuvchi talabalar xor jamoasi." },
    { id: "teatr", tema: 1, nom: "Teatr studiyasi", rahbar: "N. Ergasheva", joy: "Katta akt-zal", kun: "Seshanba, Payshanba", azo: 22, rasm: "news-5.svg", tavsif: "Sahna asarlari qo'yish va aktyorlik mahoratini oshirish bo'yicha studiya." },
    { id: "rassom", tema: 1, nom: "Rassomlik ustaxonasi", rahbar: "B. Qodirov", joy: "San'at bo'limi, 12-xona", kun: "Juma", azo: 19, rasm: "init-1.svg", tavsif: "Chizmachilik, moybo'yoq va grafika texnikalarini o'rgatuvchi mashg'ulotlar." },
    { id: "futbol", tema: 2, nom: "Futbol seksiyasi", rahbar: "SH. Norqobilov", joy: "Sport majmuasi", kun: "Har kuni, 17:00", azo: 46, rasm: "init-2.svg", tavsif: "Fakultetlararo musobaqalarga tayyorlanuvchi asosiy futbol jamoasi." },
    { id: "voleybol", tema: 2, nom: "Voleybol seksiyasi", rahbar: "D. Matyoqubov", joy: "Sport zali", kun: "Seshanba, Payshanba", azo: 28, rasm: "tadbir-2.svg", tavsif: "Qizlar va yigitlar uchun alohida guruhlarda mashg'ulotlar." },
    { id: "shaxmat", tema: 2, nom: "Shaxmat klubi", rahbar: "A. Tillaboyev", joy: "Kutubxona, 1-qavat", kun: "Har kuni", azo: 21, rasm: "init-2.svg", tavsif: "Boshlang'ich va professional darajadagi shaxmatchilar uchun mashg'ulotlar." },
    { id: "webdev", tema: 3, nom: "Web dasturlash to'garagi", rahbar: "J. Xudoyberganov", joy: "IT markaz, 204-xona", kun: "Dushanba, Chorshanba, Juma", azo: 38, rasm: "init-3.svg", tavsif: "HTML, CSS, JavaScript va zamonaviy freymvorklar bo'yicha amaliy darslar." },
    { id: "robot", tema: 3, nom: "Robototexnika to'garagi", rahbar: "F. Ismoilov", joy: "IT markaz, 108-xona", kun: "Shanba", azo: 16, rasm: "news-3.svg", tavsif: "Arduino va mikrokontrollerlar asosida robot loyihalarini yaratish." },
    { id: "dizayn", tema: 3, nom: "Grafik dizayn to'garagi", rahbar: "Z. Ahmedova", joy: "IT markaz, 210-xona", kun: "Seshanba, Payshanba", azo: 24, rasm: "init-3.svg", tavsif: "Figma, Photoshop va Illustrator dasturlarida amaliy mashg'ulotlar." },
    { id: "kitobxon", tema: 4, nom: "Kitobxonlar klubi", rahbar: "G. Berdiyeva", joy: "Kutubxona, 3-qavat", kun: "Har oyning 3-payshanbasi", azo: 52, rasm: "init-4.svg", tavsif: "Oylik munozara kechalari va kitob taqrizlari almashinuvi." },
    { id: "notiq", tema: 4, nom: "Notiqlik san'ati to'garagi", rahbar: "R. Xolmatov", joy: "Filologiya fakulteti, 5-xona", kun: "Chorshanba", azo: 18, rasm: "kitob-4.svg", tavsif: "Ochiq nutq so'zlash va bahs-munozara ko'nikmalarini rivojlantirish." },
    { id: "tadbirkor", tema: 5, nom: "Tadbirkorlik maktabi", rahbar: "M. Sobirova", joy: "Biznes-inkubator", kun: "Dushanba, Juma", azo: 29, rasm: "init-5.svg", tavsif: "Talaba qizlar uchun biznes-reja tuzish va startap asoslari bo'yicha kurs." },
    { id: "hunar", tema: 5, nom: "Kasb-hunar to'garagi", rahbar: "N. Yoqubova", joy: "Xotin-qizlar markazi", kun: "Har kuni", azo: 41, rasm: "init-5.svg", tavsif: "Tikuvchilik, to'qimachilik va amaliy hunarmandchilik mashg'ulotlari." }
  ];

  /* ---------- Rahbariyat ---------- */
  DB.rahbariyat = [
    { ism: "Bahodir Yusupov", lavozim: "Rektor", fak: "Fizika-matematika fanlari doktori, professor", tel: "+998 (62) 224-67-70", email: "rektor@urdu.uz", avatar: "avatar-1.svg" },
    { ism: "Gulnora Tosheva", lavozim: "O'quv ishlari bo'yicha prorektor", fak: "Pedagogika fanlari doktori", tel: "+998 (62) 224-67-72", email: "oquv@urdu.uz", avatar: "avatar-4.svg" },
    { ism: "Sardor Matyoqubov", lavozim: "Ilmiy ishlar bo'yicha prorektor", fak: "Texnika fanlari nomzodi, dotsent", tel: "+998 (62) 224-67-73", email: "ilmiy@urdu.uz", avatar: "avatar-2.svg" },
    { ism: "Dilnoza Ergasheva", lavozim: "Yoshlar bilan ishlash bo'yicha prorektor", fak: "Filologiya fanlari nomzodi", tel: "+998 (62) 224-67-74", email: "yoshlar@urdu.uz", avatar: "avatar-5.svg" },
    { ism: "Aziz Ismoilov", lavozim: "Ma'muriy-xo'jalik ishlari bo'yicha prorektor", fak: "Iqtisod fanlari nomzodi", tel: "+998 (62) 224-67-75", email: "xojalik@urdu.uz", avatar: "avatar-3.svg" },
    { ism: "Nilufar Qodirova", lavozim: "Xalqaro hamkorlik bo'limi boshlig'i", fak: "Xorijiy tillar bo'yicha mutaxassis", tel: "+998 (62) 224-67-76", email: "intl@urdu.uz", avatar: "avatar-6.svg" }
  ];

  global.DB = DB;
})(window);

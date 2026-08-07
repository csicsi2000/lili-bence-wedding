/* ============================================================
   EBBEN A FÁJLBAN SZERKESZTHETŐ A WEBOLDAL ÖSSZES SZÖVEGE
   ------------------------------------------------------------
   - Minden, ami idézőjelek ("...") között van, szabadon átírható.
   - A vesszőket és az idézőjeleket ne töröld ki!
   - Szerkesztés után csak mentsd el, és frissítsd az oldalt.
   ============================================================ */

const CONTENT = {

  // ---------- FŐOLDAL TETEJE (hero) ----------
  hero: {
    eyebrow: "Összeházasodunk!",
    names: "Lili & Bence",
    // A meghívó stílusú, nagy dátum (év · hónap · nap):
    dateStylized: "26 · 10 · 08",
    // A vendégeknek megjelenő dátum (szabad szöveg):
    dateText: "2026. október 8., csütörtök",
    // A visszaszámláláshoz használt időpont — formátum: ÉÉÉÉ-HH-NNTÓÓ:PP
    countdownDate: "2026-10-08T15:00",
    location: "Dunaszentmiklós · Neszmély",
    // A meghívó szövege:
    inviteText:
      "Szeretettel meghívunk esküvőnkre és az azt követő vacsorával egybekötött mulatságra. Ünnepeljetek velünk, legyen ez a nap közös emlék!",
    ctaButton: "Visszajelzés",
  },

  // ---------- RÉSZLETEK (szertartás és vacsora kártyák) ----------
  details: {
    title: "A nagy nap",
    cards: [
      {
        icon: "✦",
        heading: "Egyházi szertartás",
        time: "15:00",
        place: "Dunaszentmiklósi Szent Miklós püspök-templom · Dunaszentmiklós, Tatai u. 5-7, 2897",
        text: "A nap az egyházi szertartással kezdődik Dunaszentmiklóson. Kérjük, érkezzetek legalább negyed órával korábban, hogy időben el tudjuk kezdeni.",
      },
      {
        icon: "✦",
        heading: "Polgári szertartás",
        time: "17:00",
        place: "Hilltop Borbirtok és Étterem · Neszmély, Meleges-hegy, 2544",
        text: "A vendégvárás 16:00-tól lesz a polgári szertartás helyszínén, a Hilltop Borbirtokon. A szertartás után közös fotózás 17:30-tól.",
      },
      {
        icon: "✦",
        heading: "Vacsora és mulatság",
        time: "18:30",
        place: "Hilltop Borbirtok és Étterem · Neszmély, Meleges-hegy, 2544",
        text: "Vacsorával egybekötött mulatság hajnalig — tortavágás 22:00-kor, éjféli vacsi éjfélkor.",
      },
    ],
  },

  // ---------- PROGRAM (a nap menete) ----------
  schedule: {
    title: "Program",
    // Igény szerint hozzáadható vagy törölhető esemény. A { } jeleket és vesszőket hagyd meg!
    events: [
      { time: "15:00", title: "Egyházi szertartás" },
      { time: "16:00", title: "Vendégvárás" },
      { time: "17:00", title: "Polgári szertartás" },
      { time: "17:30", title: "Közös fotózás" },
      { time: "18:30", title: "Vacsora" },
      { time: "22:00", title: "Tortavágás" },
      { time: "24:00", title: "Éjféli vacsi" },
    ],
  },

  // ---------- HELYSZÍNEK ----------
  venue: {
    title: "Helyszínek",
    places: [
      {
        icon: "⛪",
        name: "Dunaszentmiklósi Szent Miklós püspök-templom",
        address: "2897 Dunaszentmiklós, Tatai u. 5-7",
        description: "Itt lesz az egyházi szertartás 15:00-kor. A templom Dunaszentmiklós központjában található, Neszmélytől kb. 10 percre autóval.",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Dunaszentmikl%C3%B3si+Szent+Mikl%C3%B3s+p%C3%BCsp%C3%B6k-templom",
      },
      {
        icon: "🍇",
        name: "Hilltop Borbirtok és Étterem",
        address: "2544 Neszmély, Meleges-hegy",
        description: "A vendégvárás, a polgári szertartás és a vacsorával egybekötött mulatság helyszíne. A birtok a Meleges-hegy tetején fekszik, lenyűgöző Duna-panorámával és 250 hektáros szőlőültetvénnyel körülvéve. Parkolási lehetőség van a helyszínen, kérdés esetén keressetek minket.",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Hilltop+Borbirtok+Neszm%C3%A9ly",
        website: "https://hilltopborbirtok.hu/",
      },
    ],
  },

  // ---------- VISSZAJELZÉS (RSVP) ----------
  rsvp: {
    title: "Visszajelzés",
    text: "Nagy örömmel ünnepelnénk veletek! Kérünk titeket, minél hamarabb jelezzetek vissza, hogy számíthatunk-e rátok a nagy napon, ha még nem tettétek! Ezt megtehetitek bármelyik elérhetőségünkön, akár személyesen is.",
    deadline: "Kérjük, jelezzetek vissza legkésőbb szeptember 1-ig!",
    buttonText: "Visszajelzés küldése",
    // Ha lesz visszajelző űrlap (pl. Google Űrlap), illesszétek be a linkjét ide,
    // és a gomb automatikusan megjelenik. Amíg üres (""), a gomb nem látszik.
    buttonLink: "https://forms.gle/Uj6iFSxfKSBkFJst8",
    contact: "Kérdésetek van? Írjatok a lilibence17@gmail.com címre vagy hívjatok: +36 70 430 6604 (Menyasszony); +36 20 293 6712 (Vőlegény)",
  },

  // ---------- SZÁLLÁS ----------
  accommodation: {
    title: "Szálláslehetőségek",
    intro: "A ceremónia helyszínén a szobák száma nagyon kevés, így a férőhelyek is korlátozottak, és ott aludni sajnos nincs lehetőség. Akinek mégis lenne szüksége szállásra, annak az alábbi, a helyszín által ajánlott lehetőségeket javasoljuk:",
    // Minden szálláshoz: név + tetszőleges számú sor. E-mail címből és telefonszámból
    // automatikusan kattintható link lesz.
    places: [
      {
        heading: "Duna Residence",
        lines: [
          "2 km-re a Birtoktól · Dunaszentmiklós",
          "85 férőhely, 4-6 fős apartmanok",
          "schmidt.szabolcs@dunaresidence.hu",
          "+36 20 510 9291",
        ],
      },
      {
        heading: "Rózsa Panzió",
        lines: [
          "2 km-re a Birtoktól · Dunaszentmiklós",
          "11 férőhely, 2-3 fős szobák",
          "rozsapanzio.dmiklos@gmail.com",
          "+36 20 560 7390",
        ],
      },
      {
        heading: "Bike Stop Duna",
        lines: [
          "2 km-re a Birtoktól · Dunaszentmiklós",
          "12 férőhely, 2-3 fős szobák",
          "bikestopduna@gmail.com",
          "+36 20 975 3667",
        ],
      },
      {
        heading: "Duna Residence Prémium",
        lines: [
          "Magánszemély által üzemeltetett",
          "2 km-re a Birtoktól · Dunaszentmiklós",
          "14 férőhely, 4-6 fős prémium apartmanok",
          "4cchomes@gmail.com",
          "+36 30 915 4019",
        ],
      },
      {
        heading: "Anemona Vendégháza",
        lines: [
          "6 km-re a Birtoktól · Dunaalmás",
          "15 férőhely, 2-3 fős szobák",
          "tar.szi@gmail.com",
          "+36 20 378 3700",
        ],
      },
      {
        heading: "Duci Udvar II Vendégház",
        lines: [
          "7 km-re a Birtoktól · Süttő",
          "16 férőhely, 2-3 fős szobák",
          "mannszisza@gmail.com",
          "+36 20 414 6967",
        ],
      },
    ],
    outro:
      "Igény esetén szívesen segítünk a szállás lefoglalásában. Az ajánlott szálláshelyek és a polgári ceremónia helyszíne között lesz lehetőség transzferjárat igénylésére is. Kérjük, amennyiben úgy látjátok, szükségetek lesz rá, jelezzétek felénk minél hamarabb, hogy le tudjuk foglalni.",
  },

  // ---------- GYAKORI KÉRDÉSEK ----------
  faq: {
    title: "Gyakori kérdések",
    items: [
      {
        question: "Mit vegyek fel?",
        answer: "Öltözzetek csinosan, de kényelmesen — a lényeg, hogy jól érezzétek magatokat! Tematika nincs, de kérlek vegyétek figyelembe, hogy a polgári ceremónia kültéren lesz, füves területen, ezt a cipőválasztásnál érdemes figyelembe venni. A bézs öltönyt és a fehér színt kérjük hagyjátok meg nekünk.",
      },
      {
        question: "Hozhatok kísérőt?",
        answer: "Kérjük, nézzétek meg a meghívót — ha a kísérőd is hivatalos, az ő neve is szerepel rajta.",
      },
      {
        question: "Mit adjunk ajándékba?",
        answer: "A legnagyobb ajándék számunkra, ha velünk ünnepeltek! Ha mégis szeretnétek valamivel készülni, akkor bármilyen tárgyi vagy boríték formájú ajándéknak szívesen örülünk, amivel a közös jövőnk és otthonunk megalapozását tudjátok támogatni.",
      },
      {
        question: "Ha speciális étrendem van?",
        answer: "Kérünk benneteket, hogy ha bármilyen ételérzékenységetek vagy speciális diétátok van, azt mihamarabb jelezzétek felénk, hogy időben leadhassuk a pontos létszámot a helyszínnek, és ők is maximálisan fel tudjanak készülni a fogadásotokra.",
      },
    ],
  },

  // ---------- LÁBLÉC ----------
  footer: {
    names: "Lili & Bence",
    note: "Alig várjuk, hogy együtt ünnepeljünk veletek! ✦ 2026. október 8.",
  },
};

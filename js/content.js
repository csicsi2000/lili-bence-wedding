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
    names: "Lili + Bence",
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

  // ---------- TÖRTÉNETÜNK ----------
  story: {
    title: "Történetünk",
    // Minden sor egy bekezdés. Igény szerint hozzáadható vagy törölhető.
    paragraphs: [
      "Ez egy helykitöltő szöveg Lili és Bence történetéhez. Írjátok ide pár mondatban, hogyan ismerkedtetek meg, hogyan történt a lánykérés, vagy bármit, amit szívesen megosztanátok a vendégekkel.",
      "Ide jöhet egy második bekezdés is, például a lánykérésről, vagy arról, mit jelent számotokra ez a nap.",
    ],
  },

  // ---------- RÉSZLETEK (szertartás és vacsora kártyák) ----------
  details: {
    title: "A nagy nap",
    cards: [
      {
        icon: "✦",
        heading: "Templomi szertartás",
        time: "15:00",
        place: "Dunaszentmiklósi Szent Miklós püspök-templom · Dunaszentmiklós, Tatai u. 5-7, 2897",
        text: "A nap a templomi szertartással kezdődik Dunaszentmiklóson. Kérjük, érkezzetek pár perccel korábban, hogy időben el tudjunk kezdeni.",
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
      { time: "15:00", title: "Templomi szertartás", description: "Dunaszentmiklósi Szent Miklós püspök-templom — Dunaszentmiklós, Tatai u. 5-7, 2897" },
      { time: "16:00", title: "Vendégvárás", description: "A polgári szertartás helyszínén — Hilltop Borbirtok és Étterem, Neszmély, Meleges-hegy, 2544" },
      { time: "17:00", title: "Polgári szertartás", description: "A pillanat, amikor kimondjuk az igent." },
      { time: "17:30", title: "Közös fotózás", description: "Csoportképek a birtokon." },
      { time: "18:30", title: "Vacsora", description: "Ültetett vacsora pohárköszöntőkkel." },
      { time: "22:00", title: "Tortavágás", description: "Édes pillanatok — utána folytatódik a tánc!" },
      { time: "24:00", title: "Éjféli vacsi", description: "Éjféli falatok az éhes táncosoknak." },
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
        description: "Itt lesz a templomi szertartás 15:00-kor. A templom Dunaszentmiklós központjában található, Neszmélytől kb. 10 percre autóval.",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Dunaszentmikl%C3%B3s+Tatai+u.+5-7",
      },
      {
        icon: "🍇",
        name: "Hilltop Borbirtok és Étterem",
        address: "2544 Neszmély, Meleges-hegy",
        description: "A vendégvárás, a polgári szertartás és a vacsorával egybekötött mulatság helyszíne. A birtok a Meleges-hegy tetején fekszik, lenyűgöző Duna-panorámával és 250 hektáros szőlőültetvénnyel körülvéve. Parkolással kapcsolatban a birtok esküvői elérhetőségén tudtok érdeklődni: +36-70/944-3353.",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Hilltop+Borbirtok+Neszm%C3%A9ly",
        website: "https://hilltopborbirtok.hu/",
      },
    ],
  },

  // ---------- VISSZAJELZÉS (RSVP) ----------
  rsvp: {
    title: "Visszajelzés",
    text: "Helykitöltő — pl. 'Nagy örömmel ünnepelnénk veletek! Kérjük, jelezzétek az alábbi gombra kattintva, hogy számíthatunk-e rátok.'",
    deadline: "Kérjük, jelezzetek vissza 2026. szeptember 1-ig!",
    buttonText: "Visszajelzés küldése",
    // Legegyszerűbb megoldás: készítsetek egy ingyenes Google Űrlapot, és illesszétek be a linkjét ide.
    buttonLink: "https://forms.google.com",
    contact: "Kérdésetek van? Írjatok a helykitolto@email.com címre, vagy hívjatok: +36 00 000 0000.",
  },

  // ---------- SZÁLLÁS ----------
  accommodation: {
    title: "Szálláslehetőségek",
    intro: "A messzebbről érkező vendégeknek jó hír, hogy magán a birtokon is lehet szállást foglalni — érdemes időben lefoglalni, mert korlátozott a szobaszám!",
    places: [
      {
        icon: "🍇",
        heading: "Szállás a Hilltop Borbirtokon",
        text: "A birtok főépületében 4 Duna-panorámás szoba, a vendégházban további 6 szoba (köztük egy családi lakosztály) foglalható. Foglaláshoz keressétek közvetlenül a birtokot.",
        linkText: "Foglalás / weboldal",
        link: "https://hilltopborbirtok.hu/",
      },
      {
        icon: "🏨",
        heading: "További szálláslehetőség (helykitöltő)",
        text: "Ha a birtoki szobák elfogynak, ide jöhet egy közeli, alternatív szálláshely ajánlása — rövid leírással, távolsággal, árkategóriával.",
        linkText: "Weboldal megnyitása",
        link: "https://example.com",
      },
    ],
  },

  // ---------- GYAKORI KÉRDÉSEK ----------
  faq: {
    title: "Gyakori kérdések",
    items: [
      {
        question: "Mit vegyek fel?",
        answer: "Helykitöltő — pl. 'Alkalmi öltözet. A szertartás füves területen, a szabadban lesz, ezt a cipőválasztásnál érdemes figyelembe venni.'",
      },
      {
        question: "Hozhatok kísérőt?",
        answer: "Helykitöltő — pl. 'Kérjük, nézzétek meg a meghívót — ha a kísérőd is hivatalos, az ő neve is szerepel rajta.'",
      },
      {
        question: "Jöhetnek gyerekek?",
        answer: "Helykitöltő — ide jön a válasz.",
      },
      {
        question: "Mit adjunk ajándékba?",
        answer: "Helykitöltő — pl. 'A legnagyobb ajándék számunkra, ha velünk ünnepeltek! Ha mégis szeretnétek valamivel készülni, ...'",
      },
    ],
  },

  // ---------- LÁBLÉC ----------
  footer: {
    names: "Lili & Bence",
    note: "Alig várjuk, hogy együtt ünnepeljünk veletek! ✦ 2026. október 8.",
  },
};

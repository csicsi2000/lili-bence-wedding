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
    // A vendégeknek megjelenő dátum (szabad szöveg):
    dateText: "2026. szeptember 12., szombat",
    // A visszaszámláláshoz használt időpont — formátum: ÉÉÉÉ-HH-NNTÓÓ:PP
    countdownDate: "2026-09-12T15:00",
    location: "Budapest",
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
        icon: "💒",
        heading: "Szertartás",
        time: "15:00",
        place: "Szertartás helyszínének neve",
        text: "Helykitöltő — rövid leírás a szertartásról, pl. 'A szertartás jó idő esetén a szabadban lesz. Kérjük, érkezzetek 20 perccel korábban.'",
      },
      {
        icon: "🥂",
        heading: "Vacsora és buli",
        time: "18:00",
        place: "Fogadás helyszínének neve",
        text: "Helykitöltő — részletek a vacsoráról és a buliról, pl. 'Vacsora, tánc és ünneplés hajnalig. Dress code: alkalmi.'",
      },
    ],
  },

  // ---------- PROGRAM (a nap menete) ----------
  schedule: {
    title: "A nap programja",
    // Igény szerint hozzáadható vagy törölhető esemény. A { } jeleket és vesszőket hagyd meg!
    events: [
      { time: "14:30", title: "Vendégek érkezése", description: "Üdvözlőitalok a helyszínen." },
      { time: "15:00", title: "Szertartás", description: "A pillanat, amikor kimondjuk az igent." },
      { time: "16:00", title: "Fotózás és koccintás", description: "Csoportképek és frissítők." },
      { time: "18:00", title: "Vacsora", description: "Ültetett vacsora pohárköszöntőkkel." },
      { time: "20:00", title: "Nyitótánc", description: "Utána tánc mindenkinek!" },
      { time: "23:00", title: "Menyecsketánc", description: "Helykitöltő — pl. menyecsketánc és éjféli falatok." },
    ],
  },

  // ---------- HELYSZÍN ----------
  venue: {
    title: "Megközelítés",
    name: "Helyszín neve (helykitöltő)",
    address: "Példa utca 123., 1011 Budapest",
    description: "Helykitöltő — egy-két mondat a helyszínről és a megközelítésről (tömegközlekedés, taxi, stb.).",
    parking: "Parkolás: helykitöltő — pl. 'A helyszínen ingyenes parkolás áll rendelkezésre.'",
    // Ide illesszétek be a Google Térkép linket (a helyszín a Google Térképen > Megosztás > Link másolása):
    mapLink: "https://maps.google.com",
  },

  // ---------- VISSZAJELZÉS (RSVP) ----------
  rsvp: {
    title: "Visszajelzés",
    text: "Helykitöltő — pl. 'Nagy örömmel ünnepelnénk veletek! Kérjük, jelezzétek az alábbi gombra kattintva, hogy számíthatunk-e rátok.'",
    deadline: "Kérjük, jelezzetek vissza 2026. augusztus 1-ig!",
    buttonText: "Visszajelzés küldése",
    // Legegyszerűbb megoldás: készítsetek egy ingyenes Google Űrlapot, és illesszétek be a linkjét ide.
    buttonLink: "https://forms.google.com",
    contact: "Kérdésetek van? Írjatok a helykitolto@email.com címre, vagy hívjatok: +36 00 000 0000.",
  },

  // ---------- SZÁLLÁS ----------
  accommodation: {
    title: "Szálláslehetőségek",
    intro: "Helykitöltő — pl. 'A messzebbről érkező vendégeknek az alábbi szállásokat ajánljuk a helyszín közelében.'",
    places: [
      {
        icon: "🏨",
        heading: "Első szálloda (helykitöltő)",
        text: "Rövid leírás — távolság a helyszíntől, árkategória, foglalási tudnivalók.",
        linkText: "Weboldal megnyitása",
        link: "https://example.com",
      },
      {
        icon: "🏡",
        heading: "Második vendégház (helykitöltő)",
        text: "Rövid leírás — távolság a helyszíntől, árkategória, foglalási tudnivalók.",
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
    note: "Alig várjuk, hogy együtt ünnepeljünk veletek! ✦ 2026. szeptember 12.",
  },
};

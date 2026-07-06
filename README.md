# Link

https://csicsi2000.github.io/lili-bence-wedding/

# Lili & Bence — Esküvői weboldal 💍

Egyszerű, reszponzív esküvői weboldal. Nincs build folyamat, nincsenek keretrendszerek — csak HTML, CSS és JavaScript, ingyenes GitHub Pages tárhelyre készítve.

## ✏️ Hogyan szerkeszthető a szöveg? (a párnak)

**A weboldal összes szövege egyetlen fájlban található: [`js/content.js`](js/content.js).**

1. Nyisd meg a `js/content.js` fájlt egy szövegszerkesztőben (vagy közvetlenül GitHubon: kattints a fájlra → ceruza ✏️ ikon).
2. Írd át bármelyik szöveget az idézőjelek `"..."` között. A fájlban lévő megjegyzések minden szakaszt elmagyaráznak.
3. Mentsd el (GitHubon: „Commit changes"). Az élő oldal egy-két percen belül frissül.

A szövegek, dátumok, időpontok, programpontok, GYIK-bejegyzések és linkek módosításához soha nem kell a HTML-hez vagy CSS-hez nyúlni.

Kitöltendő, amint megvannak a részletek:

- [ ] Nevek, dátum és helyszín a `hero` szakaszban
- [ ] `countdownDate` (ez vezérli az élő visszaszámlálást)
- [ ] Történetünk bekezdései
- [ ] Szertartás és vacsora időpontja, helyszíne
- [ ] A nap programja
- [ ] Helyszín címe + Google Térkép link
- [ ] Visszajelzés link (legegyszerűbb: ingyenes **Google Űrlap**, a linkjét a `rsvp.buttonLink` mezőbe kell beilleszteni)
- [ ] Szállásajánlások
- [ ] GYIK válaszok
- [ ] Fotók — lásd lent

## 🖼️ Fotók hozzáadása

Tegyétek a képeket egy `assets/` mappába, majd cseréljétek le a helykitöltő blokkokat az `index.html`-ben:

```html
<!-- ezt: -->
<div class="story-photo placeholder-photo"><span>A pár fotója</span></div>
<!-- erre: -->
<img class="story-photo" src="assets/par.jpg" alt="Lili és Bence">
```

## 🎨 Színek és betűtípusok módosítása

A [`css/style.css`](css/style.css) tetején lévő változókat kell átírni (`--sage`, `--gold`, `--ivory`, ...). Egyetlen módosítás az egész oldalon érvényesül.

---

## 🚀 Publishing on GitHub Pages (free) — for the maintainer

1. Create a repository on GitHub (e.g. `lili-bence-wedding`) and push this folder to it.
2. On GitHub: **Settings → Pages → Build and deployment**
   - Source: *Deploy from a branch*
   - Branch: `main`, folder `/ (root)` → **Save**
3. After a minute the site is live at `https://csicsi2000.github.io/lili-bence-wedding/`.

Every push to `main` automatically updates the live site.

> Tip: for a nicer URL you can later buy a custom domain and add it under Settings → Pages → Custom domain.

## 🧪 Previewing locally

Just open `index.html` in a browser — no server needed.

## Project structure

```
index.html      — page structure (sections, placeholders); static labels are in Hungarian
css/style.css   — all styling, colors and responsive rules
js/content.js   — ⭐ ALL editable text lives here (Hungarian)
js/main.js      — renders content.js into the page, countdown, mobile menu
```

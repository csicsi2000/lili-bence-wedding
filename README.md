# Lili & Bence — Wedding Website 💍

A simple, responsive wedding website. No build tools, no frameworks — just HTML, CSS and JavaScript, ready for free hosting on GitHub Pages.

## ✏️ How to edit the text (for the couple)

**All text on the website lives in one file: [`js/content.js`](js/content.js).**

1. Open `js/content.js` in any text editor (or directly on GitHub: click the file → the pencil ✏️ icon).
2. Change any text between the quotes `"..."`. The comments in the file explain each section.
3. Save (or on GitHub: "Commit changes"). The live site updates within a minute or two.

You never need to touch the HTML or CSS to change text, dates, times, schedule items, FAQ entries, or links.

Things to fill in when the details arrive:

- [ ] Names, date and location in the `hero` section
- [ ] `countdownDate` (drives the live countdown)
- [ ] Our Story paragraphs
- [ ] Ceremony & reception times and venues
- [ ] Schedule of the day
- [ ] Venue address + Google Maps link
- [ ] RSVP link (easiest: create a free **Google Form** and paste its link into `rsvp.buttonLink`)
- [ ] Accommodation recommendations
- [ ] FAQ answers
- [ ] Photos — see below

## 🖼️ Adding photos

Put images in an `assets/` folder, then replace the placeholder blocks in `index.html`:

```html
<!-- replace this: -->
<div class="story-photo placeholder-photo"><span>Photo of the couple</span></div>
<!-- with this: -->
<img class="story-photo" src="assets/couple.jpg" alt="Lili and Bence">
```

## 🎨 Changing colors / fonts

Edit the variables at the top of [`css/style.css`](css/style.css) (`--sage`, `--gold`, `--ivory`, ...). One change updates the whole site.

## 🚀 Publishing on GitHub Pages (free)

1. Create a repository on GitHub (e.g. `lili-bence-wedding`) and push this folder to it.
2. On GitHub: **Settings → Pages → Build and deployment**
   - Source: *Deploy from a branch*
   - Branch: `main`, folder `/ (root)` → **Save**
3. After a minute the site is live at `https://<username>.github.io/lili-bence-wedding/`.

Every push to `main` automatically updates the live site.

> Tip: for a nicer URL you can later buy a custom domain and add it under Settings → Pages → Custom domain.

## 🧪 Previewing locally

Just open `index.html` in a browser — no server needed.

## Project structure

```
index.html      — page structure (sections, placeholders)
css/style.css   — all styling, colors and responsive rules
js/content.js   — ⭐ ALL editable text lives here
js/main.js      — renders content.js into the page, countdown, mobile menu
```

/* ============================================================
   Renders CONTENT (from content.js) into the page.
   You should not need to edit this file to change any text —
   edit js/content.js instead.
   ============================================================ */

(function () {
  const $ = (id) => document.getElementById(id);
  const setText = (id, text) => { const el = $(id); if (el && text != null) el.textContent = text; };

  // ---------- Hero ----------
  setText("hero-eyebrow", CONTENT.hero.eyebrow);
  setText("hero-names", CONTENT.hero.names);
  setText("hero-date", CONTENT.hero.dateText);
  setText("hero-location", CONTENT.hero.location);
  setText("hero-cta", CONTENT.hero.ctaButton);

  // ---------- Our Story ----------
  setText("story-title", CONTENT.story.title);
  const storyText = $("story-text");
  CONTENT.story.paragraphs.forEach((p) => {
    const el = document.createElement("p");
    el.textContent = p;
    storyText.appendChild(el);
  });

  // ---------- Details cards ----------
  setText("details-title", CONTENT.details.title);
  const detailsCards = $("details-cards");
  CONTENT.details.cards.forEach((card) => {
    const el = document.createElement("div");
    el.className = "card";
    el.innerHTML = `
      <div class="card-icon"></div>
      <h3></h3>
      <p class="card-time"></p>
      <p class="card-place"></p>
      <p class="card-text"></p>`;
    el.querySelector(".card-icon").textContent = card.icon;
    el.querySelector("h3").textContent = card.heading;
    el.querySelector(".card-time").textContent = card.time;
    el.querySelector(".card-place").textContent = card.place;
    el.querySelector(".card-text").textContent = card.text;
    detailsCards.appendChild(el);
  });

  // ---------- Schedule timeline ----------
  setText("schedule-title", CONTENT.schedule.title);
  const timeline = $("timeline");
  CONTENT.schedule.events.forEach((ev) => {
    const el = document.createElement("div");
    el.className = "timeline-item";
    el.innerHTML = `
      <div class="timeline-time"></div>
      <div class="timeline-dot"></div>
      <div class="timeline-body"><h3></h3><p></p></div>`;
    el.querySelector(".timeline-time").textContent = ev.time;
    el.querySelector("h3").textContent = ev.title;
    el.querySelector("p").textContent = ev.description;
    timeline.appendChild(el);
  });

  // ---------- Venue ----------
  setText("venue-title", CONTENT.venue.title);
  setText("venue-name", CONTENT.venue.name);
  setText("venue-address", CONTENT.venue.address);
  setText("venue-description", CONTENT.venue.description);
  setText("venue-parking", CONTENT.venue.parking);
  $("venue-map-link").href = CONTENT.venue.mapLink;

  // ---------- RSVP ----------
  setText("rsvp-title", CONTENT.rsvp.title);
  setText("rsvp-text", CONTENT.rsvp.text);
  setText("rsvp-deadline", CONTENT.rsvp.deadline);
  setText("rsvp-contact", CONTENT.rsvp.contact);
  const rsvpBtn = $("rsvp-button");
  rsvpBtn.textContent = CONTENT.rsvp.buttonText;
  rsvpBtn.href = CONTENT.rsvp.buttonLink;

  // ---------- Accommodation ----------
  setText("accommodation-title", CONTENT.accommodation.title);
  setText("accommodation-intro", CONTENT.accommodation.intro);
  const accCards = $("accommodation-cards");
  CONTENT.accommodation.places.forEach((place) => {
    const el = document.createElement("div");
    el.className = "card";
    el.innerHTML = `
      <div class="card-icon"></div>
      <h3></h3>
      <p class="card-text"></p>
      <a class="card-link" target="_blank" rel="noopener"></a>`;
    el.querySelector(".card-icon").textContent = place.icon;
    el.querySelector("h3").textContent = place.heading;
    el.querySelector(".card-text").textContent = place.text;
    const link = el.querySelector(".card-link");
    link.textContent = place.linkText;
    link.href = place.link;
    accCards.appendChild(el);
  });

  // ---------- FAQ (accordion) ----------
  setText("faq-title", CONTENT.faq.title);
  const faqList = $("faq-list");
  CONTENT.faq.items.forEach((item) => {
    const el = document.createElement("details");
    el.className = "faq-item";
    el.innerHTML = `<summary></summary><p></p>`;
    el.querySelector("summary").textContent = item.question;
    el.querySelector("p").textContent = item.answer;
    faqList.appendChild(el);
  });

  // ---------- Footer ----------
  setText("footer-names", CONTENT.footer.names);
  setText("footer-note", CONTENT.footer.note);

  // ---------- Countdown ----------
  const target = new Date(CONTENT.hero.countdownDate).getTime();
  function tick() {
    const diff = target - Date.now();
    if (isNaN(target)) return;
    if (diff <= 0) {
      setText("cd-days", "0"); setText("cd-hours", "0");
      setText("cd-mins", "0"); setText("cd-secs", "0");
      return;
    }
    setText("cd-days", String(Math.floor(diff / 86400000)));
    setText("cd-hours", String(Math.floor(diff / 3600000) % 24));
    setText("cd-mins", String(Math.floor(diff / 60000) % 60));
    setText("cd-secs", String(Math.floor(diff / 1000) % 60));
    setTimeout(tick, 1000);
  }
  tick();

  // ---------- Mobile navigation ----------
  const navToggle = $("nav-toggle");
  const navLinks = $("nav-links");
  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    })
  );

  // ---------- Solid nav background after scrolling past hero ----------
  const nav = $("nav");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 40);
  }, { passive: true });
})();

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
  setText("hero-date-stylized", CONTENT.hero.dateStylized);
  setText("hero-date", CONTENT.hero.dateText);
  setText("hero-location", CONTENT.hero.location);
  setText("hero-invite", CONTENT.hero.inviteText);
  setText("hero-cta", CONTENT.hero.ctaButton);

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
      <div class="timeline-body"><h3></h3></div>`;
    el.querySelector(".timeline-time").textContent = ev.time;
    el.querySelector("h3").textContent = ev.title;
    if (ev.description) {
      const p = document.createElement("p");
      p.textContent = ev.description;
      el.querySelector(".timeline-body").appendChild(p);
    }
    timeline.appendChild(el);
  });

  // ---------- Venue ----------
  setText("venue-title", CONTENT.venue.title);
  const venueCards = $("venue-cards");
  CONTENT.venue.places.forEach((place) => {
    const el = document.createElement("div");
    el.className = "card venue-card";
    el.innerHTML = `
      <div class="card-icon"></div>
      <h3></h3>
      <p class="card-place"></p>
      <p class="card-text"></p>
      <div class="venue-buttons"></div>`;
    el.querySelector(".card-icon").textContent = place.icon;
    el.querySelector("h3").textContent = place.name;
    el.querySelector(".card-place").textContent = place.address;
    el.querySelector(".card-text").textContent = place.text || place.description;
    const buttons = el.querySelector(".venue-buttons");
    if (place.mapLink) {
      const a = document.createElement("a");
      a.className = "btn btn-outline";
      a.target = "_blank"; a.rel = "noopener";
      a.href = place.mapLink;
      a.textContent = "Megnyitás térképen";
      buttons.appendChild(a);
    }
    if (place.website) {
      const a = document.createElement("a");
      a.className = "btn btn-outline";
      a.target = "_blank"; a.rel = "noopener";
      a.href = place.website;
      a.textContent = "Weboldal";
      buttons.appendChild(a);
    }
    venueCards.appendChild(el);
  });

  // ---------- RSVP ----------
  setText("rsvp-title", CONTENT.rsvp.title);
  setText("rsvp-text", CONTENT.rsvp.text);
  setText("rsvp-deadline", CONTENT.rsvp.deadline);
  // Contact line: make e-mail addresses and phone numbers tappable links
  const contactEl = $("rsvp-contact");
  if (contactEl && CONTENT.rsvp.contact) {
    const text = CONTENT.rsvp.contact;
    const pattern = /([\w.+-]+@[\w-]+(?:\.[\w-]+)+)|(\+\d[\d\s]*\d)/g;
    let last = 0, m;
    while ((m = pattern.exec(text))) {
      contactEl.appendChild(document.createTextNode(text.slice(last, m.index)));
      const a = document.createElement("a");
      a.href = m[1] ? "mailto:" + m[1] : "tel:" + m[2].replace(/\s/g, "");
      a.textContent = m[0];
      contactEl.appendChild(a);
      last = m.index + m[0].length;
    }
    contactEl.appendChild(document.createTextNode(text.slice(last)));
  }
  const rsvpBtn = $("rsvp-button");
  if (CONTENT.rsvp.buttonLink) {
    rsvpBtn.textContent = CONTENT.rsvp.buttonText;
    rsvpBtn.href = CONTENT.rsvp.buttonLink;
  } else {
    rsvpBtn.remove();
  }

  // ---------- Accommodation ----------
  setText("accommodation-title", CONTENT.accommodation.title);
  setText("accommodation-intro", CONTENT.accommodation.intro);
  setText("accommodation-outro", CONTENT.accommodation.outro);
  const accCards = $("accommodation-cards");
  CONTENT.accommodation.places.forEach((place) => {
    const el = document.createElement("div");
    el.className = "card acc-card";
    const h3 = document.createElement("h3");
    h3.textContent = place.heading;
    el.appendChild(h3);
    (place.lines || []).forEach((line) => {
      const p = document.createElement("p");
      p.className = "card-text";
      if (line.includes("@")) {
        const a = document.createElement("a");
        a.href = "mailto:" + line;
        a.textContent = line;
        p.appendChild(a);
      } else if (/^\+?[\d\s/-]+$/.test(line)) {
        const a = document.createElement("a");
        a.href = "tel:" + line.replace(/[\s/-]/g, "");
        a.textContent = line;
        p.appendChild(a);
      } else {
        p.textContent = line;
      }
      el.appendChild(p);
    });
    accCards.appendChild(el);
  });

  // ---------- FAQ (accordion) ----------
  setText("faq-title", CONTENT.faq.title);
  const faqList = $("faq-list");
  CONTENT.faq.items.forEach((item) => {
    const el = document.createElement("details");
    el.className = "faq-item";
    el.innerHTML = `<summary></summary><div class="faq-answer"><p></p></div>`;
    el.querySelector("summary").textContent = item.question;
    el.querySelector("p").textContent = item.answer;

    // Smooth open/close animation (native <details> jumps otherwise)
    const summary = el.querySelector("summary");
    const answer = el.querySelector(".faq-answer");
    summary.addEventListener("click", (e) => {
      e.preventDefault();
      if (answer.style.height) return; // already animating
      // No transition (e.g. reduced motion): plain toggle, no animation to wait for
      if (!parseFloat(getComputedStyle(answer).transitionDuration)) {
        el.open = !el.open;
        return;
      }
      // Settle via transitionend, with a timeout fallback in case the
      // event is lost (background tab, interrupted transition, ...)
      const settle = (after) => {
        let settled = false;
        const fn = () => {
          if (settled) return;
          settled = true;
          if (after) after();
          answer.style.height = "";
        };
        answer.addEventListener("transitionend", fn, { once: true });
        setTimeout(fn, 350);
      };
      if (el.open) {
        answer.style.height = answer.scrollHeight + "px";
        void answer.offsetHeight; // reflow, so the transition has a start value
        answer.style.height = "0px";
        settle(() => { el.open = false; });
      } else {
        el.open = true;
        const target = answer.scrollHeight;
        answer.style.height = "0px";
        void answer.offsetHeight; // reflow, so the transition has a start value
        answer.style.height = target + "px";
        settle();
      }
    });
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
  const setMenuState = (open) => {
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Menü bezárása" : "Menü megnyitása");
  };
  navToggle.addEventListener("click", () => {
    setMenuState(navLinks.classList.toggle("open"));
  });
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      setMenuState(false);
    })
  );

  // ---------- Solid nav background after scrolling past hero ----------
  const nav = $("nav");
  const updateNav = () => nav.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", updateNav, { passive: true });
  updateNav(); // correct state when the page loads already scrolled
})();

/* ============================================================
   EDIT THIS FILE TO CHANGE ALL TEXT ON THE WEBSITE
   ------------------------------------------------------------
   - Everything between quotes ("...") can be changed freely.
   - Don't remove the commas or quotes themselves.
   - After editing, just save and refresh the page.
   ============================================================ */

const CONTENT = {

  // ---------- HERO (top of the page) ----------
  hero: {
    eyebrow: "We're getting married!",
    names: "Lili & Bence",
    // Date shown to guests (free text):
    dateText: "Saturday, 12 September 2026",
    // Date used for the countdown — format: YYYY-MM-DDTHH:MM
    countdownDate: "2026-09-12T15:00",
    location: "Budapest, Hungary",
    ctaButton: "RSVP Now",
  },

  // ---------- OUR STORY ----------
  story: {
    title: "Our Story",
    // Each string is one paragraph. Add or remove lines as needed.
    paragraphs: [
      "This is a placeholder for the story of how Lili and Bence met. Replace this text with a few sentences about the couple — how they met, the proposal, or anything they'd like to share with their guests.",
      "A second paragraph can go here, for example about the proposal or what this day means to them.",
    ],
  },

  // ---------- DETAILS (ceremony & reception cards) ----------
  details: {
    title: "The Big Day",
    cards: [
      {
        icon: "💒",
        heading: "Ceremony",
        time: "3:00 PM",
        place: "Ceremony venue name",
        text: "Placeholder — a short description of the ceremony, e.g. 'The ceremony will take place outdoors, weather permitting. Please arrive 20 minutes early.'",
      },
      {
        icon: "🥂",
        heading: "Reception",
        time: "6:00 PM",
        place: "Reception venue name",
        text: "Placeholder — details about the dinner and party, e.g. 'Dinner, dancing and celebration until late. Dress code: semi-formal.'",
      },
    ],
  },

  // ---------- SCHEDULE (timeline of the day) ----------
  schedule: {
    title: "Schedule of the Day",
    // Add or remove events as needed. Keep the { } and commas.
    events: [
      { time: "14:30", title: "Guests arrive", description: "Welcome drinks at the venue." },
      { time: "15:00", title: "Ceremony", description: "The moment we say 'I do'." },
      { time: "16:00", title: "Photos & cocktails", description: "Group photos and refreshments." },
      { time: "18:00", title: "Dinner", description: "Seated dinner with toasts." },
      { time: "20:00", title: "First dance", description: "Followed by dancing for everyone." },
      { time: "23:00", title: "Midnight snack", description: "Placeholder — e.g. traditional midnight feast." },
    ],
  },

  // ---------- VENUE ----------
  venue: {
    title: "Getting There",
    name: "Venue Name Placeholder",
    address: "123 Example Street, 1011 Budapest, Hungary",
    description: "Placeholder — a sentence or two about the venue and how to get there (public transport, taxi recommendations, etc.).",
    parking: "Parking: placeholder — e.g. 'Free parking is available on site.'",
    // Paste a Google Maps link here (open the venue in Google Maps > Share > Copy link):
    mapLink: "https://maps.google.com",
  },

  // ---------- RSVP ----------
  rsvp: {
    title: "RSVP",
    text: "Placeholder — e.g. 'We would be delighted to celebrate with you! Please let us know if you can make it by clicking the button below.'",
    deadline: "Please respond by 1 August 2026.",
    buttonText: "Respond Here",
    // Easiest option: create a free Google Form and paste its link here.
    buttonLink: "https://forms.google.com",
    contact: "Questions? Contact us at placeholder@email.com or +36 00 000 0000.",
  },

  // ---------- ACCOMMODATION ----------
  accommodation: {
    title: "Where to Stay",
    intro: "Placeholder — e.g. 'For guests travelling from afar, here are a few places we recommend near the venue.'",
    places: [
      {
        icon: "🏨",
        heading: "Hotel Placeholder One",
        text: "Short description — distance from venue, price range, booking note.",
        linkText: "Visit website",
        link: "https://example.com",
      },
      {
        icon: "🏡",
        heading: "Guesthouse Placeholder Two",
        text: "Short description — distance from venue, price range, booking note.",
        linkText: "Visit website",
        link: "https://example.com",
      },
    ],
  },

  // ---------- FAQ ----------
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What should I wear?",
        answer: "Placeholder — e.g. 'Semi-formal / cocktail attire. The ceremony is outdoors on grass, so plan footwear accordingly.'",
      },
      {
        question: "Can I bring a plus one?",
        answer: "Placeholder — e.g. 'Please check your invitation — if your guest is included, their name will be listed.'",
      },
      {
        question: "Are children welcome?",
        answer: "Placeholder — answer here.",
      },
      {
        question: "Do you have a gift registry?",
        answer: "Placeholder — e.g. 'Your presence is the greatest gift! If you wish to give something, ...'",
      },
    ],
  },

  // ---------- FOOTER ----------
  footer: {
    names: "Lili & Bence",
    note: "We can't wait to celebrate with you! ✦ 12 September 2026",
  },
};

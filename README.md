# Theros Rooms — Nea Vrasna

A high-converting, single-page website for a small sea-view rooms business in Nea Vrasna, Strymonikós Bay, Greece. Vanilla HTML/CSS/JS — no build step, no dependencies. Just open or upload.

## Structure
```
theros-rooms/
├── index.html
└── assets/
    ├── style.css
    └── script.js
```

## Run / deploy
Open `index.html` in a browser, or drop the whole folder on any static host (Netlify, Vercel, GitHub Pages, cPanel). No server needed.

## Conversion features built in
- Sticky "Check availability" CTA in the nav + a prominent date/guest **booking bar** under the hero
- Booking form pre-fills an **email enquiry** with dates, nights, room and guest count
- "Reserve this room" buttons auto-select the room in the booking bar
- Best-rate / book-direct messaging, social-proof rating (9.4), guest reviews
- Trust badges (2 min to beach, free parking & Wi-Fi), location + map, final urgency CTA
- Fully responsive, scroll reveals, reduced-motion respected

## Things to update before going live
1. **Phone** — currently `+30 23970 65061` (in `index.html`, search `tel:`)
2. **Email** — `stay@therosrooms.gr` (in `index.html` and `assets/script.js`)
3. **Prices** — in the room cards (`.room-price`)
4. **Photos** — room/beach blocks use CSS gradient placeholders. Replace with real photos:
   swap the `.room-img--*` and `.beach-gallery .g*` backgrounds for `url('assets/your-photo.jpg')`.
5. **Map marker** — adjust the `marker=` coordinates in the OpenStreetMap iframe to your exact address.

## Optional: connect a real booking engine
The form currently opens the guest's email client. To plug in a channel manager (Booking.com, Beds24, etc.), replace the `mailto:` handoff in `assets/script.js` with your engine's URL/widget.

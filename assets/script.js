/* ===== Theros Rooms ===== */
(function(){
  "use strict";

  // --- Nav: scrolled state ---
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, {passive:true});

  // --- Mobile menu ---
  const toggle = document.getElementById('navToggle');
  const links = document.querySelector('.nav-links');
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  links.addEventListener('click', e => { if(e.target.tagName==='A') links.classList.remove('open'); });

  // --- Scroll reveal ---
  const revealTargets = document.querySelectorAll(
    '.why-card,.room,.beach-text,.beach-gallery,.loc-card,.review,.section-head,.why-head'
  );
  revealTargets.forEach(el => el.classList.add('reveal'));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, {threshold:0.12});
  revealTargets.forEach(el => io.observe(el));

  // --- Date defaults & validation ---
  const ci = document.getElementById('checkin');
  const co = document.getElementById('checkout');
  const today = new Date();
  const fmt = d => d.toISOString().split('T')[0];
  const tomorrow = new Date(today); tomorrow.setDate(today.getDate()+1);
  const dayAfter = new Date(today); dayAfter.setDate(today.getDate()+2);
  ci.min = fmt(today); ci.value = fmt(tomorrow);
  co.min = fmt(dayAfter); co.value = fmt(dayAfter);
  ci.addEventListener('change', () => {
    const next = new Date(ci.value); next.setDate(next.getDate()+1);
    co.min = fmt(next);
    if(new Date(co.value) <= new Date(ci.value)) co.value = fmt(next);
  });

  // --- Toast ---
  const toast = document.getElementById('toast');
  let toastTimer;
  function showToast(html){
    toast.innerHTML = html;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 5500);
  }

  // --- Booking form: hand off to email enquiry ---
  const form = document.getElementById('bookForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const checkin  = ci.value;
    const checkout = co.value;
    const guests   = document.getElementById('guests').value;
    const room     = document.getElementById('roomtype').value;

    const nights = Math.max(1, Math.round(
      (new Date(checkout) - new Date(checkin)) / 86400000
    ));

    const subject = `Booking enquiry — ${room} (${checkin} → ${checkout})`;
    const body =
      `Hello Theros Rooms,%0D%0A%0D%0A` +
      `I'd like to check availability:%0D%0A` +
      `• Room: ${room}%0D%0A` +
      `• Check-in: ${checkin}%0D%0A` +
      `• Check-out: ${checkout}%0D%0A` +
      `• Nights: ${nights}%0D%0A` +
      `• Guests: ${guests}%0D%0A%0D%0A` +
      `Thank you!`;

    showToast(`Opening your email — <strong>${nights} night${nights>1?'s':''}</strong> for ${guests.toLowerCase()}. We reply within a few hours.`);
    setTimeout(() => {
      window.location.href = `mailto:stay@therosrooms.gr?subject=${encodeURIComponent(subject)}&body=${body}`;
    }, 700);
  });

  // --- Reserve buttons scroll to booking ---
  document.querySelectorAll('a[href="#book"]').forEach(a => {
    a.addEventListener('click', () => {
      const sel = document.getElementById('roomtype');
      const card = a.closest('.room');
      if(card){
        const name = card.querySelector('h3').textContent.trim();
        [...sel.options].forEach(o => { if(o.text === name) sel.value = name; });
      }
    });
  });

})();

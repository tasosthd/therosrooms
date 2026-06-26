/* ===== Theros Rooms ===== */
(function(){
  "use strict";

  /* =========================================================
     i18n — Greek (default) + English
     ========================================================= */
  const I18N = {
    el: {
      "meta.title":"Theros Rooms — Δωμάτια με θέα στη θάλασσα, Νέα Βρασνά",
      "meta.desc":"Theros Rooms: φωτεινά δωμάτια και διαμερίσματα με θέα στη θάλασσα, λίγα βήματα από την παραλία με Γαλάζια Σημαία στη Νέα Βρασνά. Κλείστε απευθείας για την καλύτερη τιμή.",
      "nav.rooms":"Δωμάτια","nav.beach":"Η Παραλία","nav.location":"Τοποθεσία","nav.reviews":"Κριτικές","nav.cta":"Διαθεσιμότητα",
      "hero.eyebrow":"Στρυμονικός Κόλπος · Βόρεια Ελλάδα",
      "hero.title":"Ξυπνήστε με<br><em>το Αιγαίο</em>",
      "hero.sub":"Ηλιόλουστα δωμάτια με θέα στη θάλασσα, ένα μπαλκόνι για κάθε πρωινό καφέ, και η παραλία με Γαλάζια Σημαία της Νέας Βρασνάς μόλις λίγα βήματα μακριά.",
      "hero.cta1":"Δείτε διαθεσιμότητα","hero.cta2":"Δείτε τα δωμάτια",
      "hero.badge1":"από την άμμο","hero.badge2strong":"Δωρεάν","hero.badge2":"πάρκινγκ & Wi-Fi","hero.badge3":"βαθμολογία επισκεπτών",
      "book.checkin":"Άφιξη","book.checkout":"Αναχώρηση","book.guests":"Άτομα","book.room":"Δωμάτιο",
      "book.g1":"1 άτομο","book.g2":"2 άτομα","book.g3":"3 άτομα","book.g4":"4 άτομα","book.g5":"5+ άτομα",
      "book.rAny":"Οποιοδήποτε δωμάτιο","book.submit":"Έλεγχος & κράτηση",
      "book.note":"Κλείστε απευθείας — εγγυημένα η καλύτερη τιμή, χωρίς χρεώσεις κράτησης.",
      "why.eyebrow":"Γιατί Theros","why.title":"Ένα μικρό, οικογενειακό καταφύγιο — όχι αλυσίδα ξενοδοχείων.",
      "why.lead":"Theros σημαίνει «καλοκαίρι» στα ελληνικά, και αυτό ακριβώς σας προσφέρουμε από την πόρτα: θαλασσινό αεράκι, ήρεμα πρωινά, και έναν οικοδεσπότη που ξέρει στ' αλήθεια την καλύτερη ταβέρνα του χωριού.",
      "why.c1t":"Βήματα από τη θάλασσα","why.c1p":"Η παραλία 5 χλμ. με Γαλάζια Σημαία ξεκινά εκεί που τελειώνει ο κήπος μας — δύο λεπτά με τα πόδια, ξυπόλητοι.",
      "why.c2t":"Μπαλκόνια με ανατολή","why.c2p":"Δωμάτια με θέα στη θάλασσα και ανατολικό προσανατολισμό. Δείτε τον κόλπο να χρυσίζει από το δικό σας μπαλκόνι.",
      "why.c3t":"Παρκάρετε & ξεχάστε το αυτοκίνητο","why.c3p":"Δωρεάν πάρκινγκ στον χώρο. Ταβέρνες, φούρνος και ο παραλιακός πεζόδρομος είναι όλα με τα πόδια.",
      "why.c4t":"Φιλοξενία με φροντίδα","why.c4p":"Καθημερινός καθαρισμός, ζεστό καλωσόρισμα, και οι μικρές λεπτομέρειες που κάνουν τους επισκέπτες να επιστρέφουν.",
      "rooms.eyebrow":"Μείνετε μαζί μας","rooms.title":"Δωμάτια φτιαγμένα για ήρεμα καλοκαίρια",
      "rooms.lead":"Κάθε δωμάτιο έχει κλιματισμό, είναι πεντακάθαρο, και διαθέτει μπαλκόνι, δωρεάν Wi-Fi και κουζινάκι. Διαλέξτε τη θέα σας.",
      "rooms.from":"από","rooms.night":"/βράδυ","rooms.reserve":"Κράτηση αυτού του δωματίου",
      "rooms.r1desc":"Στούντιο ανοιχτού χώρου για δύο, με μπροστινό μπαλκόνι που πλαισιώνει τον κόλπο. Ξυπνάτε, ανοίγετε τις πόρτες, και το Αιγαίο είναι ακριβώς εκεί.",
      "rooms.r1f1":"2 άτομα","rooms.r1f2":"Θέα θάλασσα","rooms.r1f3":"Κουζινάκι","rooms.r1f4":"A/C",
      "rooms.r2desc":"Ξεχωριστό υπνοδωμάτιο, σαλόνι με καναπέ-κρεβάτι και πλήρη κουζίνα. Άνεση για να απλωθείτε μετά από μια μεγάλη μέρα στην παραλία — άνετα για τέσσερα άτομα.",
      "rooms.r2f1":"4 άτομα","rooms.r2f2":"Θέα θάλασσα","rooms.r2f3":"Πλήρης κουζίνα",
      "rooms.r3desc":"Ένα ήσυχο, σκιερό δίκλινο που ανοίγει στον κήπο — πιο δροσερό τα απογεύματα και η καλύτερη επιλογή αξίας. Ιδανικό για μια ήρεμη απόδραση για δύο.",
      "rooms.r3f2":"Θέα κήπος",
      "beach.eyebrow":"Η παραλία","beach.title":"Πέντε χιλιόμετρα ακτογραμμής με Γαλάζια Σημαία",
      "beach.p1":"Η παραλία της Νέας Βρασνάς κατακτά τη Γαλάζια Σημαία της ΕΕ για καθαρά νερά και ασφαλές κολύμπι χρόνο με τον χρόνο. Ρηχή, χρυσή και ήπια — η θάλασσα όπου τα παιδιά τρέχουν μέσα χωρίς δεύτερη σκέψη.",
      "beach.p2":"Τη νύχτα, ο παραλιακός πεζόδρομος ζωντανεύει: τουριστικά μαγαζάκια, μπαρ για κοκτέιλ κάτω από τα αστέρια, και ταβέρνες με τα φρέσκα ψάρια της ημέρας. Η ανατολή του Αυγουστιάτικου φεγγαριού πάνω από τον κόλπο είναι το μυστικό του χωριού.",
      "beach.s1":"αμμώδης παραλία","beach.s2":"βραβείο καθαρών νερών","beach.s3":"από την πόρτα στο νερό",
      "loc.eyebrow":"Πώς θα έρθετε","loc.title":"Εύκολη πρόσβαση, δύσκολη αναχώρηση",
      "loc.c1t":"Από το αεροδρόμιο","loc.c1p":"Το αεροδρόμιο Θεσσαλονίκης (SKG) απέχει μια γραφική διαδρομή 1ώρας 20΄ κατά μήκος της ακτής — περίπου 96 χλμ. Μπορούμε να κανονίσουμε μεταφορά κατόπιν αιτήματος.",
      "loc.c2t":"Στο χωριό","loc.c2p":"Σούπερ μάρκετ, φούρνος και η κοντινότερη ταβέρνα είναι 3 λεπτά με τα πόδια. Όλος ο οικισμός είναι επίπεδος και εύκολος για περπάτημα.",
      "loc.c3t":"Αξίζει μια εκδρομή","loc.c3p":"Ο πευκόφυτος Σταυρός, οι υγρότοποι του δέλτα του Στρυμόνα, και οι καταρράκτες κοντά στην Ασπροβάλτα είναι όλα κοντά.",
      "rev.eyebrow":"Αγάπη επισκεπτών","rev.title":"Βαθμολογία 9.4 από όσους ξαναγύρισαν",
      "rev.q1":"«Πεντακάθαρα, η θέα του κόλπου από το μπαλκόνι ήταν απίστευτη, και οι οικοδεσπότες μάς φέρθηκαν σαν οικογένεια. Έχουμε ήδη ξανακλείσει για το επόμενο καλοκαίρι.»",
      "rev.c1":"Έλενα & Μάρκο — Ιταλία",
      "rev.q2":"«Δύο λεπτά από την παραλία, δωρεάν πάρκινγκ ακριβώς έξω, όλα καινούργια και μοντέρνα. Τα παιδιά λάτρεψαν πόσο ήρεμη και ρηχή είναι η θάλασσα εδώ.»",
      "rev.c2":"Οικογένεια Weber — Γερμανία",
      "rev.q3":"«Η τέλεια βάση για μια ήρεμη εβδομάδα. Ταβέρνες και πεζόδρομος με τα πόδια, ανατολή από το μπαλκόνι, και ένας οικοδεσπότης που μας έδειξε όλα τα καλύτερα σημεία.»",
      "rev.c3":"Σοφία — Αθήνα",
      "final.eyebrow":"Καλοκαίρι 2026","final.title":"Οι καλές εβδομάδες κλείνουν νωρίς.",
      "final.sub":"Κλείστε απευθείας για την καλύτερη τιμή μας και ένα μπαλκόνι με το όνομά σας. Απαντάμε μέσα σε λίγες ώρες.",
      "final.cta":"Δείτε διαθεσιμότητα","final.or":"ή τηλεφωνήστε μας —",
      "foot.tag":"Δωμάτια με θέα στη θάλασσα στον Στρυμονικό Κόλπο, Βόρεια Ελλάδα.",
      "foot.visit":"Επισκεφθείτε","foot.addr":"Νέα Βρασνά, Θεσσαλονίκη<br>Κεντρική Μακεδονία, Ελλάδα",
      "foot.contact":"Επικοινωνία","foot.explore":"Εξερευνήστε","foot.bookdirect":"Κράτηση απευθείας",
      "foot.copy":"© 2026 Theros Rooms · Νέα Βρασνά","foot.slogan":"Φτιαγμένο για ήρεμα καλοκαίρια",
      /* toast / email */
      "toast.book":(n,g)=>`Ανοίγει το email σας — <strong>${n} ${n===1?'βράδυ':'βράδια'}</strong> για ${g.toLowerCase()}. Απαντάμε μέσα σε λίγες ώρες.`,
      "mail.subject":(room,ci,co)=>`Αίτημα κράτησης — ${room} (${ci} → ${co})`,
      "mail.body":(room,ci,co,n,g)=>
        `Γεια σας Theros Rooms,%0D%0A%0D%0A`+
        `Θα ήθελα να ελέγξω τη διαθεσιμότητα:%0D%0A`+
        `• Δωμάτιο: ${room}%0D%0A`+
        `• Άφιξη: ${ci}%0D%0A`+
        `• Αναχώρηση: ${co}%0D%0A`+
        `• Βράδια: ${n}%0D%0A`+
        `• Άτομα: ${g}%0D%0A%0D%0A`+
        `Ευχαριστώ!`
    },
    en: {
      "meta.title":"Theros Rooms — Sea-View Stays in Nea Vrasna, Greece",
      "meta.desc":"Theros Rooms: bright, sea-view studios & apartments steps from the Blue Flag beach in Nea Vrasna, Strymonikós Bay. Book direct for the best rate.",
      "nav.rooms":"Rooms","nav.beach":"The Beach","nav.location":"Location","nav.reviews":"Reviews","nav.cta":"Check availability",
      "hero.eyebrow":"Strymonikós Bay · Northern Greece",
      "hero.title":"Wake up to<br><em>the Aegean</em>",
      "hero.sub":"Sun-filled sea-view rooms, a balcony for every morning coffee, and the Blue Flag beach of Nea Vrasna just a barefoot walk away.",
      "hero.cta1":"Check availability","hero.cta2":"View rooms",
      "hero.badge1":"to the sand","hero.badge2strong":"Free","hero.badge2":"parking & Wi-Fi","hero.badge3":"guest rating",
      "book.checkin":"Check-in","book.checkout":"Check-out","book.guests":"Guests","book.room":"Room",
      "book.g1":"1 guest","book.g2":"2 guests","book.g3":"3 guests","book.g4":"4 guests","book.g5":"5+ guests",
      "book.rAny":"Any room","book.submit":"Check & reserve",
      "book.note":"Book direct — best rate guaranteed, no booking fees.",
      "why.eyebrow":"Why Theros","why.title":"A small, family-run hideaway — not a hotel chain.",
      "why.lead":"Theros means \u201Csummer\u201D in Greek, and that's exactly what we hand you at the door: salt air, slow mornings, and a host who actually knows the best taverna in the village.",
      "why.c1t":"Steps from the sea","why.c1p":"The 5km Blue Flag beach starts where our garden ends — a two-minute, shoe-optional walk.",
      "why.c2t":"Sunrise balconies","why.c2p":"East-facing sea-view rooms. Watch the bay turn gold from your own private balcony.",
      "why.c3t":"Park & forget the car","why.c3p":"Free on-site parking. Tavernas, bakery and the seaside promenade are all on foot.",
      "why.c4t":"Hosted with care","why.c4p":"Daily cleaning, a warm welcome, and the little touches that make guests come back.",
      "rooms.eyebrow":"Stay with us","rooms.title":"Rooms made for slow summers",
      "rooms.lead":"Every room is air-conditioned, spotless, and comes with a balcony, free Wi-Fi and a kitchenette. Choose your view.",
      "rooms.from":"from","rooms.night":"/night","rooms.reserve":"Reserve this room",
      "rooms.r1desc":"Open-plan studio for two with a front balcony framing the bay. Wake, open the doors, and the Aegean is right there.",
      "rooms.r1f1":"Sleeps 2","rooms.r1f2":"Sea view","rooms.r1f3":"Kitchenette","rooms.r1f4":"A/C",
      "rooms.r2desc":"A separate bedroom, a sofa-bed living space and a full kitchen. Room to spread out after a long beach day — comfortably sleeps four.",
      "rooms.r2f1":"Sleeps 4","rooms.r2f2":"Sea view","rooms.r2f3":"Full kitchen",
      "rooms.r3desc":"A quiet, shaded double opening onto the garden — cooler in the afternoons and our best value. Perfect for a calm couple's escape.",
      "rooms.r3f2":"Garden view",
      "beach.eyebrow":"The beach","beach.title":"Five kilometres of Blue Flag shoreline",
      "beach.p1":"Nea Vrasna's beach has flown the EU Blue Flag for clean water and safe swimming year after year. Shallow, golden, and gentle — the kind of sea where kids run in without a second thought.",
      "beach.p2":"By night, the seaside pedestrian promenade comes alive: gift shops, cocktail bars under the stars, and tavernas serving the day's catch. The August moonrise over the bay is the village's open secret.",
      "beach.s1":"of sandy beach","beach.s2":"clean-water award","beach.s3":"door to water",
      "loc.eyebrow":"Getting here","loc.title":"Easy to reach, hard to leave",
      "loc.c1t":"From the airport","loc.c1p":"Thessaloniki Airport (SKG) is a scenic 1h20 drive along the coast — about 96 km. We can arrange a transfer on request.",
      "loc.c2t":"In the village","loc.c2p":"Supermarket, bakery and the nearest taverna are a 3-minute walk. The whole resort is flat and easy on foot.",
      "loc.c3t":"Worth a day trip","loc.c3p":"Pine-backed Stavros, the wetlands of the Strymón delta, and the waterfalls near Asprovalta are all close by.",
      "rev.eyebrow":"Guest love","rev.title":"Rated 9.4 by people who came back",
      "rev.q1":"\u201CSpotlessly clean, the balcony view of the bay was unreal, and the hosts treated us like family. We've already booked again for next summer.\u201D",
      "rev.c1":"Elena & Marco — Italy",
      "rev.q2":"\u201CTwo minutes to the beach, free parking right outside, everything new and modern. The kids loved how calm and shallow the sea is here.\u201D",
      "rev.c2":"The Weber family — Germany",
      "rev.q3":"\u201CThe perfect base for a quiet week. Tavernas and the promenade on foot, sunrise from the balcony, and a host who pointed us to all the best spots.\u201D",
      "rev.c3":"Sophia — Athens",
      "final.eyebrow":"Summer 2026","final.title":"The good weeks book early.",
      "final.sub":"Reserve direct for our best rate and a balcony with your name on it. We reply within a few hours.",
      "final.cta":"Check availability","final.or":"or call us —",
      "foot.tag":"Sea-view rooms in Strymonikós Bay, Northern Greece.",
      "foot.visit":"Visit","foot.addr":"Nea Vrasna, Thessaloniki<br>Central Macedonia, Greece",
      "foot.contact":"Contact","foot.explore":"Explore","foot.bookdirect":"Book direct",
      "foot.copy":"© 2026 Theros Rooms · Nea Vrasna","foot.slogan":"Made for slow summers",
      "toast.book":(n,g)=>`Opening your email — <strong>${n} night${n>1?'s':''}</strong> for ${g.toLowerCase()}. We reply within a few hours.`,
      "mail.subject":(room,ci,co)=>`Booking enquiry — ${room} (${ci} → ${co})`,
      "mail.body":(room,ci,co,n,g)=>
        `Hello Theros Rooms,%0D%0A%0D%0A`+
        `I'd like to check availability:%0D%0A`+
        `• Room: ${room}%0D%0A`+
        `• Check-in: ${ci}%0D%0A`+
        `• Check-out: ${co}%0D%0A`+
        `• Nights: ${n}%0D%0A`+
        `• Guests: ${g}%0D%0A%0D%0A`+
        `Thank you!`
    }
  };

  let lang = 'el';
  try { const saved = localStorage.getItem('theros-lang'); if(saved==='en'||saved==='el') lang = saved; } catch(e){}

  function t(key){ return (I18N[lang] && I18N[lang][key]) || (I18N.el[key]) || key; }

  function applyLang(next){
    lang = next;
    document.documentElement.lang = lang;
    try { localStorage.setItem('theros-lang', lang); } catch(e){}

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const v = t(el.getAttribute('data-i18n'));
      if(typeof v === 'string') el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const v = t(el.getAttribute('data-i18n-html'));
      if(typeof v === 'string') el.innerHTML = v;
    });
    // meta + title
    document.title = t('meta.title');
    const md = document.querySelector('meta[name="description"]');
    if(md) md.setAttribute('content', t('meta.desc'));
    // toggle button states
    document.querySelectorAll('.lang-btn').forEach(b => {
      const active = b.getAttribute('data-lang') === lang;
      b.classList.toggle('active', active);
      b.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  document.querySelectorAll('.lang-btn').forEach(b => {
    b.addEventListener('click', () => applyLang(b.getAttribute('data-lang')));
  });

  /* =========================================================
     Nav, menu, reveals
     ========================================================= */
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, {passive:true});

  const toggle = document.getElementById('navToggle');
  const links = document.querySelector('.nav-links');
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  links.addEventListener('click', e => { if(e.target.tagName==='A') links.classList.remove('open'); });

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

  /* =========================================================
     Booking form
     ========================================================= */
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

  const toast = document.getElementById('toast');
  let toastTimer;
  function showToast(html){
    toast.innerHTML = html;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 5500);
  }

  const form = document.getElementById('bookForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const checkin  = ci.value;
    const checkout = co.value;
    const guests   = document.getElementById('guests').value;
    const room     = document.getElementById('roomtype').value;
    const nights = Math.max(1, Math.round((new Date(checkout) - new Date(checkin)) / 86400000));

    showToast(t('toast.book')(nights, guests));
    const subject = t('mail.subject')(room, checkin, checkout);
    const body    = t('mail.body')(room, checkin, checkout, nights, guests);
    setTimeout(() => {
      window.location.href = `mailto:therosrooms@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    }, 700);
  });

  // Reserve buttons preselect room
  document.querySelectorAll('a[href="#book"]').forEach(a => {
    a.addEventListener('click', () => {
      const sel = document.getElementById('roomtype');
      const card = a.closest('.room');
      if(card){
        const name = card.querySelector('h3').textContent.trim();
        [...sel.options].forEach(o => { if(o.text === name) sel.value = o.value; });
      }
    });
  });

  /* init */
  applyLang(lang);

})();

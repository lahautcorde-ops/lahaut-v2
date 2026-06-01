/* LA HAUT V2 — main.js */

document.addEventListener('DOMContentLoaded', () => {
  initBurger();
  initFAQ();
  initGalerieFilters();
  initContactForm();
  initURLParams();
  initLightbox();
});

/* ── BURGER MENU ── */
function initBurger() {
  const burger = document.getElementById('burger');
  const mobileNav = document.getElementById('nav-mobile');
  if (!burger || !mobileNav) return;

  burger.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    burger.setAttribute('aria-expanded', isOpen);
  });

  document.addEventListener('click', (e) => {
    if (!burger.contains(e.target) && !mobileNav.contains(e.target)) {
      mobileNav.classList.remove('open');
    }
  });
}

/* ── FAQ ACCORDION ── */
function initFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    if (!q) return;
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

/* ── GALERIE FILTRES ── */
function initGalerieFilters() {
  const btns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.galerie-item');
  const noResults = document.getElementById('no-results');
  if (!btns.length || !items.length) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      let visible = 0;

      items.forEach(item => {
        const match = filter === 'all' || item.dataset.category === filter;
        item.classList.toggle('hidden', !match);
        if (match) visible++;
      });

      if (noResults) noResults.style.display = visible === 0 ? 'block' : 'none';
    });
  });

  // Filtre depuis URL (?filter=zinc)
  const params = new URLSearchParams(window.location.search);
  const urlFilter = params.get('filter');
  if (urlFilter) {
    const target = document.querySelector(`.filter-btn[data-filter="${urlFilter}"]`);
    if (target) target.click();
  }
}

/* ── FORMULAIRE MULTI-ÉTAPES (contact.html) ── */
function initContactForm() {
  const steps = document.querySelectorAll('.form-panel');
  if (!steps.length) return;

  const indicators = document.querySelectorAll('.form-step-indicator');
  let selectedType = null;

  // Sélecteur de type
  document.querySelectorAll('.type-option').forEach(opt => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('.type-option').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      selectedType = opt.dataset.type;
      const nextBtn = document.getElementById('step1-next');
      if (nextBtn) nextBtn.disabled = false;
    });
  });

  function goToStep(n) {
    steps.forEach(s => s.classList.remove('active'));
    const target = document.getElementById(`step-${n}`);
    if (target) target.classList.add('active');

    indicators.forEach(ind => {
      const s = parseInt(ind.dataset.step);
      ind.classList.remove('active', 'done');
      if (s === n) ind.classList.add('active');
      if (s < n) ind.classList.add('done');
    });

    // Afficher le bon bloc de détails
    if (n === 2 && selectedType) {
      ['entretien', 'zinc', 'contrat'].forEach(t => {
        const el = document.getElementById(`details-${t}`);
        if (el) el.style.display = t === selectedType ? 'block' : 'none';
      });
    }
  }

  const s1next = document.getElementById('step1-next');
  if (s1next) s1next.addEventListener('click', () => goToStep(2));

  const s2prev = document.getElementById('step2-prev');
  if (s2prev) s2prev.addEventListener('click', () => goToStep(1));

  const s2next = document.getElementById('step2-next');
  if (s2next) s2next.addEventListener('click', () => goToStep(3));

  const s3prev = document.getElementById('step3-prev');
  if (s3prev) s3prev.addEventListener('click', () => goToStep(2));

  const s3submit = document.getElementById('step3-submit');
  if (s3submit) {
    s3submit.addEventListener('click', async () => {
      const nom = document.querySelector('[name="nom"]');
      const tel = document.querySelector('[name="tel"]');
      const adresse = document.querySelector('[name="adresse"]');
      if (!nom?.value.trim() || !tel?.value.trim() || !adresse?.value.trim()) {
        alert('Merci de remplir les champs obligatoires (Nom, Téléphone, Adresse).');
        return;
      }

      // Collecte tous les champs des 3 étapes
      const data = {
        type_besoin: selectedType || 'non précisé',
        nom: nom?.value.trim(),
        telephone: tel?.value.trim(),
        email: document.querySelector('[name="email"]')?.value.trim() || '',
        adresse_chantier: adresse?.value.trim(),
        description: document.querySelector('[name="description"]')?.value.trim() || '',
        acces: document.querySelector('[name="acces"]')?.value.trim() || '',
        message: document.querySelector('[name="message"]')?.value.trim() || '',
        _subject: `Nouvelle demande de devis LA HAUT — ${selectedType || 'contact'}`,
      };

      // Désactiver le bouton pendant l'envoi
      s3submit.disabled = true;
      s3submit.textContent = 'Envoi en cours…';

      try {
        const response = await fetch('https://formspree.io/f/xqejodnz', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(data)
        });

        if (response.ok) {
          // Succès — afficher la confirmation
          goToStep('confirm');
          indicators.forEach(i => { i.classList.remove('active'); i.classList.add('done'); });
        } else {
          throw new Error('Erreur serveur');
        }
      } catch (err) {
        s3submit.disabled = false;
        s3submit.textContent = 'Envoyer la demande';
        alert('Une erreur est survenue. Merci de réessayer ou d\'appeler directement le 06 59 22 75 69.');
      }
    });
  }
}

/* ── LIGHTBOX ── */
function initLightbox() {
  // Crée l'overlay une seule fois
  const lb = document.createElement('div');
  lb.id = 'lightbox';
  lb.innerHTML = '<button id="lightbox-close" aria-label="Fermer">✕</button><img src="" alt="">';
  document.body.appendChild(lb);

  const lbImg = lb.querySelector('img');
  const lbClose = lb.querySelector('#lightbox-close');

  function open(src, alt) {
    lbImg.src = src;
    lbImg.alt = alt || '';
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
    lbImg.src = '';
  }

  // Cibles : images galerie, avant/après, prestations avec photo
  const selectors = '.galerie-item img, .ba-img-wrap img, .presta-card img, .zinguerie-realisation img';
  document.querySelectorAll(selectors).forEach(img => {
    img.closest('.galerie-item, .ba-img-wrap, .presta-card, .zinguerie-realisation')
      ?.classList.add('lightbox-trigger');
    img.parentElement.addEventListener('click', () => open(img.src, img.alt));
  });

  lbClose.addEventListener('click', close);
  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

/* ── PARAMS URL (pré-sélection formulaire) ── */
function initURLParams() {
  const params = new URLSearchParams(window.location.search);

  // ?type=entretien|zinc|contrat|b2b → pré-sélectionne le type sur contact.html
  const type = params.get('type');
  if (type) {
    const opt = document.querySelector(`.type-option[data-type="${type === 'b2b' ? 'zinc' : type}"]`);
    if (opt) opt.click();
  }

  // ?formule=serenite → pré-sélectionne la formule sur contrats.html
  const formule = params.get('formule');
  if (formule) {
    const sel = document.getElementById('formule-select');
    if (sel) sel.value = formule;
  }
}

/**
 * Dharmik Motors – script.js
 * Electric Vehicle Dealership – Mehsana, Gujarat
 * Pure vanilla JS — no frameworks, no jQuery
 */

'use strict';

/* ─────────────────────────────────────────────────────────────
   DATA: Model catalog
   ─────────────────────────────────────────────────────────────  */
const CATALOG = {
  'charry-d': {
    name:  'PEV Charry D',
    img:   'charry-d.jpeg',
    alt:   'PEV Charry D electric three-wheeler in Mehsana – Dharmik Motors',
    desc:  'The PEV Charry D is a vintage-inspired cream electric three-wheeler with spacious dual seating, a front cargo carrier, LED headlights, and 10-inch alloy wheels. A family favourite in Mehsana — equally comfortable for daily commutes and leisure rides.',
    category: 'Electric Three Wheeler',
    variants: [
      { price: '₹1,48,000', battery: 'Lead Battery',    warranty: '1 Year', range: '40–50 km' },
      { price: '₹1,58,000', battery: 'Lithium Battery', warranty: '2 Years', range: '40–50 km' },
      { price: '₹1,71,000', battery: 'Lithium Battery', warranty: '2 Years', range: '50–65 km' },
      { price: '₹1,85,000', battery: 'Lithium Battery', warranty: '2 Years', range: '65–80 km' },
      { price: '₹1,98,000', battery: 'Lithium Battery', warranty: '2 Years', range: '90–110 km' },
    ],
  },
  'phantom-e': {
    name:  'PEV Phantom E',
    img:   'phantom-e.jpeg',
    alt:   'PEV Phantom E electric three-wheeler scooter in Mehsana – Dharmik Motors',
    desc:  'The PEV Phantom E is a sporty teal-green three-wheeler with modern scooter styling. Lithium-only battery options ensure maximum performance and a 2-year warranty on all non-entry variants — ideal for daily commutes across Mehsana.',
    category: 'Electric Three Wheeler',
    variants: [
      { price: '₹1,15,000', battery: 'Lithium Battery', warranty: '1 Year', range: '40–50 km' },
      { price: '₹1,30,000', battery: 'Lithium Battery', warranty: '2 Years', range: '50–65 km' },
      { price: '₹1,45,000', battery: 'Lithium Battery', warranty: '2 Years', range: '65–80 km' },
      { price: '₹1,60,000', battery: 'Lithium Battery', warranty: '2 Years', range: '90–110 km' },
    ],
  },
  'phantom-d': {
    name:  'PEV Phantom D',
    img:   'phantom-d.jpeg',
    alt:   'PEV Phantom D black electric three-wheeler in Mehsana – Dharmik Motors',
    desc:  'The PEV Phantom D commands attention with its striking matte-black finish and gold-accent alloy wheels. Available in lead-acid for budget-conscious buyers and lithium for those wanting longer range and superior warranty coverage.',
    category: 'Electric Three Wheeler',
    variants: [
      { price: '₹1,28,000', battery: 'Lead Battery',    warranty: '1 Year', range: '40–50 km' },
      { price: '₹1,48,000', battery: 'Lithium Battery', warranty: '2 Years', range: '40–50 km' },
      { price: '₹1,63,000', battery: 'Lithium Battery', warranty: '2 Years', range: '50–65 km' },
      { price: '₹1,78,000', battery: 'Lithium Battery', warranty: '2 Years', range: '65–80 km' },
      { price: '₹1,91,000', battery: 'Lithium Battery', warranty: '2 Years', range: '90–100 km' },
    ],
  },
  'grand-high-rider': {
    name:  'PEV Grand High Rider',
    img:   'grand-high-rider.jpeg',
    alt:   'PEV Grand High Rider copper-brown electric three-wheeler in Mehsana – Dharmik Motors',
    desc:  'The PEV Grand High Rider blends a timeless Vespa-inspired silhouette with modern EV technology. Its rich copper-brown finish, premium comfort seating with head rest and back rest, and mobile charger point make it the most luxurious pick in the range.',
    category: 'Electric Three Wheeler',
    variants: [
      { price: '₹1,48,000', battery: 'Lead Battery',    warranty: '1 Year', range: '40–50 km' },
      { price: '₹1,58,000', battery: 'Lithium Battery', warranty: '2 Years', range: '40–50 km' },
      { price: '₹1,70,000', battery: 'Lithium Battery', warranty: '2 Years', range: '50–65 km' },
      { price: '₹1,82,000', battery: 'Lithium Battery', warranty: '2 Years', range: '65–80 km' },
      { price: '₹1,95,000', battery: 'Lithium Battery', warranty: '2 Years', range: '90–110 km' },
    ],
  },
  'phantom-s': {
    name:  'PEV Phantom S',
    img:   'phantom-s.jpeg',
    alt:   'PEV Phantom S red single-seat electric three-wheeler in Mehsana – Dharmik Motors',
    desc:  'The PEV Phantom S is a compact, single-seat electric three-wheeler finished in bold red. Lightweight and agile, it is the perfect choice for solo riders who need a reliable, economical vehicle for every day in Mehsana.',
    category: '3-Wheel Single Seat',
    variants: [
      { price: '₹1,18,000', battery: 'Lead Battery',    warranty: '1 Year', range: '40–50 km' },
      { price: '₹1,38,000', battery: 'Lithium Battery', warranty: '2 Years', range: '40–50 km' },
      { price: '₹1,48,000', battery: 'Lithium Battery', warranty: '2 Years', range: '50–65 km' },
      { price: '₹1,65,000', battery: 'Lithium Battery', warranty: '2 Years', range: '65–80 km' },
      { price: '₹1,81,000', battery: 'Lithium Battery', warranty: '2 Years', range: '90–100 km' },
    ],
  },
};

const WA_NUMBER = '918043841939';

/* ─────────────────────────────────────────────────────────────
   DOM CACHE
   ─────────────────────────────────────────────────────────────  */
const header        = document.getElementById('site-header');
const navToggle     = document.getElementById('nav-toggle');
const navMenu       = document.getElementById('nav-menu');
const modalOverlay  = document.getElementById('modal-overlay');
const modal         = document.getElementById('modal');
const modalContent  = document.getElementById('modal-content');
const modalClose    = document.getElementById('modal-close');
const enquiryForm   = document.getElementById('enquiry-form');
const heroParticles = document.getElementById('hero-particles');
const heroBgImage   = document.querySelector('.hero-bg-image');

/* ─────────────────────────────────────────────────────────────
   STICKY HEADER
   ─────────────────────────────────────────────────────────────  */
function initStickyHeader() {
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ─────────────────────────────────────────────────────────────
   SMOOTH SCROLL + ACTIVE NAV
   ─────────────────────────────────────────────────────────────  */
function initSmoothScroll() {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const headerH = header.offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - headerH - 16;
      window.scrollTo({ top, behavior: 'smooth' });
      // Close mobile menu if open
      if (navMenu.classList.contains('open')) toggleNav(false);
    });
  });
}

function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
}

/* ─────────────────────────────────────────────────────────────
   MOBILE NAV TOGGLE
   ─────────────────────────────────────────────────────────────  */
function toggleNav(open) {
  const isOpen = open !== undefined ? open : !navMenu.classList.contains('open');
  navMenu.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
}

function initMobileNav() {
  navToggle.addEventListener('click', () => toggleNav());

  // Close on outside click
  document.addEventListener('click', e => {
    if (
      navMenu.classList.contains('open') &&
      !navMenu.contains(e.target) &&
      !navToggle.contains(e.target)
    ) {
      toggleNav(false);
    }
  });
}

/* ─────────────────────────────────────────────────────────────
   SCROLL REVEAL (IntersectionObserver)
   ─────────────────────────────────────────────────────────────  */
function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
  const observer  = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach(el => observer.observe(el));
}

/* ─────────────────────────────────────────────────────────────
   ANIMATED COUNTERS
   ─────────────────────────────────────────────────────────────  */
function animateCounter(el, target, duration = 1600) {
  let start = null;
  const step = ts => {
    if (!start) start = ts;
    const progress = Math.min((ts - start) / duration, 1);
    // Ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  };
  requestAnimationFrame(step);
}

function initCounters() {
  const counters  = document.querySelectorAll('.counter');
  const observer  = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el     = entry.target;
        const target = parseInt(el.dataset.target, 10);
        animateCounter(el, target);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

/* ─────────────────────────────────────────────────────────────
   HERO PARALLAX
   ─────────────────────────────────────────────────────────────  */
function initHeroParallax() {
  if (!heroBgImage) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const rate = scrolled * 0.3;
    heroBgImage.style.transform = `scale(1.05) translateY(${rate}px)`;
  }, { passive: true });
}

/* ─────────────────────────────────────────────────────────────
   HERO PARTICLES
   ─────────────────────────────────────────────────────────────  */
function initParticles() {
  if (!heroParticles) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const count = window.innerWidth < 768 ? 18 : 36;

  for (let i = 0; i < count; i++) {
    const p = document.createElement('span');
    p.className = 'particle';
    const size    = Math.random() * 3 + 1;
    const left    = Math.random() * 100;
    const delay   = Math.random() * 12;
    const dur     = Math.random() * 10 + 8;
    const opacity = Math.random() * 0.5 + 0.3;

    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${left}%;
      bottom: 0;
      animation-delay: ${delay}s;
      animation-duration: ${dur}s;
      opacity: ${opacity};
      filter: blur(${size > 2.5 ? 1 : 0}px);
    `;
    heroParticles.appendChild(p);
  }
}

/* ─────────────────────────────────────────────────────────────
   MODEL MODAL
   ─────────────────────────────────────────────────────────────  */
function buildVariantTable(variants) {
  const rows = variants.map(v => {
    const isLi = v.battery.toLowerCase().includes('lithium');
    const badge = isLi
      ? '<span class="badge-lithium">Li-Ion</span>'
      : '<span class="badge-lead">Lead-Acid</span>';
    return `
      <tr>
        <td class="price-cell">${v.price}</td>
        <td>${v.battery}${badge}</td>
        <td>${v.warranty}</td>
        <td>${v.range}</td>
      </tr>`;
  }).join('');

  return `
    <p class="variant-table-heading">Pricing &amp; Specifications</p>
    <div class="variant-table-wrap">
      <table class="variant-table" aria-label="Variant pricing and specifications">
        <thead>
          <tr>
            <th>Price</th>
            <th>Battery</th>
            <th>Battery Warranty</th>
            <th>Range</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
}

function buildModalHTML(model) {
  const data = CATALOG[model];
  if (!data) return '';

  const tableHTML = buildVariantTable(data.variants);

  // Gallery placeholder slots (first slot is the real image, rest are placeholders for future angles)
  const gallerySlots = [
    `<div class="modal-gallery-slot" data-lightbox="${data.img}" title="Click to enlarge" tabindex="0" role="button" aria-label="View full image of ${data.name}">
      <img src="${data.img}" alt="${data.alt}" loading="lazy" />
    </div>`,
    `<div class="modal-gallery-slot" title="Drop additional angle photo here" aria-label="Photo slot 2 — additional angle">
      <span>+ Add<br/>Photo 2</span>
    </div>`,
    `<div class="modal-gallery-slot" title="Drop additional angle photo here" aria-label="Photo slot 3 — additional angle">
      <span>+ Add<br/>Photo 3</span>
    </div>`,
  ].join('');

  const waMessage = encodeURIComponent(
    `Hello Dharmik Motors! I am interested in the ${data.name}. Please share more details and pricing.`
  );

  return `
    <img
      src="${data.img}"
      alt="${data.alt}"
      class="modal-hero-img"
      loading="lazy"
      width="800"
      height="360"
    />
    <div class="modal-gallery" aria-label="Additional photos for ${data.name}">${gallerySlots}</div>
    <span class="card-category" style="font-size:0.72rem;letter-spacing:0.08em;text-transform:uppercase;color:var(--clr-text-muted)">${data.category}</span>
    <h2 id="modal-title" class="modal-model-name">${data.name}</h2>
    <p class="modal-model-desc">${data.desc}</p>
    ${tableHTML}
    <div class="modal-footer-cta">
      <a
        href="https://wa.me/${WA_NUMBER}?text=${waMessage}"
        class="btn btn-whatsapp btn-lg"
        target="_blank"
        rel="noopener"
        aria-label="Enquire about ${data.name} on WhatsApp"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.139.564 4.147 1.547 5.887L.057 23.5l5.773-1.515A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.372l-.359-.213-3.424.898.914-3.34-.234-.374A9.818 9.818 0 012.182 12c0-5.42 4.398-9.818 9.818-9.818S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/></svg>
        Enquire on WhatsApp
      </a>
      <a href="tel:+918043841939" class="btn btn-outline btn-lg" aria-label="Call Dharmik Motors about ${data.name}">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
        Call Now
      </a>
    </div>`;
}

function openModal(modelKey) {
  const html = buildModalHTML(modelKey);
  if (!html) return;

  modalContent.innerHTML = html;
  modalOverlay.removeAttribute('hidden');

  // Allow display:flex to take effect before adding .visible
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      modalOverlay.classList.add('visible');
    });
  });

  document.body.style.overflow = 'hidden';

  // Attach lightbox listeners inside modal gallery
  initModalGalleryLightbox();

  // Focus trap on close button
  modalClose.focus();
}

function closeModal() {
  modalOverlay.classList.remove('visible');
  setTimeout(() => {
    modalOverlay.setAttribute('hidden', '');
    modalContent.innerHTML = '';
    document.body.style.overflow = '';
  }, 300);
}

function initModal() {
  // Open triggers — card buttons
  document.addEventListener('click', e => {
    const btn = e.target.closest('.open-modal');
    if (btn) {
      e.stopPropagation();
      openModal(btn.dataset.model);
    }
  });

  // Close button
  modalClose.addEventListener('click', closeModal);

  // Click backdrop to close
  modalOverlay.addEventListener('click', e => {
    if (e.target === modalOverlay) closeModal();
  });

  // Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !modalOverlay.hasAttribute('hidden')) {
      closeModal();
    }
  });
}

/* ─────────────────────────────────────────────────────────────
   GALLERY LIGHTBOX (inside modal)
   ─────────────────────────────────────────────────────────────  */
function initModalGalleryLightbox() {
  const slots = modalContent.querySelectorAll('[data-lightbox]');

  slots.forEach(slot => {
    const open = () => {
      const src = slot.dataset.lightbox;
      const alt = slot.querySelector('img')?.alt || '';

      // Build lightbox
      let lb = document.getElementById('lightbox-overlay');
      if (!lb) {
        lb = document.createElement('div');
        lb.className = 'lightbox-overlay';
        lb.id = 'lightbox-overlay';
        lb.setAttribute('role', 'dialog');
        lb.setAttribute('aria-modal', 'true');
        lb.setAttribute('aria-label', 'Full-size vehicle image');
        document.body.appendChild(lb);
      }

      lb.innerHTML = `<img src="${src}" alt="${alt}" class="lightbox-img" />`;
      lb.removeAttribute('hidden');
      requestAnimationFrame(() => {
        requestAnimationFrame(() => lb.classList.add('visible'));
      });

      lb.onclick = () => {
        lb.classList.remove('visible');
        setTimeout(() => {
          lb.setAttribute('hidden', '');
          lb.innerHTML = '';
        }, 300);
      };

      document.addEventListener('keydown', function escClose(e) {
        if (e.key === 'Escape') {
          lb.click();
          document.removeEventListener('keydown', escClose);
        }
      });
    };

    slot.addEventListener('click', open);
    slot.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    });
  });
}

/* ─────────────────────────────────────────────────────────────
   ENQUIRY FORM — WhatsApp redirect
   ─────────────────────────────────────────────────────────────  */
function initEnquiryForm() {
  if (!enquiryForm) return;

  enquiryForm.addEventListener('submit', e => {
    e.preventDefault();

    const name    = enquiryForm.querySelector('#form-name').value.trim();
    const phone   = enquiryForm.querySelector('#form-phone').value.trim();
    const modelSel = enquiryForm.querySelector('#form-model').value;
    const message = enquiryForm.querySelector('#form-message').value.trim();

    // Basic validation
    if (!name || !phone) {
      const missing = !name ? '#form-name' : '#form-phone';
      const el = enquiryForm.querySelector(missing);
      el.focus();
      el.style.borderColor = '#ff5577';
      setTimeout(() => el.style.borderColor = '', 2500);
      return;
    }

    const waText = [
      `Hello Dharmik Motors!`,
      ``,
      `*Name:* ${name}`,
      `*Phone:* ${phone}`,
      modelSel ? `*Model Interested:* ${modelSel}` : '',
      message ? `*Message:* ${message}` : '',
      ``,
      `_(Sent via dharmik-motors.in enquiry form)_`,
    ].filter(Boolean).join('\n');

    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waText)}`;
    window.open(url, '_blank', 'noopener');
  });
}

/* ─────────────────────────────────────────────────────────────
   INIT
   ─────────────────────────────────────────────────────────────  */
function init() {
  initStickyHeader();
  initSmoothScroll();
  initActiveNav();
  initMobileNav();
  initScrollReveal();
  initCounters();
  initHeroParallax();
  initParticles();
  initModal();
  initEnquiryForm();
}

// Run after DOM is parsed (script has defer attribute)
document.addEventListener('DOMContentLoaded', init);

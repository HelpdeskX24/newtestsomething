/* ============================================================
   NESTORA HOME — script.js
   ============================================================ */

// ── Product Data ────────────────────────────────────────────
const PRODUCTS = [
  {
    id: 1, category: "Vases",
    name: "Alabaster Bud Vase",
    price: "$68",
    desc: "Hand-turned from genuine alabaster, this slender bud vase catches light beautifully. Its smooth, milky surface adds quiet elegance to any shelf or mantle.",
    img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRHMcT6SFWENmBFa-vqZ3TOYgoeayRwAQlquLTYLHrGz2LA_MVcSWGz9s5Bd5aTQvG-Llc36Qc0bFi-uP-KHdzmV9zRWZWy88Uk0-O4Ybs-",
    badge: "New",
    material: "Alabaster", dimensions: "3\" × 9\" H", origin: "Italy"
  },
  {
    id: 2, category: "Lighting",
    name: "Amber Glass Table Lamp",
    price: "$189",
    desc: "Warm amber glass diffuses soft, inviting light that transforms any room into a sanctuary. The linen shade adds a layer of refined texture.",
    img: "https://m.media-amazon.com/images/I/81zZCMwiWJL.jpg",
    badge: "Best Seller",
    material: "Amber Glass, Linen", dimensions: "12\" × 22\" H", origin: "Portugal"
  },
  {
    id: 3, category: "Wall Art",
    name: "Abstract Linen Canvas",
    price: "$245",
    desc: "Original hand-painted abstract in muted earth tones. Each piece is uniquely crafted, making it an irreplaceable conversation piece in any space.",
    img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR4P49ckjsgz5Rn5N8wXcl1fErTaqJ6zLK6qcgaOksgmshytpBUlg5wzWh-vx7xeW_7d_TQYF2tlJliiDzuOLRZkr5oRo-u5AoxthJfV3k",
    badge: null,
    material: "Oil on Linen", dimensions: "24\" × 32\"", origin: "USA"
  },
  {
    id: 4, category: "Textiles",
    name: "Chunky Knit Throw",
    price: "$129",
    desc: "An oversized knit throw that invites you to curl up. Made from ultra-soft merino blend in warm cream. Drapes beautifully over sofas and armchairs.",
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRZqm4ETkv3V9GgHMTAh3ij7r52y-2utKAIL-tqASEGfnd4Wd5okyDEApW7DZMO3jyH-cGDgXT-25qrwsCEQK7Ym8WJ1MSLTA",
    badge: "New",
    material: "Merino Blend", dimensions: "52\" × 68\"", origin: "Peru"
  },
  {
    id: 5, category: "Candles",
    name: "Soy Wax Pillar Candle Set",
    price: "$54",
    desc: "A trio of handcrafted soy candles in warm sand and ecru tones. Subtle honey and sandalwood fragrance fills the room as they burn.",
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQuSX_EbofrD1Z6eGIN5kmsYqoKSE4B_4ffSVEmlVZWLVzRy_mCQOiK4n34S12SZpWF1fcv4uOqmpU9gwlL0HWaGiuOtOZG88L0nS7fLQE",
    badge: null,
    material: "Soy Wax, Cotton Wick", dimensions: "2\" to 4\" dia.", origin: "USA"
  },
  {
    id: 6, category: "Trays",
    name: "Rattan Serving Tray",
    price: "$79",
    desc: "A versatile hand-woven rattan tray perfect for styling a coffee table or ottoman. Natural variation in weave adds authentic character.",
    img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSuZRoHSd3yAgRXbfP6E4I25fYEE7P4heL90zRAvqQM0XDmt2d6xpETf7pydBF7QG_PSed-58EP3J5cpVaFgxV2006aM16HtI_tCPHErfJr9UJqoatruGe2pR0",
    badge: null,
    material: "Natural Rattan", dimensions: "18\" × 12\"", origin: "Vietnam"
  },
  {
    id: 7, category: "Storage",
    name: "Seagrass Storage Basket",
    price: "$89",
    desc: "Handwoven seagrass basket with leather handles. Functional and sculptural, it's perfect for blankets, toys, or magazines.",
    img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTEKUEeOFegqogPjg7qk35EanKZdF5RG2UH6zWTcVazo1ePxXAVc1CgyEDFHgGw0agVm3MOmwEpsYWTZGrAEHJgaPOfuGBie0P1pIGUg6Y",
    badge: "Best Seller",
    material: "Seagrass, Leather", dimensions: "16\" dia. × 14\" H", origin: "Bangladesh"
  },
  {
    id: 8, category: "Vases",
    name: "Sculptural Ceramic Vessel",
    price: "$138",
    desc: "A statement-making ceramic vessel with organic, asymmetric form. Each piece is wheel-thrown and finished by hand, ensuring no two are alike.",
    img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRRJ4RoAmZyc3PV76SGKRSj7rCsynDVuND7482FsJgsEohHY9kmS-DfCT_eNuI0tFynFiJLld43OLshOn6AjNYJchxoRVa77t3P4DDU2NY0uUeLcZq-4h7kig",
    badge: null,
    material: "Stoneware Ceramic", dimensions: "6\" × 14\" H", origin: "USA"
  },
  {
    id: 9, category: "Accents",
    name: "Marble Bookend Set",
    price: "$98",
    desc: "Weighty Italian marble bookends with a honed finish. Their quiet geometry anchors a shelf while letting books take center stage.",
    img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTLmSEKwHHMe4-Yif8Xl5dRVOLqOzJTl9r4QaIGU8UMckQUKvxf0xwXHnIaqGVIJxIiDtiNQDj6WtFW00dD-uom8zmhrBHu2TJega_xulMamI6P12FM_7SNow",
    badge: null,
    material: "Honed Marble", dimensions: "4\" × 6\" H each", origin: "Italy"
  },
  {
    id: 10, category: "Textiles",
    name: "Linen Throw Pillow",
    price: "$47",
    desc: "Belgian linen pillow cover with a subtle slub texture. The natural woven finish adds warmth without overpowering your existing palette.",
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRYHGeU5Q0q3lwtwyaLiOwijGjefCbcof5w7nsrgFQbbbiZ1uM4SPv1-ubXyByKMlN2SGsgvW0GiemVGlYavLEJP_MLYtt4DD8JF_6ytlWqiqPXX0eEH6jaJQ",
    badge: "New",
    material: "Belgian Linen", dimensions: "20\" × 20\"", origin: "Belgium"
  },
  {
    id: 11, category: "Lighting",
    name: "Hammered Brass Pendant",
    price: "$219",
    desc: "Hand-hammered brass shade with a matte antiqued finish. Casts warm, dappled light and works beautifully over dining tables and kitchen islands.",
    img: "https://i.etsystatic.com/57551686/r/il/68e06a/7037254553/il_fullxfull.7037254553_tei5.jpg",
    badge: null,
    material: "Hammered Brass", dimensions: "14\" dia. × 10\" H", origin: "Morocco"
  },
  {
    id: 12, category: "Accents",
    name: "Driftwood Sculpture",
    price: "$165",
    desc: "Collected from Pacific Northwest coastlines, each piece of driftwood is sealed and mounted to become a one-of-a-kind sculptural accent.",
    img: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&q=80",
    badge: "New",
    material: "Natural Driftwood", dimensions: "Varies", origin: "USA"
  }
];

// ── State ───────────────────────────────────────────────────
let currentProduct = null;

// ── DOM Helpers ─────────────────────────────────────────────
function $(sel, ctx = document) { return ctx.querySelector(sel); }
function $$(sel, ctx = document) { return [...ctx.querySelectorAll(sel)]; }
function ce(tag, cls, html) {
  const el = document.createElement(tag);
  if (cls) el.className = cls;
  if (html !== undefined) el.innerHTML = html;
  return el;
}

// ── Build Product Card ──────────────────────────────────────
function buildProductCard(p) {
  const card = ce('article', 'product-card');
  card.innerHTML = `
    <div class="product-img-wrap">
      <img src="${p.img}" alt="${p.name}" loading="lazy">
      ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
      <div class="product-quick">Quick View</div>
    </div>
    <div class="product-info">
      <p class="product-cat">${p.category}</p>
      <h3 class="product-name">${p.name}</h3>
      <p class="product-price">${p.price}</p>
    </div>
  `;
  card.addEventListener('click', () => openProductModal(p));
  return card;
}

// ── Product Modal ───────────────────────────────────────────
function openProductModal(p) {
  currentProduct = p;
  const overlay = $('#productModal');
  if (!overlay) return;
  $('#modalImg').src = p.img;
  $('#modalImg').alt = p.name;
  $('#modalCat').textContent = p.category;
  $('#modalTitle').textContent = p.name;
  $('#modalPrice').textContent = p.price;
  $('#modalDesc').textContent = p.desc;
  $('#modalMaterial').textContent = p.material || '—';
  $('#modalDimensions').textContent = p.dimensions || '—';
  $('#modalOrigin').textContent = p.origin || '—';
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  $('#productModal')?.classList.remove('open');
  document.body.style.overflow = '';
  currentProduct = null;
}

// ── Order Popup ─────────────────────────────────────────────
function openOrderPopup() {
  closeProductModal();
  setTimeout(() => {
    $('#orderPopup')?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }, 250);
}

function closeOrderPopup() {
  $('#orderPopup')?.classList.remove('open');
  document.body.style.overflow = '';
}

// ── Header Scroll ───────────────────────────────────────────
function initHeaderScroll() {
  const header = $('.site-header');
  if (!header) return;
  const update = () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', update, { passive: true });
  update();
}

// ── Mobile Nav ──────────────────────────────────────────────
function initMobileNav() {
  const ham = $('.hamburger');
  const mobileNav = $('.mobile-nav');
  const closeBtn = $('.mobile-close');
  if (!ham || !mobileNav) return;

  ham.addEventListener('click', () => {
    mobileNav.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
  closeBtn?.addEventListener('click', closeMobileNav);
  $$('.mobile-nav .nav-link').forEach(l => l.addEventListener('click', closeMobileNav));

  function closeMobileNav() {
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// ── Render Products ─────────────────────────────────────────
function renderProducts(containerId, ids, maxCount) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  const list = ids ? PRODUCTS.filter(p => ids.includes(p.id)) : PRODUCTS;
  const count = maxCount || list.length;
  list.slice(0, count).forEach(p => container.appendChild(buildProductCard(p)));
}

// ── Filter Tabs (shop page) ──────────────────────────────────
function initFilterTabs() {
  const tabs = $$('.filter-tab');
  const grid = document.getElementById('shopGrid');
  if (!tabs.length || !grid) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.dataset.cat;
      grid.innerHTML = '';
      const filtered = cat === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category.toLowerCase() === cat.toLowerCase());
      filtered.forEach(p => grid.appendChild(buildProductCard(p)));
    });
  });
}

// ── Close modals on overlay click ────────────────────────────
function initModalOverlayClose() {
  $('#productModal')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeProductModal();
  });
  $('#orderPopup')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeOrderPopup();
  });
}

// ── Newsletter ───────────────────────────────────────────────
function initNewsletter() {
  $$('.newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input');
      if (!input?.value.includes('@')) return showToast('Please enter a valid email.');
      showToast('Thank you! You\'re on the list.');
      input.value = '';
    });
  });
}

// ── Contact Form ─────────────────────────────────────────────
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Message sent! We\'ll be in touch soon.');
    form.reset();
  });
}

// ── Toast ────────────────────────────────────────────────────
function showToast(msg) {
  let toast = document.getElementById('globalToast');
  if (!toast) {
    toast = ce('div', 'toast', msg);
    toast.id = 'globalToast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 3500);
}

// ── Scroll reveal ─────────────────────────────────────────────
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  $$('.product-card, .why-card, .review-card, .room-card, .lifestyle-item').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.6s ease ${i * 0.07}s, transform 0.6s ease ${i * 0.07}s`;
    observer.observe(el);
  });
}

// ── Keyboard: Esc closes modals ────────────────────────────
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProductModal();
    closeOrderPopup();
  }
});

// ── Active nav link ────────────────────────────────────────
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  $$('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ── Init ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileNav();
  initModalOverlayClose();
  initNewsletter();
  initContactForm();
  initFilterTabs();
  setActiveNav();

  // Render grids
  renderProducts('featuredGrid',    [1, 2, 3, 4], 4);
  renderProducts('bestsellersGrid', [5, 6, 7], 3);
  renderProducts('shopGrid',        null, 16);
  renderProducts('arrivalsGrid',    [1, 4, 10, 12, 15, 3], 6);

  // Scroll reveal after a tick to allow layout
  setTimeout(initScrollReveal, 100);

  // Order Now button
  document.getElementById('orderNowBtn')?.addEventListener('click', openOrderPopup);
  document.getElementById('orderCloseBtn')?.addEventListener('click', closeOrderPopup);
  document.getElementById('modalCloseBtn')?.addEventListener('click', closeProductModal);
});

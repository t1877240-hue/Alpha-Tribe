// ==========================================================================
// ALPHA TRIBE - GLOBAL NAVIGATION, SEARCH & INTERACTION ENGINE
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  setupStickyHeader();
  setupMobileNav();
  setupSearchModal();
  setupNewsletterForms();
  highlightActiveNav();
});

// --- Sticky Header Dynamics ---
function setupStickyHeader() {
  const header = document.querySelector('header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.style.background = 'rgba(10, 10, 10, 0.98)';
      header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
    } else {
      header.style.background = 'rgba(10, 10, 10, 0.94)';
      header.style.boxShadow = 'none';
    }
  });
}

// --- Mobile Navigation Drawer ---
function setupMobileNav() {
  let drawer = document.getElementById('mobile-nav-drawer');
  let backdrop = document.getElementById('mobile-nav-backdrop');

  if (!drawer) {
    backdrop = document.createElement('div');
    backdrop.id = 'mobile-nav-backdrop';
    backdrop.className = 'cart-drawer-backdrop';
    backdrop.onclick = closeMobileNav;

    drawer = document.createElement('div');
    drawer.id = 'mobile-nav-drawer';
    drawer.className = 'mobile-nav-drawer';
    drawer.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <a class="logo" href="index.html">
          <span class="logo-mark"></span>
          ALPHA TRIBE
        </a>
        <button class="action-btn" onclick="closeMobileNav()" style="font-size:22px;">✕</button>
      </div>

      <ul class="mobile-nav-links">
        <li><a href="index.html" onclick="closeMobileNav()">Home</a></li>
        <li><a href="collections.html" onclick="closeMobileNav()">All Collections</a></li>
        <li><a href="collections.html?cat=casual-shirts" onclick="closeMobileNav()">Casual Shirts</a></li>
        <li><a href="collections.html?cat=denim-jeans" onclick="closeMobileNav()">Denim Jeans</a></li>
        <li><a href="collections.html?cat=polo-t-shirts" onclick="closeMobileNav()">Polo T-Shirts</a></li>
        <li><a href="collections.html?cat=formal-shirts" onclick="closeMobileNav()">Formal Shirts</a></li>
        <li><a href="collections.html?cat=round-neck-t-shirts" onclick="closeMobileNav()">Round Neck Tees</a></li>
        <li><a href="looks.html" onclick="closeMobileNav()">Style Guide</a></li>
        <li><a href="about.html" onclick="closeMobileNav()">Our Story</a></li>
        <li><a href="contact.html" onclick="closeMobileNav()">Contact & Studios</a></li>
      </ul>

      <div style="margin-top:auto; padding-top:28px; border-top:1px solid var(--line);">
        <p style="font-size:13px; color:var(--muted); margin-bottom:12px;">Pan-India Customer Concierge</p>
        <a href="tel:+918000456789" style="color:var(--gold); font-weight:600; font-size:15px; display:block; margin-bottom:8px;">+91 (800) 045-6789</a>
        <span style="font-size:12px; color:var(--muted)">Mon - Sat: 10:00 AM - 8:00 PM IST</span>
      </div>
    `;

    document.body.appendChild(backdrop);
    document.body.appendChild(drawer);
  }

  // Toggle button hook
  document.querySelectorAll('.menu-toggle').forEach(btn => {
    btn.onclick = openMobileNav;
  });
}

function openMobileNav() {
  document.getElementById('mobile-nav-backdrop')?.classList.add('active');
  document.getElementById('mobile-nav-drawer')?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMobileNav() {
  document.getElementById('mobile-nav-backdrop')?.classList.remove('active');
  document.getElementById('mobile-nav-drawer')?.classList.remove('active');
  document.body.style.overflow = '';
}

// --- Live Search Modal ---
function setupSearchModal() {
  if (document.getElementById('search-modal')) return;

  const modal = document.createElement('div');
  modal.id = 'search-modal';
  modal.className = 'search-modal';
  modal.innerHTML = `
    <div class="search-input-wrap">
      <input type="text" id="global-search-input" placeholder="Search shirts, denim, polos..." autocomplete="off">
      <button class="action-btn" onclick="closeSearchModal()" style="position:absolute; right:0; font-size:24px;">✕</button>
    </div>
    <div class="search-results" id="global-search-results">
      <div style="text-align:center; padding:20px; color:var(--muted); font-size:14px;">
        Type to search across our luxury collections...
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const input = document.getElementById('global-search-input');
  const resultsContainer = document.getElementById('global-search-results');

  input.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    if (!query) {
      resultsContainer.innerHTML = `
        <div style="text-align:center; padding:20px; color:var(--muted); font-size:14px;">
          Type to search across our luxury collections...
        </div>
      `;
      return;
    }

    const matches = typeof searchProducts === 'function' ? searchProducts(query) : [];
    if (matches.length === 0) {
      resultsContainer.innerHTML = `
        <div style="text-align:center; padding:24px; color:var(--muted);">
          No garments found matching "<strong>${query}</strong>".
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = matches.map(p => `
      <a class="search-result-item" href="product.html?id=${p.id}" onclick="closeSearchModal()">
        <img src="${p.images[0]}" alt="${p.name}">
        <div style="flex-grow:1;">
          <div style="font-size:11.5px; color:var(--gold); text-transform:uppercase;">${p.category}</div>
          <div style="font-family:var(--serif); font-size:18px; color:var(--text);">${p.name}</div>
          <div style="font-size:12.5px; color:var(--muted);">${p.tagline}</div>
        </div>
        <div class="price">${formatINR(p.price)}</div>
      </a>
    `).join('');
  });

  // Global triggers
  document.querySelectorAll('.search-trigger-btn').forEach(btn => {
    btn.onclick = openSearchModal;
  });

  // Keyboard shortcut
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSearchModal();
      closeMobileNav();
      if (typeof closeCartDrawer === 'function') closeCartDrawer();
      if (typeof closeQuickView === 'function') closeQuickView();
    }
  });
}

function openSearchModal() {
  const modal = document.getElementById('search-modal');
  if (modal) {
    modal.classList.add('active');
    setTimeout(() => {
      document.getElementById('global-search-input')?.focus();
    }, 100);
  }
}

function closeSearchModal() {
  document.getElementById('search-modal')?.classList.remove('active');
}

// --- Newsletter Forms ---
function setupNewsletterForms() {
  document.querySelectorAll('form.newsletter-form, form#f').forEach(form => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const input = this.querySelector('input[type="email"]');
      const email = input ? input.value.trim() : '';

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        if (typeof showToast === 'function') {
          showToast('Please enter a valid email address.');
        } else {
          alert('Please enter a valid email address.');
        }
        return;
      }

      this.reset();
      if (typeof showToast === 'function') {
        showToast('✦ Welcome to the Tribe! Use code <strong>FIRSTALPHA</strong> for 15% off.');
      }
    });
  });
}

// --- Highlight Active Nav ---
function highlightActiveNav() {
  const rawPath = window.location.pathname.split('/').pop() || 'index';
  const cleanPath = rawPath.replace(/\.html$/, '');

  document.querySelectorAll('.nav-links a, .mobile-nav-links a').forEach(link => {
    const href = link.getAttribute('href') || '';
    const cleanHref = href.split('?')[0].split('/').pop().replace(/\.html$/, '');

    if (
      cleanHref === cleanPath ||
      (cleanPath === '' && (cleanHref === 'index' || cleanHref === 'alpha-tribe')) ||
      (cleanPath === 'index' && cleanHref === 'alpha-tribe') ||
      (cleanPath === 'alpha-tribe' && cleanHref === 'index')
    ) {
      link.classList.add('active');
    }
  });
}

// ==========================================================================
// ALPHA TRIBE - CART, WISHLIST & GLOBAL UI ENGINE
// ==========================================================================

const CART_STORAGE_KEY = 'alphatribe_cart_v1';
const WISHLIST_STORAGE_KEY = 'alphatribe_wishlist_v1';
const PROMO_STORAGE_KEY = 'alphatribe_promo_v1';

const PROMO_CODES = {
  'FIRSTALPHA': { type: 'percent', value: 15, label: '15% Off First Order' },
  'ALPHA10': { type: 'percent', value: 10, label: '10% Off Clan Discount' },
  'FREESHIP': { type: 'shipping', value: 150, label: 'Free Priority Shipping' },
  'TRIBE500': { type: 'flat', value: 500, label: '₹500 Off (Min ₹2500)' }
};

// --- Storage Handlers ---
function getCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    updateCartBadges();
    renderCartDrawer();
  } catch (e) {
    console.error('Failed to save cart', e);
  }
}

function getWishlist() {
  try {
    const raw = localStorage.getItem(WISHLIST_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveWishlist(list) {
  try {
    localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(list));
    updateWishlistBadges();
  } catch (e) {
    console.error('Failed to save wishlist', e);
  }
}

function getActivePromo() {
  try {
    const code = localStorage.getItem(PROMO_STORAGE_KEY);
    return code && PROMO_CODES[code] ? { code, ...PROMO_CODES[code] } : null;
  } catch (e) {
    return null;
  }
}

function savePromo(code) {
  if (code && PROMO_CODES[code]) {
    localStorage.setItem(PROMO_STORAGE_KEY, code);
  } else {
    localStorage.removeItem(PROMO_STORAGE_KEY);
  }
  renderCartDrawer();
}

// --- Cart Actions ---
function addToCart(productId, size, quantity = 1, color = null) {
  const product = getProductById(productId);
  if (!product) return;

  const selectedSize = size || (product.sizes && product.sizes[0]) || 'M';
  const selectedColor = color || (product.colors && product.colors[0]?.name) || '';

  const cart = getCart();
  const existingIdx = cart.findIndex(item => item.productId === productId && item.size === selectedSize);

  if (existingIdx > -1) {
    cart[existingIdx].quantity += quantity;
  } else {
    cart.push({
      productId,
      size: selectedSize,
      color: selectedColor,
      quantity
    });
  }

  saveCart(cart);
  showToast(`Added <strong>${product.name}</strong> (${selectedSize}) to Bag`);
  openCartDrawer();
}

function updateQuantity(productId, size, delta) {
  let cart = getCart();
  const item = cart.find(i => i.productId === productId && i.size === size);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      cart = cart.filter(i => !(i.productId === productId && i.size === size));
      showToast('Item removed from Bag');
    }
    saveCart(cart);
  }
}

function removeFromCart(productId, size) {
  let cart = getCart();
  cart = cart.filter(i => !(i.productId === productId && i.size === size));
  saveCart(cart);
  showToast('Item removed from Bag');
}

function clearCart() {
  saveCart([]);
}

// --- Totals Calculation ---
function getCartTotals() {
  const cart = getCart();
  let subtotal = 0;
  let itemsCount = 0;

  cart.forEach(item => {
    const p = getProductById(item.productId);
    if (p) {
      subtotal += p.price * item.quantity;
      itemsCount += item.quantity;
    }
  });

  const activePromo = getActivePromo();
  let discount = 0;

  if (activePromo) {
    if (activePromo.type === 'percent') {
      discount = Math.round((subtotal * activePromo.value) / 100);
    } else if (activePromo.type === 'flat' && subtotal >= 2500) {
      discount = activePromo.value;
    }
  }

  // Free shipping over 1999 or with FREESHIP code
  let shipping = (subtotal >= 1999 || (activePromo && activePromo.type === 'shipping') || itemsCount === 0) ? 0 : 150;
  let grandTotal = Math.max(0, subtotal - discount + shipping);

  return {
    itemsCount,
    subtotal,
    discount,
    shipping,
    grandTotal,
    activePromo,
    freeShippingThreshold: 1999,
    amountNeededForFreeShip: Math.max(0, 1999 - subtotal)
  };
}

// --- Wishlist Actions ---
function toggleWishlist(productId, btnElement) {
  let wishlist = getWishlist();
  const index = wishlist.indexOf(productId);
  const product = getProductById(productId);

  if (index > -1) {
    wishlist.splice(index, 1);
    showToast(`Removed from Wishlist`);
    if (btnElement) btnElement.classList.remove('active');
  } else {
    wishlist.push(productId);
    showToast(`Saved <strong>${product?.name || 'item'}</strong> to Wishlist`);
    if (btnElement) btnElement.classList.add('active');
  }

  saveWishlist(wishlist);
  updateWishlistButtons();
}

function updateWishlistButtons() {
  const wishlist = getWishlist();
  document.querySelectorAll('.wishlist-btn[data-product-id]').forEach(btn => {
    const pid = btn.getAttribute('data-product-id');
    if (wishlist.includes(pid)) {
      btn.classList.add('active');
      btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
    } else {
      btn.classList.remove('active');
      btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`;
    }
  });
}

function updateCartBadges() {
  const { itemsCount } = getCartTotals();
  document.querySelectorAll('.cart-badge-count').forEach(badge => {
    badge.textContent = itemsCount;
    badge.style.display = itemsCount > 0 ? 'flex' : 'none';
  });
}

function updateWishlistBadges() {
  const list = getWishlist();
  document.querySelectorAll('.wishlist-badge-count').forEach(badge => {
    badge.textContent = list.length;
    badge.style.display = list.length > 0 ? 'flex' : 'none';
  });
}

// --- Toast Notifications ---
function showToast(html, duration = 3500) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span style="color:var(--gold)">✦</span>
    <div>${html}</div>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// --- Cart Drawer Injection & UI ---
function ensureCartDrawerElements() {
  if (document.getElementById('cart-drawer')) return;

  const backdrop = document.createElement('div');
  backdrop.id = 'cart-drawer-backdrop';
  backdrop.className = 'cart-drawer-backdrop';
  backdrop.onclick = closeCartDrawer;

  const drawer = document.createElement('div');
  drawer.id = 'cart-drawer';
  drawer.className = 'cart-drawer';
  drawer.innerHTML = `
    <div class="cart-drawer-head">
      <h3>Your Bag (<span id="drawer-items-count">0</span>)</h3>
      <button class="action-btn" onclick="closeCartDrawer()" aria-label="Close Bag" style="font-size:22px;">✕</button>
    </div>
    <div class="shipping-bar-box" id="drawer-shipping-box">
      <div id="drawer-shipping-text">Add items to qualify for free delivery</div>
      <div class="shipping-bar-progress">
        <div class="shipping-bar-fill" id="drawer-shipping-fill"></div>
      </div>
    </div>
    <div class="cart-drawer-items" id="drawer-cart-items">
      <!-- Items dynamically injected -->
    </div>
    <div class="cart-drawer-foot" id="drawer-cart-foot">
      <!-- Dynamic Totals & Checkout -->
    </div>
  `;

  document.body.appendChild(backdrop);
  document.body.appendChild(drawer);
}

function renderCartDrawer() {
  ensureCartDrawerElements();
  const cart = getCart();
  const totals = getCartTotals();

  const countElem = document.getElementById('drawer-items-count');
  const itemsContainer = document.getElementById('drawer-cart-items');
  const footContainer = document.getElementById('drawer-cart-foot');
  const shipText = document.getElementById('drawer-shipping-text');
  const shipFill = document.getElementById('drawer-shipping-fill');

  if (countElem) countElem.textContent = totals.itemsCount;

  // Free shipping progress bar
  if (shipText && shipFill) {
    if (totals.subtotal >= totals.freeShippingThreshold) {
      shipText.innerHTML = `🎉 <strong>Complimentary Pan-India Shipping Unlocked!</strong>`;
      shipFill.style.width = '100%';
    } else {
      const pct = Math.min(100, Math.round((totals.subtotal / totals.freeShippingThreshold) * 100));
      shipText.innerHTML = `Add <strong>${formatINR(totals.amountNeededForFreeShip)}</strong> more to get <strong>Free Pan-India Delivery</strong>`;
      shipFill.style.width = `${pct}%`;
    }
  }

  // Items list
  if (itemsContainer) {
    if (cart.length === 0) {
      itemsContainer.innerHTML = `
        <div style="text-align:center; padding: 60px 0; color:var(--muted)">
          <div style="font-size:48px; margin-bottom:12px; color:var(--line-strong)">🛍️</div>
          <h4 style="font-family:var(--serif); font-size:22px; color:var(--text); margin-bottom:8px">Your Bag is Empty</h4>
          <p style="font-size:13.5px; margin-bottom:20px">Explore the new collection and find your edge.</p>
          <a href="collections.html" class="btn btn-sm" onclick="closeCartDrawer()">Shop Collection</a>
        </div>
      `;
    } else {
      itemsContainer.innerHTML = cart.map(item => {
        const product = getProductById(item.productId);
        if (!product) return '';
        return `
          <div class="cart-item">
            <img class="cart-item-img" src="${product.images[0]}" alt="${product.name}" onerror="this.src='https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80'">
            <div class="cart-item-details">
              <div class="cart-item-title"><a href="product.html?id=${product.id}">${product.name}</a></div>
              <div class="cart-item-meta">Size: <strong>${item.size}</strong> ${item.color ? `· ${item.color}` : ''}</div>
              <div class="cart-item-bottom">
                <div class="qty-control">
                  <button class="qty-btn" onclick="updateQuantity('${item.productId}', '${item.size}', -1)">−</button>
                  <span class="qty-val">${item.quantity}</span>
                  <button class="qty-btn" onclick="updateQuantity('${item.productId}', '${item.size}', 1)">+</button>
                </div>
                <div class="price">${formatINR(product.price * item.quantity)}</div>
                <button class="cart-item-remove" onclick="removeFromCart('${item.productId}', '${item.size}')">Remove</button>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  // Footer / Checkout
  if (footContainer) {
    if (cart.length === 0) {
      footContainer.style.display = 'none';
    } else {
      footContainer.style.display = 'block';
      footContainer.innerHTML = `
        <div class="cart-row">
          <span>Subtotal</span>
          <span>${formatINR(totals.subtotal)}</span>
        </div>
        ${totals.discount > 0 ? `
        <div class="cart-row" style="color:var(--success)">
          <span>Discount (${totals.activePromo.code})</span>
          <span>-${formatINR(totals.discount)}</span>
        </div>
        ` : ''}
        <div class="cart-row">
          <span>Shipping</span>
          <span>${totals.shipping === 0 ? '<strong style="color:var(--gold)">FREE</strong>' : formatINR(totals.shipping)}</span>
        </div>
        <div class="cart-row total">
          <span>Estimated Total</span>
          <span class="price">${formatINR(totals.grandTotal)}</span>
        </div>
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; margin-top:16px;">
          <a href="cart.html" class="btn ghost btn-sm" onclick="closeCartDrawer()">View Bag</a>
          <a href="checkout.html" class="btn btn-sm">Checkout</a>
        </div>
      `;
    }
  }
}

function openCartDrawer() {
  ensureCartDrawerElements();
  renderCartDrawer();
  document.getElementById('cart-drawer-backdrop')?.classList.add('active');
  document.getElementById('cart-drawer')?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  document.getElementById('cart-drawer-backdrop')?.classList.remove('active');
  document.getElementById('cart-drawer')?.classList.remove('active');
  document.body.style.overflow = '';
}

// --- Quick View Modal ---
function ensureQuickViewModal() {
  if (document.getElementById('quick-view-overlay')) return;

  const overlay = document.createElement('div');
  overlay.id = 'quick-view-overlay';
  overlay.className = 'modal-overlay';
  overlay.onclick = (e) => {
    if (e.target === overlay) closeQuickView();
  };
  overlay.innerHTML = `
    <div class="modal-card" id="quick-view-card" style="padding: 28px;">
      <button class="modal-close" onclick="closeQuickView()">✕</button>
      <div id="quick-view-content"></div>
    </div>
  `;
  document.body.appendChild(overlay);
}

function openQuickView(productId) {
  ensureQuickViewModal();
  const product = getProductById(productId);
  if (!product) return;

  const content = document.getElementById('quick-view-content');
  content.innerHTML = `
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:28px; align-items:start;">
      <div>
        <img src="${product.images[0]}" alt="${product.name}" style="width:100%; aspect-ratio:3/4; object-fit:cover; border-radius:var(--radius-sm); border:1px solid var(--line);">
      </div>
      <div>
        <span class="tag">${product.category}</span>
        <h2 style="font-size:28px; margin:4px 0 10px;">${product.name}</h2>
        <div class="price-box" style="margin-bottom:14px;">
          <span class="price" style="font-size:24px;">${formatINR(product.price)}</span>
          <span class="price-orig" style="font-size:16px;">${formatINR(product.originalPrice)}</span>
          <span class="price-discount">Save ${Math.round((1 - product.price/product.originalPrice)*100)}%</span>
        </div>
        <p style="color:var(--muted); font-size:14px; margin-bottom:18px;">${product.description}</p>
        
        <div style="margin-bottom:16px;">
          <div style="font-size:13px; font-weight:600; color:var(--text); text-transform:uppercase; letter-spacing:0.04em; margin-bottom:8px;">
            Select Size <span id="quick-size-label" style="color:var(--gold); font-weight:400; text-transform:none;">(Select one)</span>
          </div>
          <div class="size-selector" id="quick-size-selector">
            ${product.sizes.map((s, idx) => `
              <div class="size-pill ${idx === 0 ? 'active' : ''}" onclick="selectQuickSize('${s}', this)">${s}</div>
            `).join('')}
          </div>
        </div>

        <div style="display:flex; gap:12px; margin-top:24px;">
          <button class="btn btn-full" id="quick-add-btn" onclick="addQuickViewToCart('${product.id}')">
            Add to Bag
          </button>
          <a href="product.html?id=${product.id}" class="btn ghost btn-full">
            Full Details
          </a>
        </div>
      </div>
    </div>
  `;

  document.getElementById('quick-view-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function selectQuickSize(size, el) {
  document.querySelectorAll('#quick-size-selector .size-pill').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  const lbl = document.getElementById('quick-size-label');
  if (lbl) lbl.textContent = `· Selected: ${size}`;
}

function addQuickViewToCart(productId) {
  const activeSizePill = document.querySelector('#quick-size-selector .size-pill.active');
  const size = activeSizePill ? activeSizePill.textContent.trim() : 'M';
  closeQuickView();
  addToCart(productId, size, 1);
}

function closeQuickView() {
  document.getElementById('quick-view-overlay')?.classList.remove('active');
  document.body.style.overflow = '';
}

// Initializer on window load
document.addEventListener('DOMContentLoaded', () => {
  ensureCartDrawerElements();
  ensureQuickViewModal();
  updateCartBadges();
  updateWishlistBadges();
  updateWishlistButtons();
});

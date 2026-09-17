/* ════════════════════════════════════════════
   Blinkit Clone – Main JavaScript
   ════════════════════════════════════════════ */

'use strict';

/* ── DATA ── */
const CATEGORIES = [
  { name: 'Fruits & Vegetables', emoji: '🥦', bg: '#e8f5e9', icon: '#4caf50' },
  { name: 'Dairy & Bakery',      emoji: '🥛', bg: '#fff8e1', icon: '#ffc107' },
  { name: 'Snacks & Munchies',   emoji: '🍿', bg: '#fce4ec', icon: '#e91e63' },
  { name: 'Beverages',           emoji: '🧃', bg: '#e3f2fd', icon: '#2196f3' },
  { name: 'Breakfast & Cereals', emoji: '🥣', bg: '#fff3e0', icon: '#ff9800' },
  { name: 'Meat & Seafood',      emoji: '🥩', bg: '#ffebee', icon: '#f44336' },
  { name: 'Personal Care',       emoji: '🧴', bg: '#e8eaf6', icon: '#3f51b5' },
  { name: 'Household Items',     emoji: '🧹', bg: '#e0f2f1', icon: '#009688' },
  { name: 'Baby Care',           emoji: '👶', bg: '#fce4ec', icon: '#e91e63' },
  { name: 'Pet Care',            emoji: '🐾', bg: '#efebe9', icon: '#795548' },
  { name: 'Frozen Foods',        emoji: '🧊', bg: '#e3f2fd', icon: '#1565c0' },
  { name: 'Health & Wellness',   emoji: '💊', bg: '#e8f5e9', icon: '#388e3c' },
];

const PRODUCTS = [
  // Fruits & Vegetables
  { id: 1,  name: 'Fresh Tomatoes',        category: 'Fruits & Vegetables', price: 29,  mrp: 40,  qty: '500g',    img: 'https://cdn-icons-png.flaticon.com/512/2153/2153786.png',  badge: 'SALE',    badgeType: '' },
  { id: 2,  name: 'Organic Spinach',       category: 'Fruits & Vegetables', price: 35,  mrp: 50,  qty: '250g',    img: 'https://cdn-icons-png.flaticon.com/512/765/765614.png',     badge: 'ORGANIC', badgeType: 'badge-new' },
  { id: 3,  name: 'Banana Bunch',          category: 'Fruits & Vegetables', price: 49,  mrp: 60,  qty: '6 pcs',   img: 'https://cdn-icons-png.flaticon.com/512/4253/4253406.png',   badge: '',        badgeType: '' },
  { id: 4,  name: 'Red Apple',             category: 'Fruits & Vegetables', price: 149, mrp: 199, qty: '4 pcs',   img: 'https://cdn-icons-png.flaticon.com/512/415/415733.png',     badge: 'FRESH',   badgeType: 'badge-new' },
  { id: 5,  name: 'Potato',               category: 'Fruits & Vegetables', price: 39,  mrp: 55,  qty: '1kg',     img: 'https://cdn-icons-png.flaticon.com/512/2965/2965567.png',   badge: '',        badgeType: '' },
  { id: 6,  name: 'Watermelon',           category: 'Fruits & Vegetables', price: 89,  mrp: 120, qty: 'Per piece',img: 'https://cdn-icons-png.flaticon.com/512/590/590685.png',    badge: 'SUMMER',  badgeType: 'badge-best' },

  // Dairy & Bakery
  { id: 7,  name: 'Amul Full Cream Milk', category: 'Dairy & Bakery',      price: 28,  mrp: 30,  qty: '500ml',   img: 'https://cdn-icons-png.flaticon.com/512/3724/3724788.png',   badge: '',        badgeType: '' },
  { id: 8,  name: 'Britannia Bread',      category: 'Dairy & Bakery',      price: 45,  mrp: 50,  qty: '400g',    img: 'https://cdn-icons-png.flaticon.com/512/3724/3724769.png',   badge: 'FRESH',   badgeType: 'badge-new' },
  { id: 9,  name: 'Paneer',               category: 'Dairy & Bakery',      price: 89,  mrp: 110, qty: '200g',    img: 'https://cdn-icons-png.flaticon.com/512/6978/6978255.png',   badge: '',        badgeType: '' },
  { id: 10, name: 'Curd – Nestle',        category: 'Dairy & Bakery',      price: 52,  mrp: 60,  qty: '400g',    img: 'https://cdn-icons-png.flaticon.com/512/3724/3724788.png',   badge: 'HOT',     badgeType: 'badge-best' },
  { id: 11, name: 'Butter – Amul',        category: 'Dairy & Bakery',      price: 57,  mrp: 60,  qty: '100g',    img: 'https://cdn-icons-png.flaticon.com/512/3724/3724754.png',   badge: '',        badgeType: '' },

  // Snacks & Munchies
  { id: 12, name: 'Lay\'s Classic Salted', category: 'Snacks & Munchies',  price: 20,  mrp: 20,  qty: '52g',     img: 'https://cdn-icons-png.flaticon.com/512/2917/2917990.png',   badge: 'FAV',     badgeType: 'badge-best' },
  { id: 13, name: 'Kurkure Masala',        category: 'Snacks & Munchies',  price: 20,  mrp: 20,  qty: '90g',     img: 'https://cdn-icons-png.flaticon.com/512/2917/2917990.png',   badge: '',        badgeType: '' },
  { id: 14, name: 'Haldiram Namkeen',      category: 'Snacks & Munchies',  price: 90,  mrp: 100, qty: '400g',    img: 'https://cdn-icons-png.flaticon.com/512/2917/2917990.png',   badge: '10% OFF', badgeType: '' },
  { id: 15, name: 'Dark Fantasy Biscuits', category: 'Snacks & Munchies',  price: 35,  mrp: 40,  qty: '75g',     img: 'https://cdn-icons-png.flaticon.com/512/3429/3429362.png',   badge: '',        badgeType: '' },
  { id: 16, name: 'Popcorn – Movie Time',  category: 'Snacks & Munchies',  price: 50,  mrp: 60,  qty: '100g',    img: 'https://cdn-icons-png.flaticon.com/512/4213/4213958.png',   badge: '',        badgeType: '' },

  // Beverages
  { id: 17, name: 'Coca-Cola 750ml',       category: 'Beverages',           price: 45,  mrp: 50,  qty: '750ml',   img: 'https://cdn-icons-png.flaticon.com/512/3081/3081559.png',   badge: '',        badgeType: '' },
  { id: 18, name: 'Tropicana Orange Juice',category: 'Beverages',           price: 99,  mrp: 120, qty: '1L',      img: 'https://cdn-icons-png.flaticon.com/512/3081/3081559.png',   badge: 'FRESH',   badgeType: 'badge-new' },
  { id: 19, name: 'Red Bull Energy Drink', category: 'Beverages',           price: 115, mrp: 125, qty: '250ml',   img: 'https://cdn-icons-png.flaticon.com/512/3081/3081559.png',   badge: '',        badgeType: '' },
  { id: 20, name: 'Green Tea – Tetley',    category: 'Beverages',           price: 149, mrp: 180, qty: '25 bags', img: 'https://cdn-icons-png.flaticon.com/512/2917/2917513.png',   badge: 'HEALTHY', badgeType: 'badge-new' },

  // Breakfast & Cereals
  { id: 21, name: 'Kellogg\'s Corn Flakes',category: 'Breakfast & Cereals', price: 180, mrp: 220, qty: '250g',    img: 'https://cdn-icons-png.flaticon.com/512/3724/3724769.png',   badge: '',        badgeType: '' },
  { id: 22, name: 'Quaker Oats',           category: 'Breakfast & Cereals', price: 119, mrp: 150, qty: '500g',    img: 'https://cdn-icons-png.flaticon.com/512/3724/3724769.png',   badge: 'HEALTHY', badgeType: 'badge-new' },
  { id: 23, name: 'Maggi Noodles',         category: 'Breakfast & Cereals', price: 48,  mrp: 55,  qty: '4 pack',  img: 'https://cdn-icons-png.flaticon.com/512/3724/3724769.png',   badge: 'FAV',     badgeType: 'badge-best' },

  // Household Items
  { id: 24, name: 'Surf Excel Detergent',  category: 'Household Items',     price: 199, mrp: 240, qty: '1kg',     img: 'https://cdn-icons-png.flaticon.com/512/4108/4108737.png',   badge: '17% OFF', badgeType: '' },
  { id: 25, name: 'Harpic Toilet Cleaner', category: 'Household Items',     price: 89,  mrp: 100, qty: '500ml',   img: 'https://cdn-icons-png.flaticon.com/512/4108/4108737.png',   badge: '',        badgeType: '' },
  { id: 26, name: 'Vim Bar – 3 pack',      category: 'Household Items',     price: 36,  mrp: 45,  qty: '3×100g',  img: 'https://cdn-icons-png.flaticon.com/512/4108/4108737.png',   badge: 'COMBO',   badgeType: 'badge-best' },

  // Personal Care
  { id: 27, name: 'Dove Soap 3-pack',      category: 'Personal Care',       price: 115, mrp: 135, qty: '3×75g',   img: 'https://cdn-icons-png.flaticon.com/512/2553/2553651.png',   badge: '',        badgeType: '' },
  { id: 28, name: 'Colgate Strong Teeth',  category: 'Personal Care',       price: 99,  mrp: 110, qty: '200g',    img: 'https://cdn-icons-png.flaticon.com/512/2553/2553651.png',   badge: '',        badgeType: '' },
  { id: 29, name: 'Head & Shoulders',      category: 'Personal Care',       price: 189, mrp: 220, qty: '340ml',   img: 'https://cdn-icons-png.flaticon.com/512/2553/2553651.png',   badge: '14% OFF', badgeType: '' },

  // Health & Wellness
  { id: 30, name: 'Ensure Nutrition Drink',category: 'Health & Wellness',   price: 399, mrp: 450, qty: '400g',    img: 'https://cdn-icons-png.flaticon.com/512/2553/2553651.png',   badge: '',        badgeType: '' },
  { id: 31, name: 'Centrum Multivitamin',  category: 'Health & Wellness',   price: 499, mrp: 599, qty: '30 tabs', img: 'https://cdn-icons-png.flaticon.com/512/2553/2553651.png',   badge: '17% OFF', badgeType: '' },
];

/* ── STATE ── */
let cart          = {};       // { productId: quantity }
let activeCategory = null;
let searchQuery    = '';
let sortOrder      = 'default';
let heroSlide      = 0;
let heroInterval;

/* ══════════════════════════ INIT ══════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  renderFilterPills();
  renderProducts();
  startHeroSlider();
  bindEvents();
});

/* ══════════════════════════ CATEGORIES ══════════════════════════ */
function renderCategories() {
  const grid = document.getElementById('categoriesGrid');
  grid.innerHTML = CATEGORIES.map(cat => `
    <div class="category-card" onclick="filterCategory('${escHtml(cat.name)}')" data-cat="${escHtml(cat.name)}">
      <div class="category-icon" style="background:${cat.bg}">
        <span style="font-size:1.8rem">${cat.emoji}</span>
      </div>
      <span>${escHtml(cat.name)}</span>
    </div>
  `).join('');
}

function renderFilterPills() {
  const wrap = document.getElementById('filterPills');
  wrap.innerHTML = CATEGORIES.map(cat => `
    <span class="pill" data-cat="${escHtml(cat.name)}" onclick="filterCategory('${escHtml(cat.name)}')">${escHtml(cat.name)}</span>
  `).join('');
}

/* ══════════════════════════ PRODUCTS ══════════════════════════ */
function getFilteredProducts() {
  let list = [...PRODUCTS];

  if (activeCategory) {
    list = list.filter(p => p.category === activeCategory);
  }

  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    list = list.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }

  switch (sortOrder) {
    case 'price-asc':  list.sort((a,b) => a.price - b.price); break;
    case 'price-desc': list.sort((a,b) => b.price - a.price); break;
    case 'discount':   list.sort((a,b) => discountPct(b) - discountPct(a)); break;
    case 'name':       list.sort((a,b) => a.name.localeCompare(b.name)); break;
  }

  return list;
}

function discountPct(p) { return Math.round((p.mrp - p.price) / p.mrp * 100); }

function renderProducts() {
  const grid      = document.getElementById('productsGrid');
  const noResults = document.getElementById('noResults');
  const countEl   = document.getElementById('productCount');
  const products  = getFilteredProducts();

  countEl.textContent = `${products.length} product${products.length !== 1 ? 's' : ''}`;

  if (!products.length) {
    grid.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }
  noResults.style.display = 'none';

  grid.innerHTML = products.map(p => {
    const discount = discountPct(p);
    const inCart   = cart[p.id] || 0;

    return `
      <div class="product-card" data-id="${p.id}">
        ${p.badge ? `<span class="product-badge ${p.badgeType}">${escHtml(p.badge)}</span>` : ''}
        <div class="product-img-wrap">
          <img src="${p.img}" alt="${escHtml(p.name)}" loading="lazy" />
        </div>
        <div class="product-info">
          <div class="product-time"><i class="fa-solid fa-bolt"></i> 10 mins</div>
          <div class="product-name">${escHtml(p.name)}</div>
          <div class="product-qty">${escHtml(p.qty)}</div>
          <div class="product-price-row">
            <span class="product-price">₹${p.price}</span>
            ${p.mrp > p.price ? `<span class="product-mrp">₹${p.mrp}</span>` : ''}
            ${discount > 0 ? `<span class="product-discount">${discount}% off</span>` : ''}
          </div>
          ${inCart === 0
            ? `<button class="btn-add" onclick="addToCart(${p.id})">+ Add</button>`
            : `<div class="qty-controls">
                <button class="qty-btn" onclick="decreaseQty(${p.id})">−</button>
                <span class="qty-num">${inCart}</span>
                <button class="qty-btn" onclick="increaseQty(${p.id})">+</button>
               </div>`
          }
        </div>
      </div>
    `;
  }).join('');
}

/* ══════════════════════════ CART ══════════════════════════ */
function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  cart[id] = (cart[id] || 0) + 1;
  updateCart();
  renderProducts();
  showToast(`${product.name} added to cart`);
}

function increaseQty(id) {
  if (!cart[id]) return;
  cart[id]++;
  updateCart();
  renderProducts();
}

function decreaseQty(id) {
  if (!cart[id]) return;
  cart[id]--;
  if (cart[id] <= 0) delete cart[id];
  updateCart();
  renderProducts();
}

function removeFromCart(id) {
  delete cart[id];
  updateCart();
  renderProducts();
  renderCartItems();
}

function updateCart() {
  const totalQty  = Object.values(cart).reduce((s,q) => s+q, 0);
  const totalPrice = Object.entries(cart).reduce((s,[id,q]) => {
    const p = PRODUCTS.find(x => x.id === parseInt(id));
    return p ? s + p.price * q : s;
  }, 0);

  // Header cart button
  document.getElementById('cartCount').textContent  = totalQty;
  document.getElementById('cartTotal').textContent  = `₹${totalPrice}`;

  renderCartItems();
  updateCartFooter(totalQty, totalPrice);
}

function renderCartItems() {
  const container  = document.getElementById('cartItems');
  const emptyEl    = document.getElementById('cartEmpty');
  const count1     = document.getElementById('cartItemCount');
  const count2     = document.getElementById('cartItemCount2');
  const totalQty   = Object.values(cart).reduce((s,q) => s+q, 0);

  count1.textContent = `${totalQty} item${totalQty !== 1 ? 's' : ''}`;
  count2.textContent = totalQty;

  const entries = Object.entries(cart).filter(([,q]) => q > 0);
  if (!entries.length) {
    container.innerHTML = '';
    emptyEl.style.display = 'flex';
    return;
  }
  emptyEl.style.display = 'none';

  container.innerHTML = entries.map(([id, qty]) => {
    const p = PRODUCTS.find(x => x.id === parseInt(id));
    if (!p) return '';
    return `
      <div class="cart-item">
        <img src="${p.img}" alt="${escHtml(p.name)}" />
        <div class="cart-item-info">
          <div class="cart-item-name">${escHtml(p.name)}</div>
          <div class="cart-item-qty">${escHtml(p.qty)}</div>
        </div>
        <div class="cart-item-controls">
          <button class="ci-btn" onclick="decreaseQty(${p.id}); renderCartItems();">−</button>
          <span class="ci-num">${qty}</span>
          <button class="ci-btn" onclick="increaseQty(${p.id}); renderCartItems();">+</button>
        </div>
        <span class="cart-item-price">₹${p.price * qty}</span>
      </div>
    `;
  }).join('');
}

function updateCartFooter(qty, total) {
  const footer      = document.getElementById('cartFooter');
  const delivery    = document.getElementById('deliveryFee');
  const itemTotal   = document.getElementById('billItemTotal');
  const grandTotal  = document.getElementById('billGrandTotal');
  const checkoutBtn = document.getElementById('checkoutTotal');

  if (!qty) { footer.style.display = 'none'; return; }
  footer.style.display = 'block';

  const deliveryFee = total >= 199 ? 0 : 30;
  const platform    = 5;
  const grand       = total + deliveryFee + platform;

  delivery.textContent    = deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`;
  delivery.className      = deliveryFee === 0 ? 'free' : '';
  itemTotal.textContent   = `₹${total}`;
  grandTotal.textContent  = `₹${grand}`;
  checkoutBtn.textContent = `₹${grand}`;
}

function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
  document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
}

function checkout() {
  const qty = Object.values(cart).reduce((s,q) => s+q, 0);
  if (!qty) { showToast('Your cart is empty!'); return; }
  showToast('🎉 Order placed! Delivering in 10 minutes.');
  cart = {};
  updateCart();
  renderProducts();
  toggleCart();
}

/* ══════════════════════════ FILTER / SEARCH ══════════════════════════ */
function filterCategory(name) {
  activeCategory = name;
  document.getElementById('productsHeading').textContent = name;
  document.getElementById('clearFilter').style.display = 'inline-flex';

  // Highlight category cards
  document.querySelectorAll('.category-card').forEach(el => {
    el.classList.toggle('active', el.dataset.cat === name);
  });
  document.querySelectorAll('.pill').forEach(el => {
    el.classList.toggle('active', el.dataset.cat === name);
  });

  renderProducts();
  scrollToProducts();
}

function clearCategoryFilter() {
  activeCategory = null;
  document.getElementById('productsHeading').textContent = 'All Products';
  document.getElementById('clearFilter').style.display = 'none';
  document.querySelectorAll('.category-card, .pill').forEach(el => el.classList.remove('active'));
  renderProducts();
}

function scrollToProducts() {
  document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function clearSearch() {
  searchQuery = '';
  document.getElementById('searchInput').value = '';
  document.getElementById('searchClear').classList.remove('visible');
  renderProducts();
}

/* ══════════════════════════ HERO SLIDER ══════════════════════════ */
function goToSlide(index) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots   = document.querySelectorAll('.dot');
  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));
  heroSlide = index;
  slides[heroSlide].classList.add('active');
  dots[heroSlide].classList.add('active');
}

function nextSlide() {
  const total = document.querySelectorAll('.hero-slide').length;
  goToSlide((heroSlide + 1) % total);
}

function startHeroSlider() {
  heroInterval = setInterval(nextSlide, 4000);
  document.getElementById('heroSlider').addEventListener('mouseenter', () => clearInterval(heroInterval));
  document.getElementById('heroSlider').addEventListener('mouseleave', () => {
    heroInterval = setInterval(nextSlide, 4000);
  });
}

/* ══════════════════════════ LOGIN MODAL ══════════════════════════ */
function closeLogin() {
  document.getElementById('loginModal').classList.remove('open');
  document.body.style.overflow = '';
}

function sendOTP() {
  const phone = document.getElementById('phoneInput').value.trim();
  if (!/^\d{10}$/.test(phone)) {
    showToast('Please enter a valid 10-digit number');
    return;
  }
  showToast(`OTP sent to +91 ${phone}`);
  closeLogin();
}

/* ══════════════════════════ TOAST ══════════════════════════ */
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
}

/* ══════════════════════════ EVENTS ══════════════════════════ */
function bindEvents() {
  // Search input
  const searchInput = document.getElementById('searchInput');
  const searchClear = document.getElementById('searchClear');

  searchInput.addEventListener('input', () => {
    searchQuery = searchInput.value;
    searchClear.classList.toggle('visible', searchQuery.length > 0);
    renderProducts();
    if (searchQuery) {
      document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  searchClear.addEventListener('click', clearSearch);

  // Sort
  document.getElementById('sortSelect').addEventListener('change', e => {
    sortOrder = e.target.value;
    renderProducts();
  });

  // Cart button in header
  document.getElementById('cartBtn').addEventListener('click', toggleCart);

  // Login button
  document.getElementById('loginBtn').addEventListener('click', () => {
    document.getElementById('loginModal').classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  // Close login on overlay click
  document.getElementById('loginModal').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeLogin();
  });

  // Keyboard: Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeLogin();
      if (document.getElementById('cartSidebar').classList.contains('open')) toggleCart();
    }
  });

  // Location bar click
  document.querySelector('.location-bar').addEventListener('click', () => {
    const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Pune', 'Chennai', 'Kolkata'];
    const city   = cities[Math.floor(Math.random() * cities.length)];
    document.getElementById('locationName').textContent = city;
    showToast(`📍 Location set to ${city}`);
  });
}

/* ══════════════════════════ UTILS ══════════════════════════ */
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

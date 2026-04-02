/* Project: eOnlineBazar Professional JS
   Developer: Abdul Karim Sheikh
   Points Covered: 28 Points (Validation, Animation, Cart Logic, Google Sheets)
*/
// ১. পণ্য তালিকা (৪০টি প্রোডাক্ট)
const products = [
    // Grocery (মুদি সওদা)
    { id: 1, name: "Premium Miniket Rice (5kg)", price: 490, category: "grocery", img: "🍚", desc: "Pure and clean long-grain miniket rice." },
    { id: 2, name: "Pure Mustard Oil (1L)", price: 280, category: "grocery", img: "🧴", desc: "Traditionally pressed pungent mustard oil." },
    { id: 3, name: "Natural Flower Honey (500g)", price: 550, category: "grocery", img: "🍯", desc: "100% organic honey from natural sources." },
    { id: 4, name: "Lentils/Musur Dal (1kg)", price: 140, category: "grocery", img: "🥣", desc: "Premium quality red lentils." },
    { id: 5, name: "Soybean Oil (2L)", price: 340, category: "grocery", img: "🧪", desc: "Refined healthy cooking oil." },
    { id: 6, name: "Aromatic Chinigura Rice (1kg)", price: 160, category: "grocery", img: "🌾", desc: "Fragrant rice for special occasions." },
    { id: 7, name: "Powder Milk (400g)", price: 450, category: "grocery", img: "🥛", desc: "Full cream milk powder." },
    { id: 8, name: "Iodized Salt (1kg)", price: 45, category: "grocery", img: "🧂", desc: "Pure vacuum evaporated salt." },
    { id: 9, name: "Spices Combo Pack", price: 220, category: "grocery", img: "🌶️", desc: "Chilli, Turmeric, and Cumin set." },
    { id: 10, name: "Black Tea (200g)", price: 120, category: "grocery", img: "☕", desc: "Strong blend for tea lovers." },
// Electronics (ইলেকট্রনিক্স)
{ id: 11, name: "Smart Watch T800 Ultra", price: 1250, category: "electronics", img: "⌚", desc: "Calling feature with health tracking." },
{ id: 12, name: "Wireless Bluetooth Earbuds", price: 850, category: "electronics", img: "🎧", desc: "High bass with long battery life." },
{ id: 13, name: "Power Bank 20,000mAh", price: 1850, category: "electronics", img: "🔋", desc: "Fast charging portable power." },
{ id: 14, name: "Portable Speaker Bass+", price: 1100, category: "electronics", img: "🔊", desc: "Waterproof Bluetooth speaker." },
{ id: 15, name: "LED Desk Lamp Pro", price: 550, category: "electronics", img: "💡", desc: "Adjustable brightness study lamp." },
{ id: 16, name: "RGB Gaming Mouse", price: 450, category: "electronics", img: "🖱️", desc: "Ergonomic design for gaming." },
{ id: 17, name: "Hair Trimmer Cordless", price: 950, category: "electronics", img: "✂️", desc: "Professional grooming kit." },
{ id: 18, name: "WiFi Router 300Mbps", price: 1450, category: "electronics", img: "📶", desc: "Stable internet coverage." },
{ id: 19, name: "Digital Kitchen Scale", price: 420, category: "electronics", img: "⚖️", desc: "Precise food weight measurement." },
{ id: 20, name: "Multi-plug 5 Socket", price: 350, category: "electronics", img: "🔌", desc: "Surge protected power strip." },

// Cosmetics (প্রসাধন সামগ্রী)
{ id: 21, name: "Matte Lipstick Set", price: 750, category: "cosmetics", img: "💄", desc: "Long-lasting vibrant shades." },
{ id: 22, name: "Face Wash Brightening", price: 320, category: "cosmetics", img: "🧼", desc: "Deep cleaning skin care." },
{ id: 23, name: "Sunscreen SPF 50", price: 650, category: "cosmetics", img: "☀️", desc: "Ultimate UV protection." },
{ id: 24, name: "Moisturizing Cream", price: 450, category: "cosmetics", img: "🧴", desc: "Soft and smooth skin cream." },
{ id: 25, name: "Black Kajal Stick", price: 150, category: "cosmetics", img: "🖊️", desc: "Deep black eye definer." },
{ id: 26, name: "Hair Growth Oil", price: 380, category: "cosmetics", img: "🍃", desc: "Ayurvedic hair care oil." },
{ id: 27, name: "Floral Perfume (50ml)", price: 1250, category: "cosmetics", img: "🌸", desc: "Premium lasting fragrance." },
{ id: 28, name: "Nail Polish Combo", price: 280, category: "cosmetics", img: "💅", desc: "Multi-color nail art set." },
{ id: 29, name: "Aloe Vera Gel 99%", price: 220, category: "cosmetics", img: "🌵", desc: "Pure soothing skin gel." },
{ id: 30, name: "Makeup Brush Set", price: 550, category: "cosmetics", img: "🖌️", desc: "Soft professional brushes." },

// Kids Care (বাচ্চাদের যত্ন)
{ id: 31, name: "Baby Diapers (Large)", price: 1150, category: "kids", img: "👶", desc: "Extra absorbent soft diapers." },
{ id: 32, name: "Baby Lotion 200ml", price: 350, category: "kids", img: "🧴", desc: "Gentle care for baby skin." },
{ id: 33, name: "Soft Plush Toy Bear", price: 550, category: "kids", img: "🧸", desc: "Cuddly and safe for kids." },
{ id: 34, name: "Baby Feeding Bottle", price: 280, category: "kids", img: "🍼", desc: "Anti-colic safety bottle." },
{ id: 35, name: "Kids School Bag", price: 850, category: "kids", img: "🎒", desc: "Ergonomic colorful bag." },
{ id: 36, name: "Baby Wipes (80 pcs)", price: 180, category: "kids", img: "🧻", desc: "Pure water-based wipes." },
{ id: 37, name: "Baby Soap Mild", price: 95, category: "kids", img: "🧼", desc: "Extra mild for newborns." },
{ id: 38, name: "Building Blocks Set", price: 650, category: "kids", img: "🧱", desc: "Educational creative blocks." },
{ id: 39, name: "Baby Shampoo 100ml", price: 260, category: "kids", img: "🛁", desc: "Tear-free hair wash." },
{ id: 40, name: "Kids Water Bottle", price: 220, category: "kids", img: "🥤", desc: "BPA free easy sip bottle." }

];

let cart = [];
let discountAmount = 0;
const scriptURL = 'https://script.google.com/macros/s/AKfycbzjIkqb_QYzGrxSe2DE4X6HihT-Z5mur2PMDhTNKQs0NBIbKl6KsbuUM_1bqY-CVvIchg/exec';

// ২. প্রডাক্ট ডিসপ্লে (মোবাইলে ৩ কলাম সাপোর্ট করবে CSS এর মাধ্যমে)
function displayProducts(items) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    grid.innerHTML = items.map(p => `
        <div class="product-card" onclick="openDetails(${p.id})">
            <button class="add-fast-btn" onclick="event.stopPropagation(); addToCart(${p.id}, event)">+</button>
            <span class="p-img">${p.img}</span>
            <div class="p-name">${p.name}</div>
            <div class="p-price">৳ ${p.price}</div>
        </div>
    `).join('');
}

// ৩. কার্টে যোগ করা এবং উড়ার অ্যানিমেশন [Point 3, 4]
function addToCart(id, event, isBuyNow = false) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    // এনিমেশন লজিক
    const cartIcon = document.querySelector('.cart-wrapper');
    const target = event ? event.target : document.querySelector('.detail-cart-btn');
    
    if (target && cartIcon) {
        const rect = target.getBoundingClientRect();
        const cartRect = cartIcon.getBoundingClientRect();
        const flyer = document.createElement('div');
        flyer.className = 'flying-item';
        flyer.innerHTML = product.img;
        flyer.style.left = rect.left + 'px';
        flyer.style.top = rect.top + 'px';
        document.body.appendChild(flyer);

        setTimeout(() => {
            flyer.style.left = cartRect.left + 'px';
            flyer.style.top = cartRect.top + 'px';
            flyer.style.transform = 'scale(0.2) rotate(360deg)';
            flyer.style.opacity = '0';
        }, 50);
        setTimeout(() => flyer.remove(), 850);
    }

    let existing = cart.find(item => item.id === id);
    if (existing) { existing.quantity++; } else { cart.push({ ...product, quantity: 1, selected: true }); }
    
    updateCartUI();
    if (!isBuyNow) showToast(`${product.name} added to cart!`);
}

// ৪. কার্ট UI আপডেট এবং ক্যালকুলেশন [Point 23, 24, 25]
function updateCartUI() {
    const container = document.getElementById('cart-content');
    const count = document.getElementById('cart-count');
    const subtotalSpan = document.getElementById('subtotal-val');
    const discountSpan = document.getElementById('discount-val');
    const finalSpan = document.getElementById('final-total');

    count.innerText = cart.length;
    container.innerHTML = "";

    let subtotal = 0;
    cart.forEach((item, index) => {
        if (item.selected) subtotal += (item.price * item.quantity);
        
        container.innerHTML += `
            <div class="cart-item">
                <input type="checkbox" ${item.selected ? 'checked' : ''} onclick="toggleSelectItem(${index})">
                <div style="flex:1; margin-left:10px;">
                    <b>${item.name}</b><br>
                    <small>${item.quantity} x ${item.price} = ৳${item.quantity * item.price}</small>
                </div>
                <div class="qty-controls">
                    <button class="qty-btn" onclick="updateQty(${index}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQty(${index}, 1)">+</button>
                    <button class="delete-btn" onclick="removeItem(${index})"><i class="fas fa-trash"></i></button>
                </div>
            </div>
        `;
    });

    subtotalSpan.innerText = subtotal;
    discountSpan.innerText = discountAmount;
    finalSpan.innerText = Math.max(0, subtotal - discountAmount);
    
    document.getElementById('checkout-section').style.display = cart.length > 0 ? 'block' : 'none';
}

// ৫. ইনপুট ভ্যালিডেশন লজিক [Point 9, 10, 11, 13, 14, 15]
function validateField(input, type) {
    const val = input.value.trim();
    let isValid = false;
    const errorMsg = input.nextElementSibling;

    if (type === 'name') {
        const words = val.split(/\s+/).filter(w => w.length > 1);
        const isJunk = /(.)\1{3,}/.test(val); // ৪ বারের বেশি একই অক্ষর থাকলে জ্যাংক ধরবে
        isValid = words.length >= 2 && !isJunk;
    } else if (type === 'phone') {
        isValid = /^01[3-9]\d{8}$/.test(val);
    } else if (type === 'address') {
        const words = val.split(/\s+/).filter(w => w.length > 1);
        isValid = words.length >= 3;
    }

    if (isValid) {
        input.className = 'valid-input';
        errorMsg.style.display = 'none';
    } else {
        input.className = 'invalid-input';
    }
    return isValid;
}

// ৬. অর্ডার রিভিউ এবং কনফার্মেশন [Point 18, 19, 27]
function showReviewPopup() {
    const n = document.getElementById('uName'), p = document.getElementById('uPhone'), a = document.getElementById('uAddress');
    
    const isN = validateField(n, 'name'), isP = validateField(p, 'phone'), isA = validateField(a, 'address');

    if (!isN || !isP || !isA) {
        if (!isN) n.nextElementSibling.style.display = 'block';
        if (!isP) p.nextElementSibling.style.display = 'block';
        if (!isA) a.nextElementSibling.style.display = 'block';
        showToast("Please fix the highlighted fields!");
        return;
    }

    document.getElementById('addressModal').style.display = 'none';
    const review = document.getElementById('review-data-display');
    review.innerHTML = `
        <p><b>Name:</b> ${n.value}</p>
        <p><b>Phone:</b> ${p.value}</p>
        <p><b>Address:</b> ${a.value}</p>
        <p><b>Total Bill:</b> ৳${document.getElementById('final-total').innerText}</p>
    `;
    document.getElementById('reviewModal').style.display = 'flex';
}

// ৭. গুগল শিটে ডাটা সাবমিট [Point 27, 28, 29]
async function submitToGoogleSheet() {
    const btn = document.getElementById('finalSubmitBtn');
    btn.innerText = "Processing...";
    btn.disabled = true;

    const orderId = "EB" + Date.now().toString().slice(-6);
    const items = cart.filter(i => i.selected).map(i => `${i.name}(${i.quantity})`).join(", ");

    const params = new URLSearchParams();
    params.append('Order_ID', orderId);
    params.append('Name', document.getElementById('uName').value);
    params.append('Phone', document.getElementById('uPhone').value);
    params.append('Address', document.getElementById('uAddress').value);
    params.append('Items', items);
    params.append('Total', document.getElementById('final-total').innerText);

    try {
        await fetch(scriptURL, { method: 'POST', mode: 'no-cors', body: params });
        document.getElementById('reviewModal').style.display = 'none';
        showSuccess(orderId);
        cart = cart.filter(i => !i.selected);
        updateCartUI();
    } catch (e) {
        alert("Submission Error!");
    } finally {
        btn.innerText = "Confirm Now";
        btn.disabled = false;
    }
}

// ৮. ইউটিলিটি ফাংশনস (কুপন, সার্চ, টোস্ট) [Point 2, 21, 22]
function applyCouponCode() {
    const code = document.getElementById('couponInput').value.trim();
    if (code === "SAVE10") {
        discountAmount = Math.round(parseInt(document.getElementById('subtotal-val').innerText) * 0.1);
        document.getElementById('coupon-status-msg').innerText = "10% Discount Applied!";
        document.getElementById('coupon-status-msg').style.color = "green";
    } else {
        discountAmount = 0;
        document.getElementById('coupon-status-msg').innerText = "Invalid Code!";
        document.getElementById('coupon-status-msg').style.color = "red";
    }
    updateCartUI();
}

function searchProducts() {
    const term = document.getElementById('productSearch').value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(term));
    displayProducts(filtered);
}

function showToast(msg) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.innerText = msg;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

function showSuccess(id) {
    document.getElementById('disp-order-id').innerText = id;
    document.getElementById('successModal').style.display = 'flex';
    setTimeout(() => { document.getElementById('successModal').style.display = 'none'; }, 10000);
}

// মডাল ওপেন/ক্লোজ কন্ট্রোল
function openCart() { 
    if(cart.length === 0) { showToast("Your cart is empty! Add products first."); return; }
    document.getElementById('cartModal').style.display = 'flex'; 
}
function closeCart() { document.getElementById('cartModal').style.display = 'none'; }
function openAddressPopup() { document.getElementById('cartModal').style.display = 'none'; document.getElementById('addressModal').style.display = 'flex'; }
function closeAddressPopup() { document.getElementById('addressModal').style.display = 'none'; document.getElementById('cartModal').style.display = 'flex'; }
function closeReview() { document.getElementById('reviewModal').style.display = 'none'; document.getElementById('addressModal').style.display = 'flex'; }

// কার্ট আইটেম এডিট
function updateQty(index, delta) {
    cart[index].quantity += delta;
    if (cart[index].quantity < 1) cart[index].quantity = 1;
    updateCartUI();
}
function removeItem(index) { cart.splice(index, 1); updateCartUI(); }
function toggleSelectItem(index) { cart[index].selected = !cart[index].selected; updateCartUI(); }

// পেজ লোড
window.onload = () => { displayProducts(products); };

/* Author: Abdul Karim Sheikh
   Project: eOnlineBazar Professional JS Logic
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

// ২. পেজ লোড হলে প্রোডাক্ট দেখানো
window.onload = () => {
    displayProducts(products);
};

function displayProducts(items) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = items.map(pd => `
        <div class="product-card">
            <img src="${pd.img}" alt="${pd.name}" id="img-${pd.id}">
            <h3>${pd.name}</h3>
            <p class="price">৳ ${pd.price}</p>
            <button class="add-btn" onclick="addToCart(${pd.id}, this)">+</button>
        </div>
    `).join('');
}

// ৩. ক্যাটাগরি ফিল্টার
function filterCat(category) {
    // বাটন একটিভ স্টেট পরিবর্তন
    document.querySelectorAll('.cat-item').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    if (category === 'all') {
        displayProducts(products);
    } else {
        const filtered = products.filter(p => p.cat === category);
        displayProducts(filtered);
    }
}

// ৪. Add to Cart ও Fly Animation
function addToCart(id, btnElement) {
    const product = products.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    // Fly Animation লজিক
    const img = document.getElementById(`img-${id}`);
    const clone = img.cloneNode();
    clone.style.position = "fixed";
    clone.style.width = "50px";
    clone.style.zIndex = "3000";
    clone.style.left = img.getBoundingClientRect().left + "px";
    clone.style.top = img.getBoundingClientRect().top + "px";
    clone.style.transition = "all 0.8s ease-in-out";
    document.body.appendChild(clone);

    setTimeout(() => {
        clone.style.left = "90%";
        clone.style.top = "20px";
        clone.style.transform = "scale(0.1)";
        clone.style.opacity = "0";
    }, 50);

    setTimeout(() => { clone.remove(); }, 800);

    updateCartUI();
    showToast(`${product.name} যুক্ত হয়েছে!`);
}

// ৫. কার্ট আপডেট এবং হিসাব (পিস ও টাকা সহ)
function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartList = document.getElementById('cart-items-list');
    const footer = document.getElementById('cart-footer-logic');

    cartCount.innerText = cart.reduce((total, item) => total + item.qty, 0);

    if (cart.length === 0) {
        cartList.innerHTML = "<p style='text-align:center; padding:20px;'>আপনার কার্ট খালি!</p>";
        footer.style.display = "none";
        return;
    }

    footer.style.display = "block";
    let subtotal = 0;

    cartList.innerHTML = cart.map((item, index) => {
        const itemTotal = item.price * item.qty;
        subtotal += itemTotal;
        return `
            <div class="cart-item-row" style="display:flex; align-items:center; justify-content:space-between; padding:10px; border-bottom:1px solid #eee;">
                <div style="display:flex; align-items:center; gap:10px;">
                    <img src="${item.img}" width="40">
                    <div>
                        <strong>${item.name}</strong><br>
                        <small>৳ ${item.price} x ${item.qty} = ৳ ${itemTotal}</small>
                    </div>
                </div>
                <div class="qty-controls">
                    <button onclick="changeQty(${index}, -1)">-</button>
                    <span>${item.qty}</span>
                    <button onclick="changeQty(${index}, 1)">+</button>
                    <span onclick="removeItem(${index})" style="cursor:pointer; margin-left:10px;">🗑️</span>
                </div>
            </div>
        `;
    }).join('');

    document.getElementById('sub-val').innerText = subtotal;
    calculateFinal(subtotal);
}

function changeQty(index, delta) {
    cart[index].qty += delta;
    if (cart[index].qty < 1) cart[index].qty = 1;
    updateCartUI();
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCartUI();
}

// ৬. কুপন কোড লজিক
function applyDiscount() {
    const code = document.getElementById('couponCode').value.trim();
    const msg = document.getElementById('coupon-message');
    const subtotal = parseInt(document.getElementById('sub-val').innerText);

    if (code === "SAVE10") {
        discountAmount = subtotal * 0.1; // ১০% ছাড়
        msg.innerText = "কুপন সফলভাবে প্রয়োগ করা হয়েছে (১০% ছাড়)!";
        msg.className = "coupon-msg msg-success";
    } else {
        discountAmount = 0;
        msg.innerText = "ভুল কুপন কোড! আবার চেষ্টা করুন।";
        msg.className = "coupon-msg msg-error";
    }
    calculateFinal(subtotal);
}

function calculateFinal(subtotal) {
    document.getElementById('dis-val').innerText = Math.round(discountAmount);
    document.getElementById('final-val').innerText = Math.round(subtotal - discountAmount);
}

// ৭. নেভিগেশন কন্ট্রোল
function openCartView() { document.getElementById('cartView').classList.add('active'); }
function closeCartView() { document.getElementById('cartView').classList.remove('active'); }
function openShippingView() { document.getElementById('shippingView').classList.add('active'); }
function closeShippingView() { document.getElementById('shippingView').classList.remove('active'); }

// ৮. অর্ডার কনফার্মেশন লজিক
function showReview() {
    const name = document.getElementById('uName').value;
    const phone = document.getElementById('uPhone').value;
    const address = document.getElementById('uAddress').value;
    const payment = document.querySelector('input[name="pay"]:checked').value;

    if (name.split(' ').length < 2 || phone.length < 11 || address.split(' ').length < 3) {
        showToast("দয়া করে সঠিক তথ্য দিন!");
        return;
    }

    const total = document.getElementById('final-val').innerText;
    document.getElementById('reviewContent').innerHTML = `
        <p><strong>নাম:</strong> ${name}</p>
        <p><strong>মোবাইল:</strong> ${phone}</p>
        <p><strong>ঠিকানা:</strong> ${address}</p>
        <p><strong>পেমেন্ট:</strong> ${payment}</p>
        <hr>
        <h4>মোট পরিশোধযোগ্য: ৳ ${total}</h4>
    `;
    document.getElementById('reviewPopup').style.display = 'flex';
}

function closeReview() { document.getElementById('reviewPopup').style.display = 'none'; }

function processFinalOrder() {
    const orderID = "EOB" + Math.floor(Math.random() * 900000 + 100000);
    document.getElementById('displayOrderID').innerText = "#" + orderID;
    document.getElementById('reviewPopup').style.display = 'none';
    document.getElementById('successPopup').style.display = 'flex';
    
    // কার্ট ক্লিয়ার করা
    cart = [];
    updateCartUI();
}

// ৯. ইউটিলিটি ফাংশন
function showToast(text) {
    const toast = document.getElementById('toast-msg');
    toast.innerText = text;
    toast.style.display = "block";
    setTimeout(() => { toast.style.display = "none"; }, 2000);
}

function validateLive(id, type) {
    const val = document.getElementById(id).value;
    const error = document.querySelector(`#${id} ~ .error-text`);
    let isValid = false;

    if (type === 'phone') isValid = /^[0-9]{11}$/.test(val);
    if (type === 'name') isValid = val.trim().split(' ').length >= 2;
    if (type === 'address') isValid = val.trim().split(' ').length >= 3;

    error.style.display = isValid ? "none" : "block";
}

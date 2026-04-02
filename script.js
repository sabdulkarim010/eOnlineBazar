/* Project: eOnlineBazar Professional JS 
   Author: Abdul Karim Sheikh
   Features: 11-digit Phone, Anti-Junk Validation, Smooth Animations, Excel Integration
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
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzjIkqb_QYzGrxSe2DE4X6HihT-Z5mur2PMDhTNKQs0NBIbKl6KsbuUM_1bqY-CVvIchg/exec';

// ২. প্রডাক্ট ডিসপ্লে (অ্যালাইন করা বড় প্লাস বাটনসহ) [Point 1 - New]
function loadProducts(items) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = items.map(p => `
        <div class="product-card">
            <span style="font-size:50px;">${p.img}</span>
            <h4>${p.name}</h4>
            <p style="color:#f85606; font-weight:700;">৳ ${p.price}</p>
            <button class="add-btn" onclick="addToCart(${p.id}, event)">+</button>
        </div>
    `).join('');
}

// ৩. ফ্লাই অ্যানিমেশন [Point 2 - New]
function addToCart(id, event) {
    const p = products.find(i => i.id === id);
    cart.push({ ...p, qty: 1 });
    
    // অ্যানিমেশন লজিক
    const flyer = document.createElement('div');
    flyer.className = 'flyer-emoji';
    flyer.innerHTML = p.img;
    flyer.style.left = event.clientX + 'px';
    flyer.style.top = event.clientY + 'px';
    document.body.appendChild(flyer);

    const cartIcon = document.querySelector('.cart-wrapper').getBoundingClientRect();
    
    setTimeout(() => {
        flyer.style.left = cartIcon.left + 'px';
        flyer.style.top = cartIcon.top + 'px';
        flyer.style.transform = 'scale(0.1)';
        flyer.style.opacity = '0';
    }, 50);

    setTimeout(() => flyer.remove(), 800);
    updateCartUI();
}

// ৪. কার্ট আপডেট ও খালি কার্ট মেসেজ [Point 3, 6 - New]
function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.length;
    const list = document.getElementById('cart-items-list');
    const footer = document.getElementById('cart-footer-logic');

    if (cart.length === 0) {
        list.innerHTML = `<div class="empty-msg">Your cart is empty!<br>Please add some products to the cart.</div>`;
        footer.style.display = 'none';
        return;
    }

    footer.style.display = 'block';
    let subtotal = 0;
    list.innerHTML = cart.map((item, index) => {
        subtotal += (item.price * item.qty);
        return `
            <div style="display:flex; align-items:center; background:white; margin-bottom:10px; padding:15px; border-radius:10px;">
                <span style="font-size:30px;">${item.img}</span>
                <div style="flex:1; margin-left:15px;">
                    <p style="font-weight:600; font-size:14px;">${item.name}</p>
                    <p>৳ ${item.price}</p>
                </div>
                <div style="display:flex; align-items:center; gap:8px;">
                    <button class="qty-btn" onclick="changeQty(${index}, -1)">-</button>
                    <span style="font-weight:700;">${item.qty}</span>
                    <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
                    <button onclick="removeItem(${index})" style="background:none; border:none; color:red; margin-left:10px;">🗑️</button>
                </div>
            </div>
        `;
    }).join('');

    document.getElementById('sub-val').innerText = subtotal;
    document.getElementById('dis-val').innerText = discountAmount;
    document.getElementById('final-val').innerText = subtotal - discountAmount;
}

// ৫. কুপন সিস্টেম ফিক্স [Point 5 - New]
function applyDiscount() {
    const code = document.getElementById('couponCode').value.toUpperCase();
    if (code === "SAVE10") {
        discountAmount = 50; // ধরুন ৫০ টাকা ফিক্সড ডিসকাউন্ট
        showToast("Coupon Applied! ৳50 Discounted.");
    } else {
        discountAmount = 0;
        showToast("Invalid Coupon!");
    }
    updateCartUI();
}

// ৬. লাইভ ভ্যালিডেশন (গ্রিন/রেড কালার) [Point 8, 9, 10, 11 - New]
function validateLive(id, type) {
    const input = document.getElementById(id);
    const val = input.value.trim();
    let isValid = false;

    if (type === 'name') {
        isValid = val.split(' ').length >= 2 && !/(.)\1{2,}/.test(val);
    } else if (type === 'phone') {
        isValid = /^01[3-9]\d{8}$/.test(val); // ১১ ডিজিট লক
    } else if (type === 'address') {
        isValid = val.split(' ').length >= 3;
    }

    if (isValid) {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
    } else {
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
    }
}

// ৭. রিভিউ এবং ফাইনাল অর্ডার [Point 13, 14, 15 - New]
function showReview() {
    const name = document.getElementById('uName');
    const phone = document.getElementById('uPhone');
    const addr = document.getElementById('uAddress');

    if (!name.classList.contains('is-valid') || !phone.classList.contains('is-valid') || !addr.classList.contains('is-valid')) {
        showToast("Please fill the form correctly!");
        return;
    }

    const content = document.getElementById('reviewContent');
    content.innerHTML = `
        <div style="text-align:left; line-height:1.8;">
            <p><strong>Name:</strong> ${name.value}</p>
            <p><strong>Phone:</strong> ${phone.value}</p>
            <p><strong>Address:</strong> ${addr.value}</p>
            <p><strong>Total Bill:</strong> ৳ ${document.getElementById('final-val').innerText}</p>
            <p style="color:green;"><strong>Discount:</strong> ৳ ${discountAmount}</p>
        </div>
    `;
    document.getElementById('reviewPopup').style.display = 'flex';
}

async function processFinalOrder() {
    const btn = document.querySelector('.final-btn');
    btn.innerText = "Processing..."; //
    btn.disabled = true;

    const orderID = "#EB" + Math.floor(100000 + Math.random() * 900000); // ইউনিক আইডি
    
    const formData = new URLSearchParams({
        "Order_ID": orderID,
        "Name": document.getElementById('uName').value,
        "Phone": document.getElementById('uPhone').value,
        "Address": document.getElementById('uAddress').value,
        "Total": document.getElementById('final-val').innerText,
        "Status": "Pending"
    });

    try {
        await fetch(SCRIPT_URL, { method: 'POST', body: formData, mode: 'no-cors' });
        
        document.getElementById('reviewPopup').style.display = 'none';
        document.getElementById('displayOrderID').innerText = orderID;
        const success = document.getElementById('successPopup');
        success.style.display = 'flex';

        cart = [];
        updateCartUI();
        closeShippingView();
        
        setTimeout(() => { success.style.display = 'none'; }, 10000); // ১০ সেকেন্ড পর ভ্যানিশ [Point 15]
    } catch (e) {
        showToast("Error! Try again.");
        btn.innerText = "Confirm Now";
        btn.disabled = false;
    }
}

// ইউটিলিটি নেভিগেশন
function openCartView() { document.getElementById('cartView').style.display = 'flex'; updateCartUI(); }
function closeCartView() { document.getElementById('cartView').style.display = 'none'; }
function openShippingView() { document.getElementById('shippingView').style.display = 'flex'; }
function closeShippingView() { document.getElementById('shippingView').style.display = 'none'; }
function closeReview() { document.getElementById('reviewPopup').style.display = 'none'; }

function changeQty(i, delta) {
    cart[i].qty += delta;
    if (cart[i].qty < 1) cart[i].qty = 1;
    updateCartUI();
}

function removeItem(i) { cart.splice(i, 1); updateCartUI(); }

function showToast(m) {
    const t = document.getElementById('toast-msg');
    t.innerText = m; t.style.display = 'block';
    setTimeout(() => t.style.display = 'none', 3000);
}

// সার্চ এবং ফিল্টার
function filterCat(c) {
    const filtered = c === 'all' ? products : products.filter(p => p.category === c);
    loadProducts(filtered);
}

window.onload = () => loadProducts(products);

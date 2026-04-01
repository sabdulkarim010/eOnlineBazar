// ১. পণ্য তালিকা (৪০টি প্রোডাক্ট - আপনার দেয়া ডাটা অনুযায়ী)
const products = [
    // Grocery
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
    // Electronics
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
    // Cosmetics
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
    // Kids Care
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
let discountPercent = 0; 

// ১. ডিসপ্লে ফাংশন
function displayProducts(items) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    grid.innerHTML = items.map(p => `
        <div class="product-card" onclick="openModal(${p.id})">
            <button class="add-fast-btn" onclick="event.stopPropagation(); addToCart(${p.id}, event)">+</button>
            <span class="p-img">${p.img}</span>
            <div class="p-name">${p.name}</div>
            <div class="p-price">৳ ${p.price}</div>
        </div>
    `).join('');
}

// ২. বিবরণ দেখার মডাল
function openModal(id) {
    const p = products.find(prod => prod.id === id);
    const modalBody = document.getElementById('modal-body');
    const modal = document.getElementById('productModal');
    if (p && modalBody) {
        modalBody.innerHTML = `
            <div style="text-align:center; padding: 20px;">
                <span style="font-size:80px;">${p.img}</span>
                <h2>${p.name}</h2>
                <p>${p.desc}</p>
                <h3 style="color:#f85606;">৳ ${p.price}</h3>
                <button class="confirm-btn" style="width:100%;" onclick="addToCart(${p.id}, event); closeModal();">ADD TO CART</button>
            </div>`;
        modal.style.display = "block";
    }
}
function closeModal() { document.getElementById('productModal').style.display = "none"; }

// ৩. ওড়ার অ্যানিমেশন ও কার্টে যোগ
function addToCart(id, event) {
    if(event) event.stopPropagation();
    const product = products.find(p => p.id === id);
    if (!product) return;

    let existing = cart.find(item => item.id === id);
    if (existing) { existing.quantity++; } else { cart.push({ ...product, quantity: 1 }); }

    updateCartUI();
    showToast(product.name + " added!");
}

// ৪. কার্ট UI
function updateCartUI() {
    const count = document.getElementById('cart-count');
    const container = document.getElementById('cart-items-container');
    const totalSpan = document.getElementById('cart-total');
    
    if (count) count.innerText = cart.length;
    if (container) container.innerHTML = "";
    
    let total = 0;
    cart.forEach((item, index) => {
        total += (item.price * item.quantity);
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div style="flex:1"><b>${item.name}</b><br>৳ ${item.price} x ${item.quantity}</div>
            <div style="display:flex; align-items:center; gap:8px;">
                <button class="qty-btn" onclick="changeQty(${index}, -1)">−</button>
                <span>${item.quantity}</span>
                <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
            </div>`;
        container.appendChild(div);
    });

    let finalTotal = total - (total * discountPercent);
    if (totalSpan) totalSpan.innerText = Math.round(finalTotal);
}

// ৫. ভ্যালিডেশন এবং রিভিউ বক্স (EDIT BUTTON FIX সহ)
function validateAndOrder() {
    const name = document.getElementById('orderName').value.trim();
    const phone = document.getElementById('orderPhone').value.trim();
    const address = document.getElementById('orderAddress').value.trim();
    
    if (name.split(' ').length < 2) { showToast("Enter full name!"); return; }
    if (!/^01[3-9]\d{8}$/.test(phone)) { showToast("Invalid phone number!"); return; }
    if (address.length < 5) { showToast("Enter full address!"); return; }

    document.getElementById('cartModal').style.display = 'none';
    const confirmBox = document.getElementById('confirmBox');
    
    // এখানে Edit বাটনকে গ্রে কালার করা হয়েছে
    confirmBox.innerHTML = `
        <div class="popup-card" style="background: white; padding: 25px; border-radius: 20px; text-align: center; max-width: 350px; width: 90%; margin: auto;">
            <h3 style="margin-bottom:10px;">Review Your Order</h3>
            <p style="font-size:14px; color:#666; margin-bottom:15px;">সঠিক তথ্য আছে কি না মিলিয়ে নিন।</p>
            <div style="text-align:left; background:#f9f9f9; padding:15px; border-radius:10px; margin-bottom:20px; font-size:14px; border: 1px solid #eee;">
                <b>Name:</b> ${name}<br>
                <b>Phone:</b> ${phone}<br>
                <b>Address:</b> ${address}
            </div>
            <div style="display:flex; gap:10px;">
                <button onclick="closeConfirm()" style="background:#8e8e8e; color:white; border:none; padding:12px; border-radius:10px; flex:1; font-weight:bold; cursor:pointer;">Edit</button>
                <button onclick="finalOrderProcess()" class="confirm-now-btn" style="background:#f85606; color:white; border:none; padding:12px; border-radius:10px; flex:1; font-weight:bold; cursor:pointer;">Confirm Now</button>
            </div>
        </div>
    `;
    confirmBox.style.display = 'flex';
}

function closeConfirm() { 
    document.getElementById('confirmBox').style.display = "none"; 
    document.getElementById('cartModal').style.display = "block"; 
}

// ৬. ফাইনাল অর্ডার প্রসেস
function finalOrderProcess() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzjIkqb_QYzGrxSe2DE4X6HihT-Z5mur2PMDhTNKQs0NBIbKl6KsbuUM_1bqY-CVvIchg/exec';
    const confirmBtn = document.querySelector(".confirm-now-btn");
    confirmBtn.innerText = "Wait...";
    confirmBtn.disabled = true;

    const orderId = "#EB" + Math.floor(1000 + Math.random() * 9000);
    const itemsSummary = cart.map(i => `${i.name}(${i.quantity})`).join(", ");

    const data = {
        'Order_ID': orderId,
        'Name': document.getElementById('orderName').value,
        'Phone': document.getElementById('orderPhone').value,
        'Address': document.getElementById('orderAddress').value,
        'Items': itemsSummary,
        'Total': document.getElementById('cart-total').innerText,
        'Payment': document.querySelector('input[name="payment"]:checked')?.value || "COD"
    };

    fetch(scriptURL, { method: 'POST', mode: 'no-cors', body: new URLSearchParams(data) })
    .then(() => {
        document.getElementById('confirmBox').style.display = 'none';
        showSuccessPopup(orderId);
        cart = [];
        updateCartUI();
    }).catch(() => alert("Error!"));
}

// ৭. অন্যান্য ইউটিলিটি ফাংশন
function searchProduct() {
    const term = document.getElementById('searchInput').value.toLowerCase();
    document.querySelectorAll('.product-card').forEach(card => {
        card.style.display = card.innerText.toLowerCase().includes(term) ? "block" : "none";
    });
}

function changeQty(index, delta) {
    cart[index].quantity += delta;
    if (cart[index].quantity < 1) cart.splice(index, 1);
    updateCartUI();
}

function toggleCart() {
    const m = document.getElementById('cartModal');
    m.style.display = (m.style.display === "block") ? "none" : "block";
}

function showToast(msg) {
    let t = document.getElementById('toast') || document.createElement('div');
    t.id = 'toast'; document.body.appendChild(t);
    t.innerText = msg; t.style.display = "block";
    setTimeout(() => t.style.display = "none", 3000);
}

function showSuccessPopup(orderId) {
    const popup = document.createElement('div');
    popup.style.cssText = "position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); display:flex; align-items:center; justify-content:center; z-index:9999;";
    popup.innerHTML = `<div style="background:white; padding:30px; border-radius:20px; text-align:center;">
        <h2 style="color:green;">Placed!</h2>
        <p>Order ID: ${orderId}</p>
        <button onclick="this.parentElement.parentElement.remove()" style="background:#f85606; color:white; border:none; padding:10px 20px; border-radius:10px;">OK</button>
    </div>`;
    document.body.appendChild(popup);
}

window.onload = () => { displayProducts(products); updateCartUI(); };

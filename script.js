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



// ১. আপনার আগের পণ্য তালিকা (products array) এখানে যেমন আছে তেমনি থাকবে

// গ্লোবাল ভেরিয়েবল
let cart = []; 
let discountPercent = 0; 

// ২. প্রোডাক্ট ডিসপ্লে ফাংশন (আইটেম ফিরিয়ে আনার মূল অংশ)
function displayProducts(items) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    grid.innerHTML = items.map(p => `
        <div class="product-card">
            <button class="add-fast-btn" onclick="addToCart(${p.id})">+</button>
            <div onclick="openModal(${p.id})">
                <span class="p-img">${p.img}</span>
                <div class="p-name">${p.name}</div>
                <div class="p-price">৳ ${p.price}</div>
            </div>
        </div>
    `).join('');
}

// ৩. কার্ট আপডেট (UI)
function updateCartUI() {
    const count = document.getElementById('cart-count');
    const container = document.getElementById('cart-items-container');
    const totalSpan = document.getElementById('cart-total');
    const orderForm = document.getElementById('order-form-container');
    
    if (count) count.innerText = cart.length;
    if (container) container.innerHTML = "";
    
    let total = 0;

    if (cart.length === 0) {
        container.innerHTML = `<div style="text-align:center; padding: 40px 20px;"><div style="font-size: 60px; margin-bottom: 15px;">🛒</div><h3 style="color: #555;">Your cart is empty!</h3></div>`;
        if (orderForm) orderForm.style.display = "none";
        if (totalSpan) totalSpan.innerText = "0";
        return; 
    }

    if (orderForm) orderForm.style.display = "block";

    cart.forEach((item, index) => {
        total += (item.price * item.quantity);
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div style="flex:1"><b>${item.name}</b><br><span>৳ ${item.price} x ${item.quantity}</span></div>
            <div style="display:flex; align-items:center; gap:10px;"> 
                <button class="qty-btn" onclick="changeQty(${index}, -1)">−</button>
                <span>${item.quantity}</span>
                <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
            </div>`;
        container.appendChild(div);
    });

    let finalTotal = total - (total * discountPercent);
    if (totalSpan) totalSpan.innerText = Math.round(finalTotal);
}

// ৪. পরিমাণ পরিবর্তন
function changeQty(index, delta) {
    cart[index].quantity += delta;
    if (cart[index].quantity < 1) cart.splice(index, 1);
    updateCartUI();
}

// ৫. কার্টে যোগ করা (অ্যানিমেশন সহ)
function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        let existing = cart.find(item => item.id === id);
        if (existing) { existing.quantity += 1; } 
        else { product.quantity = 1; cart.push(product); }
        updateCartUI();
        showToast(product.name + " added to cart!");
    }
}

// ৬. ফাইনাল অর্ডার প্রসেস (লিঙ্ক ঠিক করা হয়েছে)
function finalOrderProcess() {
    const orderID = "#EB" + Math.floor(1000 + Math.random() * 9000);
    const name = document.getElementById('orderName').value;
    const phone = document.getElementById('orderPhone').value;
    const address = document.getElementById('orderAddress').value;
    const note = document.getElementById('orderNote')?.value || "No Note";
    const total = document.getElementById('cart-total').innerText;
    const items = cart.map(i => `${i.name} (${i.quantity})`).join(", ");

    const orderData = { orderID, name, phone, address, note, items, total };

    // লিঙ্কটি এক লাইনে রাখা হয়েছে
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzjIkqb_QYzGrxSe2DE4X6HihT-Z5mur2PMDhTNKQs0NBIbKl6KsbuUM_1bqY-CVvIchg/exec';

    fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(orderData)
    }).then(() => {
        document.getElementById('confirmBox').style.display = "none";
        const successBox = document.getElementById('successBox');
        if(successBox) {
            successBox.innerHTML = `<div style="text-align:center; padding:20px;"><h2 style="color:#28a745;">অর্ডার সফল!</h2><p>আইডি: ${orderID}</p><button onclick="location.reload()">OK</button></div>`;
            successBox.style.display = "block";
        }
        cart = []; updateCartUI();
    }).catch(error => console.error("Error!", error));
}

// ৭. মডাল, সার্চ ও ফিল্টার
function openModal(id) {
    const p = products.find(prod => prod.id === id);
    document.getElementById('modal-body').innerHTML = `<div style="text-align:center;"><span style="font-size:70px;">${p.img}</span><h2>${p.name}</h2><p>${p.desc}</p><h3>৳ ${p.price}</h3><button class="confirm-btn" onclick="addToCart(${p.id})">ADD TO CART</button></div>`;
    document.getElementById('productModal').style.display = "block";
}

function searchProduct() {
    const term = document.getElementById('searchInput').value.toLowerCase();
    const items = document.querySelectorAll('.product-card'); 
    items.forEach(item => {
        item.style.display = item.innerText.toLowerCase().includes(term) ? "block" : "none";
    });
}

function filterCategory(cat) {
    const banner = document.querySelector('.coming-soon-banner');
    if (cat === 'all') { displayProducts(products); if(banner) banner.style.display = 'block'; } 
    else { displayProducts(products.filter(p => p.category === cat)); if(banner) banner.style.display = 'none'; }
}

function toggleCart() {
    const m = document.getElementById('cartModal');
    m.style.display = (m.style.display === "block") ? "none" : "block";
}

function closeModal() { document.getElementById('productModal').style.display = "none"; }
function closeConfirm() { document.getElementById('confirmBox').style.display = "none"; document.getElementById('order-form-container').style.display = "block"; }

// ৮. পেজ লোড হলে ফাংশন কল
window.onload = () => {
    displayProducts(products);
    updateCartUI();
};

function showToast(msg) {
    const t = document.getElementById('toast');
    if(t) { t.innerText = msg; t.style.display = "block"; setTimeout(() => { t.style.display = "none"; }, 3000); }
}

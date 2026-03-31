// ১. প্রোডাক্ট লিস্ট: এখানে সব ক্যাটাগরির পণ্য সাজানো আছে
// ১. পণ্য তালিকা (পুরো ৪০টি প্রোডাক্ট এখানে আছে)
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


let cart = []; // কার্টে থাকা পণ্য জমা রাখার লিস্ট

// ২. মেইন ডিসপ্লে ফাংশন: ওয়েবসাইটে পণ্যগুলো দেখানোর জন্য
function displayProducts(items) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    grid.innerHTML = items.map(p => `
        <div class="product-card" onclick="openModal(${p.id})">
            <span class="p-img">${p.img}</span>
            <div class="p-name">${p.name}</div>
            <div class="p-price">৳ ${p.price}</div>
        </div>
    `).join('');
}

// ৩. কার্ট আপডেট ফাংশন: এখানে বড় প্লাস (+) ও মাইনাস (−) বাটনের লজিক আছে
function updateCartUI() {
    const count = document.getElementById('cart-count');
    const container = document.getElementById('cart-items-container');
    const totalSpan = document.getElementById('cart-total');
    
    count.innerText = cart.length; // কার্ট আইকনে সংখ্যা আপডেট
    container.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += (item.price * item.quantity);
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div style="flex:1">
                <b style="font-size:15px; color:#232f3e;">${item.name}</b><br>
                <span style="color:#666;">৳ ${item.price} x ${item.quantity}</span>
            </div>
            <div style="display:flex; align-items:center; gap:15px;"> <button class="qty-btn" onclick="changeQty(${index}, -1)">−</button>
                <span class="qty-count">${item.quantity}</span>
                <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
            </div>`;
        container.appendChild(div);
    });
    totalSpan.innerText = total; // মোট বিল আপডেট
}

// ৪. পরিমাণ পরিবর্তন ফাংশন: পণ্য বাড়ানো বা কমানোর জন্য
function changeQty(index, delta) {
    cart[index].quantity += delta;
    if (cart[index].quantity < 1) cart.splice(index, 1); // ১ এর নিচে গেলে রিমুভ হবে
    updateCartUI();
}

// ৫. কার্টে যোগ করার ফাংশন
function addToCart(id) {
    const p = products.find(prod => prod.id === id);
    const existing = cart.find(item => item.id === id);
    if (existing) { existing.quantity += 1; } 
    else { cart.push({ ...p, quantity: 1 }); }
    
    updateCartUI();
    closeModal();
    showToast("Added to cart successfully!"); // সফল হলে পপ-আপ মেসেজ দেখাবে
}

// ৬. পপ-আপ মেসেজ (Toast): এটিকে একদম সেন্টারে দেখানোর লজিক
function showToast(msg) {
    const t = document.getElementById('toast');
    t.innerText = msg;
    t.style.display = "block"; // মেসেজটি দেখাবে
    
    // ৩ সেকেন্ড পর মেসেজটি অটোমেটিক চলে যাবে
    setTimeout(() => {
        t.style.display = "none";
    }, 3000);
}

// ৭. ভ্যালিডেশন: ফরম ঠিকমতো পূরণ না করলে লাল এরর দেখাবে
function validateAndOrder() {
    // এরর মেসেজগুলো রিসেট করা
    document.querySelectorAll('.error-text').forEach(e => e.innerText = "");
    document.querySelectorAll('input, textarea, select').forEach(i => i.classList.remove('input-error'));

    const name = document.getElementById('orderName').value.trim();
    const phone = document.getElementById('orderPhone').value.trim();
    const address = document.getElementById('orderAddress').value.trim();
    const payment = document.getElementById('paymentMethod').value;

    let isValid = true;

    // নাম চেক করা
    if (!name) { showError('orderName', 'nameError', "Full name is required"); isValid = false; }
    
    // মোবাইল নাম্বার চেক (১১ ডিজিট ও সঠিক অপারেটর কোড)
    const phoneRegex = /^(013|014|015|016|017|018|019)\d{8}$/;
    if (!phone) { showError('orderPhone', 'phoneError', "Mobile number is required"); isValid = false; }
    else if (!phoneRegex.test(phone)) { showError('orderPhone', 'phoneError', "Invalid mobile number"); isValid = false; }

    // ঠিকানা এবং পেমেন্ট চেক
    if (!address) { showError('orderAddress', 'addressError', "Address is required"); isValid = false; }
    if (!payment) { showError('paymentMethod', 'paymentError', "Select payment method"); isValid = false; }
    
    if (cart.length === 0) { alert("Please add products to cart!"); return; }

    // সব ঠিক থাকলে কনফার্মেশন বক্স দেখাবে
    if (isValid) { document.getElementById('confirmBox').style.display = "block"; }
}

// ৮. এরর হাইলাইট করার ফাংশন
function showError(id, errId, msg) {
    document.getElementById(id).classList.add('input-error');
    document.getElementById(errId).innerText = msg;
}

// ৯. ফাইনাল অর্ডার প্রসেস: সফল হলে অভিনন্দন মেসেজ ও আইডি দেখাবে
function finalOrderProcess() {
    document.getElementById('confirmBox').style.display = "none";
    const orderID = "#00" + (Math.floor(Math.random() * 900) + 100); // র‍্যান্ডম আইডি জেনারেট
    
    const successBox = document.getElementById('successBox');
    document.getElementById('successMessage').innerHTML = `
        <div style="padding:10px;">
            <div style="font-size:50px; margin-bottom:10px;">✅</div>
            <h2 style="color:#28a745; margin-bottom:10px;">Congratulations!</h2>
            <p>Your order has been placed.</p>
            <div style="background:#f8f9fa; padding:15px; border-radius:10px; margin:15px 0;">
                Order ID: <b style="color:#f85606; font-size:18px;">${orderID}</b>
            </div>
            <p style="font-size:12px; color:#777;">Thank you for shopping with us.</p>
        </div>`;

    successBox.style.display = "block";
    
    // ৪ সেকেন্ড পর সবকিছু ক্লিয়ার করে হোমপেজে ফিরবে
    setTimeout(() => {
        successBox.style.display = "none";
        cart = [];
        updateCartUI();
        toggleCart();
    }, 4000);
}

// ইউটিলিটি ফাংশনগুলো (মডাল খোলা, বন্ধ, সার্চ এবং ফিল্টার)
function openModal(id) {
    const p = products.find(prod => prod.id === id);
    document.getElementById('modal-body').innerHTML = `
        <div style="text-align:center;">
            <span style="font-size:70px;">${p.img}</span>
            <h2 style="margin:10px 0;">${p.name}</h2>
            <p style="color:#666; font-size:14px; margin-bottom:15px;">${p.desc}</p>
            <h3 style="color:#f85606; font-size:24px; margin-bottom:20px;">৳ ${p.price}</h3>
            <button class="confirm-btn" onclick="addToCart(${p.id})">ADD TO CART</button>
        </div>`;
    document.getElementById('productModal').style.display = "block";
}

function searchProduct() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    displayProducts(products.filter(p => p.name.toLowerCase().includes(query)));
}

function filterCategory(cat) {
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    displayProducts(cat === 'all' ? products : products.filter(p => p.category === cat));
}

function toggleCart() {
    const modal = document.getElementById('cartModal');
    modal.style.display = (modal.style.display === "block") ? "none" : "block";
}

function closeModal() { document.getElementById('productModal').style.display = "none"; }
function closeConfirm() { document.getElementById('confirmBox').style.display = "none"; }

// পেজ লোড হওয়ার সাথে সাথে পণ্যগুলো দেখাবে
window.onload = () => displayProducts(products);

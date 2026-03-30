// ১. ৪০টি পণ্যের ডাটাবেস (প্রতি ক্যাটাগরিতে ১০টি করে)
const products = [
    // --- Grocery (১০টি) ---
    { id: 1, name: "Premium Miniket Rice (5kg)", price: 490, category: "grocery", img: "🍚", desc: "High-quality long grain rice for daily healthy meals. 100% organic and fresh." },
    { id: 2, name: "Pure Mustard Oil (1L)", price: 280, category: "grocery", img: "🧴", desc: "Cold-pressed natural mustard oil with strong aroma and health benefits." },
    { id: 3, name: "Natural Flower Honey (500g)", price: 550, category: "grocery", img: "🍯", desc: "100% organic honey collected from sundarban flowers." },
    { id: 4, name: "Lentils/Musur Dal (1kg)", price: 140, category: "grocery", img: "🥣", desc: "Fresh and clean premium quality red lentils." },
    { id: 5, name: "Soybean Oil (2L)", price: 340, category: "grocery", img: "🧪", desc: "Vitamin A enriched refined soybean oil for healthy cooking." },
    { id: 6, name: "Aromatic Chinigura Rice (1kg)", price: 160, category: "grocery", img: "🌾", desc: "Best for Biryani and Pulao with amazing fragrance." },
    { id: 7, name: "Powder Milk (400g)", price: 450, category: "grocery", img: "🥛", desc: "Full cream milk powder for tea and delicious sweets." },
    { id: 8, name: "Iodized Salt (1kg)", price: 45, category: "grocery", img: "🧂", desc: "Vacuum evaporated iodized salt for your kitchen." },
    { id: 9, name: "Spices Combo Pack", price: 220, category: "grocery", img: "🌶️", desc: "Set of Chilli, Turmeric, and Cumin powder." },
    { id: 10, name: "Black Tea (200g)", price: 120, category: "grocery", img: "☕", desc: "Strong blend black tea for instant refreshment." },

    // --- Electronics (১০টি) ---
    { id: 11, name: "Smart Watch T800 Ultra", price: 1250, category: "electronics", img: "⌚", desc: "Big display smart watch with health tracking and Bluetooth calling." },
    { id: 12, name: "Wireless Bluetooth Earbuds", price: 850, category: "electronics", img: "🎧", desc: "True wireless sound with noise cancellation technology." },
    { id: 13, name: "Power Bank 20,000mAh", price: 1850, category: "electronics", img: "🔋", desc: "Fast charging power bank with multiple USB ports." },
    { id: 14, name: "Portable Speaker Bass+", price: 1100, category: "electronics", img: "🔊", desc: "Crystal clear sound with heavy bass and RGB lights." },
    { id: 15, name: "LED Desk Lamp Pro", price: 550, category: "electronics", img: "💡", desc: "Eye-protection foldable study lamp with 3 brightness levels." },
    { id: 16, name: "RGB Gaming Mouse", price: 450, category: "electronics", img: "🖱️", desc: "High precision sensor with ergonomic design for gamers." },
    { id: 17, name: "Hair Trimmer Cordless", price: 950, category: "electronics", img: "✂️", desc: "Rechargeable cordless hair and beard trimmer for men." },
    { id: 18, name: "WiFi Router 300Mbps", price: 1450, category: "electronics", img: "📶", desc: "High speed dual-antenna router for home and office." },
    { id: 19, name: "Digital Kitchen Scale", price: 420, category: "electronics", img: "⚖️", desc: "Accurate weight measurement tool for perfect cooking." },
    { id: 20, name: "Multi-plug 5 Socket", price: 350, category: "electronics", img: "🔌", desc: "Safety surge protector with 3-meter long wire." },

    // --- Cosmetics (১০টি) ---
    { id: 21, name: "Matte Lipstick Set", price: 750, category: "cosmetics", img: "💄", desc: "Waterproof long-lasting lipstick set in 5 trendy shades." },
    { id: 22, name: "Face Wash Brightening", price: 320, category: "cosmetics", img: "🧼", desc: "Deep cleaning face wash for all skin types, gives instant glow." },
    { id: 23, name: "Sunscreen SPF 50", price: 650, category: "cosmetics", img: "☀️", desc: "High protection from harmful UV rays and skin tanning." },
    { id: 24, name: "Moisturizing Cream", price: 450, category: "cosmetics", img: "🧴", desc: "Soft skin moisturizer for 24-hour hydration." },
    { id: 25, name: "Black Kajal Stick", price: 150, category: "cosmetics", img: "🖊️", desc: "Smudge-proof deep black herbal kajal for beautiful eyes." },
    { id: 26, name: "Hair Growth Oil", price: 380, category: "cosmetics", img: "🍃", desc: "Natural herbal oil to reduce hair fall and promote growth." },
    { id: 27, name: "Floral Perfume (50ml)", price: 1250, category: "cosmetics", img: "🌸", desc: "Long-lasting premium fragrance for women." },
    { id: 28, name: "Nail Polish Combo", price: 280, category: "cosmetics", img: "💅", desc: "Set of 6 vibrant colors with smooth finish." },
    { id: 29, name: "Aloe Vera Gel 99%", price: 220, category: "cosmetics", img: "🌵", desc: "Pure soothing gel for skin and hair health." },
    { id: 30, name: "Makeup Brush Set", price: 550, category: "cosmetics", img: "🖌️", desc: "Professional quality soft brushes for perfect makeup." },

    // --- Kids Care (১০টি) ---
    { id: 31, name: "Baby Diapers (Large)", price: 1150, category: "kids", img: "👶", desc: "Soft and breathable pant-style diapers for baby comfort." },
    { id: 32, name: "Baby Lotion 200ml", price: 350, category: "kids", img: "🧴", desc: "Gentle non-greasy lotion for delicate baby skin." },
    { id: 33, name: "Soft Plush Toy Bear", price: 550, category: "kids", img: "🧸", desc: "Safe and washable soft toy for children to play." },
    { id: 34, name: "Baby Feeding Bottle", price: 280, category: "kids", img: "🍼", desc: "BPA-free high-quality safe feeding bottle for infants." },
    { id: 35, name: "Kids School Bag", price: 850, category: "kids", img: "🎒", desc: "Lightweight and colorful bag with multiple pockets." },
    { id: 36, name: "Baby Wipes (80 pcs)", price: 180, category: "kids", img: "🧻", desc: "Alcohol-free hygienic wet wipes for sensitive skin." },
    { id: 37, name: "Baby Soap Mild", price: 95, category: "kids", img: "🧼", desc: "pH balanced soap to keep baby skin soft and clean." },
    { id: 38, name: "Building Blocks Set", price: 650, category: "kids", img: "🧱", desc: "Educational toy to improve creativity and focus." },
    { id: 39, name: "Baby Shampoo 100ml", price: 260, category: "kids", img: "🛁", desc: "No-more-tears gentle hair cleanser for babies." },
    { id: 40, name: "Kids Water Bottle", price: 220, category: "kids", img: "🥤", desc: "Colorful and durable water bottle with straw." }
];

let cart = [];

// ২. প্রোডাক্ট ডিসপ্লে (মোবাইলে ৩ কলাম CSS দ্বারা নিয়ন্ত্রিত)
function displayProducts(items) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = "";
    items.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.onclick = () => openModal(p.id);
        card.innerHTML = `
            <span class="p-img">${p.img}</span>
            <div class="p-name">${p.name}</div>
            <div class="p-price">৳ ${p.price}</div>
        `;
        grid.appendChild(card);
    });
}

// ৩. Temu Style মডাল (ডেসক্রিপশন + বাই বাটন)
function openModal(id) {
    const p = products.find(prod => prod.id === id);
    const modal = document.getElementById('productModal');
    const body = document.getElementById('modal-body');
    
    body.innerHTML = `
        <div style="text-align:center;">
            <span style="font-size:100px; display:block; margin-bottom:15px;">${p.img}</span>
            <h2 style="margin-bottom:10px; font-size:22px;">${p.name}</h2>
            <p style="color:#666; font-size:14px; line-height:1.6; margin-bottom:20px;">${p.desc}</p>
            <h3 style="color:#f85606; font-size:26px; margin-bottom:20px;">৳ ${p.price}</h3>
            <div style="display:flex; gap:10px;">
                <button class="confirm-btn" style="background:#232f3e;" onclick="addToCart(${p.id})">ADD TO CART</button>
                <button class="confirm-btn" onclick="buyNow(${p.id})">BUY NOW</button>
            </div>
        </div>
    `;
    modal.style.display = "block";
}

// ৪. ইউনিক আইটেম লজিক (কার্ট আইকনে ইউনিক সংখ্যা দেখাবে)
function addToCart(id) {
    const p = products.find(prod => prod.id === id);
    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...p, quantity: 1 });
    }
    
    updateCartUI();
    closeModal();
    showToast("Added to cart successfully!", 1000); // ১ সেকেন্ডের জন্য উপরে পপ-আপ
}

function buyNow(id) {
    addToCart(id);
    toggleCart();
}

// ৫. কার্ট ইউআই (ইউনিক আইটেম সংখ্যা প্রদর্শন)
function updateCartUI() {
    // এখানে cart.length ব্যবহার করা হয়েছে যেন ইউনিক সংখ্যা দেখায়
    document.getElementById('cart-count').innerText = cart.length;
    
    const container = document.getElementById('cart-items-container');
    const totalSpan = document.getElementById('cart-total');
    container.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += (item.price * item.quantity);
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div style="flex:1">
                <div style="font-weight:bold; font-size:14px;">${item.name}</div>
                <div style="color:#f85606;">৳ ${item.price} x ${item.quantity}</div>
            </div>
            <div style="display:flex; align-items:center; gap:10px;">
                <button class="qty-btn" onclick="changeQty(${index}, -1)">-</button>
                <span style="font-weight:bold; min-width:20px; text-align:center;">${item.quantity}</span>
                <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
            </div>
        `;
        container.appendChild(div);
    });
    totalSpan.innerText = total;
}

function changeQty(index, delta) {
    cart[index].quantity += delta;
    if (cart[index].quantity < 1) cart.splice(index, 1);
    updateCartUI();
}

// ৬. ১১ ডিজিট ভ্যালিডেশন ও রেড স্টার এরর মেসেজ (২ সেকেন্ড)
function validateAndOrder() {
    const name = document.getElementById('orderName').value.trim();
    const phone = document.getElementById('orderPhone').value.trim();
    const address = document.getElementById('orderAddress').value.trim();
    const payment = document.getElementById('paymentMethod').value;

    if (!name || !phone || !address || !payment) {
        showToast("Error: Please fill all red star fields!", 2000);
        return;
    }

    if (phone.length !== 11 || isNaN(phone)) {
        showToast("Error: Mobile number must be 11 digits!", 2000);
        return;
    }

    if (cart.length === 0) {
        showToast("Error: Your shopping cart is empty!", 2000);
        return;
    }

    alert(`Success! Order Confirmed. \nCustomer: ${name} \nTotal Bill: ৳${document.getElementById('cart-total').innerText}`);
    cart = [];
    updateCartUI();
    toggleCart();
}

// ৭. ইউটিলিটি ফাংশন (সার্চ, ফিল্টার, টোস্ট)
function searchProduct() {
    const term = document.getElementById('searchInput').value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(term));
    displayProducts(filtered);
}

function filterCategory(cat) {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    const filtered = cat === 'all' ? products : products.filter(p => p.category === cat);
    displayProducts(filtered);
}

function showToast(msg, duration) {
    const toast = document.getElementById('toast');
    toast.innerText = msg;
    toast.style.display = "block";
    setTimeout(() => { toast.style.display = "none"; }, duration);
}

function toggleCart() {
    const modal = document.getElementById('cartModal');
    modal.style.display = modal.style.display === "block" ? "none" : "block";
}

function closeModal() {
    document.getElementById('productModal').style.display = "none";
}

// পেজ লোড হলে পণ্য দেখানো
window.onload = () => displayProducts(products);

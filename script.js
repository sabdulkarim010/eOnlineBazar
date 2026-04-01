/* Project: eOnlineBazar 
   Developer: Abdul Karim 
   Status: Fully Updated with 40 Products & Fixed UI
*/

// ১. আপনার ৪০টি পণ্যের পূর্ণাঙ্গ লিস্ট (একটিও বাদ পড়েনি)
const products = [
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

// ২. ডিসপ্লে ফাংশন (প্রডাক্ট গ্রিড)
function displayProducts(items) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    grid.innerHTML = items.map(p => `
        <div class="product-card" onclick="openModal(${p.id})">
            <button class="add-fast-btn" onclick="event.stopPropagation(); addToCart(${p.id}, event)">+</button>
            <div class="p-img">${p.img}</div>
            <div class="p-name">${p.name}</div>
            <div class="p-price">৳ ${p.price}</div>
        </div>
    `).join('');
}

// ৩. মডাল ওপেন
function openModal(id) {
    const p = products.find(prod => prod.id === id);
    const modalBody = document.getElementById('modal-body');
    const modal = document.getElementById('productModal');
    if (p && modalBody) {
        modalBody.innerHTML = `
            <div style="text-align:center; padding: 20px;">
                <span style="font-size:80px;">${p.img}</span>
                <h2>${p.name}</h2>
                <p style="color:#666;">${p.desc}</p>
                <h3 style="color:#f85606; font-size:24px;">৳ ${p.price}</h3>
                <button class="confirm-btn" style="width:100%; margin-top:20px;" onclick="addToCart(${p.id}, event); closeModal();">ADD TO CART</button>
            </div>`;
        modal.style.display = "block";
    }
}
function closeModal() { document.getElementById('productModal').style.display = "none"; }

// ৪. ওড়ার অ্যানিমেশন ও কার্টে যোগ
function addToCart(id, event) {
    if(event) event.stopPropagation();
    const product = products.find(p => p.id === id);
    if (!product) return;

    // এনিমেশন কোড (আপনার অরিজিনাল কোড অনুযায়ী)
    const cartIcon = document.querySelector('.cart-wrapper');
    let sourceImg = null;
    const modal = document.getElementById('productModal');
    if (modal && modal.style.display === "block") {
        sourceImg = modal.querySelector('span[style*="font-size:80px"]');
    } else {
        const card = event ? event.target.closest('.product-card') : null;
        sourceImg = card ? card.querySelector('.p-img') : null;
    }

    if (sourceImg && cartIcon) {
        const flyingItem = document.createElement('div');
        flyingItem.innerHTML = sourceImg.innerHTML; 
        const rect = sourceImg.getBoundingClientRect();
        const cartRect = cartIcon.getBoundingClientRect();
        flyingItem.style.cssText = `position: fixed; z-index: 10000; top: ${rect.top}px; left: ${rect.left}px; width: ${rect.width}px; height: ${rect.height}px; font-size: 30px; transition: all 0.8s ease-in-out; pointer-events: none;`;
        document.body.appendChild(flyingItem);
        setTimeout(() => {
            flyingItem.style.top = cartRect.top + 'px';
            flyingItem.style.left = cartRect.left + 'px';
            flyingItem.style.transform = 'scale(0.2)';
            flyingItem.style.opacity = '0';
        }, 50);
        setTimeout(() => flyingItem.remove(), 850);
    }

    let existing = cart.find(item => item.id === id);
    if (existing) { existing.quantity++; } else { cart.push({ ...product, quantity: 1 }); }
    updateCartUI();
    showToast(product.name + " added!");
}

// ৫. কার্ট UI আপডেট
function updateCartUI() {
    const count = document.getElementById('cart-count');
    const container = document.getElementById('cart-items-container');
    const totalSpan = document.getElementById('cart-total');
    if (count) count.innerText = cart.length;
    if (container) container.innerHTML = "";
    
    let total = 0;
    if (cart.length === 0) {
        if (container) container.innerHTML = `<p style="text-align:center; padding:20px; color:#888;">Your cart is empty!</p>`;
        if (totalSpan) totalSpan.innerText = "0";
        return; 
    }

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
    if (totalSpan) totalSpan.innerText = Math.round(total - (total * discountPercent));
}

// ৬. রিভিউ বক্স ও এডিট বাটন (FIXED GREY COLOR)
function validateAndOrder() {
    const name = document.getElementById('orderName').value.trim();
    const phone = document.getElementById('orderPhone').value.trim();
    const address = document.getElementById('orderAddress').value.trim();
    
    if (name.split(' ').length < 2) { showToast("Enter full name!"); return; }
    if (!/^01[3-9]\d{8}$/.test(phone)) { showToast("Invalid phone number!"); return; }
    if (address.length < 5) { showToast("Enter full address!"); return; }

    document.getElementById('cartModal').style.display = 'none';
    const confirmBox = document.getElementById('confirmBox');
    
    confirmBox.innerHTML = `
        <div class="popup-card" style="background: white; padding: 25px; border-radius: 20px; text-align: center; max-width: 350px; width: 90%; margin: auto; box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
            <h3 style="margin-bottom:15px;">অর্ডার রিভিউ করুন</h3>
            <div style="text-align:left; background:#f7f7f7; padding:15px; border-radius:10px; margin-bottom:20px; font-size:14px; border:1px solid #ddd;">
                <b>নাম:</b> ${name}<br>
                <b>ফোন:</b> ${phone}<br>
                <b>ঠিকানা:</b> ${address}
            </div>
            <div style="display:flex; gap:10px;">
                <button onclick="closeConfirm()" style="background:#6c757d; color:white; border:none; padding:12px; border-radius:10px; flex:1; font-weight:bold; cursor:pointer;">Edit</button>
                <button onclick="finalOrderProcess()" class="confirm-now-btn" style="background:#28a745; color:white; border:none; padding:12px; border-radius:10px; flex:1; font-weight:bold; cursor:pointer;">Confirm Now</button>
            </div>
        </div>
    `;
    confirmBox.style.display = 'flex';
}

function closeConfirm() { 
    document.getElementById('confirmBox').style.display = "none"; 
    document.getElementById('cartModal').style.display = "block"; 
}

// ৭. গুগল শিটে ডাটা পাঠানো (FINAL FIX)
async function finalOrderProcess() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzjIkqb_QYzGrxSe2DE4X6HihT-Z5mur2PMDhTNKQs0NBIbKl6KsbuUM_1bqY-CVvIchg/exec';
    const confirmBtn = document.querySelector(".confirm-now-btn");
    confirmBtn.innerText = "Sending...";
    confirmBtn.disabled = true;

    const orderId = "#EB" + Math.floor(1000 + Math.random() * 9000);
    const itemsSummary = cart.map(i => `${i.name}(${i.quantity})`).join(", ");

    const formData = new URLSearchParams();
    formData.append('Order_ID', orderId);
    formData.append('Name', document.getElementById('orderName').value);
    formData.append('Phone', document.getElementById('orderPhone').value);
    formData.append('Address', document.getElementById('orderAddress').value);
    formData.append('Items', itemsSummary);
    formData.append('Total', document.getElementById('cart-total').innerText);
    formData.append('Payment', document.querySelector('input[name="payment"]:checked')?.value || "COD");

    try {
        await fetch(scriptURL, { method: 'POST', mode: 'no-cors', body: formData });
        document.getElementById('confirmBox').style.display = 'none';
        showSuccessPopup(orderId);
        cart = [];
        updateCartUI();
    } catch (e) {
        alert("Error sending order!");
    } finally {
        confirmBtn.disabled = false;
        confirmBtn.innerText = "Confirm Now";
    }
}

// ৮. অন্যান্য ইউটিলিটি
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
    popup.className = 'modal-overlay';
    popup.style.cssText = "position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); display:flex; align-items:center; justify-content:center; z-index:99999;";
    popup.innerHTML = `<div style="background:white; padding:40px; border-radius:20px; text-align:center;">
        <h2 style="color:#28a745;">অর্ডার সফল!</h2>
        <p>অর্ডার আইডি: <b>${orderId}</b></p>
        <button onclick="this.parentElement.parentElement.remove()" style="background:#f85606; color:white; border:none; padding:10px 30px; border-radius:20px; cursor:pointer; margin-top:15px;">OK</button>
    </div>`;
    document.body.appendChild(popup);
}

window.onload = () => { displayProducts(products); updateCartUI(); };

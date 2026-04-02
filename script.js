
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

// --- Global Variables ---
let cart = []; 
let discountPercent = 0; // এটি একদম ফাইলের উপরে ডিক্লেয়ার করবেন

function applyCoupon() {
    const input = document.getElementById('couponInput').value.trim();
    const msg = document.getElementById('couponMessage');
    
    if (input === "SAVE10") {
        discountPercent = 0.10; // ১০% ডিসকাউন্ট
        msg.innerText = "10% Discount Applied! ✔️";
        msg.style.color = "green";
        showToast("Coupon Applied!");
    } else {
        discountPercent = 0;
        msg.innerText = "Invalid Coupon! ❌";
        msg.style.color = "red";
    }
    updateCartUI(); // টোটাল আপডেট করার জন্য
}


// ১. ডিসপ্লে ফাংশন
function displayProducts(items) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    grid.innerHTML = items.map(p => `
        <div class="product-card" onclick="openModal(${p.id})">
            <button class="add-fast-btn" onclick="event.stopPropagation(); addToCart(${p.id}, event)">+</button>
            <div>
                <span class="p-img">${p.img}</span>
                <div class="p-name">${p.name}</div>
                <div class="p-price">৳ ${p.price}</div>
            </div>
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
                <h2 style="margin:15px 0;">${p.name}</h2>
                <p style="color:#555; line-height:1.6; margin-bottom:20px;">${p.desc}</p>
                <h3 style="color:#f85606; font-size:24px;">৳ ${p.price}</h3>
                <button class="confirm-btn" style="width:100%; margin-top:20px;" onclick="addToCart(${p.id}, event); closeModal();">ADD TO CART</button>
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

        flyingItem.style.cssText = `
            position: fixed; z-index: 10000; 
            top: ${rect.top}px; left: ${rect.left}px;
            width: ${rect.width}px; height: ${rect.height}px; 
            font-size: ${rect.width > 50 ? '60px' : '30px'};
            transition: all 0.9s cubic-bezier(0.42, 0, 0.58, 1); 
            pointer-events: none;
            display: flex; align-items: center; justify-content: center;
        `;
        document.body.appendChild(flyingItem);

        setTimeout(() => {
            flyingItem.style.top = (cartRect.top + 5) + 'px';
            flyingItem.style.left = (cartRect.left + 5) + 'px';
            flyingItem.style.width = '20px';
            flyingItem.style.height = '20px';
            flyingItem.style.fontSize = '12px';
            flyingItem.style.opacity = '0.4';
            flyingItem.style.transform = 'scale(0.1) rotate(450deg)';
        }, 50);
        setTimeout(() => { flyingItem.remove(); }, 950);
    }

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
    const orderForm = document.getElementById('order-form-container');
    
    if (count) count.innerText = cart.length;
    if (container) container.innerHTML = "";
    
    let total = 0;
    if (cart.length === 0) {
        if (container) container.innerHTML = `<p style="text-align:center; padding:20px; color:#888;">Your cart is empty!</p>`;
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

// ৫. পেমেন্ট সিলেকশন
function selectPayment(method) {
    const labels = ['label-bkash', 'label-nagad', 'label-cod'];
    labels.forEach(id => {
        const element = document.getElementById(id);
        if (element) { element.style.border = "2px solid #ddd"; element.style.background = "none"; }
    });

    const selectedLabel = document.getElementById('label-' + method);
    const selectedRadio = document.getElementById('pay-' + method);
    if (selectedLabel && selectedRadio) {
        selectedLabel.style.border = "2px solid #f85606";
        selectedLabel.style.background = "#fff5f0";
        selectedRadio.checked = true;
    }
}

// ৬. ভ্যালিডেশন এবং রিভিউ বক্স দেখানো
function validateAndOrder() {
    const name = document.getElementById('orderName').value.trim();
    const phone = document.getElementById('orderPhone').value.trim();
    const address = document.getElementById('orderAddress').value.trim();
    
    if (name.split(' ').length < 2) { showToast("Enter full name!"); return; }
    if (!/^01[3-9]\d{8}$/.test(phone)) { showToast("Invalid phone number!"); return; }
    if (address.length < 5) { showToast("Enter full address!"); return; }

    // কার্ট মডাল বন্ধ করা এবং রিভিউ বক্স খোলা (ডাবল পপ-আপ সমস্যা সমাধান)
    document.getElementById('cartModal').style.display = 'none';
    document.getElementById('confirmBox').style.display = 'flex';
}

function closeConfirm() { 
    document.getElementById('confirmBox').style.display = "none"; 
    document.getElementById('cartModal').style.display = "block"; 
}

// ৭. ডেটাবেস ও ফাইনাল অর্ডার প্রসেস
function finalOrderProcess() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzjIkqb_QYzGrxSe2DE4X6HihT-Z5mur2PMDhTNKQs0NBIbKl6KsbuUM_1bqY-CVvIchg/exec';
    const confirmBtn = document.querySelector(".confirm-now-btn");
    confirmBtn.innerText = "Processing...";
    confirmBtn.disabled = true;

    const orderId = "#" + Math.floor(10000 + Math.random() * 90000).toString().substring(0, 5);
    const formData = new URLSearchParams();
    formData.append('Order ID', orderId);
    formData.append('Name', document.getElementById('orderName').value.trim());
    formData.append('Phone', document.getElementById('orderPhone').value.trim());
    formData.append('Address', document.getElementById('orderAddress').value.trim());
    
    const noteEl = document.getElementById('orderNote');
    formData.append('Note', noteEl ? noteEl.value.trim() : "");
    formData.append('Items', JSON.stringify(cart));
    formData.append('Total', document.getElementById('cart-total').innerText);
    
    const paymentEl = document.querySelector('input[name="payment"]:checked');
    formData.append('Payment', paymentEl ? paymentEl.value : "Not Selected");

    fetch(scriptURL, { method: 'POST', body: formData, mode: 'no-cors' })
    .then(() => {
        // সবকিছু হাইড করা
        document.getElementById('confirmBox').style.display = 'none';
        document.getElementById('cartModal').style.display = 'none';
        
        showSuccessPopup(orderId);
        cart = [];
        updateCartUI();
        
        // ফর্ম ক্লিয়ার
        document.getElementById('orderName').value = "";
        document.getElementById('orderPhone').value = "";
        document.getElementById('orderAddress').value = "";
        if(noteEl) noteEl.value = "";
        
        confirmBtn.innerText = "Confirm Now";
        confirmBtn.disabled = false;
    })
    .catch(error => {
        alert("Network Error!");
        confirmBtn.disabled = false;
    });
}

// ৮. ১০ সেকেন্ডের সাকসেস পপ-আপ
function showSuccessPopup(orderId) {
    const oldPopup = document.getElementById('success-popup');
    if(oldPopup) oldPopup.remove();

    const popup = document.createElement('div');
    popup.id = 'success-popup';
    
    const style = document.createElement('style');
    style.innerHTML = `
        #success-popup { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); display: flex; align-items: center; justify-content: center; z-index: 99999; animation: fadeIn 0.4s ease; }
        .popup-card-final { background: white; padding: 40px 20px; border-radius: 25px; text-align: center; max-width: 380px; width: 90%; box-shadow: 0 15px 50px rgba(0,0,0,0.5); animation: slideUp 0.5s ease; }
        .order-id-display { background: #f1f2f6; padding: 15px; border-radius: 12px; margin: 20px 0; font-size: 18px; font-weight: bold; border: 2px dashed #dfe6e9; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(50px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
    `;
    document.head.appendChild(style);

    popup.innerHTML = `
        <div class="popup-card-final">
            <div style="font-size:60px;">✅</div>
            <h2>Congratulations!</h2>
            <p>Thank you for your purchase.<br>Your order has been placed.</p>
            <div class="order-id-display">Order ID: <span style="color:#f85606;">${orderId}</span></div>
            <p style="font-size:14px; color:#888;">We will call you shortly for confirmation.</p>
            <button onclick="document.getElementById('success-popup').remove()" style="background:#f85606; color:white; border:none; padding:12px 35px; border-radius:30px; font-weight:bold; cursor:pointer;">Close</button>
        </div>`;

    document.body.appendChild(popup);
    setTimeout(() => {
        const p = document.getElementById('success-popup');
        if(p) { p.style.opacity = '0'; p.style.transition = 'opacity 1s ease'; setTimeout(() => p.remove(), 1000); }
    }, 10000); 
}


// ৯. অন্যান্য ইউটিলিটি
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
    if(m) m.style.display = (m.style.display === "block") ? "none" : "block";
}

function showToast(msg) {
    let t = document.getElementById('toast');
    if(!t) { t = document.createElement('div'); t.id = 'toast'; document.body.appendChild(t); }
    t.innerText = msg; t.style.display = "block";
    setTimeout(() => { t.style.display = "none"; }, 3000);
}

// রিয়েল-টাইম ভ্যালিডেশন সেটআপ
function setupValidation() {
    const fields = ['orderName', 'orderPhone', 'orderAddress'];
    fields.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('input', function() {
                const val = this.value.trim();
                let ok = false;
                if (id === 'orderName') ok = val.split(' ').length >= 2;
                else if (id === 'orderPhone') ok = /^01[3-9]\d{8}$/.test(val);
                else if (id === 'orderAddress') ok = val.length >= 5;
                this.style.border = ok ? "2px solid green" : "2px solid red";
            });
        }
    });
}

window.onload = () => { displayProducts(products); updateCartUI(); setupValidation(); };

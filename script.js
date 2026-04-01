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
let discountPercent = 0; 

// ১. ডিসপ্লে ফাংশন (প্লাস বাটন বা কার্ডে ক্লিক করলে কার্টে যাবে, কিন্তু অটো কার্ট ওপেন হবে না)
function displayProducts(items) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    grid.innerHTML = items.map(p => `
        <div class="product-card" onclick="addToCart(${p.id}, event)">
            <button class="add-fast-btn">+</button>
            <div>
                <span class="p-img">${p.img}</span>
                <div class="p-name">${p.name}</div>
                <div class="p-price">৳ ${p.price}</div>
            </div>
        </div>
    `).join('');
}

// ২. ওড়ার অ্যানিমেশন ও কার্টে যোগ (Flying Animation - Emoji & Image Support)
function addToCart(id, event) {
    // সমস্যা ৩ ও ৪ সমাধান: অটো কার্ট ওপেন বন্ধ করা হয়েছে। শুধু অ্যানিমেশন হবে।
    const productCard = event.currentTarget;
    const cartIcon = document.querySelector('.cart-wrapper');

    if (productCard && cartIcon) {
        const targetElement = productCard.querySelector('.p-img');
        const flyingItem = document.createElement('div');
        
        // সমস্যা ৫ সমাধান: ইমোজি বা ইমেজ দুটোর জন্যই অ্যানিমেশন
        flyingItem.innerHTML = targetElement.innerHTML; 
        const rect = targetElement.getBoundingClientRect();
        const cartRect = cartIcon.getBoundingClientRect();

        flyingItem.style.cssText = `
            position: fixed; z-index: 9999; top: ${rect.top}px; left: ${rect.left}px;
            width: ${rect.width}px; height: ${rect.height}px; font-size: 30px;
            transition: all 0.8s cubic-bezier(0.42, 0, 0.58, 1); pointer-events: none;
            display: flex; align-items: center; justify-content: center;
        `;
        document.body.appendChild(flyingItem);

        setTimeout(() => {
            flyingItem.style.top = (cartRect.top + 10) + 'px';
            flyingItem.style.left = (cartRect.left + 10) + 'px';
            flyingItem.style.width = '20px';
            flyingItem.style.height = '20px';
            flyingItem.style.opacity = '0.3';
            flyingItem.style.transform = 'scale(0.2) rotate(360deg)';
        }, 50);

        setTimeout(() => { flyingItem.remove(); }, 850);
    }

    const product = products.find(p => p.id === id);
    if (product) {
        let existing = cart.find(item => item.id === id);
        if (existing) { existing.quantity++; } 
        else { cart.push({ ...product, quantity: 1 }); }
        updateCartUI();
        showToast(product.name + " added to cart!");
    }
}

// ৩. কার্ট UI ও কুপন (সমস্যা ১ সমাধান)
function updateCartUI() {
    const count = document.getElementById('cart-count');
    const container = document.getElementById('cart-items-container');
    const totalSpan = document.getElementById('cart-total');
    const orderForm = document.getElementById('order-form-container');
    
    if (count) count.innerText = cart.length;
    if (container) container.innerHTML = "";
    
    let total = 0;
    if (cart.length === 0) {
        container.innerHTML = `<p style="text-align:center; padding:20px; color:#999;">Your cart is empty!</p>`;
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

function changeQty(index, delta) {
    cart[index].quantity += delta;
    if (cart[index].quantity < 1) cart.splice(index, 1);
    updateCartUI();
}

// ৪. কুপন কোড (SAVE10)
function applyCoupon() {
    const input = document.getElementById('couponInput');
    const msg = document.getElementById('couponMessage');
    if (input.value.trim().toUpperCase() === "SAVE10") {
        discountPercent = 0.10;
        msg.innerText = "Success! 10% Discount Applied.";
        msg.style.color = "green";
    } else {
        discountPercent = 0;
        msg.innerText = "Invalid Coupon Code!";
        msg.style.color = "red";
    }
    msg.style.display = "block";
    updateCartUI();
}

// ৫. পেমেন্ট হাইলাইট (সমস্যা ২ সমাধান)
function selectPayment(method) {
    // সব বর্ডার রিসেট করা
    document.querySelectorAll('.payment-label').forEach(label => {
        label.style.borderColor = "#ddd";
        label.style.background = "white";
        label.style.boxShadow = "none";
    });

    // নির্দিষ্ট মেথড হাইলাইট করা
    const activeLabel = document.getElementById('label-' + method);
    if (activeLabel) {
        activeLabel.style.borderColor = "#f85606";
        activeLabel.style.background = "#fffaf7";
        activeLabel.style.boxShadow = "0 0 5px rgba(248, 86, 6, 0.2)";
    }

    const radio = document.getElementById('pay-' + method);
    if (radio) radio.checked = true;
    
    showToast("Selected: " + method.toUpperCase());
}

// ৬. প্রফেশনাল ইংরেজি ভ্যালিডেশন
function validateAndOrder() {
    const name = document.getElementById('orderName');
    const phone = document.getElementById('orderPhone');
    const address = document.getElementById('orderAddress');
    const payment = document.querySelector('input[name="payment"]:checked');
    
    let isValid = true;

    // Reset styles
    [name, phone, address].forEach(el => {
        el.style.borderColor = "#ddd";
        const err = document.getElementById(el.id + 'Error');
        if(err) err.innerText = "";
    });

    if (!name.value.trim()) {
        name.style.borderColor = "red";
        document.getElementById('nameError').innerText = "Full name is required";
        isValid = false;
    }

    const phonePattern = /^(013|014|015|016|017|018|019)\d{8}$/;
    if (!phonePattern.test(phone.value.trim())) {
        phone.style.borderColor = "red";
        document.getElementById('phoneError').innerText = "Valid 11-digit BD number required";
        isValid = false;
    }

    if (address.value.trim().length < 5) {
        address.style.borderColor = "red";
        document.getElementById('addressError').innerText = "Complete shipping address is required";
        isValid = false;
    }

    if (!payment) {
        showToast("Please select a payment method!");
        isValid = false;
    }

    if (isValid) {
        document.getElementById('order-form-container').style.display = "none";
        document.getElementById('confirmBox').style.display = "block";
    }
}

// ৭. ডেটাবেস প্রসেস ও থ্যাঙ্ক ইউ মেসেজ
function finalOrderProcess() {
    const orderID = "#EB" + Math.floor(1000 + Math.random() * 9000);
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzjIkqb_QYzGrxSe2DE4X6HihT-Z5mur2PMDhTNKQs0NBIbKl6KsbuUM_1bqY-CVvIchg/exec';
    const payment = document.querySelector('input[name="payment"]:checked').value;

    const orderData = {
        orderID,
        name: document.getElementById('orderName').value,
        phone: document.getElementById('orderPhone').value,
        address: document.getElementById('orderAddress').value,
        items: cart.map(i => `${i.name} (${i.quantity})`).join(", "),
        total: document.getElementById('cart-total').innerText,
        method: payment.toUpperCase()
    };

    fetch(scriptURL, { method: 'POST', mode: 'no-cors', body: JSON.stringify(orderData) });

    document.getElementById('confirmBox').style.display = "none";
    const success = document.getElementById('successBox');
    success.innerHTML = `
        <div style="text-align:center; padding:30px; font-family: sans-serif;">
            <div style="font-size:60px; color:#28a745;">✔</div>
            <h2 style="margin:15px 0;">Thank You!</h2>
            <p>Your order has been placed successfully.</p>
            <p style="font-size:18px; margin:10px 0;">Order ID: <b>${orderID}</b></p>
            <button onclick="location.reload()" style="margin-top:20px; padding:12px 25px; background:#f85606; color:white; border:none; border-radius:5px; cursor:pointer; font-weight:bold;">CONTINUE SHOPPING</button>
        </div>`;
    success.style.display = "block";
    cart = []; updateCartUI();
}

// অন্যান্য ফাংশন
function toggleCart() {
    const m = document.getElementById('cartModal');
    m.style.display = (m.style.display === "block") ? "none" : "block";
}

function showToast(msg) {
    let t = document.getElementById('toast');
    if(t) { t.innerText = msg; t.style.display = "block"; setTimeout(() => { t.style.display = "none"; }, 3000); }
}

window.onload = () => { displayProducts(products); updateCartUI(); };

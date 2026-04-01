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

// গ্লোবাল ভেরিয়েবল
let cart = []; 
let discountPercent = 0; 

// ২. প্রোডাক্ট ডিসপ্লে ফাংশন
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
        container.innerHTML = `
            <div style="text-align:center; padding: 40px 20px;">
                <div style="font-size: 60px; margin-bottom: 15px;">🛒</div>
                <h3 style="color: #555; margin-bottom: 10px;">Your cart is empty!</h3>
                <p style="color: #888; font-size: 14px;">No items have been added to your cart yet.</p>
                <button class="confirm-btn" style="margin-top: 20px; background: #232f3e;" onclick="toggleCart()">Start Shopping</button>
            </div>`;
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
            <div style="flex:1">
                <b style="font-size:15px; color:#232f3e;">${item.name}</b><br>
                <span style="color:#666;">৳ ${item.price} x ${item.quantity}</span>
            </div>
            <div style="display:flex; align-items:center; gap:15px;"> 
                <button class="qty-btn" onclick="changeQty(${index}, -1)">−</button>
                <span class="qty-count">${item.quantity}</span>
                <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
            </div>`;
        if (container) container.appendChild(div);
    });

    let discountAmount = total * discountPercent;
    let finalTotal = total - discountAmount;

    if (totalSpan) {
        totalSpan.innerText = Math.round(finalTotal);
    }
}

// ৪. পরিমাণ পরিবর্তন
function changeQty(index, delta) {
    cart[index].quantity += delta;
    if (cart[index].quantity < 1) cart.splice(index, 1);
    updateCartUI();
}

// ৫. কার্টে যোগ করা
function addToCart(id) {
    const btn = event.target;
    const cartIcon = document.querySelector('.cart-area');
    const productCard = btn.closest('.product-card') || btn.closest('.modal-content');

    if (productCard && cartIcon) {
        // ১. ছবি বা ইমোজি কন্টেইনার খুঁজে বের করা
        const targetElement = productCard.querySelector('img') || productCard.querySelector('.p-img') || productCard.querySelector('span');

        if (targetElement) {
            const flyingItem = document.createElement(targetElement.tagName === 'IMG' ? 'img' : 'span');
            
            // ২. যদি ইমেজ হয় তবে src নিবে, আর ইমোজি হলে টেক্সট নিবে
            if (targetElement.tagName === 'IMG') {
                flyingItem.src = targetElement.src;
            } else {
                flyingItem.innerText = targetElement.innerText;
                flyingItem.style.fontSize = '40px';
                flyingItem.style.display = 'flex';
                flyingItem.style.alignPosition = 'center';
                flyingItem.style.justifyContent = 'center';
            }

            const rect = targetElement.getBoundingClientRect();
            const cartRect = cartIcon.getBoundingClientRect();

            // ৩. ওড়ার স্টাইল সেট করা
            flyingItem.style.cssText += `
                position: fixed;
                z-index: 10000;
                top: ${rect.top}px;
                left: ${rect.left}px;
                width: ${rect.width}px;
                height: ${rect.height}px;
                object-fit: cover;
                pointer-events: none;
                transition: all 0.9s cubic-bezier(0.24, 1.05, 0.72, 1.1);
            `;

            document.body.appendChild(flyingItem);

            // ৪. কার্টের দিকে পাঠিয়ে দেওয়া
            setTimeout(() => {
                flyingItem.style.top = (cartRect.top + 5) + 'px';
                flyingItem.style.left = (cartRect.left + 10) + 'px';
                flyingItem.style.width = '20px';
                flyingItem.style.height = '20px';
                if(targetElement.tagName !== 'IMG') flyingItem.style.fontSize = '12px';
                flyingItem.style.opacity = '0.4';
                flyingItem.style.transform = 'rotate(360deg)';
            }, 50);

            setTimeout(() => {
                flyingItem.remove();
                cartIcon.style.transform = "scale(1.3)";
                setTimeout(() => cartIcon.style.transform = "scale(1)", 200);
            }, 900);
        }
    }

    // ৫. কার্ট ডাটা লজিক
    const product = products.find(p => p.id === id);
    if (product) {
        let existing = cart.find(item => item.id === id);
        if (existing) {
            existing.quantity += 1;
        } else {
            product.quantity = 1;
            cart.push(product);
        }
        updateCartUI();
        showToast(product.name + " added to cart!");
    }
}




// ৬. টোস্ট মেসেজ
function showToast(msg) {
    const t = document.getElementById('toast');
    if (!t) return;
    t.innerText = msg;
    t.style.display = "block"; 
    setTimeout(() => { t.style.display = "none"; }, 3000);
}

// ৭. অর্ডার ভ্যালিডেশন
function validateAndOrder() {
    // ইনপুট এবং এরর মেসেজ দেখানোর জায়গাগুলো ধরা
    const name = document.getElementById('orderName');
    const phone = document.getElementById('orderPhone');
    const address = document.getElementById('orderAddress');
    
    const nameError = document.getElementById('nameError');
    const phoneError = document.getElementById('phoneError');
    const addressError = document.getElementById('addressError');

    // শুরুতে সব এরর পরিষ্কার করা এবং লাল বর্ডার সরানো
    let isValid = true;
    [name, phone, address].forEach(el => el.style.borderColor = "#ddd");
    [nameError, phoneError, addressError].forEach(el => el.innerText = "");

    // ১. নাম ভ্যালিডেশন
    if (name.value.trim() === "") {
        name.style.borderColor = "red";
        nameError.innerText = "Please enter your full name";
        isValid = false;
    }

    // ২. মোবাইল নম্বর ভ্যালিডেশন (১১ ডিজিট এবং বিডি ফরম্যাট)
    const phoneValue = phone.value.trim();
    const phonePattern = /^(013|014|015|016|017|018|019)\d{8}$/;
    if (phoneValue === "") {
        phone.style.borderColor = "red";
        phoneError.innerText = "Please enter your mobile number";
        isValid = false;
    } else if (!phonePattern.test(phoneValue)) {
        phone.style.borderColor = "red";
        phoneError.innerText = "Enter a valid 11-digit BD number (e.g. 017...)";
        isValid = false;
    }

    // ৩. ঠিকানা ভ্যালিডেশন
    if (address.value.trim() === "") {
        address.style.borderColor = "red";
        addressError.innerText = "Please enter your full address";
        isValid = false;
    }

    // ৪. পেমেন্ট মেথড চেক
    const paymentOption = document.querySelector('input[name="payment"]:checked');
    if (!paymentOption) {
        showToast("Please select a payment method!");
        isValid = false;
    }

    // সব ঠিক থাকলে পরবর্তী ধাপে যাবে
    if (isValid) {
        // পেমেন্ট গেটওয়ে মেসেজ (প্রফেশনাল টোস্ট)
        if (paymentOption.value === 'bkash') {
            showToast("Redirecting to bKash Gateway...");
        } else if (paymentOption.value === 'nagad') {
            showToast("Redirecting to Nagad Gateway...");
        } else {
            showToast("Processing your order...");
        }

        // ফর্ম হাইড করে রিভিউ বক্স দেখানো (ডাবল পপ-আপ বন্ধ করতে)
        document.getElementById('order-form-container').style.display = "none";
        document.getElementById('confirmBox').style.display = "block";
    

    }
}

// এই ফাংশনটি রিভিউ বক্স বন্ধ করবে এবং ফর্মটি আবার ফিরিয়ে আনবে
function closeConfirm() {
    // ১. রিভিউ বক্স হাইড করা
    document.getElementById('confirmBox').style.display = "none";
    
    // ২. অর্ডার ফর্মটি আবার ফিরিয়ে আনা (ডাবল পপ-আপ সমস্যা সমাধানের জন্য)
    document.getElementById('order-form-container').style.display = "block";
}

// ৮. ফাইনাল অর্ডার প্রসেস শুরু
function finalOrderProcess() {
    document.getElementById('confirmBox').style.display = "none";
    const orderID = "#00" + (Math.floor(Math.random() * 900) + 100);

    
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
    
    setTimeout(() => {
        successBox.style.display = "none";
        cart = [];
        document.getElementById('orderName').value = "";
        document.getElementById('orderPhone').value = "";
        document.getElementById('orderAddress').value = "";
        document.getElementById('orderNote').value = "";
        updateCartUI();
        toggleCart();
    }, 4000);
}

// ৯. মডাল ও সার্চ লজিক
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
    const term = document.getElementById('searchInput').value.toLowerCase();
    // আপনার প্রোডাক্টগুলো যে বক্সের ভেতরে থাকে সেটির ক্লাস '.product-card'
    const products = document.querySelectorAll('.product-card'); 

    products.forEach(product => {
        // এখানে আমরা প্রোডাক্টের ভেতরের সব টেক্সট (নাম, দাম ইত্যাদি) চেক করছি
        const text = product.innerText.toLowerCase();
        
        if (text.includes(term)) {
            product.style.display = "block";
            // অ্যানিমেশন থাকলে সেটিও কাজ করবে
            product.style.animation = "fadeIn 0.5s ease forwards";
        } else {
            product.style.display = "none";
        }
    });
}




function filterCategory(cat) {
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    if (event) event.target.classList.add('active');
    
    const banner = document.querySelector('.coming-soon-banner');
    if (cat === 'all') {
        displayProducts(products);
        if (banner) banner.style.display = 'block';
    } else {
        displayProducts(products.filter(p => p.category === cat));
        if (banner) banner.style.display = 'none';
    }
}

function toggleCart() {
    const modal = document.getElementById('cartModal');
    modal.style.display = (modal.style.display === "block") ? "none" : "block";
}




function closeModal() { document.getElementById('productModal').style.display = "none"; }


// ১০. কুপন লজিক
function applyCoupon() {
    const couponCode = document.getElementById('couponInput').value.trim();
    const message = document.getElementById('couponMessage');
    
    if (couponCode === "SAVE10") {
        discountPercent = 0.10;
        message.innerText = "Success! 10% discount applied.";
        message.style.color = "#28a745";
    } else {
        discountPercent = 0;
        message.innerText = "Invalid Coupon!";
        message.style.color = "#dc3545";
    }
    message.style.display = "block";
    updateCartUI();
}

// ১১. পেমেন্ট সিলেকশন
function selectPayment(method) {
    const bkashLabel = document.getElementById('label-bkash');
    const nagadLabel = document.getElementById('label-nagad');
    const codLabel = document.getElementById('label-cod');
    
    // সব বর্ডার আগে সাধারণ করা
    if(bkashLabel) { bkashLabel.style.borderColor = "#ddd"; bkashLabel.style.background = "white"; }
    if(nagadLabel) { nagadLabel.style.borderColor = "#ddd"; nagadLabel.style.background = "white"; }
    if(codLabel) { codLabel.style.borderColor = "#ddd"; codLabel.style.background = "white"; }
    
    // সিলেক্ট করা বাটন হাইলাইট করা
    const selected = document.getElementById('label-' + method);
    if(selected) {
        selected.style.borderColor = "#f85606";
        selected.style.background = "#fffaf7";
    }
    
    // রেডিও বাটন চেক করা
    const radio = document.getElementById('pay-' + method);
    if(radio) radio.checked = true;
}

// ফাইলের একদম নিচে শুধু এইটুকু থাকবে
window.onload = () => {
    displayProducts(products);
    updateCartUI();
};

// প্রফেশনাল পপ-আপ (Toast) ফাংশন
function showToast(message) {
    let toast = document.getElementById('custom-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'custom-toast';
        toast.className = 'custom-toast';
        document.body.appendChild(toast);
    }
    toast.innerText = message;
    
    // পপ-আপ দেখানোর জন্য স্টাইল সেট করা
    toast.style.display = 'block';
    toast.style.opacity = '1';

    // ৩ সেকেন্ড পর নিজে থেকেই চলে যাবে
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => { toast.style.display = 'none'; }, 500);
    }, 3000);
}

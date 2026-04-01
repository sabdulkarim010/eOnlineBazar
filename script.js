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

// ১. ডিসপ্লে ফাংশন (আইটেমে ক্লিক করলে বিবরণ বা Modal আসবে)
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

// ৩. ওড়ার অ্যানিমেশন ও কার্টে যোগ
// ওড়ার অ্যানিমেশন এবং কার্টে যোগ করার মূল ফাংশন
function addToCart(id, event) {
    // ইভেন্ট বাবলিং বন্ধ করা
    if(event) event.stopPropagation();

    const product = products.find(p => p.id === id);
    if (!product) return;

    const cartIcon = document.querySelector('.cart-wrapper');
    
    // অ্যানিমেশনের জন্য সোর্স এলিমেন্ট নির্ধারণ
    let sourceImg = null;
    
    // চেক করা হচ্ছে ক্লিক কি মডাল (পপ-আপ) থেকে হয়েছে নাকি মেইন পেজ থেকে
    const modal = document.getElementById('productModal');
    if (modal && modal.style.display === "block") {
        // মডালের ভেতরের বড় ইমেজ/ইমোজিটি নিবে
        sourceImg = modal.querySelector('span[style*="font-size:80px"]');
    } else {
        // মেইন পেজের কার্ডের ভেতরের ইমেজ/ইমোজিটি নিবে
        const card = event ? event.target.closest('.product-card') : null;
        sourceImg = card ? card.querySelector('.p-img') : null;
    }

    // যদি সোর্স ইমেজ এবং কার্ট আইকন পাওয়া যায়, তবেই অ্যানিমেশন হবে
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

    // কার্টে ডেটা পুশ করা
    let existing = cart.find(item => item.id === id);
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    showToast(product.name + " added successfully!");
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
        container.innerHTML = `<p style="text-align:center; padding:20px; color:#888;">Your cart is empty!</p>`;
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

// ৫. পেমেন্ট হাইলাইট (কোনোটিই ডিফল্ট হাইলাইট থাকবে না)
// পেমেন্ট মেথড সিলেক্ট করার ফাংশন
function selectPayment(method) {
    // প্রথমে সব লেবেল থেকে হাইলাইট স্টাইল সরিয়ে ফেলুন
    const labels = ['label-bkash', 'label-nagad', 'label-cod'];
    labels.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.style.border = "2px solid #ddd"; // ডিফল্ট বর্ডার
            element.style.background = "none";       // ব্যাকগ্রাউন্ড রিমুভ
        }
    });

    // এখন যেটিতে ক্লিক করা হয়েছে সেটিকে হাইলাইট করুন
    const selectedLabel = document.getElementById('label-' + method);
    const selectedRadio = document.getElementById('pay-' + method);
    
    if (selectedLabel && selectedRadio) {
        selectedLabel.style.border = "2px solid #f85606"; // হাইলাইট কালার
        selectedLabel.style.background = "#fff5f0";      // হালকা ব্যাকগ্রাউন্ড
        selectedRadio.checked = true;                    // রেডিও বাটন সিলেক্ট
    }
}


// ৬. সিরিয়াল ভ্যালিডেশন এবং রিয়েল-টাইম ক্লিয়ার
function setupValidation() {
    const inputs = ['orderName', 'orderPhone', 'orderAddress'];
    inputs.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('input', () => {
                const err = document.getElementById(id + 'Error');
                if (id === 'orderName') {
                    // নাম ২ শব্দ হলে এরর মুছবে
                    if (el.value.trim().split(/\s+/).filter(w => w.length > 0).length >= 2) {
                        el.style.borderColor = "#ddd";
                        if (err) err.innerText = "";
                    }
                } else if (id === 'orderPhone') {
                    const phonePattern = /^(013|014|015|016|017|018|019)\d{8}$/;
                    if (phonePattern.test(el.value.trim())) {
                        el.style.borderColor = "#ddd";
                        if (err) err.innerText = "";
                    }
                } else {
                    if (el.value.trim() !== "") {
                        el.style.borderColor = "#ddd";
                        if (err) err.innerText = "";
                    }
                }
            });
        }
    });
}

// কনফার্ম বাটন ফাংশন (সিরিয়াল অনুযায়ী মেসেজ আসবে)
// ১. মেইন ফাংশন: কনফার্ম অর্ডার বাটনে ক্লিক করলে এটি আগে কাজ করবে
function validateAndOrder() {
    const name = document.getElementById('orderName');
    const phone = document.getElementById('orderPhone');
    const address = document.getElementById('orderAddress');
    
    let isValid = true;
    let errorMsg = "";

    // জাঙ্ক টেক্সট বা আজেবাজে টাইপিং (যেমন: gggggg বা jjjjj) চেক করার লজিক
    const isJunk = (str) => /(.)\1{4,}/.test(str);

    // নাম চেক (কমপক্ষে ২ শব্দ এবং জাঙ্ক ফিল্টার)
    if (name.value.trim().split(' ').length < 2 || isJunk(name.value.trim())) {
        name.style.border = "2px solid red";
        name.style.backgroundColor = "#ffe6e6";
        if(!errorMsg) errorMsg = "Please enter your valid full name!";
        isValid = false;
    }

    // ফোন চেক (সঠিক ১১ ডিজিট বিডি নাম্বার)
    if (!/^01[3-9]\d{8}$/.test(phone.value.trim())) {
        phone.style.border = "2px solid red";
        phone.style.backgroundColor = "#ffe6e6";
        if(!errorMsg) errorMsg = "Please enter a valid mobile number!";
        isValid = false;
    }

    // ঠিকানা চেক (কমপক্ষে ৩টি শব্দ থাকতে হবে)
    if (address.value.trim().split(' ').length < 3 || isJunk(address.value.trim())) {
        address.style.border = "2px solid red";
        address.style.backgroundColor = "#ffe6e6";
        if(!errorMsg) errorMsg = "Please provide a complete address!";
        isValid = false;
    }

    // কোনো একটি ঘর ভুল থাকলে সেন্টারে পপ-আপ মেসেজ আসবে
    if (!isValid) {
        showPopup(errorMsg);
        return;
    }

    // সব ঠিক থাকলে রিভিউ বক্স ওপেন হবে
    document.getElementById('confirmBox').style.display = 'flex';
}

// ২. টাইপ করার সময় রিয়েল-টাইম কালার চেঞ্জ (সবুজ/লাল) করার লজিক
const inputs = ['orderName', 'orderPhone', 'orderAddress'];
inputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
        el.addEventListener('input', function() {
            const value = this.trim ? this.value.trim() : this.value;
            
            // ঘর খালি থাকলে ডিফল্ট স্টাইল
            if (value === "") {
                this.style.border = "1px solid #ddd";
                this.style.backgroundColor = "#fff";
                return;
            }

            let isCorrect = false;
            if (id === 'orderName') {
                isCorrect = /^[a-zA-Z\s]{4,}$/.test(value) && value.split(' ').length >= 2 && !/(.)\1{4,}/.test(value);
            } else if (id === 'orderPhone') {
                isCorrect = /^01[3-9]\d{8}$/.test(value);
            } else if (id === 'orderAddress') {
                isCorrect = value.split(' ').length >= 3 && !/(.)\1{4,}/.test(value);
            }

            // সঠিক হলে সবুজ, ভুল হলে লাল বর্ডার ও হাইলাইট
            if (isCorrect) {
                this.style.border = "2px solid #28a745";
                this.style.backgroundColor = "#f0fff0";
            } else {
                this.style.border = "2px solid #dc3545";
                this.style.backgroundColor = "#fff5f5";
            }
        });
    }
});

// ৩. সেন্টারে (Center) পপ-আপ মেসেজ দেখানোর ফাংশন
function showPopup(msg) {
    let toast = document.getElementById('toast');
    if(!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        document.body.appendChild(toast);
    }
    
    toast.innerText = msg;
    // স্টাইল যা মেসেজটিকে স্ক্রিনের একদম মাঝখানে আনবে
    Object.assign(toast.style, {
        display: 'block',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#333',
        color: '#fff',
        padding: '20px 30px',
        borderRadius: '10px',
        zIndex: '10001',
        textAlign: 'center',
        boxShadow: '0 5px 20px rgba(0,0,0,0.3)',
        fontSize: '16px',
        fontWeight: 'bold',
        minWidth: '280px'
    });

    // ২ সেকেন্ড পর অটো হাইড হয়ে যাবে
    setTimeout(() => {
        toast.style.display = 'none';
    }, 2000);
}



// ৭. ডেটাবেস ও ফাইনাল অর্ডার প্রসেস
function finalOrderProcess() {
    const scriptURL = 'এখানে_আপনার_আসল_গুগল_স্ক্রিপ্ট_লিংক_দিন'; // <--- এটি চেক করুন

    // বাটন লোডিং দেখানো
    const confirmBtn = document.querySelector("#confirmBox button:last-child");
    const originalText = confirmBtn.innerText;
    confirmBtn.innerText = "Sending...";
    confirmBtn.disabled = true;

    const formData = new URLSearchParams();
    formData.append('name', document.getElementById('orderName').value.trim());
    formData.append('phone', document.getElementById('orderPhone').value.trim());
    formData.append('address', document.getElementById('orderAddress').value.trim());
    formData.append('note', document.getElementById('orderNote').value.trim());
    formData.append('items', JSON.stringify(cart));
    formData.append('total', document.getElementById('cart-total').innerText);
    
    // পেমেন্ট মেথড চেক
    const paymentEl = document.querySelector('input[name="payment"]:checked');
    formData.append('payment', paymentEl ? paymentEl.value : "Not Selected");

    fetch(scriptURL, { method: 'POST', body: formData })
    .then(response => {
        // অর্ডার সফল হলে
        document.getElementById('confirmBox').style.display = 'none';
        alert("Order Placed Successfully!");
        cart = [];
        updateCartUI();
        toggleCart();
    })
    .catch(error => {
        // এরর হলে
        alert("Network Error! Please check your Script URL.");
        confirmBtn.innerText = originalText;
        confirmBtn.disabled = false;
    });
}


// কুপন, সার্চ এবং অন্যান্য
function applyCoupon() {
    const input = document.getElementById('couponInput');
    const msg = document.getElementById('couponMessage');
    if (input.value.trim().toUpperCase() === "SAVE10") {
        discountPercent = 0.10; msg.innerText = "10% Discount Applied!"; msg.style.color = "green";
    } else {
        discountPercent = 0; msg.innerText = "Invalid Coupon!"; msg.style.color = "red";
    }
    msg.style.display = "block"; updateCartUI();
}

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

function closeModal() { document.getElementById('productModal').style.display = "none"; }
function closeConfirm() { 
    document.getElementById('confirmBox').style.display = "none"; 
    document.getElementById('order-form-container').style.display = "block"; 
}

function showToast(msg) {
    let t = document.getElementById('toast');
    if(t) { t.innerText = msg; t.style.display = "block"; setTimeout(() => { t.style.display = "none"; }, 3000); }
}

window.onload = () => { 
    displayProducts(products); 
    updateCartUI(); 
    setupValidation(); 
};

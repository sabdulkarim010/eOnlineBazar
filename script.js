/**
 * Project: eOnlineBazar - Final Professional Logic
 * Updated by: Gemini AI for Abdul Karim
 */

const products = [
    { id: 1, name: "Premium Miniket Rice (5kg)", price: 490, icon: "🍚", desc: "High quality rice." },
    { id: 2, name: "Pure Mustard Oil (1L)", price: 280, icon: "🍶", desc: "100% pure oil." },
    { id: 3, name: "Organic Raw Honey (500g)", price: 550, icon: "🍯", desc: "Natural honey." },
    { id: 4, name: "Red Lentils (1kg)", price: 140, icon: "🥣", desc: "Deshi lentils." },
    { id: 5, name: "Chinigura Rice (1kg)", price: 160, icon: "🌾", desc: "Fragrant rice." },
    { id: 6, name: "Soybean Oil (2L)", price: 340, icon: "🧪", desc: "Refined oil." }
];

let cart = [];

window.onload = () => { 
    renderProducts(products);
    setupValidation(); // লাইভ ভ্যালিডেশন চালু করা
};

// ১. পণ্য প্রদর্শনী ফাংশন
function renderProducts(items) {
    const grid = document.getElementById('productGrid');
    if (!grid) return;
    grid.innerHTML = items.map(p => `
        <div class="p-card" onclick="openDetails(${p.id})">
            <div class="p-img-box">${p.icon}</div>
            <div class="p-info"><div class="name">${p.name}</div><div class="price">৳ ${p.price}</div></div>
            <button class="add-btn-main" onclick="event.stopPropagation(); addToCart(${p.id})"><i class="fas fa-plus"></i></button>
        </div>`).join('');
}

// ২. কার্ট ম্যানেজমেন্ট ফাংশন
function addToCart(id, isBuyNow = false) {
    const product = products.find(p => p.id === id);
    const exist = cart.find(item => item.id === id);
    exist ? exist.qty++ : cart.push({ ...product, qty: 1, checked: true });
    updateCartUI();
    if (isBuyNow) { closeProductDetail(); openCheckout(); }
    else { showNotification("Product added to cart!"); }
}

function updateCartUI() {
    document.getElementById('uniqueCartCount').innerText = cart.length;
    const container = document.getElementById('cartItemsContainer');
    if (cart.length === 0) {
        container.innerHTML = `<div class="empty-cart-msg"><p>Your cart is empty!</p></div>`;
        document.getElementById('cartFooter').classList.add('hidden');
        return;
    }
    document.getElementById('cartFooter').classList.remove('hidden');
    let total = 0;
    container.innerHTML = cart.map((item, index) => {
        if (item.checked) total += (item.price * item.qty);
        return `
            <div class="cart-item">
                <input type="checkbox" ${item.checked ? 'checked' : ''} onchange="toggleItem(${index})">
                <span style="font-size:30px;">${item.icon}</span>
                <div style="flex:1; margin-left:10px;">
                    <div class="item-title">${item.name}</div>
                    <div class="item-calc">৳ ${item.price} × ${item.qty} = ৳ ${item.price * item.qty}</div>
                </div>
                <div class="qty-controls">
                    <button class="qty-btn" onclick="changeQty(${index}, -1)">−</button>
                    <span class="q-val">${item.qty}</span>
                    <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
                </div>
                <div class="del-icon" onclick="removeItem(${index})"><i class="fas fa-trash"></i></div>
            </div>`;
    }).join('');
    document.getElementById('cartSubTotal').innerText = total;
}

// ৩. চেকআউট প্যানেল কন্ট্রোল
function openCheckout() {
    if (cart.length === 0) { showNotification("কার্ট খালি!", true); return; }
    document.getElementById('cartPanel').style.display = 'none';
    document.getElementById('shippingPanel').style.display = 'flex';
    updateCheckoutSummary();
}

function updateCheckoutSummary() {
    const summaryDiv = document.getElementById('checkoutSummary');
    let total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    summaryDiv.innerHTML = `
        <h4 style="margin-bottom:10px; border-bottom:1px solid #ddd;">Order Summary</h4>
        ${cart.map(item => `<div style="display:flex; justify-content:space-between; font-size:13px;">
            <span>${item.name} (x${item.qty})</span><span>৳ ${item.price * item.qty}</span></div>`).join('')}
        <div style="display:flex; justify-content:space-between; font-weight:bold; margin-top:10px; color:var(--primary);">
            <span>Total Bill:</span><span>৳ ${total}</span></div>`;
}

// ৪. লাইভ ভ্যালিডেশন ও স্মার্ট অ্যালার্ট লজিক (নতুন সংযোজন)
function setupValidation() {
    const nameInp = document.getElementById('userName');
    const phoneInp = document.getElementById('userPhone');
    const addressInp = document.getElementById('userAddress');

    const validate = () => {
        // শর্তসমূহ
        const isNameValid = nameInp.value.trim().split(/\s+/).length >= 2;
        const isPhoneValid = /^01[3-9]\d{8}$/.test(phoneInp.value.trim());
        const isAddressValid = addressInp.value.trim().split(/\s+/).length >= 3;

        // সিগন্যাল আপডেট (সবুজ/লাল)
        applyStyle(nameInp, isNameValid);
        applyStyle(phoneInp, isPhoneValid);
        applyStyle(addressInp, isAddressValid);

        return { isNameValid, isPhoneValid, isAddressValid };
    };

    const applyStyle = (el, isValid) => {
        if (el.value === "") { el.style.border = "1px solid #ddd"; }
        else { el.style.border = isValid ? "2px solid #4CAF50" : "2px solid #F44336"; }
    };

    nameInp.addEventListener('input', validate);
    addressInp.addEventListener('input', validate);
    phoneInp.addEventListener('input', function() {
        if (this.value.length > 11) this.value = this.value.slice(0, 11); // ১১ ডিজিট লক
        validate();
    });
}

// ১. টোস্ট দেখানোর মেইন ফাংশন (২ সেকেন্ড পর অটো গায়েব)
function showToast(message) {
    const toastBox = document.getElementById('toastBox');
    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.innerText = message;
    
    toastBox.appendChild(toast);

    // ২ সেকেন্ড পর এলিমেন্টটি রিমুভ করে দেওয়া
    setTimeout(() => {
        toast.remove();
    }, 2000); 
}

// ২. কনফার্ম অর্ডার ফাংশন (আপডেটেড)
function submitOrder() {
    const nameInp = document.getElementById('userName');
    const phoneInp = document.getElementById('userPhone');
    const addressInp = document.getElementById('userAddress');

    const name = nameInp.value.trim();
    const phone = phoneInp.value.trim();
    const address = addressInp.value.trim();

    // প্রফেশনাল ভ্যালিডেশন চেক (অ্যালার্টের বদলে টোস্ট)
    if (name.split(/\s+/).length < 2) {
        showToast("অনুগ্রহ করে আপনার পূর্ণ নাম\n(কমপক্ষে ২ শব্দ) লিখুন।");
        nameInp.focus();
        return;
    }
    
    if (!/^01[3-9]\d{8}$/.test(phone)) {
        showToast("সঠিক ১১ ডিজিটের\nমোবাইল নম্বরটি প্রদান করুন।");
        phoneInp.focus();
        return;
    }

    if (address.split(/\s+/).length < 3) {
        showToast("আপনার পূর্ণ ঠিকানাটি\nবিস্তারিতভাবে লিখুন।");
        addressInp.focus();
        return;
    }

    // ৩. সব ঠিক থাকলে সাকসেস মোডাল
    const orderId = "#00" + Math.floor(100 + Math.random() * 900);
    document.getElementById('displayOrderId').innerText = orderId;
    document.getElementById('orderSuccessModal').style.display = 'flex';

    // সাকসেস মোডালটিও ১০ সেকেন্ড পর অটো বন্ধ হবে
    setTimeout(() => {
        closeSuccessModal();
    }, 10000);

    // ডাটা রিসেট
    cart = [];
    updateCartUI();
    closeShippingPanel();
}


// মোডাল বন্ধ ও পেজ রিফ্রেশ ফাংশন
function closeSuccessModal() {
    const modal = document.getElementById('orderSuccessModal');
    if (modal.style.display === 'flex') {
        modal.style.opacity = '0';
        modal.style.transition = '0.5s';
        setTimeout(() => {
            modal.style.display = 'none';
            location.reload(); // পেজ রিলোড দিয়ে হোম পেজে ফেরত
        }, 500);
    }
}


// ইউটিলিটি ফাংশনসমূহ
function closeSuccessModal() { document.getElementById('orderSuccessModal').style.display = 'none'; location.reload(); }
function closeShippingPanel() { document.getElementById('shippingPanel').style.display = 'none'; }
function closeProductDetail() { document.getElementById('productDetailPanel').style.display = 'none'; }
function changeQty(i, d) { if (cart[i].qty + d > 0) { cart[i].qty += d; updateCartUI(); } }
function toggleItem(i) { cart[i].checked = !cart[i].checked; updateCartUI(); }
function removeItem(i) { cart.splice(i, 1); updateCartUI(); }

function showNotification(msg, isError = false) {
    const center = document.getElementById('notificationCenter');
    document.getElementById('notificationMsg').innerText = msg;
    center.style.display = 'block';
    setTimeout(() => center.style.display = 'none', 3000);
}

document.getElementById('cartTrigger').onclick = () => {
    if (cart.length > 0) document.getElementById('cartPanel').style.display = 'flex';
    else showNotification("কার্ট খালি!", true);
};

function openDetails(id) {
    const p = products.find(x => x.id === id);
    const content = document.getElementById('productDetailContent');
    content.innerHTML = `
        <div class="detail-view">
            <div class="detail-img-large">${p.icon}</div>
            <h2 class="detail-name">${p.name}</h2>
            <div class="detail-price">৳ ${p.price}</div>
            <div class="detail-actions">
                <button class="btn-primary-large" onclick="addToCart(${p.id})">Add to Cart</button>
                <button class="btn-confirm-order" onclick="addToCart(${p.id}, true)">Buy Now</button>
            </div>
        </div>`;
    document.getElementById('productDetailPanel').style.display = 'flex';
}


// কন্টিনিউ শপিং ফাংশন
function continueShopping() {
    // ১. সাকসেস মোডাল বন্ধ করা
    const modal = document.getElementById('orderSuccessModal');
    if (modal) {
        modal.style.display = 'none';
    }
    
    // ২. শিপিং প্যানেল বা কার্ট খোলা থাকলে তা বন্ধ করা
    closeShippingPanel(); 
    
    // ৩. মূল পেজে স্ক্রল করে একদম উপরে নিয়ে যাওয়া
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // ৪. চাইলে পেজটি ফ্রেশ করার জন্য রিলোড দিতে পারেন
    // location.reload(); 
}


// পেমেন্ট মেথড সিলেক্ট করা
function selectPayment(method) {
    document.querySelectorAll('.payment-card').forEach(card => {
        card.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
}

// কুপন অ্যাপ্লাই করা
function applyCoupon() {
    const code = document.getElementById('couponInput').value.trim();
    const msg = document.getElementById('couponMessage');
    
    if (code === "SAVE10") {
        msg.innerText = "Coupon Applied Successfully!";
        msg.style.color = "green";
        msg.style.display = "block";
        // এখানে ডিসকাউন্ট ক্যালকুলেশন যোগ করতে পারেন
    } else {
        msg.innerText = "Invalid Coupon!";
        msg.style.color = "red";
        msg.style.display = "block";
    }
}



// সার্চ ফাংশন: যা ইনপুট বক্স থেকে লেখা নিয়ে প্রোডাক্ট ফিল্টার করবে
function performSearch() {
    const query = document.getElementById('mainSearch').value.toLowerCase().trim();
    
    // যদি সার্চ বক্স খালি থাকে তবে সব প্রোডাক্ট দেখাবে
    if (query === "") {
        renderProducts(products);
        return;
    }

    // নাম অনুযায়ী প্রোডাক্ট ফিল্টার করা
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query)
    );

    renderProducts(filteredProducts);

    // যদি কোনো প্রোডাক্ট না পাওয়া যায়
    const grid = document.getElementById('productGrid');
    if (filteredProducts.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 50px;">
                <i class="fas fa-search" style="font-size: 40px; color: #ccc;"></i>
                <p style="margin-top: 10px; color: #666;">দুঃখিত, এই নামে কোনো পণ্য পাওয়া যায়নি!</p>
            </div>`;
    }
}

// বাটন ক্লিকে সার্চ হবে
document.getElementById('searchBtn').addEventListener('click', performSearch);

// কীবোর্ডের Enter বাটনে চাপ দিলেও সার্চ হবে
document.getElementById('mainSearch').addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

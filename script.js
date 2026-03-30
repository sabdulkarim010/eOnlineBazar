// ১. পণ্যের তথ্য (Database)
const products = [
    {
        id: 1, 
        cat: 'grocery', 
        name: 'Premium Miniket Rice (5kg)', 
        price: 490, 
        img: '🍚', 
        desc: 'বাছাইকৃত প্রিমিয়াম মিনিকেট চাল। পরিষ্কার এবং ঝরঝরে ভাত হয়। সরাসরি মিল থেকে সংগৃহীত।'
    },
    {
        id: 2, 
        cat: 'grocery', 
        name: 'Pure Honey (500g)', 
        price: 450, 
        img: '🍯', 
        desc: 'সুন্দরবনের খাঁটি মধু। কোনো প্রকার ভেজাল বা চিনি মেশানো নেই। প্রাকৃতিক গুণাগুণে ভরপুর।'
    },
    {
        id: 3, 
        cat: 'electronics', 
        name: 'Smart Watch T800 Ultra', 
        price: 1500, 
        img: '⌚', 
        desc: 'আধুনিক ফিচারের স্মার্ট ওয়াচ। ব্লুটুথ কলিং, হার্ট রেট মনিটর এবং প্রিমিয়াম ডিসপ্লে সমৃদ্ধ।'
    },
    {
        id: 4, 
        cat: 'cosmetics', 
        name: 'Natural Face Wash', 
        price: 250, 
        img: '🧴', 
        desc: 'ত্বকের উজ্জ্বলতা বাড়াতে এবং গভীর থেকে ময়লা পরিষ্কার করতে এই ফেসওয়াশটি অত্যন্ত কার্যকরী।'
    }
];

let cart = [];
let selectedQty = 1;

// ২. পেজ লোড হওয়ার সাথে সাথে পণ্যগুলো দেখানো
window.onload = () => {
    renderProducts(products);
    updateCartCount();
};

// ৩. পণ্যগুলো ডিসপ্লে করার ফাংশন
function renderProducts(items) {
    const list = document.getElementById('product-list');
    if (!list) return; // যদি ID না পায় তবে কাজ করবে না
    
    list.innerHTML = items.map(p => `
        <div class="product-card" onclick="openProductModal(${p.id})">
            <span class="p-img">${p.img}</span>
            <div class="p-title">${p.name}</div>
            <div class="p-price">৳ ${p.price}</div>
        </div>
    `).join('');
}

// ৪. ক্যাটাগরি অনুযায়ী পণ্য ফিল্টার করা
function filterCat(cat) {
    // সব বাটন থেকে active ক্লাস সরানো
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    
    // যে বাটনে ক্লিক করা হয়েছে তাতে active ক্লাস যোগ করা
    if(event) event.target.classList.add('active');

    const filtered = cat === 'all' ? products : products.filter(p => p.cat === cat);
    renderProducts(filtered);
}

// ৫. পণ্যের বিস্তারিত পপ-আপ (Modal) খোলা
function openProductModal(id) {
    const p = products.find(item => item.id === id);
    const modal = document.getElementById('productModal');
    const modalData = document.getElementById('modal-data');
    selectedQty = 1; // শুরুতে পরিমাণ ১ সেট করা

    modalData.innerHTML = `
        <div class="m-img">${p.img}</div>
        <h2 class="m-title">${p.name}</h2>
        <div class="m-price">৳ ${p.price}</div>
        <p class="m-desc">${p.desc}</p>
        <div class="qty-ctrl">
            <button onclick="updateQty(-1)">-</button>
            <span id="modal-qty" style="font-weight:bold; font-size:20px;">1</span>
            <button onclick="updateQty(1)">+</button>
        </div>
        <button class="m-add-cart" onclick="addToCart(${p.id})">🛒 কার্টে যোগ করুন</button>
        <button class="m-buy-now" onclick="buyNow(${p.id})">⚡ এখনই কিনুন</button>
    `;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // ব্যাকগ্রাউন্ড স্ক্রল বন্ধ
}

// ৬. পণ্যের পরিমাণ কমানো বা বাড়ানো
function updateQty(val) {
    if (selectedQty + val >= 1) {
        selectedQty += val;
        const qtyElement = document.getElementById('modal-qty');
        if(qtyElement) qtyElement.innerText = selectedQty;
    }
}

// ৭. পপ-আপ বন্ধ করা
function closeModal() {
    document.getElementById('productModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// ৮. কার্টে পণ্য যোগ করা
function addToCart(id) {
    const p = products.find(item => item.id === id);
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.q += selectedQty;
    } else {
        cart.push({ ...p, q: selectedQty });
    }

    updateCartCount();
    closeModal();
    showToast(p.name + " কার্টে যোগ হয়েছে!");
}

// ৯. সরাসরি কেনার ফাংশন
function buyNow(id) {
    addToCart(id);
    showCheckout();
}

// ১০. কার্টের আইকন আপডেট
function updateCartCount() {
    const countElement = document.getElementById('count');
    if(countElement) countElement.innerText = cart.length;
}

// ১১. চেকআউট স্ক্রিন দেখানো
function showCheckout() {
    const modal = document.getElementById('checkout-section');
    const cartList = document.getElementById('cart-items');
    let total = 0;

    if (cart.length === 0) {
        alert("আপনার কার্ট বর্তমানে খালি!");
        return;
    }

    cartList.innerHTML = cart.map(item => {
        total += (item.price * item.q);
        return `
            <div style="display:flex; justify-content:space-between; padding:10px 0; border-bottom:1px solid #eee;">
                <span>${item.name} (x${item.q})</span>
                <span style="font-weight:bold;">৳ ${item.price * item.q}</span>
            </div>
        `;
    }).join('');

    document.getElementById('total-amount').innerText = total;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// ১২. চেকআউট বন্ধ করা
function closeCheckout() {
    document.getElementById('checkout-section').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// ১৩. অর্ডার প্লেস করা
function placeOrder() {
    const name = document.getElementById('custName').value;
    const phone = document.getElementById('custPhone').value;
    const addr = document.getElementById('custAddr').value;

    if (!name || !phone || !addr) {
        alert("অনুগ্রহ করে আপনার নাম, মোবাইল এবং ঠিকানা সঠিক ভাবে দিন।");
        return;
    }

    alert(`ধন্যবাদ ${name}!\nআপনার অর্ডারটি সফল হয়েছে।\nমোট বিল: ৳ ${document.getElementById('total-amount').innerText}`);
    
    // অর্ডার শেষে কার্ট খালি করা
    cart = [];
    updateCartCount();
    closeCheckout();
}

// ১৪. ছোট নোটিফিকেশন (Toast) দেখানো
function showToast(msg) {
    const t = document.getElementById('toast');
    if(t) {
        t.innerText = msg;
        t.style.display = 'block';
        setTimeout(() => { t.style.display = 'none'; }, 3000);
    }
}

// ১৫. পপ-আপের বাইরে ক্লিক করলে বন্ধ হওয়া
window.onclick = function(event) {
    const pModal = document.getElementById('productModal');
    const cModal = document.getElementById('checkout-section');
    if (event.target == pModal) closeModal();
    if (event.target == cModal) closeCheckout();
}

// পণ্যের তালিকা (এখানে আপনি পরে আরও পণ্য যোগ করতে পারবেন)
const products = [
    {id: 1, cat: 'grocery', name: 'Premium Miniket Rice (5kg)', price: 490, img: '🍚', desc: 'বাছাইকৃত প্রিমিয়াম মিনিকেট চাল। পরিষ্কার এবং ঝরঝরে ভাত হয়। সরাসরি মিল থেকে সংগৃহীত।'},
    {id: 2, cat: 'grocery', name: 'Pure Honey (500g)', price: 450, img: '🍯', desc: 'সুন্দরবনের খাঁটি মধু। কোনো প্রকার ভেজাল বা চিনি মেশানো নেই।'},
    {id: 3, cat: 'electronics', name: 'Smart Watch T800 Ultra', price: 1500, img: '⌚', desc: 'আধুনিক ফিচারের স্মার্ট ওয়াচ। ব্লুটুথ কলিং এবং হেলথ ট্র্যাকিং সুবিধা আছে।'},
    {id: 4, cat: 'cosmetics', name: 'Natural Face Wash', price: 250, img: '🧴', desc: 'ত্বকের যত্নে শতভাগ নিরাপদ এবং কার্যকরী ফেসওয়াশ।'}
];

let cart = [];
let selectedQty = 1;

// পেজ লোড হলে পণ্যগুলো দেখানো
window.onload = () => {
    renderProducts(products);
    updateCartCount();
};

// পণ্যগুলো গ্রিড আকারে সাজানো
function renderProducts(items) {
    const list = document.getElementById('product-list');
    if (!list) return;
    
    list.innerHTML = items.map(p => `
        <div class="product-card" onclick="openProductModal(${p.id})">
            <span class="p-img">${p.img}</span>
            <div class="p-title">${p.name}</div>
            <div class="p-price">৳ ${p.price}</div>
        </div>
    `).join('');
}

// ক্যাটাগরি অনুযায়ী ফিল্টার করা
function filterCat(cat) {
    // বাটনগুলোর অ্যাক্টিভ ক্লাস পরিবর্তন
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const filtered = cat === 'all' ? products : products.filter(p => p.cat === cat);
    renderProducts(filtered);
}

// প্রোডাক্ট পপ-আপ খোলা
function openProductModal(id) {
    const p = products.find(item => item.id === id);
    const modal = document.getElementById('productModal');
    const modalData = document.getElementById('modal-data');
    selectedQty = 1; // শুরুতে পরিমাণ ১ থাকবে

    modalData.innerHTML = `
        <div class="m-img">${p.img}</div>
        <h2 class="m-title">${p.name}</h2>
        <div class="m-price">৳ ${p.price}</div>
        <p class="m-desc">${p.desc}</p>
        <div class="qty-ctrl">
            <button onclick="updateQty(-1)">-</button>
            <span id="modal-qty" style="font-weight:bold; font-size:18px;">1</span>
            <button onclick="updateQty(1)">+</button>
        </div>
        <button class="m-add-cart" onclick="addToCart(${p.id})">🛒 কার্টে যোগ করুন</button>
        <button class="m-buy-now" onclick="buyNow(${p.id})">⚡ এখনই কিনুন</button>
    `;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // স্ক্রল বন্ধ করা
}

// পপ-আপে পরিমাণ কমানো/বাড়ানো
function updateQty(val) {
    if (selectedQty + val >= 1) {
        selectedQty += val;
        document.getElementById('modal-qty').innerText = selectedQty;
    }
}

// পপ-আপ বন্ধ করা
function closeModal() {
    document.getElementById('productModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// কার্টে যোগ করা
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

// সরাসরি কেনা
function buyNow(id) {
    addToCart(id);
    showCheckout();
}

// কার্টের সংখ্যা আপডেট
function updateCartCount() {
    document.getElementById('count').innerText = cart.length;
}

// চেকআউট সেকশন দেখানো
function showCheckout() {
    if (cart.length === 0) {
        alert("আপনার কার্ট খালি! আগে পণ্য যোগ করুন।");
        return;
    }
    const modal = document.getElementById('checkout-section');
    const cartList = document.getElementById('cart-items');
    let total = 0;

    cartList.innerHTML = cart.map(item => {
        total += (item.price * item.q);
        return `
            <div class="cart-item">
                <span>${item.name} (x${item.q})</span>
                <span>৳ ${item.price * item.q}</span>
            </div>
        `;
    }).join('');

    document.getElementById('total-amount').innerText = total;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// চেকআউট বন্ধ করা
function closeCheckout() {
    document.getElementById('checkout-section').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// অর্ডার সফলভাবে সম্পন্ন করা
function placeOrder() {
    const name = document.getElementById('custName').value;
    const phone = document.getElementById('custPhone').value;
    const addr = document.getElementById('custAddr').value;

    if (!name || !phone || !addr) {
        alert("দয়া করে নাম, মোবাইল নাম্বার এবং ঠিকানা সঠিকভাবে দিন।");
        return;
    }

    alert(`ধন্যবাদ ${name}!\nআপনার অর্ডারটি সফলভাবে গ্রহণ করা হয়েছে।\nমোট বিল: ৳ ${document.getElementById('total-amount').innerText}`);
    
    // কার্ট খালি করা
    cart = [];
    updateCartCount();
    closeCheckout();
}

// ছোট নোটিফিকেশন (Toast)
function showToast(msg) {
    const t = document.getElementById('toast');
    t.innerText = msg;
    t.style.display = 'block';
    setTimeout(() => { t.style.display = 'none'; }, 2500);
}

// পপ-আপের বাইরে ক্লিক করলে বন্ধ হওয়া
window.onclick = function(event) {
    const pModal = document.getElementById('productModal');
    const cModal = document.getElementById('checkout-section');
    if (event.target == pModal) closeModal();
    if (event.target == cModal) closeCheckout();
}

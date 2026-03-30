const products = {
    grocery: [
        {id: 'g1', n: 'Miniket Rice (5kg)', p: 490, i: '🍚', d: '১০০% বাছাইকৃত মিনিকেট চাল। রান্নার পর ভাত হয় সাদা ও ঝরঝরে। সরাসরি মিল থেকে সংগৃহীত।'},
        {id: 'g2', n: 'Pure Honey (500g)', p: 450, i: '🍯', d: 'সুন্দরবনের খলিসা ফুলের খাঁটি মধু। কোনো প্রকার চিনি বা ফ্লেভার মেশানো হয়নি। স্বাস্থ্যসম্মত উপায়ে প্যাকিং করা।'}
    ],
    electronics: [
        {id: 'e1', n: 'Smart Watch T800', p: 1500, i: '⌚', d: 'ব্লুটুথ কলিং সুবিধা এবং হার্ট রেট মনিটরসহ প্রিমিয়াম কোয়ালিটির স্মার্ট ওয়াচ। ফুল টাচ ডিসপ্লে।'}
    ],
    cosmetics: [
        {id: 'c1', n: 'Facial Kit', p: 1200, i: '🧴', d: 'আপনার ত্বকের গভীর থেকে ময়লা পরিষ্কার করে উজ্জ্বলতা ফিরিয়ে আনতে কার্যকর এই ফেশিয়াল কিট।'}
    ]
};

let cart = [];
let currentProduct = null; // বর্তমানে কোন প্রোডাক্টটি পপ-আপে আছে

// সব পণ্য হোমপেজে দেখানো
function renderProducts() {
    let container = document.getElementById('product-sections');
    container.innerHTML = '';
    for (let cat in products) {
        let html = `<div class="section-title">${cat.toUpperCase()}</div><div class="product-grid">`;
        products[cat].forEach(p => {
            html += `
            <div class="product-card" onclick="openProduct('${cat}', '${p.id}')">
                <div class="product-img">${p.i}</div>
                <p class="p-name">${p.n}</p>
                <span class="price">৳ ${p.p}</span>
            </div>`;
        });
        container.innerHTML += html + `</div>`;
    }
}

// প্রোডাক্ট পপ-আপ ওপেন করা
function openProduct(cat, id) {
    const p = products[cat].find(item => item.id === id);
    currentProduct = p;
    const modal = document.getElementById('productModal');
    const body = document.getElementById('modal-body');
    
    body.innerHTML = `
        <div class="modal-img">${p.i}</div>
        <div class="modal-body">
            <h2>${p.n}</h2>
            <p class="modal-price">৳ ${p.p}</p>
            <p class="modal-desc">${p.d}</p>
            <div class="modal-qty">
                <button onclick="changeModalQty(-1)">-</button>
                <span id="m-qty" style="font-weight:bold; font-size:18px;">1</span>
                <button onclick="changeModalQty(1)">+</button>
            </div>
            <button class="modal-add-btn" onclick="addToCart()">Add to Cart</button>
            <button class="modal-buy-btn" onclick="buyNow()">Buy Now</button>
        </div>
    `;
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // স্ক্রল বন্ধ করা
}

function changeModalQty(val) {
    let q = document.getElementById('m-qty');
    let curr = parseInt(q.innerText);
    if(curr + val >= 1) q.innerText = curr + val;
}

function closeModal() {
    document.getElementById('productModal').style.display = "none";
    document.body.style.overflow = "auto";
}

// কার্টে পণ্য যোগ করা
function addToCart() {
    let q = parseInt(document.getElementById('m-qty').innerText);
    let existingItem = cart.find(i => i.n === currentProduct.n);
    
    if(existingItem) {
        existingItem.q += q;
    } else {
        cart.push({ n: currentProduct.n, p: currentProduct.p, q: q });
    }
    
    updateCartCount();
    closeModal();
    showNotification(currentProduct.n + " কার্টে যোগ হয়েছে!");
}

function buyNow() {
    addToCart();
    showCheckout();
}

function updateCartCount() {
    document.getElementById('count').innerText = cart.length;
}

// চেকআউট সেকশন দেখানো
function showCheckout() {
    if(cart.length === 0) {
        alert("আপনার কার্ট খালি!");
        return;
    }
    const section = document.getElementById('order-section');
    const list = document.getElementById('cart-items-list');
    let total = 0;
    
    list.innerHTML = '';
    cart.forEach(item => {
        list.innerHTML += `<div class="cart-item"><span>${item.n} (x${item.q})</span> <span>৳${item.p * item.q}</span></div>`;
        total += item.p * item.q;
    });
    
    document.getElementById('total-price').innerText = total;
    section.style.display = 'block';
    location.href = "#order-section";
}

function confirmFinalOrder() {
    const name = document.getElementById('custName').value;
    const phone = document.getElementById('custPhone').value;
    const addr = document.getElementById('custAddr').value;
    const total = document.getElementById('total-price').innerText;

    if (!name || !phone || !addr) {
        alert("দয়া করে সব তথ্য সঠিকভাবে দিন।");
        return;
    }
    
    alert(`অর্ডার সফল হয়েছে!\nনাম: ${name}\nমোট বিল: ৳${total}\n\nধন্যবাদ করিম ভাই!`);
    cart = [];
    updateCartCount();
    document.getElementById('order-section').style.display = 'none';
}

function showNotification(msg) {
    let t = document.getElementById('toast');
    t.innerText = msg; t.style.display = 'block';
    setTimeout(() => t.style.display = 'none', 2500);
}

// বাইরে ক্লিক করলে পপ-আপ বন্ধ হওয়া
window.onclick = function(event) {
    let modal = document.getElementById('productModal');
    if (event.target == modal) closeModal();
}

window.onload = renderProducts;

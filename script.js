// আপনার বিকাশ ও নগদ নাম্বার এখানে দিন (এটি কোডে দেখা যাবে)
const bkashNumber = "01316345101"; // উদাহরণ হিসেবে আপনার একটি সৌদি নাম্বার দিলাম, আপনি আপনার বিকাশ নাম্বার বসিয়ে নিন।
const nagadNumber = "01877936441";

const products = {
    grocery: [
        {id: 'g1', n: 'Miniket Rice (5kg)', p: 490, i: '🍚', d: 'প্রিমিয়াম কোয়ালিটির মিনিকেট চাল, একদম পরিষ্কার ও ঝরঝরে।'},
        {id: 'g2', n: 'Pure Honey (500g)', p: 450, i: '🍯', d: 'সুন্দরবনের খাঁটি মধু, কোনো প্রকার ভেজাল নেই।'},
        {id: 'g3', n: 'Soya Oil (2L)', p: 330, i: '🧴', d: 'বিশুদ্ধ সয়াবিন তেল, রান্নার জন্য সেরা।'}
    ],
    electronics: [
        {id: 'e1', n: 'Smart Watch', p: 1500, i: '⌚', d: 'অত্যাধুনিক ফিচারের স্মার্ট ওয়াচ, যা আপনার লাইফস্টাইল বদলে দেবে।'},
        {id: 'e2', n: 'Headphone', p: 850, i: '🎧', d: 'সেরা বেস এবং ক্লিয়ার সাউন্ড কোয়ালিটি সম্পন্ন হেডফোন।'}
    ],
    cosmetics: [
        {id: 'c1', n: 'Face Wash', p: 250, i: '🧴', d: 'ত্বকের উজ্জ্বলতা বাড়াতে এবং গভীর থেকে পরিষ্কার করতে কার্যকর।'},
        {id: 'c2', n: 'Sunscreen', p: 400, i: '☀️', d: 'রোদ থেকে আপনার ত্বককে দীর্ঘক্ষণ সুরক্ষা দিবে।'}
    ],
    kids: [
        {id: 'k1', n: 'Baby Diaper', p: 1200, i: '👶', d: 'বাচ্চাদের জন্য অত্যন্ত আরামদায়ক এবং দীর্ঘক্ষণ লিক-প্রুফ ডায়াপার।'},
        {id: 'k2', n: 'Baby Lotion', p: 350, i: '🧴', d: 'বাচ্চাদের কোমল ত্বকের যত্নে সেরা লোশন।'}
    ]
};

let cart = [];

// পণ্যের ছবিতে ক্লিক করলে ডেসক্রিপশন দেখাবে
function showDetails(name, price, desc) {
    alert(`📦 পণ্যের নাম: ${name}\n💰 মূল্য: ৳${price}\n\n📝 বিস্তারিত: ${desc}\n\nঅর্ডার করতে 'Buy Now' অথবা 'Add to Cart' বাটনে ক্লিক করুন।`);
}

// পরিমাণ কমানো বা বাড়ানো
function qty(id, val) {
    let el = document.getElementById(id);
    let curr = parseInt(el.innerText);
    if (curr + val >= 1) el.innerText = curr + val;
}

// কার্টে পণ্য যোগ করা
function addToCart(n, p, qId) {
    let q = parseInt(document.getElementById(qId).innerText);
    let item = cart.find(i => i.n === n);
    if (item) {
        item.q += q;
    } else {
        cart.push({ n, p, q });
    }
    updateCartDisplay();
    showNotification(n + " কার্টে যোগ হয়েছে!");
}

// সরাসরি কেনা (Buy Now)
function buyNow(n, p, qId) {
    let q = parseInt(document.getElementById(qId).innerText);
    cart = [{ n, p, q }]; // কার্ট খালি করে শুধু এই আইটেমটি রাখবে
    updateCartDisplay();
    location.href = '#cart-area'; // সরাসরি কার্ট সেকশনে নিয়ে যাবে
    showNotification("অর্ডার কনফার্ম করতে নিচের ফরমটি পূরণ করুন।");
}

// কার্ট আপডেট করা
function updateCartDisplay() {
    let list = document.getElementById('cart-items');
    let total = 0;
    list.innerHTML = '';
    cart.forEach(item => {
        list.innerHTML += `<tr><td>${item.n}</td><td>${item.q}</td><td>৳${item.p * item.q}</td></tr>`;
        total += item.p * item.q;
    });
    document.getElementById('total-price').innerText = total;
    document.getElementById('count').innerText = cart.length;
}

// পণ্যগুলো ওয়েবসাইটে সাজানো
function renderProducts() {
    let container = document.getElementById('product-sections');
    container.innerHTML = '';
    const catIcons = {grocery: '🍏', electronics: '🔌', cosmetics: '💄', kids: '🧸'};
    for (let cat in products) {
        let html = `<div class="section-title" id="${cat}">${catIcons[cat]} ${cat.toUpperCase()}</div><div class="product-grid">`;
        products[cat].forEach(p => {
            html += `
            <div class="product-card">
                <div class="product-img" onclick="showDetails('${p.n}', ${p.p}, '${p.d}')" style="cursor:pointer;" title="Click for details">${p.i}</div>
                <p class="p-name">${p.n}</p>
                <span style="color:#e67e22; font-weight:bold;">৳ ${p.p}</span>
                <div class="qty-box">
                    <button class="qty-btn" onclick="qty('${p.id}',-1)">-</button>
                    <span id="${p.id}">1</span>
                    <button class="qty-btn" onclick="qty('${p.id}',1)">+</button>
                </div>
                <button class="add-btn" style="margin-bottom:5px;" onclick="addToCart('${p.n}', ${p.p}, '${p.id}')">🛒 Add to Cart</button>
                <button class="add-btn" style="background:#e91e63;" onclick="buyNow('${p.n}', ${p.p}, '${p.id}')">⚡ Buy Now</button>
            </div>`;
        });
        html += `</div>`;
        container.innerHTML += html;
    }
}

// অর্ডার কনফার্ম করা
function confirmFinalOrder() {
    const name = document.getElementById('custName').value;
    const phone = document.getElementById('custPhone').value;
    const addr = document.getElementById('custAddr').value;
    const method = document.getElementById('payMethod').value;
    const total = document.getElementById('total-price').innerText;

    if (!name || !phone || !addr) {
        alert("দয়া করে আপনার নাম, মোবাইল নাম্বার এবং ঠিকানা সঠিকভাবে দিন।");
        return;
    }
    
    if(total == "0") {
        alert("আপনার কার্ট খালি! আগে পণ্য সিলেক্ট করুন।");
        return;
    }

    let paymentText = "";
    if(method === "bkash") paymentText = `বিকাশ নাম্বার: ${bkashNumber}-এ টাকা পাঠিয়ে ট্রানজেকশন আইডি নোট করে রাখুন।`;
    else if(method === "nagad") paymentText = `নগদ নাম্বার: ${nagadNumber}-এ টাকা পাঠিয়ে ট্রানজেকশন আইডি নোট করে রাখুন।`;
    else paymentText = "অর্ডার রিসিভ করার সময় ক্যাশ পেমেন্ট করবেন।";

    let msg = `অর্ডার সফল হয়েছে!\n\nনাম: ${name}\nফোন: ${phone}\nঠিকানা: ${addr}\nপেমেন্ট: ${method}\nমোট বিল: ৳${total}\n\n${paymentText}`;
    
    alert(msg);
    cart = [];
    updateCartDisplay();
    document.getElementById('custName').value = '';
    document.getElementById('custPhone').value = '';
    document.getElementById('custAddr').value = '';
}

// নোটিফিকেশন দেখানো
function showNotification(msg) {
    let t = document.getElementById('toast');
    t.innerText = msg;
    t.style.display = 'block';
    setTimeout(() => { t.style.display = 'none'; }, 3000);
}

// পেজ লোড হলে পণ্য দেখাবে
window.onload = renderProducts;

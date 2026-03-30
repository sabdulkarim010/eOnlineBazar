// আপনার বিকাশ নাম্বার এখানে সেট করুন
const bkashNumber = "01316345101"; 

const products = {
    grocery: [
        {id: 'g1', n: 'Miniket Rice (5kg)', p: 490, i: '🍚', d: 'প্রিমিয়াম কোয়ালিটির মিনিকেট চাল, একদম পরিষ্কার ও ঝরঝরে।'},
        {id: 'g2', n: 'Pure Honey (500g)', p: 450, i: '🍯', d: 'সুন্দরবনের খাঁটি মধু, কোনো প্রকার ভেজাল নেই।'}
        // এভাবে বাকিগুলোতেও 'd' দিয়ে ডেসক্রিপশন যোগ করতে পারেন
    ],
    // ... আপনার বাকি ক্যাটাগরিগুলো একই থাকবে
};

// নতুন ফাংশন: আইটেমে ক্লিক করলে ডেসক্রিপশন দেখাবে
function showDetails(name, price, desc, icon) {
    alert(`📦 পন্যের নাম: ${name}\n💰 মূল্য: ৳${price}\n\n📝 বিস্তারিত: ${desc}\n\nবিকাশ পেমেন্ট করতে নিচে Buy Now চাপুন।`);
}

// প্রোডাক্ট কার্ড রেন্ডারিং আপডেট (আইকনে ক্লিক করলে ডেসক্রিপশন আসবে)
function renderProducts() {
    let container = document.getElementById('product-sections');
    const catIcons = {grocery: '🍏', electronics: '🔌', cosmetics: '💄', kids: '🧸'};
    for (let cat in products) {
        let html = `<div class="section-title" id="${cat}">${catIcons[cat]} ${cat.toUpperCase()}</div><div class="product-grid">`;
        products[cat].forEach(p => {
            html += `
            <div class="product-card">
                <div class="product-img" onclick="showDetails('${p.n}', ${p.p}, '${p.d || 'ভালো মানের পণ্য'}', '${p.i}')" style="cursor:pointer;">${p.i}</div>
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

// সরাসরি Buy Now ফাংশন
function buyNow(n, p, qId) {
    let q = parseInt(document.getElementById(qId).innerText);
    cart = [{ n, p, q }]; // কার্ট খালি করে শুধু এই আইটেমটি রাখবে
    updateCartDisplay();
    location.href = '#cart-area'; // সরাসরি চেকআউট সেকশনে নিয়ে যাবে
    showNotification("বিকাশ নাম্বার: " + bkashNumber + "\nটাকা পাঠিয়ে অর্ডার কনফার্ম করুন।");
}

// ... বাকি ফাংশনগুলো (updateCartDisplay, confirmFinalOrder) আগের মতোই থাকবে।

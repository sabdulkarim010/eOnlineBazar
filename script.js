/* ১. পণ্যের তালিকা: ৪০টি আইটেম সঠিক ইমোজি ও প্রাইস সহ এখানে আছে */
const products = {
    grocery: [
        {id: 'g1', n: 'Miniket Rice (5kg)', p: 490, i: '🍚'}, {id: 'g2', n: 'Pure Honey (500g)', p: 450, i: '🍯'},
        {id: 'g3', n: 'Soyabean Oil (2L)', p: 380, i: '🧴'}, {id: 'g4', n: 'Tea Leaf (400g)', p: 220, i: '☕'},
        {id: 'g5', n: 'Lentils (1kg)', p: 140, i: '🥣'}, {id: 'g6', n: 'Salt (1kg)', p: 40, i: '🧂'},
        {id: 'g7', n: 'Basmati Rice (2kg)', p: 350, i: '🌾'}, {id: 'g8', n: 'Pure Ghee (250g)', p: 320, i: '🧈'},
        {id: 'g9', n: 'Turmeric Powder', p: 90, i: '🥡'}, {id: 'g10', n: 'Spice Mix', p: 180, i: '🌶️'}
    ],
    electronics: [
        {id: 'e1', n: 'Airbuds M10', p: 650, i: '🎧'}, {id: 'e2', n: 'Smart Watch T800', p: 1450, i: '⌚'},
        {id: 'e3', n: 'Power Bank 10k', p: 1200, i: '🔋'}, {id: 'e4', n: 'BT Speaker', p: 850, i: '📻'},
        {id: 'e5', n: 'Fast Charger', p: 450, i: '🔌'}, {id: 'e6', n: 'Type-C Cable', p: 150, i: '➰'},
        {id: 'e7', n: 'Gaming Mouse', p: 550, i: '🖱️'}, {id: 'e8', n: 'Mini Fan', p: 450, i: '🌀'},
        {id: 'e9', n: 'LED Desk Lamp', p: 350, i: '💡'}, {id: 'e10', n: 'Wireless Mic', p: 950, i: '🎤'}
    ],
    cosmetics: [
        {id: 'c1', n: 'Nivea Lotion', p: 450, i: '🧴'}, {id: 'c2', n: 'Matte Lipstick', p: 350, i: '💄'},
        {id: 'c3', n: 'Face Wash', p: 280, i: '🧼'}, {id: 'c4', n: 'Premium Perfume', p: 1200, i: '✨'},
        {id: 'c5', n: 'Sunscreen Gel', p: 550, i: '☀️'}, {id: 'c6', n: 'Hair Serum', p: 420, i: '💧'},
        {id: 'c7', n: 'Nail Polish Pack', p: 250, i: '💅'}, {id: 'c8', n: 'Eyeshadow', p: 650, i: '🎨'},
        {id: 'c9', n: 'Body Scrub', p: 480, i: '🛁'}, {id: 'c10', n: 'Hair Oil', p: 220, i: '🌿'}
    ],
    kids: [
        {id: 'k1', n: 'Teddy Bear', p: 750, i: '🧸'}, {id: 'k2', n: 'Baby Diaper', p: 1250, i: '🧷'},
        {id: 'k3', n: 'Feeding Bottle', p: 320, i: '🍼'}, {id: 'k4', n: 'Toy Car', p: 450, i: '🏎️'},
        {id: 'k5', n: 'Baby Shampoo', p: 280, i: '👶'}, {id: 'k6', n: 'Learning Pad', p: 950, i: '📱'},
        {id: 'k7', n: 'Crayons Set', p: 150, i: '🖍️'}, {id: 'k8', n: 'Baby Socks', p: 120, i: '🧦'},
        {id: 'k9', n: 'Water Toy', p: 220, i: '🔫'}, {id: 'k10', n: 'Baby Bath Tub', p: 1500, i: '🛁'}
    ]
};

/* ২. প্রোডাক্ট রেন্ডারিং: এই ফাংশনটি স্ক্রিনে সব পণ্য সাজিয়ে দেখায় */
function renderProducts() {
    let container = document.getElementById('product-sections');
    const catIcons = {grocery: '🍏', electronics: '🔌', cosmetics: '💄', kids: '🧸'};
    for (let cat in products) {
        let html = `<div class="section-title" id="${cat}">${catIcons[cat]} ${cat.toUpperCase()}</div><div class="product-grid">`;
        products[cat].forEach(p => {
            html += `
            <div class="product-card">
                <div class="product-img">${p.i}</div>
                <p class="p-name">${p.n}</p>
                <span style="color:#e67e22; font-weight:bold;">৳ ${p.p}</span>
                <div class="qty-box">
                    <button class="qty-btn" onclick="qty('${p.id}',-1)">-</button>
                    <span id="${p.id}">1</span>
                    <button class="qty-btn" onclick="qty('${p.id}',1)">+</button>
                </div>
                <button class="add-btn" onclick="addToCart('${p.n}', ${p.p}, '${p.id}')">Add to Cart</button>
            </div>`;
        });
        html += `</div>`;
        container.innerHTML += html;
    }
}

/* ৩. কার্ট লজিক: পণ্য কতগুলো (Quantity) হবে তা নিয়ন্ত্রণ করা */
let cart = [];
function qty(id, v) {
    let el = document.getElementById(id);
    let curr = parseInt(el.innerText);
    if(curr + v >= 1) el.innerText = curr + v;
}

/* ৪. অ্যাড টু কার্ট: কার্টে পণ্য যোগ করা */
function addToCart(n, p, qId) {
    let q = parseInt(document.getElementById(qId).innerText);
    cart.push({ n, p, q });
    updateCartDisplay();
    showNotification("Item added to cart! ✅");
}

/* ৫. কার্ট আপডেট: টেবিলের ভেতর পণ্যের লিস্ট দেখানো */
function updateCartDisplay() {
    let t = document.getElementById('cart-items');
    let total = 0;
    t.innerHTML = "";
    cart.forEach(i => {
        t.innerHTML += `<tr><td>${i.n}</td><td>${i.q}</td><td>৳ ${i.p * i.q}</td></tr>`;
        total += (i.p * i.q);
    });
    document.getElementById('total-price').innerText = total;
    document.getElementById('count').innerText = cart.length;
}

/* ৬. নোটিফিকেশন: স্ক্রিনে মেসেজ দেখানো */
function showNotification(msg) {
    let x = document.getElementById("toast");
    x.innerText = msg; x.className = "show";
    setTimeout(() => { x.className = ""; }, 3500);
}

/* ৭. অর্ডার কনফার্ম: কাস্টমারের তথ্য চেক করে অর্ডার সফল করা */
function confirmFinalOrder() {
    let name = document.getElementById('custName').value.trim();
    let phone = document.getElementById('custPhone').value.trim();
    let addr = document.getElementById('custAddr').value.trim();

    if(cart.length === 0) { showNotification("Cart is empty! ❌"); return; }
    if(!name || !phone || !addr) { showNotification("Please fill required fields! ❌"); return; }
    if(phone.length < 11) { showNotification("Enter valid mobile number! ❌"); return; }

    showNotification("Order Successful! ✅\nWe have received your order.\nWait for our call.");
    
    // অর্ডার সফল হওয়ার পর কার্ট এবং ফর্ম খালি করা
    cart = []; updateCartDisplay();
    document.getElementById('custName').value = "";
    document.getElementById('custPhone').value = "";
    document.getElementById('custAddr').value = "";
    document.getElementById('custNote').value = "";
}

// পেজ লোড হওয়ার সাথে সাথে সব প্রোডাক্ট দেখানোর জন্য ফাংশনটি কল করা হলো
renderProducts();



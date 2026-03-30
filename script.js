const bkashNumber = "0510870648"; 

const products = {
    grocery: [
        {id: 'g1', n: 'Miniket Rice (5kg)', p: 490, i: '🍚', d: 'প্রিমিয়াম কোয়ালিটির মিনিকেট চাল, একদম পরিষ্কার ও ঝরঝরে।'},
        {id: 'g2', n: 'Pure Honey (500g)', p: 450, i: '🍯', d: 'সুন্দরবনের খাঁটি মধু, কোনো প্রকার ভেজাল নেই।'}
    ],
    electronics: [
        {id: 'e1', n: 'Smart Watch', p: 1500, i: '⌚', d: 'অত্যাধুনিক ফিচারের স্মার্ট ওয়াচ।'}
    ]
};

let cart = [];

// প্রোডাক্টে ক্লিক করলে বিস্তারিত এবং অপশন দেখাবে
function expandProduct(id) {
    let detailBox = document.getElementById('detail-' + id);
    if(detailBox.style.display === 'none') {
        detailBox.style.display = 'block';
    } else {
        detailBox.style.display = 'none';
    }
}

function qty(id, val) {
    let el = document.getElementById('q-'+id);
    let curr = parseInt(el.innerText);
    if (curr + val >= 1) el.innerText = curr + val;
}

function addToCart(n, p, id) {
    let q = parseInt(document.getElementById('q-'+id).innerText);
    let item = cart.find(i => i.n === n);
    if (item) item.q += q;
    else cart.push({ n, p, q });
    
    updateCartDisplay();
    showNotification(n + " কার্টে যোগ হয়েছে!");
}

function buyNow(n, p, id) {
    addToCart(n, p, id);
    showCheckout();
}

function showCheckout() {
    if(cart.length === 0) {
        alert("আগে পণ্য কার্টে যোগ করুন!");
        return;
    }
    document.getElementById('order-section').style.display = 'block';
    location.href = '#order-section';
}

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

function renderProducts() {
    let container = document.getElementById('product-sections');
    container.innerHTML = '';
    for (let cat in products) {
        let html = `<div class="section-title" id="${cat}">${cat.toUpperCase()}</div><div class="product-grid">`;
        products[cat].forEach(p => {
            html += `
            <div class="product-card">
                <div class="product-img" onclick="expandProduct('${p.id}')">${p.i}</div>
                <p class="p-name">${p.n}</p>
                <span class="price">৳ ${p.p}</span>
                
                <div id="detail-${p.id}" class="product-details" style="display:none;">
                    <p class="desc">${p.d}</p>
                    <div class="qty-box">
                        <button class="qty-btn" onclick="qty('${p.id}',-1)">-</button>
                        <span id="q-${p.id}">1</span>
                        <button class="qty-btn" onclick="qty('${p.id}',1)">+</button>
                    </div>
                    <button class="add-btn" onclick="addToCart('${p.n}', ${p.p}, '${p.id}')">🛒 Add to Cart</button>
                    <button class="buy-btn" onclick="buyNow('${p.n}', ${p.p}, '${p.id}')">⚡ Buy Now</button>
                </div>
            </div>`;
        });
        html += `</div>`;
        container.innerHTML += html;
    }
}

function confirmFinalOrder() {
    const name = document.getElementById('custName').value;
    if (!name) { alert("নাম দিন!"); return; }
    alert("ধন্যবাদ " + name + "! আপনার অর্ডার রিসিভ করা হয়েছে।");
    cart = [];
    updateCartDisplay();
    document.getElementById('order-section').style.display = 'none';
}

function showNotification(msg) {
    let t = document.getElementById('toast');
    t.innerText = msg; t.style.display = 'block';
    setTimeout(() => { t.style.display = 'none'; }, 3000);
}

window.onload = renderProducts;

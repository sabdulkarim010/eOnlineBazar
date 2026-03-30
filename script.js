const products = [
    {id: 1, cat: 'grocery', name: 'Miniket Rice (5kg)', price: 490, img: '🍚', desc: 'বাছাইকৃত প্রিমিয়াম মিনিকেট চাল।'},
    {id: 2, cat: 'grocery', name: 'Pure Honey (500g)', price: 450, img: '🍯', desc: 'সুন্দরবনের খাঁটি মধু।'},
    {id: 3, cat: 'electronics', name: 'Smart Watch T800', price: 1500, img: '⌚', desc: 'আধুনিক স্মার্ট ওয়াচ।'},
    {id: 4, cat: 'cosmetics', name: 'Face Wash', price: 250, img: '🧴', desc: 'ত্বকের যত্নে কার্যকরী ফেসওয়াশ।'}
];

let cart = [];
let tempQty = 1;

function render(items) {
    const list = document.getElementById('product-list');
    list.innerHTML = items.map(p => `
        <div class="product-card" onclick="openP(${p.id})">
            <span class="p-img">${p.img}</span>
            <p class="p-title">${p.name}</p>
            <p class="p-price">৳ ${p.price}</p>
        </div>
    `).join('');
}

function filterCat(cat) {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    render(cat === 'all' ? products : products.filter(p => p.cat === cat));
}

function openP(id) {
    const p = products.find(i => i.id === id);
    tempQty = 1;
    document.getElementById('modal-data').innerHTML = `
        <div class="m-img">${p.img}</div>
        <h3>${p.name}</h3>
        <p style="color: #B12704; font-weight:bold; font-size: 20px;">৳ ${p.price}</p>
        <p style="font-size:14px; color:#666; margin: 10px 0;">${p.desc}</p>
        <div class="qty-ctrl">
            <button onclick="changeQ(-1)">-</button>
            <b id="q-val">1</b>
            <button onclick="changeQ(1)">+</button>
        </div>
        <button class="add-btn" onclick="addToCart(${p.id})">কার্টে যোগ করুন</button>
    `;
    document.getElementById('productModal').style.display = 'block';
}

function changeQ(v) {
    if(tempQty + v >= 1) {
        tempQty += v;
        document.getElementById('q-val').innerText = tempQty;
    }
}

function addToCart(id) {
    const p = products.find(i => i.id === id);
    cart.push({...p, q: tempQty});
    document.getElementById('count').innerText = cart.length;
    document.getElementById('productModal').style.display = 'none';
    showToast(p.name + " কার্টে যোগ হয়েছে");
}

function showCheckout() {
    const list = document.getElementById('cart-items');
    let total = 0;
    list.innerHTML = cart.map(i => {
        total += i.price * i.q;
        return `<div style="display:flex; justify-content:space-between; padding:5px 0;">
                    <span>${i.name} (x${i.q})</span>
                    <span>৳${i.price * i.q}</span>
                </div>`;
    }).join('');
    document.getElementById('total-amount').innerText = total;
    document.getElementById('checkout-section').style.display = 'block';
}

function placeOrder() {
    alert("ধন্যবাদ! আপনার অর্ডার সফল হয়েছে।");
    cart = [];
    document.getElementById('count').innerText = 0;
    closeCheckout();
}

function closeModal() { document.getElementById('productModal').style.display = 'none'; }
function closeCheckout() { document.getElementById('checkout-section').style.display = 'none'; }
function showToast(m) {
    const t = document.getElementById('toast');
    t.innerText = m; t.style.display = 'block';
    setTimeout(() => t.style.display = 'none', 2000);
}

window.onload = () => render(products);

/* Project: eOnlineBazar Professional JS 
   Author: Abdul Karim Sheikh
   Features: 11-digit Phone, Anti-Junk Validation, Smooth Animations, Excel Integration
*/
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






let cart = [];
let discount = 0;
const scriptURL = 'https://script.google.com/macros/s/AKfycbzjIkqb_QYzGrxSe2DE4X6HihT-Z5mur2PMDhTNKQs0NBIbKl6KsbuUM_1bqY-CVvIchg/exec';

// ২. প্রডাক্ট লোড করা [Point 1, 4]
function displayProducts(data) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = data.map(p => `
        <div class="product-card" onclick="openProductDetails(${p.id})">
            <span style="font-size:40px;">${p.img}</span>
            <h4 style="font-size:13px; margin:5px 0;">${p.name}</h4>
            <p style="color:#f85606; font-weight:bold;">৳ ${p.price}</p>
            <button class="add-btn" onclick="event.stopPropagation(); addToCart(${p.id}, event)">+</button>
        </div>
    `).join('');
}

// ৩. প্রডাক্ট বিস্তারিত দেখা [Point 1 - New Fix]
function openProductDetails(id) {
    const p = products.find(i => i.id === id);
    const modal = document.getElementById('productModal');
    const body = document.getElementById('modal-body');
    
    body.innerHTML = `
        <span class="close-modal" onclick="closeModal('productModal')">&times;</span>
        <div style="padding:20px; text-align:center;">
            <span style="font-size:80px;">${p.img}</span>
            <h2>${p.name}</h2>
            <p style="color:#f85606; font-size:20px; font-weight:bold;">Price: ৳ ${p.price}</p>
            <hr style="margin:15px 0;">
            <p><b>Description:</b> ${p.desc}</p>
            <p><b>Special Offer:</b> <span style="color:green;">${p.offer}</span></p>
            <p><b>Reviews:</b> ⭐⭐⭐⭐⭐ ${p.reviews}</p>
            <div style="margin-top:20px; display:flex; gap:10px;">
                <button class="confirm-btn" style="background:#6c757d;" onclick="addToCart(${p.id}); closeModal('productModal')">Add to Cart</button>
                <button class="confirm-btn" onclick="buyNow(${p.id})">Buy Now</button>
            </div>
            <div style="margin-top:15px;">
                <a href="https://wa.me/8801XXXXXXXXX" target="_blank" style="color:#25D366; text-decoration:none; font-weight:bold;">💬 Chat with Support</a>
            </div>
        </div>
    `;
    modal.style.display = 'flex';
}

// ৪. কার্ট লজিক ও অ্যানিমেশন [Point 3, 23, 24]
function addToCart(id, event) {
    const p = products.find(i => i.id === id);
    let item = cart.find(i => i.id === id);
    if (item) { item.qty++; } else { cart.push({ ...p, qty: 1, selected: true }); }
    
    if (event) playFlyAnimation(event);
    updateCartUI();
    showToast("Added to cart!");
}

function updateCartUI() {
    const container = document.getElementById('cart-items-container');
    const totalCount = document.getElementById('cart-count');
    const billTotal = document.getElementById('cart-total');
    
    totalCount.innerText = cart.length;
    let total = 0;
    
    container.innerHTML = cart.map((item, index) => {
        if (item.selected) total += (item.price * item.qty);
        return `
            <div style="display:flex; align-items:center; border-bottom:1px solid #eee; padding:10px 0;">
                <input type="checkbox" ${item.selected ? 'checked' : ''} onclick="toggleSelect(${index})">
                <div style="flex:1; margin-left:10px;">
                    <p style="font-size:14px; font-weight:bold;">${item.name}</p>
                    <small>${item.qty} x ${item.price} = ৳ ${item.qty * item.price}</small>
                </div>
                <div style="display:flex; align-items:center; gap:5px;">
                    <button onclick="changeQty(${index}, -1)">-</button>
                    <span>${item.qty}</span>
                    <button onclick="changeQty(${index}, 1)">+</button>
                    <button onclick="removeItem(${index})" style="color:red; border:none; background:none; margin-left:5px;">🗑️</button>
                </div>
            </div>
        `;
    }).join('');
    
    billTotal.innerText = total - discount;
}

// ৫. ভ্যালিডেশন লজিক [Point 5, 6, 9, 10, 11, 13]
function validateAndOrder() {
    const name = document.getElementById('orderName');
    const phone = document.getElementById('orderPhone');
    const addr = document.getElementById('orderAddress');
    
    // Anti-Junk Logic: কমপক্ষে ২ শব্দ এবং একই অক্ষর ৩ বারের বেশি লুপ হবে না
    const nameValid = name.value.trim().split(' ').length >= 2 && !/(.)\1{2,}/.test(name.value);
    const phoneValid = /^01[3-9]\d{8}$/.test(phone.value); // ১১ ডিজিট বিডি ফরম্যাট
    const addrValid = addr.value.trim().split(' ').length >= 3; // কমপক্ষে ৩ শব্দ

    // ইনপুট কালার চেঞ্জ
    name.className = nameValid ? 'valid-field' : 'invalid-field';
    phone.className = phoneValid ? 'valid-field' : 'invalid-field';
    addr.className = addrValid ? 'valid-field' : 'invalid-field';

    if (!nameValid || !phoneValid || !addrValid) {
        showToast("Please provide valid information!");
        return;
    }

    // রিভিউ পপআপ দেখানো [Point 18, 9-New]
    document.getElementById('shippingModal').style.display = 'none';
    const reviewData = document.getElementById('review-data');
    reviewData.innerHTML = `
        <p><b>Name:</b> ${name.value}</p>
        <p><b>Phone:</b> ${phone.value}</p>
        <p><b>Address:</b> ${addr.value}</p>
        <p><b>Total Bill:</b> ৳ ${document.getElementById('cart-total').innerText}</p>
    `;
    document.getElementById('confirmBox').style.display = 'flex';
}

// ৬. ফাইনাল অর্ডার প্রসেসিং (Excel Integration) [Point 27, 29, 10-New]
async function finalOrderProcess() {
    const btn = document.getElementById('confirmFinalBtn');
    btn.innerText = "Processing..."; // [Point 27, 341]
    btn.disabled = true;

    const orderData = {
        Order_ID: "EB" + Math.floor(Math.random() * 100000),
        Name: document.getElementById('orderName').value,
        Phone: document.getElementById('orderPhone').value,
        Address: document.getElementById('orderAddress').value,
        Items: cart.filter(i => i.selected).map(i => `${i.name}(${i.qty})`).join(", "),
        Total: document.getElementById('cart-total').innerText
    };

    try {
        // গুগল শিটে ডাটা পাঠানো
        await fetch(scriptURL, {
            method: 'POST',
            mode: 'no-cors',
            body: new URLSearchParams(orderData)
        });

        // সফল হলে মেসেজ [Point 20]
        document.getElementById('confirmBox').style.display = 'none';
        const success = document.getElementById('successBox');
        document.getElementById('successMessage').innerHTML = `
            <h2 style="color:green;">✔️ Order Confirmed!</h2>
            <p>Order ID: ${orderData.Order_ID}</p>
            <p>Thanks for purchase. We will call you soon.</p>
        `;
        success.style.display = 'block';
        cart = cart.filter(i => !i.selected);
        updateCartUI();
        
        setTimeout(() => { success.style.display = 'none'; }, 10000); // ১০ সেকেন্ড পর ভ্যানিশ
    } catch (e) {
        alert("Something went wrong. Try again!");
        btn.innerText = "Confirm Now";
        btn.disabled = false;
    }
}

// ৭. ইউটিলিটি ফাংশনস
function playFlyAnimation(e) {
    const cartIcon = document.querySelector('.cart-wrapper');
    const flyer = document.createElement('div');
    flyer.innerHTML = "🛒";
    flyer.style.position = 'fixed';
    flyer.style.left = e.clientX + 'px';
    flyer.style.top = e.clientY + 'px';
    flyer.style.zIndex = '5000';
    flyer.style.transition = 'all 0.8s ease-in-out';
    document.body.appendChild(flyer);
    
    setTimeout(() => {
        flyer.style.left = cartIcon.getBoundingClientRect().left + 'px';
        flyer.style.top = cartIcon.getBoundingClientRect().top + 'px';
        flyer.style.opacity = '0';
    }, 10);
    setTimeout(() => flyer.remove(), 800);
}

function showToast(msg) {
    const t = document.getElementById('toast');
    t.innerText = msg;
    t.style.display = 'block';
    setTimeout(() => { t.style.display = 'none'; }, 3000);
}

function toggleCart() {
    const modal = document.getElementById('cartModal');
    if (cart.length === 0 && modal.style.display !== 'flex') {
        showToast("Your cart is empty!");
        return;
    }
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

function buyNow(id) {
    cart = []; // আগের সব বাদ
    addToCart(id);
    closeModal('productModal');
    openShipping();
}

function openShipping() {
    document.getElementById('cartModal').style.display = 'none';
    document.getElementById('shippingModal').style.display = 'flex';
}

function backToCart() {
    document.getElementById('shippingModal').style.display = 'none';
    document.getElementById('cartModal').style.display = 'flex';
}

function closeModal(id) { document.getElementById(id).style.display = 'none'; }
function closeConfirm() { document.getElementById('confirmBox').style.display = 'none'; document.getElementById('shippingModal').style.display = 'flex'; }
function changeQty(i, d) { cart[i].qty += d; if(cart[i].qty < 1) cart[i].qty = 1; updateCartUI(); }
function removeItem(i) { cart.splice(i, 1); updateCartUI(); }
function toggleSelect(i) { cart[i].selected = !cart[i].selected; updateCartUI(); }

// ক্যাটাগরি ফিল্টার [Point 2]
function filterCategory(cat) {
    const filtered = cat === 'all' ? products : products.filter(p => p.category === cat);
    displayProducts(filtered);
    // Active class update
    document.querySelectorAll('.cat-flex a').forEach(a => {
        a.classList.remove('active');
        if(a.innerText.toLowerCase() === cat) a.classList.add('active');
    });
}

// সার্চ ফাংশন [Point 3, 28]
function searchProduct() {
    const val = document.getElementById('searchInput').value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(val));
    displayProducts(filtered);
}

window.onload = () => { displayProducts(products); };

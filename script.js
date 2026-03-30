// ১. পণ্য তালিকা (Product Database)
const products = [
    { id: 1, name: "Premium Miniket Rice (5kg)", price: 490, category: "grocery", img: "🍚" },
    { id: 2, name: "Natural Flower Honey (500g)", price: 550, category: "grocery", img: "🍯" },
    { id: 3, name: "Smart Watch T800 Ultra", price: 1250, category: "electronics", img: "⌚" },
    { id: 4, name: "Wireless Bluetooth Earbuds", price: 850, category: "electronics", img: "🎧" },
    { id: 5, name: "Matte Lipstick Set", price: 750, category: "cosmetics", img: "💄" },
    { id: 6, name: "Baby Diaper - Large", price: 1150, category: "kids", img: "👶" }
];

let cart = [];

// ২. পণ্য প্রদর্শন করা
function displayProducts(items) {
    const productList = document.getElementById('product-list');
    if(!productList) return;
    productList.innerHTML = "";

    items.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.onclick = () => openProductModal(product.id);
        card.innerHTML = `
            <span class="p-img">${product.img}</span>
            <div class="p-title">${product.name}</div>
            <div class="p-price">৳ ${product.price}</div>
        `;
        productList.appendChild(card);
    });
}

// ৩. কার্টে পণ্য যোগ করা (Quantity সহ)
function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartCount();
    closeModal();
    showToast("Product added to cart!");
}

// ৪. কার্ট আপডেট এবং Quantity পরিবর্তন
function changeQty(index, delta) {
    cart[index].quantity += delta;

    if (cart[index].quantity < 1) {
        if (confirm("Remove this item from cart?")) {
            cart.splice(index, 1);
        } else {
            cart[index].quantity = 1;
        }
    }
    
    updateCartCount();
    showCheckout(); // কার্ট রিফ্রেশ
}

function updateCartCount() {
    const countElement = document.getElementById('count');
    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    countElement.innerText = totalQty;
}

// ৫. কার্ট বা চেকআউট মেনু দেখানো
function showCheckout() {
    const modal = document.getElementById('checkout-section');
    const cartItemsDiv = document.getElementById('cart-items');
    const totalAmountSpan = document.getElementById('total-amount');
    
    cartItemsDiv.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const row = document.createElement('div');
        row.style = "display:flex; justify-content:space-between; align-items:center; margin-bottom:15px; border-bottom:1px solid #eee; padding-bottom:10px;";
        row.innerHTML = `
            <div style="flex:1;">
                <div style="font-weight:bold; font-size:14px;">${item.name}</div>
                <div style="color:#f85606;">৳ ${item.price}</div>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
                <button class="qty-btn" onclick="changeQty(${index}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
                <span style="min-width:60px; text-align:right; font-weight:bold;">৳ ${itemTotal}</span>
            </div>
        `;
        cartItemsDiv.appendChild(row);
    });

    totalAmountSpan.innerText = total;
    modal.style.display = "block";
}

// ৬. অর্ডার কনফার্ম এবং ভ্যালিডেশন
function placeOrder() {
    const name = document.getElementById('custName').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const address = document.getElementById('custAddr').value.trim();
    const payment = document.getElementById('paymentMethod').value;
    const note = document.getElementById('extraNote').value;

    // পপ-আপ ভ্যালিডেশন
    if (!name || !phone || !address) {
        alert("Please fill in all mandatory fields (*)");
        return;
    }

    if (phone.length !== 11) {
        alert("Mobile number must be exactly 11 digits!");
        return;
    }

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    // অর্ডার সফল মেসেজ
    alert(`Success! \nOrder placed for ${name}. \nPayment Method: ${payment.toUpperCase()} \nWe will contact you at ${phone} soon.`);
    
    // কার্ট পরিষ্কার করা
    cart = [];
    updateCartCount();
    closeCheckout();
    
    // ফর্ম ক্লিয়ার করা
    document.getElementById('custName').value = "";
    document.getElementById('custPhone').value = "";
    document.getElementById('custAddr').value = "";
    document.getElementById('extraNote').value = "";
}

// ৭. মডাল এবং অন্যান্য ফাংশন
function openProductModal(id) {
    const product = products.find(p => p.id === id);
    const modal = document.getElementById('productModal');
    const modalData = document.getElementById('modal-data');

    modalData.innerHTML = `
        <div style="text-align:center">
            <span style="font-size:80px">${product.img}</span>
            <h2 style="margin:15px 0;">${product.name}</h2>
            <h3 style="color:#f85606; font-size:24px; margin-bottom:20px;">৳ ${product.price}</h3>
            <button class="order-btn" onclick="addToCart(${product.id})">ADD TO CART</button>
        </div>
    `;
    modal.style.display = "block";
}

function closeModal() { document.getElementById('productModal').style.display = "none"; }
function closeCheckout() { document.getElementById('checkout-section').style.display = "none"; }

function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.innerText = msg;
    toast.style.display = "block";
    setTimeout(() => { toast.style.display = "none"; }, 3000);
}

// ক্যাটাগরি ফিল্টার
function filterCat(category) {
    const buttons = document.querySelectorAll('.cat-item');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    if (category === 'all') {
        displayProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        displayProducts(filtered);
    }
}

// ইনিশিয়াল লোড
window.onload = () => displayProducts(products);

// সার্চ ফাংশন
document.getElementById('searchInput').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(term));
    displayProducts(filtered);
});

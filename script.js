/**
 * Project: eOnlineBazar
 * Author: Your Name
 * Description: Product Rendering, Search, and Cart Logic
 */

// --- ১. প্রোডাক্ট ডাটাবেস (Database) ---
const products = [
    { id: 1, name: "Premium Miniket Rice (5kg)", price: 490, icon: "🍚" },
    { id: 2, name: "Pure Mustard Oil (1L)", price: 280, icon: "🍶" },
    { id: 3, name: "Organic Raw Honey (500g)", price: 550, icon: "🍯" },
    { id: 4, name: "Red Lentils (1kg)", price: 140, icon: "🥣" },
    { id: 5, name: "Chinigura Rice (1kg)", price: 160, icon: "🌾" },
    { id: 6, name: "Soybean Oil (2L)", price: 340, icon: "🧪" },
    { id: 7, name: "Fresh Green Tea", price: 220, icon: "🍵" },
    { id: 8, name: "Organic Ghee (500g)", price: 850, icon: "🧈" },
    { id: 9, name: "Premium Cotton T-Shirt 01", price: 450, images: "t-shirt-1.jpg" },
    { id: 10, name: "Premium Cotton T-Shirt 02", price: 470, images: "t-shirt-2.jpg" },
    { id: 11, name: "Premium Cotton T-Shirt 03", price: 750, images: "t-shirt-3.jpg" },
    { id: 12, name: "Premium Cotton T-Shirt 04", price: 400, images: "t-shirt-4.jpg" },
    { id: 13, name: "Premium Cotton T-Shirt 05", price: 460, images: "t-shirt-5.jpg" },
    { id: 14, name: "Premium Cotton T-Shirt 06", price: 850, images: "t-shirt-6.jpg" },
    { id: 15, name: "Premium Cotton T-Shirt 07", price: 250, images: "t-shirt-7.jpg" },
    { id: 16, name: "Premium Cotton T-Shirt 08", price: 850, images: "t-shirt-8.jpg" },
    { id: 17, name: "Premium Cotton T-Shirt 09", price: 650, images: "t-shirt-9.jpg" },
    { id: 18, name: "Premium Cotton T-Shirt 10", price: 950, images: "t-shirt-10.jpg" },
    { id: 19, name: "Premium Cotton T-Shirt 10", price: 1450, images: "afia.jpg" },
    { id: 20, name: "Premium Cotton T-Shirt 10", price: 500, images: "Rafia.jpg" },
];

// কার্ট আইটেম কাউন্ট রাখার জন্য ভেরিয়েবল
let currentCartCount = 0;

// পেজ পুরোপুরি লোড হওয়ার পর কাজ শুরু হবে
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products); // শুরুতে সব প্রোডাক্ট দেখাবে
    setupSearchFunctionality(); // সার্চ লজিক চালু করবে
});

// --- ২. প্রোডাক্ট রেন্ডারিং ফাংশন ---
function renderProducts(items) {
    const gridContainer = document.getElementById('productGrid');
    if (!gridContainer) return;

    // যদি সার্চে কিছু না পাওয়া যায়
    if (items.length === 0) {
        gridContainer.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 50px; color: #555;">
                <h3>দুঃখিত, কোনো পণ্য খুঁজে পাওয়া যায়নি!</h3>
                <p>অন্য কিছু লিখে সার্চ করুন।</p>
            </div>
        `;
        return;
    }

    // প্রোডাক্ট কার্ড তৈরি করা
    gridContainer.innerHTML = items.map(product => `
        <div class="p-card">
            <div class="p-img-box">
                ${product.images 
                    ? `<img src="images/${product.images}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/150?text=No+Image'">` 
                    : `<span>${product.icon}</span>`
                }
            </div>
            <div class="p-info">
                <div class="name" title="${product.name}">${product.name}</div>
                <div class="price">৳ ${product.price}</div>
            </div>
            <button class="add-btn-main" onclick="handleAddToCart()">Add to Cart</button>
        </div>
    `).join('');
}

// --- ৩. সার্চ ফাংশনালিটি ---
function setupSearchFunctionality() {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('mainSearch');

    if (!searchBtn || !searchInput) return;

    // সার্চ করার মেইন ফাংশন
    const runSearch = () => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const filteredProducts = products.filter(p => 
            p.name.toLowerCase().includes(searchTerm)
        );
        renderProducts(filteredProducts);
    };

    // বাটনে ক্লিক করলে সার্চ হবে
    searchBtn.addEventListener('click', runSearch);

    // কি-বোর্ডের 'Enter' প্রেস করলে সার্চ হবে
    searchInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            runSearch();
        }
    });
}

// --- ৪. অ্যাড টু কার্ট ফাংশন ---
function handleAddToCart() {
    currentCartCount++;
    const cartBadge = document.getElementById('uniqueCartCount');
    
    if (cartBadge) {
        cartBadge.innerText = currentCartCount;
        
        // বাটন ক্লিক করলে একটি ছোট কনফার্মেশন (ঐচ্ছিক)
        console.log("Product added to cart. Current count: " + currentCartCount);
    }
}

// পপআপ খোলার জন্য
const accountIcon = document.querySelector('.nav-item'); // আপনার আইকনের ক্লাস ধরে
const modal = document.getElementById('regModal');

accountIcon.onclick = function() {
    modal.style.display = "block";
}

// পপআপ বন্ধ করার জন্য
function closeModal() {
    modal.style.display = "none";
}

// পপআপের বাইরের ফাঁকা জায়গায় ক্লিক করলেও বন্ধ হবে
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


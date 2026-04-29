/**
 * Project: eOnlineBazar
 * Author: Abdul Karim Sheikh
 * Mobile: 01521377735
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
    { id: 10, name: "Premium Cotton T-Shirt 02", price: 450, images: "t-shirt-2.jpg" },
    { id: 11, name: "Premium Cotton T-Shirt 03", price: 450, images: "t-shirt-3.jpg" },
    { id: 12, name: "Premium Cotton T-Shirt 04", price: 450, images: "t-shirt-4.jpg" },
    { id: 13, name: "Premium Cotton T-Shirt 05", price: 450, images: "t-shirt-5.jpg" },
    { id: 14, name: "Premium Cotton T-Shirt 06", price: 450, images: "t-shirt-6.jpg" },
    { id: 15, name: "Premium Cotton T-Shirt 07", price: 450, images: "t-shirt-7.jpg" },
    { id: 16, name: "Premium Cotton T-Shirt 08", price: 450, images: "t-shirt-8.jpg" },
    { id: 17, name: "Premium Cotton T-Shirt 09", price: 450, images: "t-shirt-9.jpg" },
    { id: 18, name: "Premium Cotton T-Shirt 10", price: 450, images: "t-shirt-10.jpg" },
    { id: 17, name: "Afia Cotton T-Shirt 09", price: 450, images: "afia.jpg" },
    { id: 18, name: "Rafia Cotton T-Shirt 10", price: 450, images: "Rafia.jpg" },
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
// --- ৫. অথেন্টিকেশন এবং পপআপ লজিক (আপডেটেড) ---

// পপআপ কন্ট্রোল
const modal = document.getElementById('regModal');
const accountIcon = document.querySelector('.nav-item');

if (accountIcon) {
    accountIcon.onclick = function() {
        modal.style.display = "flex";
        showLogin(); // খোলার সময় ডিফল্ট লগইন দেখাবে
    }
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) closeModal();
}

// লগইন এবং রেজিস্ট্রেশন সুইচিং
function showRegister() {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('register-section').style.display = 'block';
    document.getElementById('success-message').style.display = 'none';
}


function showLogin() {
    // সেকশনগুলো টগল করা
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('register-section').style.display = 'none';
    document.getElementById('success-message').style.display = 'none';
    
    // কনসোলে চেক করার জন্য (ঐচ্ছিক)
    console.log("Switching to Login Section");
}


function handleLogin() {
    const emailInput = document.getElementById('loginEmail');
    const passInput = document.getElementById('loginPass');
    const emailError = document.getElementById('login-email-error');
    const passError = document.getElementById('login-pass-error');
    const loginBtn = document.querySelector('#login-section .btn-primary');

    // এরর পরিষ্কার করা
    emailError.innerText = "";
    passError.innerText = "";
    emailInput.classList.remove('is-invalid');
    passInput.classList.remove('is-invalid');

    let isValid = true;

    // ১. ইমেইল ফরম্যাট চেক
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailInput.value)) {
        emailError.innerText = "সঠিক ইমেইল ফরম্যাট দিন (যেমন: example@mail.com)";
        emailInput.classList.add('is-invalid');
        isValid = false;
    }

    // ২. পাসওয়ার্ড চেক (কমপক্ষে ৬ ডিজিট ধরে নিলাম)
    if (passInput.value.length < 6) {
        passError.innerText = "পাসওয়ার্ড কমপক্ষে ৬ ডিজিটের হতে হবে";
        passInput.classList.add('is-invalid');
        isValid = false;
    }

    if (!isValid) return; // ভুল থাকলে সামনে এগোবে না

    // সব ঠিক থাকলে এনিমেশন শুরু
    loginBtn.innerText = "Checking...";
    loginBtn.disabled = true;

    setTimeout(() => {
        document.getElementById('login-section').style.display = 'none';
        const successMsg = document.getElementById('success-message');
        successMsg.style.display = 'block';
        successMsg.innerHTML = `
            <h2 style="color: #28a745;">লগইন সফল! 🎉</h2>
            <p>স্বাগতম! আপনার ড্যাশবোর্ডে নিয়ে যাওয়া হচ্ছে...</p>
        `;

        setTimeout(() => {
            closeModal();
            // এখানে চাইলে রিফ্রেশ বা অন্য পেজে যাওয়ার কোড দিতে পারেন
        }, 2500);
    }, 1500);
}




// রিয়েল-টাইম ভ্যালিডেশন ফাংশন
function validateField(inputElement, errorElement, isValid, errorMessage) {
    if (!inputElement) return;
    if (inputElement.value.trim() === "") {
        inputElement.classList.remove('is-valid', 'is-invalid');
        errorElement.innerText = "";
        return;
    }
    if (isValid) {
        inputElement.classList.add('is-valid');
        inputElement.classList.remove('is-invalid');
        errorElement.innerText = "";
    } else {
        inputElement.classList.add('is-invalid');
        inputElement.classList.remove('is-valid');
        errorElement.innerText = errorMessage;
    }
}

// ইনপুট লিসেনার সেটআপ (DOM লোড হওয়ার পর)
document.addEventListener('DOMContentLoaded', () => {
    const fullName = document.getElementById('fullName');
    const mobile = document.getElementById('mobile');
    const email = document.getElementById('email');
    const address = document.getElementById('address');

    if (fullName) {
        fullName.addEventListener('input', () => {
            const isValid = fullName.value.trim().split(/\s+/).length >= 2;
            validateField(fullName, document.getElementById('name-error'), isValid, "নাম কমপক্ষে দুটি শব্দের হতে হবে");
        });
    }

    if (mobile) {
        mobile.addEventListener('input', () => {
            const isValid = /^01[3-9]\d{8}$/.test(mobile.value);
            validateField(mobile, document.getElementById('mobile-error'), isValid, "সঠিক ১১ ডিজিটের মোবাইল নাম্বার দিন");
        });
    }

    if (email) {
        email.addEventListener('input', () => {
            const isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value);
            validateField(email, document.getElementById('email-error'), isValid, "সঠিক ইমেইল ফরম্যাট দিন");
        });
    }

    if (address) {
        address.addEventListener('input', () => {
            const isValid = address.value.trim().split(/\s+/).length >= 3;
            validateField(address, document.getElementById('address-error'), isValid, "ঠিকানা কমপক্ষে তিনটি শব্দের হতে হবে");
        });
    }
});

// রেজিস্ট্রেশন সাবমিট লজিক
function submitRegister() {
    const fn = document.getElementById('fullName');
    const mb = document.getElementById('mobile');
    const em = document.getElementById('email');
    const ad = document.getElementById('address');
    
    let isFormValid = true;

    if (fn.value.trim().split(/\s+/).length < 2) {
        document.getElementById('name-error').innerText = "নাম কমপক্ষে দুটি শব্দের হতে হবে।";
        isFormValid = false;
    }
    if (!/^01[3-9]\d{8}$/.test(mb.value)) {
        document.getElementById('mobile-error').innerText = "সঠিক ১১ ডিজিটের মোবাইল নাম্বার দিন।";
        isFormValid = false;
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(em.value)) {
        document.getElementById('email-error').innerText = "সঠিক ইমেইল ফরম্যাট দিন।";
        isFormValid = false;
    }
    if (ad.value.trim().split(/\s+/).length < 3) {
        document.getElementById('address-error').innerText = "ঠিকানা কমপক্ষে তিনটি শব্দের হতে হবে।";
        isFormValid = false;
    }

    if (isFormValid) {
        document.getElementById('register-section').style.display = 'none';
        document.getElementById('success-message').style.display = 'block';
        setTimeout(() => { window.location.reload(); }, 4000);
    }
}


/**
 * Project: eOnlineBazar
 * Author: Abdul Karim Sheikh
 * Mobile: 01521377735
 * Description: Product Rendering, Search, and Cart Logic
 */

// --- ১. প্রোডাক্ট ডাটাবেস (Database) ---

/**
 * Project: eOnlineBazar
 */

// ১. একদম শুরুতে আগের বিশাল products লিস্ট ডিলিট করে এই লাইনটি লিখুন
let products = []; // শুরুতে এটি ঘোষণা করে নিন যাতে সব ফাংশন একে ব্যবহার করতে পারে
let currentCartCount=0

// ২. JSON থেকে ডাটা আনার ফাংশন

async function fetchProducts() {
    try {
        const response = await fetch('products.json');
        const products = await response.json(); 
        
        allProducts = products; // ফিল্টার করার জন্য সব ডাটা সেভ রাখা
        
        renderProducts(products); // পণ্যগুলো দেখাবে
        displayCategoryButtons(products); // এই ফাংশনটিই বাটনগুলো তৈরি করবে
        
    } catch (error) {
        console.error("ডাটা লোড হতে সমস্যা হয়েছে:", error);
    }
}



// ৫. DOMContentLoaded এর ভেতরে শুধু সার্চ বা অন্যান্য লজিক রাখুন
document.addEventListener('DOMContentLoaded', () => {
    fetchProducts();

    setupSearchFunctionality();
    setupFormValidation();
});

// ৬. আপনার আগের রেন্ডার ফাংশনটি যেমন আছে তেমনই থাকবে
function renderProducts(items) {
    const gridContainer = document.getElementById('productGrid');
    if (!gridContainer) return;

    if (items.length === 0) {
        gridContainer.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; padding: 50px;"><h3>দুঃখিত, কোনো পণ্য খুঁজে পাওয়া যায়নি!</h3></div>`;
        return;
    }

    gridContainer.innerHTML = items.map(product => {
        let displayMedia = "";
        
        // ১. ফটো লজিক
        if (product.images) {
            // সমাধান: এখানে শুধু সিঙ্গেল কোট ব্যবহার করা হয়েছে, কোনো ব্যাকস্ল্যাশ নেই।
            displayMedia = `<img src="images/${product.images}" alt="" onerror="this.onerror=null; this.parentElement.innerHTML='<span class=p-icon>${product.icon || '❌'}</span>';">`;
        } 
        // ২. সরাসরি Emoji লজিক
        else if (product.icon) {
            displayMedia = `<span class="p-icon">${product.icon}</span>`;
        } 
        // ৩. কিছুই না থাকলে লাল ক্রস
        else {
            displayMedia = `<span class="p-icon" style="color: red;">❌</span>`;
        }

        // ৪. রিটার্ন এবং ব্যাকটিক এক লাইনে
        return `<div class="p-card">
                <div class="p-img-box">
                    ${displayMedia}
                </div>
                <div class="p-info">
                    <div class="name" title="${product.name}">${product.name}</div>
                    <div class="price">৳ ${product.price}</div>
                </div>
                <button class="add-btn-main" onclick="handleAddToCart()">Add to Cart</button>
            </div>`;
    }).join('');
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


// ১. বাটনগুলো তৈরি করার ফাংশন
function displayCategoryButtons(products) {
    const navContainer = document.getElementById('navCategories');
    if (!navContainer) return;

    // ১. আপনার JSON থেকে সব ইউনিক ক্যাটাগরি বের করা
    const uniqueCategories = [...new Set(products.map(p => p.category))];
    
    // ২. 'All' বাটনসহ সব ক্যাটাগরিকে একটি লিস্টে সাজানো
    // এখানে 'All' ক্লিক করলে সব পণ্য (allProducts) দেখাবে
    let menuHtml = `<li><a href="#" onclick="filterByCategory('All')">All</a></li>`;

    // ৩. বাকি ক্যাটাগরিগুলো লুপ চালিয়ে যোগ করা
    menuHtml += uniqueCategories.map(cat => `
        <li><a href="#" onclick="filterByCategory('${cat}')">${cat}</a></li>
    `).join('');

    // ৪. পুরো মেনুটা নেভিগেশন বারে বসিয়ে দেওয়া
    navContainer.innerHTML = menuHtml;
}

// ২. কোনো বাটনে ক্লিক করলে সেই ক্যাটাগরির পণ্য দেখানোর ফাংশন
function filterByCategory(category) {
    if (category === 'All') {
        renderProducts(allProducts); // 'All' হলে সব দেখাবে
    } else {
        const filtered = allProducts.filter(p => p.category === category);
        renderProducts(filtered); // নির্দিষ্ট ক্যাটাগরি দেখাবে
    }
}

// ১. এন্টার বাটন চাপলে সার্চ করার জন্য এই ফাংশন
// এন্টার বাটন হ্যান্ডেল করার জন্য
function handleSearch(event) {
    if (event.key === "Enter") {
        searchProducts(); // এন্টার চাপলে সার্চ ফাংশন কল হবে
    }
}

// মূল সার্চ ফাংশন
function searchProducts() {
    // HTML এর id 'mainSearch' থেকে লেখাটি সংগ্রহ করা
    const searchTerm = document.getElementById('mainSearch').value.toLowerCase();
    
    // সব পণ্যের ভেতর থেকে নাম বা ক্যাটাগরি মিলিয়ে দেখা
    const filteredProducts = allProducts.filter(product => {
        return product.name.toLowerCase().includes(searchTerm) || 
               product.category.toLowerCase().includes(searchTerm);
    });

    // ফিল্টার করা রেজাল্ট স্ক্রিনে দেখানো
    renderProducts(filteredProducts);
}

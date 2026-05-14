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

// ১. ফাইলের একদম শুরুতে এই ভেরিয়েবলটি নিশ্চিত করুন

// ২. আপডেট করা fetchProducts ফাংশন
async function fetchProducts() {
    try {
        const response = await fetch('products.json');
        
        // সরাসরি মেইন ভেরিয়েবল 'allProducts' এ ডাটা রাখুন
        allProducts = await response.json(); 
        
        // এখন সব জায়গায় এই allProducts ব্যবহার করুন
        renderProducts(allProducts); 
        displayCategoryButtons(allProducts); 
        
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
                <button class="add-btn-main" onclick="handleAddToCart(${product.id}, event)">Add to Cart</button>
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
// --- ৪. অ্যাড টু কার্ট ফাংশন (পুরোপুরি ঠিক করা কোড) ---

function handleAddToCart(productId, event) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // সমস্যা সমাধান: এখানে 'items' এর বদলে 'allProducts' ব্যবহার করতে হবে
    const product = allProducts.find(p => p.id === productId); 
    
    if (!product) {
        console.error("Product not found!");
        return;
    }

    // ১. অ্যানিমেশন লজিক
    const btn = event.currentTarget;
    const cartIcon = document.getElementById('cartTrigger'); 
    
    // প্রডাক্টের ছবি বা ইমোজি খুঁজে বের করা
    const imgToFly = btn.closest('.p-card').querySelector('.p-img-box span, .p-img-box img');
    if (imgToFly && cartIcon) {
        const clone = imgToFly.cloneNode(true);
        const rect = imgToFly.getBoundingClientRect();
        const cartRect = cartIcon.getBoundingClientRect();
        
        Object.assign(clone.style, {
            position: 'fixed',
            left: rect.left + 'px',
            top: rect.top + 'px',
            width: rect.width + 'px',
            height: rect.height + 'px',
            zIndex: '1000',
            transition: 'all 0.8s ease-in-out'
        });
        
        document.body.appendChild(clone);
        
        setTimeout(() => {
            Object.assign(clone.style, {
                left: cartRect.left + 'px',
                top: cartRect.top + 'px',
                width: '10px',
                height: '10px',
                opacity: '0'
            });
        }, 10);
        setTimeout(() => clone.remove(), 800);
    }

    // ২. কার্ট ডেটা আপডেট লজিক
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        // এখানে ইউনিক আইটেম হিসেবে পুশ করা হচ্ছে
        cart.push({ 
            id: product.id, 
            name: product.name, 
            price: product.price, 
            quantity: 1, 
            image: product.images ? `images/${product.images}` : null,
            icon: product.icon || null 
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    // ৩. টোস্ট মেসেজ দেখানো
    showToast(`${product.name} কার্টে যোগ হয়েছে!`);
}

function showToast(msg) {
    let toast = document.getElementById('toast');
    if(!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.className = 'toast-msg';
        document.body.appendChild(toast);
    }
    toast.innerText = msg;
    toast.style.display = 'block';
    setTimeout(() => { toast.style.display = 'none'; }, 2500);
}

// কার্ট আইকনের সংখ্যা আপডেট করার ফাংশন
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const uniqueCount = cart.length; // ইউনিক আইটেমের সংখ্যা
    
    // আপনার স্ক্রিনশটের আইডি অনুযায়ী: uniqueCartCount
    const countElement = document.getElementById('uniqueCartCount');
    if (countElement) {
        countElement.innerText = uniqueCount;
    }
}

// পেজ লোড হওয়ার সাথে সাথে সংখ্যা দেখানোর জন্য এটি কল করুন
window.onload = function() {
    updateCartCount();
};

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




// চেকআউট পেজে কার্ট দেখানোর ফাংশন
/**
 * ১. লাইভ ভ্যালিডেশন ফাংশন (Live Validation)
 * ইনপুট দেওয়ার সাথে সাথে এটি চেক করবে এবং CSS ক্লাস যোগ/বিয়োগ করবে
 */
function validateLive(fieldId, type) {
    const input = document.getElementById(fieldId);
    const errorDisplay = document.getElementById(fieldId + 'Error');
    const value = input.value.trim();
    let isValid = false;
    let message = "";

    // ভ্যালিডেশন লজিক
    if (type === 'name') {
        if (value.length >= 3) {
            isValid = true;
        } else {
            message = "দয়া করে অন্তত ৩ অক্ষরের পূর্ণ নাম লিখুন।";
        }
    } 
    else if (type === 'phone') {
        const phoneRegex = /^01[3-9]\d{8}$/; // বাংলাদেশি নম্বর ফরম্যাট
        if (phoneRegex.test(value)) {
            isValid = true;
        } else {
            message = "সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন (যেমন: 017xxxxxxxx)।";
        }
    } 
    else if (type === 'address') {
        if (value.length >= 10) {
            isValid = true;
        } else {
            message = "দয়া করে বিস্তারিত ঠিকানা দিন (গ্রাম, পোস্ট, জেলা)।";
        }
    }

    // CSS ক্লাস এবং এরর মেসেজ আপডেট করা
    if (isValid) {
        input.classList.remove('field-error');
        input.classList.add('field-success');
        if (errorDisplay) {
            errorDisplay.innerText = "";
            errorDisplay.classList.remove('error-message');
        }
    } else {
        input.classList.remove('field-success');
        if (value.length > 0) { // কিছু লিখলে তবেই এরর দেখাবে
            input.classList.add('field-error');
            if (errorDisplay) {
                errorDisplay.innerText = message;
                errorDisplay.classList.add('error-message');
            }
        } else {
            input.classList.remove('field-error');
            if (errorDisplay) errorDisplay.innerText = "";
        }
    }
}

/**
 * ২. অর্ডার কনফার্ম করার সময় ফাইনাল চেক
 */
function confirmOrder() {
    const name = document.getElementById('custName').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const address = document.getElementById('custAddress').value.trim();

    // সব ফিল্ড ঠিক আছে কি না চেক করা
    if (name.length < 3 || phone.length !== 11 || address.length < 10) {
        alert("দয়া করে সব তথ্য সঠিকভাবে পূরণ করুন। লাল চিহ্নিত ফিল্ডগুলো চেক করুন।");
        
        // ভুল ফিল্ডগুলোতে এনিমেশন দেওয়া (Shake effect)
        if (name.length < 3) document.getElementById('custName').classList.add('input-error-border');
        if (phone.length !== 11) document.getElementById('custPhone').classList.add('input-error-border');
        if (address.length < 10) document.getElementById('custAddress').classList.add('input-error-border');
        
        return;
    }

    // সব ঠিক থাকলে সাকসেস মেসেজ দেখানো
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'flex';
        localStorage.removeItem('cart'); // কার্ট খালি করা
    } else {
        alert("অভিনন্দন! আপনার অর্ডারটি সফলভাবে গ্রহণ করা হয়েছে।");
        window.location.href = 'index.html';
    }
}

/**
 * ৩. প্রাইসিং ব্রেকডাউন রেন্ডার (Pricing Breakdown)
 * চেকআউট পেজে টাকার হিসেব দেখানোর জন্য
 */
function renderCheckout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const container = document.getElementById('checkoutCartItems');
    const totalEl = document.getElementById('checkoutTotal');
    let subtotal = 0;
    const deliveryCharge = 60; // ডেলিভারি চার্জ নির্দিষ্ট করে দিলাম

    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = "<p style='text-align:center;'>আপনার কার্ট খালি!</p>";
        totalEl.innerText = "৳ 0";
        return;
    }

    // আইটেম লিস্ট দেখানো
    container.innerHTML = cart.map(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        return `
            <div class="summary-line">
                <span>${item.name} (x${item.quantity})</span>
                <span>৳ ${itemTotal}</span>
            </div>`;
    }).join('');

    // টোটাল হিসেব সেকশন (আপনার CSS এর সাথে মিল রেখে)
    const summaryHtml = `
        <div class="total-summary-box">
            <div class="summary-line">
                <span>পণ্যর দাম (Subtotal):</span>
                <span>৳ ${subtotal}</span>
            </div>
            <div class="summary-line">
                <span>ডেলিভারি চার্জ:</span>
                <span>৳ ${deliveryCharge}</span>
            </div>
            <div class="summary-line subtotal-bold">
                <span>সর্বমোট (Grand Total):</span>
                <span>৳ ${subtotal + deliveryCharge}</span>
            </div>
        </div>
    `;
    
    container.innerHTML += summaryHtml;
    totalEl.innerText = `৳ ${subtotal + deliveryCharge}`;
}





function renderCheckout() {
    const container = document.getElementById('checkoutCartItems');
    const totalBox = document.getElementById('checkoutTotal'); 
    
    // লোকাল স্টোরেজ থেকে ডাটা নেওয়া
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let subtotal = 0;
    let deliveryCharge = 60; 

    if (cart.length === 0) {
        container.innerHTML = "<p style='text-align:center; padding:20px; color:red;'>Your cart is empty!</p>";
        if(totalBox) totalBox.innerHTML = "Subtotal: ৳ 0";
        return;
    }

    container.innerHTML = cart.map((item, index) => {
        const isSelected = item.selected !== false;
        const itemTotal = item.price * item.quantity;
        if(isSelected) subtotal += itemTotal;

        let mediaHTML = (item.images && item.images !== "") 
            ? `<img src="images/${item.images}" class="pro-img-style" onerror="this.parentElement.innerHTML='${item.icon || '📦'}'">` 
            : `<span class="emoji-style">${item.icon || '📦'}</span>`;

        return `
            <div class="checkout-item-card" style="opacity: ${isSelected ? '1' : '0.5'}">
                <input type="checkbox" class="item-checkbox" ${isSelected ? 'checked' : ''} onchange="toggleItemSelection(${index})">
                <div class="item-media-box">${mediaHTML}</div>
                <div class="item-details">
                    <h4>${item.name}</h4>
                    <p style="font-size:13px; color:#555;">${item.price} x ${item.quantity} = <strong>৳${itemTotal}</strong></p>
                    <div class="qty-control">
                        <button class="qty-btn-pro" onclick="updateQty(${index}, -1)">&minus;</button>
                        <span class="qty-num">${item.quantity}</span>
                        <button class="qty-btn-pro" onclick="updateQty(${index}, 1)">&plus;</button>
                        <button class="delete-btn-pro" onclick="removeCheckoutItem(${index})"><span class="trash-icon">🗑️</span></button>
                    </div>
                </div>
                <div class="price-side"><div class="total-price-text">৳${itemTotal}</div></div>
            </div>`;
    }).join('');

    // সামারি আপডেট
    if(totalBox) {
        totalBox.innerHTML = `
            <div class="total-summary-box" style="margin-top:15px; padding:15px; background:#f9f9f9; border-radius:10px; border:1px solid #ddd;">
                <div style="display:flex; justify-content:space-between; margin-bottom:8px;"><span>Delivery Charge:</span> <span>৳${deliveryCharge}</span></div>
                <hr style="border:0.2px solid #eee;">
                <div style="display:flex; justify-content:space-between; font-size:19px; font-weight:bold;"><span>Subtotal:</span> <span>৳${subtotal + deliveryCharge}</span></div>
            </div>`;
    }
}


// ১. পরিমাণ কমানো বা বাড়ানো
// পরিমাণ পরিবর্তন
function updateQty(index, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart[index].quantity + change > 0) {
        cart[index].quantity += change;
        localStorage.setItem('cart', JSON.stringify(cart)); // স্টোরেজে সেভ
        renderCheckout(); // ভিউ আপডেট
    }
}

// আইটেম রিমুভ করা
function removeCheckoutItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1); // ওই আইটেমটি বাদ দেওয়া
    localStorage.setItem('cart', JSON.stringify(cart)); // আপডেট সেভ করা
    renderCheckout();
}

// টিক মার্ক পরিবর্তন
function toggleItemSelection(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    // যদি selected প্রপার্টি না থাকে তবে সেটি তৈরি করবে এবং টগল করবে
    cart[index].selected = (cart[index].selected === undefined) ? false : !cart[index].selected;
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCheckout(); // দাম আপডেট করার জন্য
}

// ২. আইটেম সিলেক্ট বা আন-সিলেক্ট করা
function toggleItemSelection(index) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart[index].selected = (cart[index].selected === false) ? true : false;
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCheckout();
}

// ৩. আইটেম ডিলিট করা
function removeCheckoutItem(index) {
    if(confirm("আপনি কি এই পণ্যটি বাদ দিতে চান?")) {
        let cart = JSON.parse(localStorage.getItem('cart'));
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCheckout();
        // ইনডেক্স পেজের কার্ট কাউন্ট আপডেট করতে চাইলে নিচের ফাংশনটি কল করতে পারেন
        if(typeof updateCartCount === "function") updateCartCount();
    }
}


function updateTotalDisplay(total) {
    document.getElementById('checkoutTotal').innerText = `৳ ${total}`;
}

// ইনপুট ভ্যালিডেশন
function validateInput(id, type) {
    const input = document.getElementById(id);
    const value = input.value.trim();
    let isValid = false;

    if (type === 'name') isValid = value.split(' ').length >= 2;
    if (type === 'phone') isValid = value.length === 11;
    if (type === 'address') isValid = value.split(' ').length >= 3;

    input.style.borderColor = isValid ? "#2ecc71" : "#e74c3c";
}




// ১. কার্ট ড্রয়ার খোলা বা বন্ধ করা
function toggleCart() {
    document.getElementById('sideCart').classList.toggle('active');
    document.getElementById('cartOverlay').classList.toggle('active');
    renderSideCart(); // ড্রয়ার খুললেই লিস্ট আপডেট হবে
}

// ২. ড্রয়ারের ভেতরে পণ্যের লিস্ট দেখানো
function renderSideCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const container = document.getElementById('cartItemsList');
    const totalEl = document.getElementById('drawerTotal');
    let total = 0;

    if (cart.length === 0) {
        container.innerHTML = "<p style='text-align:center;'>আপনার ব্যাগ খালি!</p>";
        totalEl.innerText = "৳ 0";
        return;
    }

    container.innerHTML = cart.map((item, index) => {
        total += item.price * item.quantity;
        return `
            <div style="display:flex; justify-content:space-between; margin-bottom:15px; border-bottom:1px solid #eee; padding-bottom:10px;">
                <div>
                    <strong style="font-size:14px;">${item.name}</strong><br>
                    <small>৳${item.price} x ${item.quantity}</small>
                </div>
                <button onclick="removeItem(${index})" style="background:none; border:none; color:red; cursor:pointer;">🗑️</button>
            </div>
        `;
    }).join('');

    totalEl.innerText = `৳ ${total}`;
}

// ৩. চেকআউট পেজে পাঠানো
function goToCheckout() {
    window.location.href = "checkout.html";
}

// ৪. আইটেম মুছে ফেলা
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderSideCart();
    updateCartCount();
}













document.addEventListener('DOMContentLoaded', function() {
    renderCheckout(); // পেজ লোড হলেই কার্ট দেখাবে
});

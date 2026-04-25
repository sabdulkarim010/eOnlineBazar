/**
 * Project: eOnlineBazar - Minimal Logic
 * এখানে শুধুমাত্র প্রোডাক্ট দেখানো এবং সার্চ করার লজিক রাখা হয়েছে।
 */

// --- ১. ডাটাবেস সেকশন (পণ্য তালিকা) ---
const products = [
    { id: 1, name: "Premium Miniket Rice (5kg)", price: 490, icon: "🍚" },
    { id: 2, name: "Pure Mustard Oil (1L)", price: 280, icon: "🍶" },
    { id: 3, name: "Organic Raw Honey (500g)", price: 550, icon: "🍯" },
    { id: 4, name: "Red Lentils (1kg)", price: 140, icon: "🥣" },
    { id: 5, name: "Chinigura Rice (1kg)", price: 160, icon: "🌾" },
    { id: 6, name: "Soybean Oil (2L)", price: 340, icon: "🧪" },
    { id: 7, name: "Fresh Green Tea", price: 220, icon: "🍵" },
    { id: 8, name: "Organic Ghee (500g)", price: 850, icon: "🧈" },
    { id: 9, name: "Organic Ghee (500g)", price: 850, images: "t-shirt-1.jpg"},
];

// পেজ লোড হওয়ার সাথে সাথে পণ্যগুলো গ্রিড আকারে দেখাবে
window.onload = () => { 
    renderProducts(products); 
};

// --- ২. পণ্য প্রদর্শনী লজিক (Rendering) ---
function renderProducts(items) {
    const grid = document.getElementById('productGrid');
    // যদি HTML এ productGrid না থাকে তবে কোডটি এখানেই থেমে যাবে
    if (!grid) return;

    // লুপ চালিয়ে প্রতিটি পণ্যের জন্য কার্ড তৈরি করা
grid.innerHTML = items.map(p => `
    <div class="p-card">
        <div class="p-img-box">
            ${p.images ? `<img src="images/${p.images}" alt="${p.name}" style="width: 100px; height: 100px; object-fit: cover;">` : p.icon}
        </div>
        <div class="p-info">
            <div class="name">${p.name}</div>
            <div class="price">৳ ${p.price}</div>
        </div>
        <button class="add-btn-main">View Details</button>
    </div>
`).join('');


}

// --- ৩. সার্চ ফাংশন (Search Logic) ---
// সার্চ বাটনে ক্লিক করলে পণ্য ফিল্টার হবে
document.getElementById('searchBtn').onclick = () => {
    const query = document.getElementById('mainSearch').value.toLowerCase();
    
    // নামের সাথে মিল আছে এমন পণ্যগুলো খুঁজে বের করা
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    
    // ফিল্টার করা পণ্যগুলো আবার স্ক্রিনে দেখানো
    renderProducts(filtered);
};

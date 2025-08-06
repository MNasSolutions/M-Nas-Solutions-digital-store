// Product data
const products = [
       { id: 1,
        name: '12 Hour Rechargeable Light',
        price: 15000,
        image: 'assets/images/product1.jpg',
        description: 'Long-lasting illumination for home and business',
        specs: {
            duration: '12 hours',
            input: '5.1V',
            battery: '3.7V',
            charging: '3 hours'
        }
    },
    {
        id: 2,
        name: '8 Hour Rechargeable Light',
        price: 12000,
        image: 'assets/images/product2.jpg',
        description: 'Compact lighting solution',
        specs: {
            duration: '8 hours',
            input: '5.1V',
            battery: '3.7V',
            charging: '2 hours'
        }
    },
    {
        id: 3,
        name: 'LED Solar Panel Light',
        price: 25000,
        image: 'assets/images/product3.jpg',
        description: 'Eco-friendly solar-powered light',
        specs: {
            duration: '10 hours',
            input: 'Solar',
            battery: 'Lithium',
            charging: '6 hours sunlight'
        }
    },
    {
        id: 4,
        name: 'Portable Camping Light',
        price: 18000,
        image: 'assets/images/product4.jpg',
        description: 'Waterproof for outdoor use',
        specs: {
            duration: '15 hours',
            input: 'Micro USB',
            battery: '4000mAh',
            charging: '4 hours'
        }
    },
    {
        id: 5,
        name: 'LED Desk Lamp',
        price: 22000,
        image: 'assets/images/product5.jpg',
        description: 'Adjustable brightness for work',
        specs: {
            duration: '8 hours',
            input: '5V/2A',
            battery: '3.7V',
            charging: '2.5 hours'
        }
    },
    {
        id: 6,
        name: 'Rechargeable Bulb',
        price: 9500,
        image: 'assets/images/product6.jpg',
        description: 'Emergency lighting solution',
        specs: {
            duration: '6 hours',
            input: 'AC/DC',
            battery: '18650',
            charging: '3 hours'
        }
    },
    {
        id: 7,
        name: 'LED Street Light',
        price: 35000,
        image: 'assets/images/product7.jpg',
        description: 'Commercial grade lighting',
        specs: {
            duration: '12 hours',
            input: '12V',
            battery: '10Ah',
            charging: '8 hours'
        }
    },
    {
        id: 8,
        name: 'USB Rechargeable Torch',
        price: 8500,
        image: 'assets/images/product8.jpg',
        description: 'Handheld powerful torch',
        specs: {
            duration: '5 hours',
            input: 'Micro USB',
            battery: '2000mAh',
            charging: '2 hours'
        }
    },
    {
        id: 9,
        name: 'LED Flood Light',
        price: 28000,
        image: 'assets/images/product9.jpg',
        description: 'High lumen output',
        specs: {
            duration: '8 hours',
            input: '12V',
            battery: '7.5Ah',
            charging: '5 hours'
        }
    },
    {
        id: 10,
        name: 'Rechargeable Ceiling Light',
        price: 32000,
        image: 'assets/images/product10.jpg',
        description: 'Home lighting solution',
        specs: {
            duration: '10 hours',
            input: 'AC/DC',
            battery: '6000mAh',
            charging: '4 hours'
        }
    },
    {
        id: 11,
        name: 'LED Emergency Light',
        price: 12500,
        image: 'assets/images/product11.jpg',
        description: 'Automatic power backup',
        specs: {
            duration: '5 hours',
            input: 'AC/DC',
            battery: '3000mAh',
            charging: '3 hours'
        }
    },
    {
        id: 12,
        name: 'Solar Rechargeable Lantern',
        price: 19500,
        image: 'assets/images/product12.jpg',
        description: 'Portable hanging light',
        specs: {
            duration: '12 hours',
            input: 'Solar/USB',
            battery: '4000mAh',
            charging: '8 hours'
        }
    },
    {
        id: 13,
        name: 'LED Panel Light',
        price: 27500,
        image: 'assets/images/product13.jpg',
        description: 'Sleek modern design',
        specs: {
            duration: '10 hours',
            input: '12V',
            battery: '5000mAh',
            charging: '4 hours'
        }
    },
    {
        id: 14,
        name: 'Portable Work Light',
        price: 16500,
        image: 'assets/images/product14.jpg',
        description: 'Job site illumination',
        specs: {
            duration: '6 hours',
            input: 'Micro USB',
            battery: '3500mAh',
            charging: '3 hours'
        }
    },
    {
        id: 15,
        name: 'LED Security Light',
        price: 31000,
        image: 'assets/images/product15.jpg',
        description: 'Motion activated',
        specs: {
            duration: '8 hours',
            input: 'Solar/AC',
            battery: '6000mAh',
            charging: '6 hours'
        }
    },
    {
        id: 16,
        name: 'Rechargeable Reading Light',
        price: 7500,
        image: 'assets/images/product16.jpg',
        description: 'Adjustable neck design',
        specs: {
            duration: '8 hours',
            input: 'Micro USB',
            battery: '1500mAh',
            charging: '2 hours'
        }
    },
    {
        id: 17,
        name: 'LED Garden Light',
        price: 22500,
        image: 'assets/images/product17.jpg',
        description: 'Weatherproof outdoor lighting',
        specs: {
            duration: '10 hours',
            input: 'Solar',
            battery: '4000mAh',
            charging: '8 hours'
        }
    },
    {
        id: 18,
        name: 'Industrial LED Light',
        price: 42000,
        image: 'assets/images/product18.jpg',
        description: 'High-intensity lighting',
        specs: {
            duration: '12 hours',
            input: '24V',
            battery: '10Ah',
            charging: '8 hours'
        }
    },
    {
        id: 19,
        name: 'USB Rechargeable Bulb',
        price: 11000,
        image: 'assets/images/product19.jpg',
        description: 'Portable bulb with base',
        specs: {
            duration: '6 hours',
            input: 'Micro USB',
            battery: '2000mAh',
            charging: '3 hours'
        }
    },
    {
        id: 20,
        name: 'LED Decorative Light',
        price: 18500,
        image: 'assets/images/product20.jpg',
        description: 'Aesthetic lighting solution',
        specs: {
            duration: '8 hours',
            input: '5V/2A',
            battery: '3000mAh',
            charging: '3 hours'
        }
    },
        { 
        id: 21,
        name: '12 Hour Rechargeable Light', 
        price: 15000, // in kobo (₦150.00)
        image: 'assets/images/product1.jpg',
        description: 'For Home and Business Use',
        specs: {
            duration: '12 hours',
            inputVoltage: '5.1V',
            batteryVoltage: '3.7V',
            chargingTime: '3 hours'
        }
    },
    {
        id: 22,
        name: '8 Hour Rechargeable Light', 
        price: 12000, // in kobo (₦120.00)
        image: 'assets/images/product2.jpg',
        description: 'For Home and Business Use',
        specs: {
            duration: '8 hours',
            inputVoltage: '5.1V',
            batteryVoltage: '3.7V',
            chargingTime: '2 hours'
        }
        },

];

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('product-grid')) {
        loadProducts();
    }
    
    if (document.getElementById('receipt-details')) {
        loadReceipt();
    }
    
    updateCartCount();
});

function loadProducts() {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-specs">
                    <p><strong>Duration:</strong> ${product.specs.duration}</p>
                    <p><strong>Input Voltage:</strong> ${product.specs.inputVoltage}</p>
                    <p><strong>Battery Voltage:</strong> ${product.specs.batteryVoltage}</p>
                    <p><strong>Charging Time:</strong> ${product.specs.chargingTime}</p>
                </div>
                <p class="product-price">₦${(product.price / 100).toFixed(2)}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification(`${product.name} added to cart`);
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => document.body.removeChild(notification), 300);
        }, 3000);
    }, 10);
}

function loadReceipt() {
    const receiptEl = document.getElementById('receipt-details');
    if (!cart.length) {
        receiptEl.innerHTML = '<p>No items in your order.</p>';
        return;
    }
    
    let html = '<h3>Order Summary</h3><ul>';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        html += `
            <li>
                <div class="receipt-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div>
                        <p>${item.quantity} x ${item.name}</p>
                        <p>₦${(itemTotal / 100).toFixed(2)}</p>
                    </div>
                </div>
            </li>
        `;
    });
    
    html += `</ul><div class="receipt-total"><strong>Total: ₦${(total / 100).toFixed(2)}</strong></div>`;
    receiptEl.innerHTML = html;
    
    // Save order to Firebase if user is logged in
    const user = auth.currentUser;
    if (user) {
        db.collection('orders').add({
            userId: user.uid,
            items: cart,
            total: total,
            status: 'pending',
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
    }
    
    // Clear cart
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Cart management functions
function openCart() {
    renderCartItems();
    document.getElementById('cart-overlay').style.display = 'flex';
}

function closeCart() {
    document.getElementById('cart-overlay').style.display = 'none';
}

function renderCartItems() {
    const cartItemsEl = document.getElementById('cart-items');
    const cartTotalEl = document.getElementById('cart-total-amount');
    
    if (cart.length === 0) {
        cartItemsEl.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        cartTotalEl.textContent = '₦0.00';
        return;
    }
    
    let html = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        html += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-specs">${item.quantity} x ₦${(item.price / 100).toFixed(2)}</div>
                </div>
                <div class="cart-item-price">₦${(itemTotal / 100).toFixed(2)}</div>
                <div class="cart-item-remove" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </div>
            </div>
        `;
    });
    
    cartItemsEl.innerHTML = html;
    cartTotalEl.textContent = `₦${(total / 100).toFixed(2)}`;
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCartItems();
}

// Update cart icon to open cart
document.querySelector('.cart-icon').addEventListener('click', openCart);

// WhatsApp configuration - REPLACE WITH YOUR NUMBER
const whatsappNumber = "2347089036157"; // No +, no spaces, include country code

// Function to send order via WhatsApp
function checkoutWithWhatsApp() {
    // Get customer information
    const user = auth.currentUser;
    const userName = user ? user.displayName || "Customer" : "Guest Customer";
    const userPhone = user ? user.phoneNumber || "" : "";
    
    // Build the WhatsApp message
    let message = `*NEW ORDER FROM M NAS SOLUTIONS WEBSITE*%0A%0A`; // %0A is new line in URLs
    message += `*Customer Name:* ${userName}%0A`;
    if (userPhone) message += `*Phone:* ${userPhone}%0A%0A`;
    
    // Add order items
    message += `*ORDER ITEMS:*%0A`;
    let total = 0;
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        message += `${index + 1}. ${item.quantity}x ${item.name} - ₦${(itemTotal / 100).toFixed(2)}%0A`;
    });
    
    // Add order summary
    message += `%0A*TOTAL:* ₦${(total / 100).toFixed(2)}%0A%0A`;
    message += `*Delivery Address:*%0A[Customer will provide]%0A%0A`;
    message += `*Order Time:* ${new Date().toLocaleString()}`;
    
    // Save order to database if user is logged in
    if (user) {
        db.collection('orders').add({
            userId: user.uid,
            items: cart,
            total: total,
            status: 'pending',
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
    }
    
    // Open WhatsApp with order details
    window.location.href = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    // Clear cart
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Updated contact form WhatsApp integration
document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const phone = this.querySelector('input[type="tel"]').value;
    const userMessage = this.querySelector('textarea').value;
    
    const whatsappMessage = `*NEW CONTACT FORM SUBMISSION*%0A%0A` +
                          `*Name:* ${name}%0A` +
                          `*Email:* ${email}%0A` +
                          `*Phone:* ${phone}%0A%0A` +
                          `*Message:*%0A${userMessage}`;
    
    // Open WhatsApp with contact message
    window.location.href = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
    // Reset form
    this.reset();
});
// Load admin data
auth.onAuthStateChanged(user => {
    if (!user) {
        window.location.href = 'login.html';
        return;
    }
    
    // Check if user is admin
    db.collection('users').doc(user.uid).get().then(doc => {
        if (!doc.exists || !doc.data().isAdmin) {
            window.location.href = 'index.html';
        } else {
            loadOrders();
            loadAdminProducts();
        }
    });
});

// Load orders
function loadOrders() {
    db.collection('orders').orderBy('createdAt', 'desc').get().then(querySnapshot => {
        const ordersList = document.getElementById('orders-list');
        
        if (querySnapshot.empty) {
            ordersList.innerHTML = '<p>No orders found.</p>';
            return;
        }
        
        let html = '';
        querySnapshot.forEach(doc => {
            const order = doc.data();
            const date = order.createdAt?.toDate().toLocaleString();
            
            let itemsHtml = '';
            let orderTotal = 0;
            
            order.items.forEach(item => {
                const itemTotal = item.price * item.quantity;
                orderTotal += itemTotal;
                itemsHtml += `
                    <div class="order-item">
                        <p>${item.quantity} x ${item.name}</p>
                        <p>₦${(itemTotal / 100).toFixed(2)}</p>
                    </div>
                `;
            });
            
            html += `
                <div class="order-card">
                    <div class="order-header">
                        <p><strong>Order #${doc.id.substring(0, 8)}</strong></p>
                        <p>${date}</p>
                    </div>
                    <div class="order-items">${itemsHtml}</div>
                    <div class="order-footer">
                        <p><strong>Status:</strong> 
                            <select onchange="updateOrderStatus('${doc.id}', this.value)">
                                <option value="pending" ${order.status === 'pending' ? 'selected' : ''}>Pending</option>
                                <option value="processing" ${order.status === 'processing' ? 'selected' : ''}>Processing</option>
                                <option value="shipped" ${order.status === 'shipped' ? 'selected' : ''}>Shipped</option>
                                <option value="delivered" ${order.status === 'delivered' ? 'selected' : ''}>Delivered</option>
                            </select>
                        </p>
                        <p><strong>Total: ₦${(order.total / 100).toFixed(2)}</strong></p>
                    </div>
                </div>
            `;
        });
        
        ordersList.innerHTML = html;
    });
}

// Update order status
function updateOrderStatus(orderId, status) {
    db.collection('orders').doc(orderId).update({ status: status })
        .then(() => showNotification('Order status updated'))
        .catch(error => console.error('Error updating order:', error));
}

// Add new product
function addProduct() {
    const name = document.getElementById('product-name').value;
    const price = parseInt(document.getElementById('product-price').value);
    const image = document.getElementById('product-image').value;
    const description = document.getElementById('product-description').value;
    
    if (!name || !price || !image || !description) {
        showNotification('Please fill all fields');
        return;
    }
    
    const newProduct = {
        id: products.length + 1,
        name,
        price,
        image,
        description,
        specs: {} // You can add more fields as needed
    };
    
    products.push(newProduct);
    showNotification('Product added successfully');
    loadAdminProducts();
    
    // Clear form
    document.getElementById('product-name').value = '';
    document.getElementById('product-price').value = '';
    document.getElementById('product-image').value = '';
    document.getElementById('product-description').value = '';
}

// Load products in admin view
function loadAdminProducts() {
    const productGrid = document.getElementById('admin-product-grid');
    productGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="product-price">₦${(product.price / 100).toFixed(2)}</p>
                <button class="btn" onclick="removeProduct(${product.id})">Remove Product</button>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// Remove product
function removeProduct(productId) {
    if (confirm('Are you sure you want to remove this product?')) {
        products = products.filter(p => p.id !== productId);
        loadAdminProducts();
        showNotification('Product removed');
    }
}
// Global products array
let products = [];

// Load admin data
auth.onAuthStateChanged(user => {
    if (!user) {
        window.location.href = 'login.html';
        return;
    }
    
    // Check if user is admin
    db.collection('users').doc(user.uid).get().then(doc => {
        if (!doc.exists || !doc.data().isAdmin) {
            window.location.href = 'index.html';
        } else {
            loadProducts();
            loadOrders();
        }
    });
});

// Load products from Firestore
function loadProducts() {
    db.collection('products').get().then(querySnapshot => {
        products = [];
        querySnapshot.forEach(doc => {
            products.push({ id: doc.id, ...doc.data() });
        });
        renderAdminProducts();
    });
}

// Load orders with filtering
function loadOrders(filter = 'all') {
    let query = db.collection('orders').orderBy('createdAt', 'desc');
    
    if (filter !== 'all') {
        query = query.where('status', '==', filter);
    }
    
    query.get().then(querySnapshot => {
        const ordersList = document.getElementById('orders-list');
        ordersList.innerHTML = '';
        
        if (querySnapshot.empty) {
            ordersList.innerHTML = '<p class="no-orders">No orders found.</p>';
            return;
        }
        
        querySnapshot.forEach(doc => {
            const order = doc.data();
            const date = order.createdAt?.toDate().toLocaleString();
            
            let itemsHtml = '';
            let orderTotal = 0;
            
            order.items.forEach(item => {
                const itemTotal = item.price * item.quantity;
                orderTotal += itemTotal;
                itemsHtml += `
                    <div class="order-item">
                        <img src="${item.image}" alt="${item.name}">
                        <div>
                            <p>${item.quantity} x ${item.name}</p>
                            <p>₦${(itemTotal / 100).toFixed(2)}</p>
                        </div>
                    </div>
                `;
            });
            
            // Get customer info
            let customerInfo = 'Guest';
            if (order.userId) {
                db.collection('users').doc(order.userId).get().then(userDoc => {
                    if (userDoc.exists) {
                        document.getElementById(`customer-${doc.id}`).textContent = userDoc.data().name;
                    }
                });
            }
            
            ordersList.innerHTML += `
                <div class="order-card">
                    <div class="order-header">
                        <div>
                            <p><strong>Order #${doc.id.substring(0, 8)}</strong></p>
                            <p class="order-date">${date}</p>
                        </div>
                        <div class="order-status">
                            <span class="status-badge ${order.status}">${order.status}</span>
                        </div>
                    </div>
                    
                    <div class="order-customer">
                        <p><strong>Customer:</strong> <span id="customer-${doc.id}">${customerInfo}</span></p>
                        ${order.userId ? `<a href="#" onclick="viewCustomer('${order.userId}')">View Profile</a>` : ''}
                    </div>
                    
                    <div class="order-items">${itemsHtml}</div>
                    
                    <div class="order-footer">
                        <div class="order-total">
                            <p><strong>Total: ₦${(order.total / 100).toFixed(2)}</strong></p>
                        </div>
                        <div class="order-actions">
                            <select onchange="updateOrderStatus('${doc.id}', this.value)">
                                <option value="pending" ${order.status === 'pending' ? 'selected' : ''}>Pending</option>
                                <option value="processing" ${order.status === 'processing' ? 'selected' : ''}>Processing</option>
                                <option value="shipped" ${order.status === 'shipped' ? 'selected' : ''}>Shipped</option>
                                <option value="delivered" ${order.status === 'delivered' ? 'selected' : ''}>Delivered</option>
                            </select>
                            <button class="btn small" onclick="contactCustomer('${order.userId}', '${doc.id}')">
                                <i class="fas fa-envelope"></i> Contact
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });
    });
}

// Filter orders
function filterOrders() {
    const filter = document.getElementById('order-filter').value;
    loadOrders(filter);
}

// Update order status
function updateOrderStatus(orderId, status) {
    db.collection('orders').doc(orderId).update({ status })
        .then(() => showNotification('Order status updated successfully'))
        .catch(error => showNotification('Error updating order: ' + error.message, true));
}

// View customer profile
function viewCustomer(userId) {
    window.location.href = `profile.html?userId=${userId}`;
}

// Contact customer
function contactCustomer(userId, orderId) {
    db.collection('users').doc(userId).get().then(doc => {
        if (doc.exists) {
            const user = doc.data();
            const message = `Regarding your order #${orderId.substring(0,8)} from M Nas Solutions`;
            window.open(`https://wa.me/234${user.phone}?text=${encodeURIComponent(message)}`, '_blank');
        } else {
            showNotification('Customer information not found', true);
        }
    }).catch(() => {
        showNotification('Error loading customer data', true);
    });
}

// Add new product
function addProduct() {
    const name = document.getElementById('product-name').value;
    const price = parseInt(document.getElementById('product-price').value);
    const image = document.getElementById('product-image').value;
    const description = document.getElementById('product-description').value;
    const duration = document.getElementById('product-duration').value;
    const inputVoltage = document.getElementById('product-input-voltage').value;
    const batteryVoltage = document.getElementById('product-battery-voltage').value;
    const chargingTime = document.getElementById('product-charging-time').value;
    
    if (!name || !price || !image || !description) {
        showNotification('Please fill all required fields', true);
        return;
    }
    
    const newProduct = {
        name,
        price,
        image,
        description,
        specs: {
            duration,
            inputVoltage,
            batteryVoltage,
            chargingTime
        },
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };
    
    db.collection('products').add(newProduct)
        .then(() => {
            showNotification('Product added successfully');
            loadProducts();
            clearProductForm();
        })
        .catch(error => showNotification('Error adding product: ' + error.message, true));
}

// Clear product form
function clearProductForm() {
    document.getElementById('product-name').value = '';
    document.getElementById('product-price').value = '';
    document.getElementById('product-image').value = '';
    document.getElementById('product-description').value = '';
    document.getElementById('product-duration').value = '';
    document.getElementById('product-input-voltage').value = '';
    document.getElementById('product-battery-voltage').value = '';
    document.getElementById('product-charging-time').value = '';
}

// Render products in admin view
function renderAdminProducts() {
    const productGrid = document.getElementById('admin-product-grid');
    productGrid.innerHTML = '';
    
    if (products.length === 0) {
        productGrid.innerHTML = '<p class="no-products">No products found. Add your first product above.</p>';
        return;
    }
    
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
                
                <div class="product-actions">
                    <button class="btn small" onclick="editProduct('${product.id}')">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="btn small danger" onclick="deleteProduct('${product.id}')">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// Edit product
function editProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Fill the form with product data
    document.getElementById('product-name').value = product.name;
    document.getElementById('product-price').value = product.price;
    document.getElementById('product-image').value = product.image;
    document.getElementById('product-description').value = product.description;
    document.getElementById('product-duration').value = product.specs.duration;
    document.getElementById('product-input-voltage').value = product.specs.inputVoltage;
    document.getElementById('product-battery-voltage').value = product.specs.batteryVoltage;
    document.getElementById('product-charging-time').value = product.specs.chargingTime;
    
    // Scroll to form
    document.querySelector('.form-group').scrollIntoView({ behavior: 'smooth' });
    
    // Change add button to update button
    const addBtn = document.querySelector('.form-group button');
    addBtn.textContent = 'Update Product';
    addBtn.onclick = function() { updateProduct(productId); };
}

// Update product
function updateProduct(productId) {
    const name = document.getElementById('product-name').value;
    const price = parseInt(document.getElementById('product-price').value);
    const image = document.getElementById('product-image').value;
    const description = document.getElementById('product-description').value;
    const duration = document.getElementById('product-duration').value;
    const inputVoltage = document.getElementById('product-input-voltage').value;
    const batteryVoltage = document.getElementById('product-battery-voltage').value;
    const chargingTime = document.getElementById('product-charging-time').value;
    
    if (!name || !price || !image || !description) {
        showNotification('Please fill all required fields', true);
        return;
    }
    
    const updatedProduct = {
        name,
        price,
        image,
        description,
        specs: {
            duration,
            inputVoltage,
            batteryVoltage,
            chargingTime
        }
    };
    
    db.collection('products').doc(productId).update(updatedProduct)
        .then(() => {
            showNotification('Product updated successfully');
            loadProducts();
            clearProductForm();
            
            // Reset add button
            const addBtn = document.querySelector('.form-group button');
            addBtn.textContent = 'Add Product';
            addBtn.onclick = function() { addProduct(); };
        })
        .catch(error => showNotification('Error updating product: ' + error.message, true));
}

// Delete product
function deleteProduct(productId) {
    if (confirm('Are you sure you want to delete this product? This action cannot be undone.')) {
        db.collection('products').doc(productId).delete()
            .then(() => {
                showNotification('Product deleted successfully');
                loadProducts();
            })
            .catch(error => showNotification('Error deleting product: ' + error.message, true));
    }
}

// Show notification
function showNotification(message, isError = false) {
    const notification = document.createElement('div');
    notification.className = `notification ${isError ? 'error' : 'success'}`;
    notification.innerHTML = `<i class="fas ${isError ? 'fa-exclamation-circle' : 'fa-check-circle'}"></i> ${message}`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => document.body.removeChild(notification), 300);
        }, 3000);
    }, 10);
}

// Secure admin page
auth.onAuthStateChanged(user => {
    if (!user) {
        window.location.href = 'login.html';
        return;
    }
    
    // Verify admin status
    db.collection('users').doc(user.uid).get().then(doc => {
        if (!doc.exists || doc.data().email !== ADMIN_EMAIL) {
            window.location.href = 'index.html';
        } else {
            // Only load admin content if verified
            loadOrders();
            loadProducts();
        }
    });
});
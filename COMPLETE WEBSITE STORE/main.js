function checkoutWithWhatsApp() {
    const user = auth.currentUser;
    const userName = user ? user.displayName : "Guest";
    
    let message = `New Order from ${userName}:\n\n`;
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        message += `${item.quantity} x ${item.name} - ₦${(itemTotal / 100).toFixed(2)}\n`;
    });
    
    message += `\nTotal: ₦${(total / 100).toFixed(2)}`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
   // WhatsApp configuration
const whatsappNumber = "2347069036157"; // Replace with your number (without + or spaces)
    
    // Open WhatsApp with the order details
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    
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
    
    // Clear cart
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// WhatsApp configuration - REPLACE WITH YOUR NUMBER
<a href="https://wa.me/2347089036157?text=Test%20message">Test WhatsApp</a>
// Send order via WhatsApp
function checkoutWithWhatsApp() {
    const user = auth.currentUser;
    const userName = user ? user.displayName : "Guest";
    const userPhone = user ? user.phoneNumber : "";
    
    let message = `*NEW ORDER FROM M NAS SOLUTIONS WEBSITE*\n\n`;
    message += `*Customer Name:* ${userName}\n`;
    if (userPhone) message += `*Phone:* ${userPhone}\n\n`;
    
    message += `*ORDER DETAILS:*\n`;
    let total = 0;
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        message += `${index + 1}. ${item.quantity}x ${item.name} - ₦${(itemTotal / 100).toFixed(2)}\n`;
    });
    
    message += `\n*TOTAL:* ₦${(total / 100).toFixed(2)}\n\n`;
    message += `*Delivery Address:* \n[Customer will provide address]`;
    
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
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    
    // Clear cart
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Handle contact form submission
document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const phone = this.querySelector('input[type="tel"]').value;
    const message = this.querySelector('textarea').value;
    
    const whatsappMessage = `*NEW CONTACT FORM SUBMISSION*\n\n` +
                           `*Name:* ${name}\n` +
                           `*Email:* ${email}\n` +
                           `*Phone:* ${phone}\n\n` +
                           `*Message:*\n${message}`;
    
    // Open WhatsApp with contact message
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    
    // Reset form
    this.reset();
    alert('Thank you for your message! We will contact you shortly.');
});

// WhatsApp configuration - ENTER YOUR NUMBER HERE
const whatsappNumber = "2347069036157"; // No +, no spaces, with country code

// Enhanced checkout function
function checkoutWithWhatsApp() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    const user = auth.currentUser;
    const userName = user ? user.displayName || "Customer" : "Guest Customer";
    const userPhone = user ? user.phoneNumber || "" : "";
    
    // Format message for WhatsApp
    let message = `*NEW ORDER - M NAS SOLUTIONS*%0A%0A` + 
                 `*Customer:* ${userName}%0A`;
    
    if (userPhone) message += `*Phone:* ${userPhone}%0A%0A`;
    
    message += `*ORDER DETAILS:*%0A`;
    let total = 0;
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        message += `➡ ${item.quantity}x ${item.name}%0A` +
                   `   ₦${(item.price/100).toFixed(2)} each%0A` +
                   `   = ₦${(itemTotal/100).toFixed(2)}%0A%0A`;
    });
    
    message += `*TOTAL AMOUNT:* ₦${(total/100).toFixed(2)}%0A%0A` +
               `*Delivery Address:*%0A[Customer will provide]%0A%0A` +
               `_Order placed at ${new Date().toLocaleTimeString()}_`;

    // Save order to database
    if (user) {
        db.collection('orders').add({
            userId: user.uid,
            items: cart,
            total: total,
            status: 'pending',
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
    }

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    
    // Clear cart
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}
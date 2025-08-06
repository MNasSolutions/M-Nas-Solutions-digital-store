// Handle login
document.getElementById('login-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    auth.signInWithEmailAndPassword(email, password)
        .then(() => window.location.href = 'profile.html')
        .catch(error => document.getElementById('login-error').textContent = error.message);
});

// Handle signup
document.getElementById('signup-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            return db.collection('users').doc(userCredential.user.uid).set({
                name: name,
                email: email,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                isAdmin: false
            });
        })
        .then(() => window.location.href = 'profile.html')
        .catch(error => document.getElementById('signup-error').textContent = error.message);
});

// Logout function
function logout() {
    auth.signOut().then(() => window.location.href = 'index.html');
}

// Auth state listener
auth.onAuthStateChanged((user) => {
    const authLinks = document.querySelector('.auth-links');
    if (user) {
        authLinks.innerHTML = `
            <a href="profile.html"><i class="fas fa-user"></i> Profile</a>
            <a href="#" onclick="logout()"><i class="fas fa-sign-out-alt"></i> Logout</a>
        `;
    } else {
        authLinks.innerHTML = `
            <a href="login.html"><i class="fas fa-sign-in-alt"></i> Login</a>
            <a href="signup.html"><i class="fas fa-user-plus"></i> Sign Up</a>
        `;
    }
});

// Admin configuration - PUT YOUR EMAIL HERE
const ADMIN_EMAIL = "your-personal-email@example.com";

// Modify the auth state listener
auth.onAuthStateChanged((user) => {
    const authLinks = document.querySelector('.auth-links');
    
    if (user) {
        // Check if the logged in user is you (admin)
        if (user.email === ADMIN_EMAIL) {
            authLinks.innerHTML = `
                <a href="admin.html"><i class="fas fa-lock"></i> Admin</a>
                <a href="profile.html"><i class="fas fa-user"></i> Profile</a>
                <a href="#" onclick="logout()"><i class="fas fa-sign-out-alt"></i> Logout</a>
            `;
        } else {
            // Regular user view
            authLinks.innerHTML = `
                <a href="profile.html"><i class="fas fa-user"></i> Profile</a>
                <a href="#" onclick="logout()"><i class="fas fa-sign-out-alt"></i> Logout</a>
            `;
        }
    } else {
        // Not logged in view
        authLinks.innerHTML = `
            <a href="login.html"><i class="fas fa-sign-in-alt"></i> Login</a>
            <a href="signup.html"><i class="fas fa-user-plus"></i> Sign Up</a>
        `;
    }
});

// Add this to your signup function to auto-detect admin
function handleSignup(email, password, name) {
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const isAdmin = email === ADMIN_EMAIL;
            return db.collection('users').doc(userCredential.user.uid).set({
                name: name,
                email: email,
                isAdmin: isAdmin,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });
        })
        .then(() => {
            window.location.href = 'profile.html';
        })
        .catch(error => {
            document.getElementById('signup-error').textContent = error.message;
        });
}
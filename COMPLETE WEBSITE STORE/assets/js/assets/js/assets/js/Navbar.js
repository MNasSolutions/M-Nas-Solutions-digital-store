import { useAdmin } from './useAdmin';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';

function Navbar() {
  const isAdmin = useAdmin();

  return (
    <nav>
      <a href="/">Home</a>
      <a href="/profile">Profile</a>
      
      {/* Show Admin Link Only to Admins */}
      {isAdmin && (
        <a href="/admin-dashboard" className="admin-link">
          Admin Dashboard
        </a>
      )}

      {/* Logout Button (optional) */}
      <button onClick={() => signOut(auth)}>Logout</button>
    </nav>
  );
}

export default Navbar;
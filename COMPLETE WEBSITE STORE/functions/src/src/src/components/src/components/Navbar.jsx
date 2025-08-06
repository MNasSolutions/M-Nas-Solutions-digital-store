import { AdminLink } from './AdminLink';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="/profile">Profile</a></li>
          <AdminLink />
        </ul>
        <button 
          className="btn btn-outline-danger" 
          onClick={() => signOut(auth)}>
          Logout
        </button>
      </div>
    </nav>
  );
}
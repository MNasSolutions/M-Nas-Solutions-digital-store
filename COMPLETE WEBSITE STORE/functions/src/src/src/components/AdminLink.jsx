import { useAdmin } from '../useAdmin';

export function AdminLink() {
  const isAdmin = useAdmin();

  return isAdmin ? (
    <li className="nav-item">
      <a href="/admin" className="nav-link">
        <span style={{ color: 'red', fontWeight: 'bold' }}>Admin Panel</span>
      </a>
    </li>
  ) : null;
}
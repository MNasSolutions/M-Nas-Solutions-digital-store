import { useAdmin } from './useAdmin';

function AdminDashboard() {
  const isAdmin = useAdmin();

  if (!isAdmin) {
    return <h1>Access Denied. Admins only.</h1>;
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, Admin!</p>
    </div>
  );
}

export default AdminDashboard;
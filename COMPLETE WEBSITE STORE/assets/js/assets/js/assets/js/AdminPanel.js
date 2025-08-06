import { useState, useEffect } from 'react';
import { auth } from './firebase-config';

function AdminPanel() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      const user = auth.currentUser;
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        setIsAdmin(!!idTokenResult.claims.admin); // Check custom claim
      }
    };

    checkAdmin();
  }, []);

  return (
    <div>
      {isAdmin ? (
        <div>
          <h1>Welcome, Admin!</h1>
          <button>Delete User</button>
        </div>
      ) : (
        <p>You don't have admin access.</p>
      )}
    </div>
  );
}

export default AdminPanel;
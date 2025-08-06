import { useState, useEffect } from 'react';
import { auth } from './firebase-config';

export function useAdmin() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      const user = auth.currentUser;
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        setIsAdmin(!!idTokenResult.claims.admin); // Checks Firebase custom claim
      }
    };

    // Listen for auth state changes
    const unsubscribe = auth.onAuthStateChanged(checkAdmin);
    return () => unsubscribe(); // Cleanup
  }, []);

  return isAdmin;
}
import { useEffect, useState } from 'react';
import { auth } from './firebase';

export function useAdmin() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const idTokenResult = await user.getIdTokenResult(true);
          setIsAdmin(idTokenResult.claims.admin === true);
        }
      } catch (error) {
        console.error("Admin check failed:", error);
      }
    };

    const unsubscribe = auth.onAuthStateChanged(checkAdmin);
    return () => unsubscribe();
  }, []);

  return isAdmin;
}
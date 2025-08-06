import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  // ... paste your complete config here
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDgvx3ssBFKefe4NyopyLFtnbW2dfsOZOw",
  authDomain: "starwars-46e63.firebaseapp.com",
  projectId: "starwars-46e63",
  storageBucket: "starwars-46e63.firebasestorage.app",
  messagingSenderId: "624887899797",
  appId: "1:624887899797:web:51c5782b1b7d4d7cd41d9c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

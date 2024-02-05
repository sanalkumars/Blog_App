// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "my-blog-9c740.firebaseapp.com",
  projectId: "my-blog-9c740",
  storageBucket: "my-blog-9c740.appspot.com",
  messagingSenderId: "811345457882",
  appId: "1:811345457882:web:8cdb1bb0f9db8cc183ebe3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

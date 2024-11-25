// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB31ZsZL56AZh-vM4_u-EOUSkmfYzAwjDg",
  authDomain: "blog-501d6.firebaseapp.com",
  projectId: "blog-501d6",
  storageBucket: "blog-501d6.appspot.com",
  messagingSenderId: "754621487147",
  appId: "1:754621487147:web:144ec01572de5cc7e3f26e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;






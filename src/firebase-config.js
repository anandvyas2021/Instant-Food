import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCmNITmlOiGXlostqpDbaYsjWndv6z0C0M",
  authDomain: "instantfoodorder.firebaseapp.com",
  databaseURL:
    "https://instantfoodorder-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "instantfoodorder",
  storageBucket: "instantfoodorder.appspot.com",
  messagingSenderId: "265633674077",
  appId: "1:265633674077:web:914f714993338054966eb4",
  measurementId: "G-RVG1KG0W5Z",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

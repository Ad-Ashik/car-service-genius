// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyAaljz3EJJwrHmlyv0y0MaSmv7Ee0kII0k",
  // authDomain: "car-service-genius.firebaseapp.com",
  // projectId: "car-service-genius",
  // storageBucket: "car-service-genius.appspot.com",
  // messagingSenderId: "999216032690",
  // appId: "1:999216032690:web:c2458554258e18b8dc92ab"



  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

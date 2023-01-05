// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCLgcWzXHHdzmRFUzFd1KJPKLWHkobyNNQ',
  authDomain: 'clone-cc5ff.firebaseapp.com',
  projectId: 'clone-cc5ff',
  storageBucket: 'clone-cc5ff.appspot.com',
  messagingSenderId: '1093818686952',
  appId: '1:1093818686952:web:15a57f170c16660dba585d',
  measurementId: 'G-HD1S0QW622',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export default auth
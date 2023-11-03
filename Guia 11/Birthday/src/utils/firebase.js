// Import the functions you need from the SDKs you need
import { firebase } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4FLBT1r0QaVXjtIj62jzvrygKUGdFj_0",
  authDomain: "birthday-16f8f.firebaseapp.com",
  projectId: "birthday-16f8f",
  storageBucket: "birthday-16f8f.appspot.com",
  messagingSenderId: "493207245779",
  appId: "1:493207245779:web:ede711c5772a0a7219d526"
};

// Initialize Firebase

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
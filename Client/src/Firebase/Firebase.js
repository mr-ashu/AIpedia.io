import firebase from "firebase/compat/app";
import "firebase/compat/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDWNy0RwcadYzIS9oq1TOX3glqNF6BUVuY",
  authDomain: "ai-pedia-1676033385412.firebaseapp.com",
  projectId: "ai-pedia-1676033385412",
  storageBucket: "ai-pedia-1676033385412.appspot.com",
  messagingSenderId: "480125108716",
  appId: "1:480125108716:web:d9d0899111286a00fdc0c9",
  measurementId: "G-1Z2JNWG405"
};
 
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleAuthProvider };

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { collection, getDocs, addDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD2LKaysl4IDx0iiqZsV0Tn6daGOE-cZPg",
    authDomain: "bizgen-test.firebaseapp.com",
    databaseURL: "https://bizgen-test-default-rtdb.firebaseio.com",
    projectId: "bizgen-test",
    storageBucket: "bizgen-test.appspot.com",
    messagingSenderId: "653971132951",
    appId: "1:653971132951:web:e6879dfa1b60913510c252",
    measurementId: "G-RT1B6RMQN0" 
    };

// Use this to initialize the firebase App
const app = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = app.firestore();
const auth = firebase.auth();

console.log(app)
async function getBlogPosts(db) {
    const citiesCol = collection(db, 'blog_posts');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}

async function addContactMessage(email, body) {
    const docRef = await addDoc(collection(db, "contact_messages"), {
       email: email,
       body: body
      });
      console.log("Document written with ID: ", docRef.id); 
}
// Initialize Firebase
export {app, db, getBlogPosts, addContactMessage, auth};
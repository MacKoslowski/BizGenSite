import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js';
import { getFirestore, collection, getDocs, addDoc} from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js'
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
    
//console.log(initializeApp)
    // Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app)
const db = getFirestore(app);
async function getBlogPosts(db) {
    const citiesCol = collection(db, 'Blog Posts');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}

async function addContactMessage(email, body) {
    const docRef = await addDoc(collection(db, "Contact Messages"), {
       email: email,
       body: body
      });
      console.log("Document written with ID: ", docRef.id); 
}
// Initialize Firebase
export {db, getBlogPosts, addContactMessage};
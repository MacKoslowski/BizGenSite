import { getAuth, signInAnonymously } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js';
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
const auth = getAuth();

const db = getFirestore(app);

async function getBlogPosts() {
   
    signInAnonymously(auth).then(async function () {
        // Signed   in..
        const blogPostsCol = collection(db, 'Blog Posts');
        const blogSnapshot = await getDocs(blogPostsCol);
        const blogList = blogSnapshot.docs.map(doc => doc.data());
        return blogList;
    })
   
}

async function addContactMessage(email, body) {
    signInAnonymously(auth).then(async function() {
        const docRef = await addDoc(collection(db, "Contact Messages"), {
            email: email,
            body: body
        });
        console.log("Document written with ID: ", docRef.id); 
    })
}
// Initialize Firebase

/*async function signIn() {
    const auth = getAuth();
    signInAnonymously(auth).then(() => {
        // Signed in..
    })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });
}*/

export {getBlogPosts, addContactMessage};
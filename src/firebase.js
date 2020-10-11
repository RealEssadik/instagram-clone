import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDjURvigaCr215aFvhJgGpaOkKLipl-3QA",
  authDomain: "instagram-clone-d29c6.firebaseapp.com",
  databaseURL: "https://instagram-clone-d29c6.firebaseio.com",
  projectId: "instagram-clone-d29c6",
  storageBucket: "instagram-clone-d29c6.appspot.com",
  messagingSenderId: "1086799348667",
  appId: "1:1086799348667:web:7aa094bde504a9ce14ba9e",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

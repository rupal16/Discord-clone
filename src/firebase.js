import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBXmrk41_9WnWffzcXn8Nom6TlvmrlbMOQ",
  authDomain: "discord-clone-f7dc1.firebaseapp.com",
  databaseURL: "https://discord-clone-f7dc1.firebaseio.com",
  projectId: "discord-clone-f7dc1",
  storageBucket: "discord-clone-f7dc1.appspot.com",
  messagingSenderId: "524807930117",
  appId: "1:524807930117:web:445ad701c4169568d6376c",
  measurementId: "G-0V43LKJRBH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

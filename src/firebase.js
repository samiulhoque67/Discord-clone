import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBMQV5L__QESeAl8CD5Npx8QcYk-yzF84Y",
    authDomain: "news-af286.firebaseapp.com",
    databaseURL: "https://news-af286.firebaseio.com",
    projectId: "news-af286",
    storageBucket: "news-af286.appspot.com",
    messagingSenderId: "819710542418",
    appId: "1:819710542418:web:2f175fca87f16bd4dfd58b",
    measurementId: "G-6TK1RF5NFF"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
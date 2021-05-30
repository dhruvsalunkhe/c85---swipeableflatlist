import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDZkijU7D_B19ZR9VKYsKnZXABF0iRa1kU",
  authDomain: "book-santa-app-fe8d4.firebaseapp.com",
  projectId: "book-santa-app-fe8d4",
  storageBucket: "book-santa-app-fe8d4.appspot.com",
  messagingSenderId: "493227246739",
  appId: "1:493227246739:web:6259cdf185cad52e973966"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

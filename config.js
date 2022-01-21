import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD_BG0m1Tf20jc_Nn7C6YvYsj1WGHOw9-Y",
    authDomain: "classtest-b6ce6.firebaseapp.com",
    projectId: "classtest-b6ce6",
    storageBucket: "classtest-b6ce6.appspot.com",
    messagingSenderId: "243158363127",
    appId: "1:243158363127:web:05361ccb8f33337b041cf2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
var firebaseConfig = {

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
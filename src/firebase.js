import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA0xOuelKIop0isd3PdwXfYt4bddEyB9ho",
    authDomain: "clone-b761e.firebaseapp.com",
    projectId: "clone-b761e",
    storageBucket: "clone-b761e.appspot.com",
    messagingSenderId: "619423775897",
    appId: "1:619423775897:web:35d1ac0fc8d7392e930c08"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {db,auth,provider};
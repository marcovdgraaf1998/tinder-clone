import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAaW7GPtI62PNteL4VsKZCuhuADfrpzS-k",
    authDomain: "tinder-clone-e1018.firebaseapp.com",
    databaseURL: "https://tinder-clone-e1018.firebaseio.com",
    projectId: "tinder-clone-e1018",
    storageBucket: "tinder-clone-e1018.appspot.com",
    messagingSenderId: "68775371386",
    appId: "1:68775371386:web:4cf195894277e7ed2cd1c3",
    measurementId: "G-2KV1H6002Z"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;
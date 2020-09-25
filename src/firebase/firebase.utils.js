import firebase from 'firebase/app';
import 'firebase/firestore';    //for database
import 'firebase/auth'; //for authentication

const config = {
  apiKey: "AIzaSyBe8vIc3insfRJjWrrdBCa6tpueXTBuPec",
  authDomain: "authoring-toddle.firebaseapp.com",
  databaseURL: "https://authoring-toddle.firebaseio.com",
  projectId: "authoring-toddle",
  storageBucket: "authoring-toddle.appspot.com",
  messagingSenderId: "56221511395",
  appId: "1:56221511395:web:4e1828d426faae6e825fd6"
};

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();   // gives access to GoogleAuth Provider class from authentication library (auth)
  provider.setCustomParameters({ prompt: 'select_account'});    //we walways want to trigger google prompt whenever we use the google auth
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

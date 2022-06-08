import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCbrSq8SADWgWsA4cz8O322uoSG6AfL-AI',
  authDomain: 'my-doctor-01-853b5.firebaseapp.com',
  projectId: 'my-doctor-01-853b5',
  storageBucket: 'my-doctor-01-853b5.appspot.com',
  messagingSenderId: '794899701965',
  appId: '1:794899701965:web:6e2dad7ecb8c902dbec984',
};

// Initialize Firebase
const FIREBASE = firebase.initializeApp(firebaseConfig);

export default FIREBASE;

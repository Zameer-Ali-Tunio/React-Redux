import  firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

  var firebaseConfig = {
    apiKey: "AIzaSyCLsALEkzfMgcMkY2JchOIifz7aO5n7ua4",
    authDomain: "chat-app-react-9f797.firebaseapp.com",
    databaseURL: "https://chat-app-react-9f797.firebaseio.com",
    projectId: "chat-app-react-9f797",
    storageBucket: "chat-app-react-9f797.appspot.com",
    messagingSenderId: "987193290672",
    appId: "1:987193290672:web:f20fe98188004ba53e3075",
    measurementId: "G-4Z7E40RYM2"
  };
firebase.initializeApp(firebaseConfig);
  export default firebase;

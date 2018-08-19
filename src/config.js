import * as firebase from 'firebase';
 
 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyBFAh5plnyTWnI3rm86Uv-pmfP03JlTTOc",
  authDomain: "photowall-6edd0@appspot.gserviceaccount.com",
  databaseURL: "https://photowall-6edd0.firebaseio.com",
  projectId: "photowall-6edd0",
  storageBucket: "photowall-6edd0.appspot.com",
  messagingSenderId: "881600359244"
};
firebase.initializeApp(config);

const database = firebase.database();

export {database}
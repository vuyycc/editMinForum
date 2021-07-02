import firebase from 'firebase/app';
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCczqJ66zwMkKZ42306--Nd62aRH--H_bA",
    authDomain: "tie-it-d2b0c.firebaseapp.com",
    projectId: "tie-it-d2b0c",
    storageBucket: "tie-it-d2b0c.appspot.com",
    messagingSenderId: "239271963557",
    appId: "1:239271963557:web:f20c6e4a04ae6c7c1b564c",
    measurementId: "G-D5JPHE0DMM"
};

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()

export {storage, firebase as default}
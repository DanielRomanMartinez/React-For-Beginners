import Rebase from 're-base';
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDFEDntRpignNNpT3AflUbCwRVDEoqDJy0",
    authDomain: "catch-of-the-day-90039.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-90039.firebaseio.com"
});

const base =  Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
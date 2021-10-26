import firebase from 'firebase/app';
import 'firebase/auth/';
import 'firebase/firestore';
import 'firebase/storage';
import firebaseConfig from '../config/firebaseConfig';

firebase.initializeApp(firebaseConfig);

const fireAuth = firebase.auth();
const fireStore = firebase.firestore();
const fireStorage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { fireAuth, fireStore, fireStorage, timestamp };


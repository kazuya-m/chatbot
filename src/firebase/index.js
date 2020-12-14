import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import firebaseConfig from './config';

firebase.initializeApp(firebaseConfig);

// Firestore
export const db = firebase.firestore();

// Storage root
// sexport const storage = firebase.storage();

// Storage CV Ref
export const getCvRef = () => {
  const storage = firebase.storage();
  return storage.ref('cv');
}
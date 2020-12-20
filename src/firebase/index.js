import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';
import firebaseConfig from './config';

firebase.initializeApp(firebaseConfig);

// Auth
export const auth = firebase.auth();

// Firestore
export const db = firebase.firestore();

// Storage CV Ref
export const getCvRef = () => {
  const storage = firebase.storage();
  return storage.ref('cv');
}
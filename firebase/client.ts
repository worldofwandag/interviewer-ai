// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBHT6hBSkNhge_QGq6xIEFcM5eYLWKgPO8",
  authDomain: "interviewer-42669.firebaseapp.com",
  projectId: "interviewer-42669",
  storageBucket: "interviewer-42669.firebasestorage.app",
  messagingSenderId: "839054176223",
  appId: "1:839054176223:web:8315aedf92c496e4365e6a",
  measurementId: "G-DPNY6473GH"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp(); //this does a check

export const auth = getAuth(app);
export const db = getFirestore(app);
// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBXh4ceSfg4lfCJAKWbOdgDgi8IQIZpFMk",
    authDomain: "feather-frame.firebaseapp.com",
    projectId: "feather-frame",
    storageBucket: "feather-frame.firebasestorage.app",
    messagingSenderId: "436129478605",
    appId: "1:436129478605:web:387b3a55bdc9e66a767684",
    measurementId: "G-Z352STCRZW"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

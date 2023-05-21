import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCLSLgYg_4XLR0VjQUtkr441XxWRnPrWhg",
  authDomain: "miniblog-f193f.firebaseapp.com",
  projectId: "miniblog-f193f",
  storageBucket: "miniblog-f193f.appspot.com",
  messagingSenderId: "688997382362",
  appId: "1:688997382362:web:b912883e62556020900de3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }
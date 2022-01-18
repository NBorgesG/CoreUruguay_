import { initializeApp } from "firebase/app"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCHmAYTqtCnZ4T6cH6CqBpFS4Nn6n_gCIU",
    authDomain: "coreuruguay-1507c.firebaseapp.com",
    projectId: "coreuruguay-1507c",
    storageBucket: "coreuruguay-1507c.appspot.com",
    messagingSenderId: "362714770533",
    appId: "1:362714770533:web:d584d326468d93f0fdea8c",
    measurementId: "G-CKJMB6NY3G"
  };

  const app = initializeApp(firebaseConfig);

  export const bd = getFirestore(app)
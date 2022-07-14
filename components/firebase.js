import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCVF7VbaZ8kYKqdHuamnd7TVdRczUvJk_w",
  authDomain: "purple-network-84d4f.firebaseapp.com",
  projectId: "purple-network-84d4f",
  storageBucket: "purple-network-84d4f.appspot.com",
  messagingSenderId: "972099015461",
  appId: "1:972099015461:web:186ccb9889f40e9cd1c0cc"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const storage = getStorage(app);

const storageReference = ref(storage, 'PurpleImages')
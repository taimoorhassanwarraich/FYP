import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { getFirestore, collection, getDocs } from 'firebase/firestore';
// import { getStorage } from 'firebase/storage';
import {getDatabase,ref,query,onValue}from 'firebase/database'

export const firebaseConfig = {
  // Your Firebase configuration
  apiKey: "AIzaSyDtLRX8zBes_x9dVzByQUMrrGOZqyVGRo4",
  authDomain: "humsawar.firebaseapp.com",
  databaseURL: "https://humsawar-default-rtdb.firebaseio.com",
  projectId: "humsawar",
  storageBucket: "humsawar.appspot.com",
  messagingSenderId: "284612272803",
  appId: "1:284612272803:web:e6c2887e6edc1c0612d516"
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
if (!app) {
  console.log('Firebase app not initialized');
} else {
  console.log('Firebase app initialized');
}

export const authentication = getAuth(app);
// export const db = getFirestore(app);

// export const fetchUsers = async () => {
//   const usersCollection = collection(db, 'trips');
//   const querySnapshot = await getDocs(usersCollection);
//   querySnapshot.forEach((doc) => {
//     const user = doc.data();
//     console.log(user);
//   });
// };

export const check=()=>{
  console.log("connected")
}

export const getUsers = (callback:any) => {
  const usersRef = ref(database, 'users');
  onValue(usersRef, (snapshot) => {
    const data = snapshot.val();
    callback(data);
    console.log(data)
  });
};

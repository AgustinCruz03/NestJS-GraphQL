import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {v4} from 'uuid'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
const metadata = {
  contentType: 'image/jpeg',
};


export async function uploadImage(file){
  const storageRef = ref(storage, `imagenes'/${v4()}`);
  await uploadBytes(storageRef, file, metadata)
  return await getDownloadURL(storageRef)
}
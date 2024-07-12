import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {v4} from 'uuid'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { envs } from "src/config";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: envs.FIREBASE_API_KEY,
  authDomain: envs.FIREBASE_AUTH_DOMAIN,
  projectId: envs.FIREBASE_PROJECT_ID,
  storageBucket: envs.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: envs.FIREBASE_MESSAGING_SENDER_ID,
  appId: envs.FIREBASE_APP_ID
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
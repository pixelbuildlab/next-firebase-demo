// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
}

// Initialize Firebase
// const app = initializeApp(firebaseConfig)
const firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]

export { firebase_app as firebaseApp }

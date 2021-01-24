import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  // input your firebase config options here
  apiKey: 
  authDomain: 
  projectId: 
  storageBucket:
  messagingSenderId:
  appId:
};

// eslint-disable-next-line import/prefer-default-export
export const firebase = Firebase.initializeApp(config);

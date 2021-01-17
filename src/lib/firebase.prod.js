import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDR0wInqiMSfU4eolR3lLzBuvl2m0XyaRE',
  authDomain: 'fakeflix-33b3d.firebaseapp.com',
  projectId: 'fakeflix-33b3d',
  storageBucket: 'fakeflix-33b3d.appspot.com',
  messagingSenderId: '629496401188',
  appId: '1:629496401188:web:741e61b64b1093e27377b1',
};

// eslint-disable-next-line import/prefer-default-export
export const firebase = Firebase.initializeApp(config);

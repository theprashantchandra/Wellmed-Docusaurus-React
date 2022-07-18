import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDk4fz-XuF4KQd2xo6YjyY-nEpCRwEipzo",
  authDomain: "fir-1-79adb.firebaseapp.com",
  projectId: "fir-1-79adb",
  storageBucket: "fir-1-79adb.appspot.com",
  messagingSenderId: "684658506930",
  appId: "1:684658506930:web:eaf1ba2304e09b3d885dab",
  measurementId: "G-1QTEC37DWE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth();
export {app , auth};
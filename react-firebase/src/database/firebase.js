// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// 인증을 위한 getAuth 가져옴
import { getAuth } from "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk7CbTZvSDB_GU-R4nqsMR0si3ffpiEmc",
  authDomain: "fir-27fda.firebaseapp.com",
  projectId: "fir-27fda",
  storageBucket: "fir-27fda.appspot.com",
  messagingSenderId: "679906469129",
  appId: "1:679906469129:web:8fe7dc69c2817c3209dfd8",
  measurementId: "G-X614EBQ46S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 사용하고자하는 서비스를 들고와서 사용 
// 인증서비스에 관한 내용 들고와서 사용
export const auth = getAuth(app);
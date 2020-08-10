import * as firebase from "firebase";
// import "firebase/auth";

// const config = {
//   apiKey: "AIzaSyDrsrZyL1WB9dPyuxGWF8toSqHvnXK1hQE", //process.env.REACT_APP_FIREBASE_API_KEY, //
//   authDomain: "pomodoro-18245.firebaseapp.com",
//   databaseURL: "https://pomodoro-18245.firebaseio.com",
//   projectId: "pomodoro-18245",
//   storageBucket: "",
//   messagingSenderId: "83912180076",
// };
// export default firebase.initializeApp(config);
// export const ref = firebase.database().ref();
// export const firebaseAuth = firebase.auth;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdoNCgDnFnDoU1kAIMblhlqXedG_zkWpk",
  authDomain: "bikeshares-1d904.firebaseapp.com",
  databaseURL: "https://bikeshares-1d904.firebaseio.com",
  projectId: "bikeshares-1d904",
  storageBucket: "bikeshares-1d904.appspot.com",
  messagingSenderId: "947791637421",
  appId: "1:947791637421:web:4789a1aec642cb9c774f24",
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
export const ref = firebase.database().ref();

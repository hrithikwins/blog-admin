import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyAiQ1bssAt2YiLbWH9ej834kk1tXGRjR6U",
  authDomain: "atulyapoems.firebaseapp.com",
  databaseURL: "https://atulyapoems.firebaseio.com",
  projectId: "atulyapoems",
  storageBucket: "atulyapoems.appspot.com",
  messagingSenderId: "616846689778",
  appId: "1:616846689778:web:3848b3e9c8692f1e89576b",
  measurementId: "G-THCPZ58L1G"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;

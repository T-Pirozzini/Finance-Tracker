import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBti1fbItWm2Nsj0M_Pbr5h7b8oI9qm-8s",
  authDomain: "financetracker-f047d.firebaseapp.com",
  projectId: "financetracker-f047d",
  storageBucket: "financetracker-f047d.appspot.com",
  messagingSenderId: "33376930481",
  appId: "1:33376930481:web:a286c7ecceb3ab6c107090"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }

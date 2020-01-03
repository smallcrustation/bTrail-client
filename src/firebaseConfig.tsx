import * as firebase from 'firebase/app'
import 'firebase/auth'

const firebaseApp = firebase.initializeApp( {
  apiKey: process.env.REACT_APP_auth_apiKey,
  authDomain:process.env.REACT_APP_auth_authDomain,
  databaseURL: process.env.REACT_APP_auth_databaseURL,
  projectId: process.env.REACT_APP_auth_projectId,
  storageBucket: process.env.REACT_APP_auth_storageBucket,
  messagingSenderId: process.env.REACT_auth_APP_messagingSenderId,
  appId: process.env.REACT_APP_auth_appId,
  measurementId: process.env.REACT_APP_auth_measurementId
})

export default firebaseApp
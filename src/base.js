import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import Rebase from 're-base'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyA_ZtEb10987UDjnPRvAuEHFEqq0jNzwNo",
  authDomain: "noteherder-22369.firebaseapp.com",
  databaseURL: "https://noteherder-22369.firebaseio.com",
  projectId: "noteherder-22369",
  storageBucket: "noteherder-22369.appspot.com",
  messagingSenderId: "234690949199"
}
const app = firebase.initializeApp(config)

export const githubProvider = new firebase.auth.GithubAuthProvider()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()

export default Rebase.createClass(app.database())

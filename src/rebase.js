import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

var app = firebase.initializeApp({
    apiKey: "AIzaSyA_ZtEb10987UDjnPRvAuEHFEqq0jNzwNo",
    authDomain: "noteherder-22369.firebaseapp.com",
    databaseURL: "https://noteherder-22369.firebaseio.com",
    projectId: "noteherder-22369",
});

var db = firebase.database(app);
var base = Rebase.createClass(db);

export default base;
var firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyApT4emXSW57wjm-s2XuEU1bdvgsbzyzz4",
    authDomain: "crossinggame-32e09.firebaseapp.com",
    databaseURL: "https://crossinggame-32e09.firebaseio.com",
    projectId: "crossinggame-32e09",
    storageBucket: "crossinggame-32e09.appspot.com",
    messagingSenderId: "367175243915",
    appId: "1:367175243915:web:666f5bf1c81b749b8d1c8e",
    measurementId: "G-0X17W1TJX0"
  };

var app = firebase.initializeApp(firebaseConfig);

module.exports = app;

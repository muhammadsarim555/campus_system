import React, { Component } from 'react';
import firebase from 'firebase';



var config = {
  apiKey: "AIzaSyAOZTUIOhiiSiIXTW3LldttWwwS2mWTz6w",
  authDomain: "my-work-555.firebaseapp.com",
  databaseURL: "https://my-work-555.firebaseio.com",
  projectId: "my-work-555",
  storageBucket: "my-work-555.appspot.com",
  messagingSenderId: "170141303135"
};

const fire = firebase.initializeApp(config);


export default fire;

import React, { Component } from 'react';
import firebase from 'firebase';
// import logo from './logo.svg';
// import './App.css';

var config = {
  apiKey: "AIzaSyAOZTUIOhiiSiIXTW3LldttWwwS2mWTz6w",
  authDomain: "my-work-555.firebaseapp.com",
  databaseURL: "https://my-work-555.firebaseio.com",
  projectId: "my-work-555",
  storageBucket: "my-work-555.appspot.com",
  messagingSenderId: "170141303135"
};
firebase.initializeApp(config);

const db = firebase.database();
const auth = firebase.auth();

class Admin extends Component {
  constructor(){
    super();
    this.state = {
      loginValue : '',
    }
  }
  
  loginAuthentication(){

  }
  
  login(){
    const {loginValue} = this.state;
    return <div>  
    <input value={loginValue} 
    onChange={(e) => {this.setState({
      loginValue: e.target.value
    })}
  } />
  <button onClick={this.loginAuthentication.bind(this)}> Submit </button>
  </div>
  }

  
  render() {
    console.log(this.state.loginValue)
  return (
      <div className="App">
          <h1>Admin Panel</h1>
          {this.login()}
          </div>
    );
  }
}

export default Admin;

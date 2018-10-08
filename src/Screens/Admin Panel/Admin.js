import React, { Component } from 'react';
// import logo from './logo.svg';
import Signup from '../Authentication/SignUp/SignUp';
// import './App.css';


class Admin extends Component {
  constructor(){
    super();
    this.state = {
    }
  }
  
  

  
  render() {
  return (
      <div className="App">
          <h1>Admin Panel</h1>
          <Signup />
          </div>
    );
  }
}

export default Admin;

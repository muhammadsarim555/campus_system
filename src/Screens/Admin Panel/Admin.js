import React, { Component } from 'react';
// import logo from './logo.svg';
import Login from '../Authentication/Login/Login';
// import './App.css';


class Admin extends Component {
  constructor() {
    super();
    this.state = {
    }
  }




  render() {
    return (
      <div className="App">
        <h1>Admin Panel</h1>
        <Login />
      </div>
    );
  }
}

export default Admin;

import React, { Component } from 'react';
import Login from '../Authentication/Login/Login';


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

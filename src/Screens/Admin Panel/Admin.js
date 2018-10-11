import React, { Component } from 'react';
import Login from '../Authentication/Login/Login';
import Resumes from '../Resumes/Resumes';


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
        {/* <Resumes /> */}
      </div>
    );
  }
}

export default Admin;

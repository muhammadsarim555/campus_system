import React, { Component } from 'react';
import SignUp from '../Authentication/SignUp/SignUp';
import Login from '../Authentication/Login/Login';

class Student extends Component {
  render() {
    return (
      <div className="App">
        <h1>Student</h1>
        <Login/>
        <SignUp/>

      </div>
    );
  }
}

export default Student;

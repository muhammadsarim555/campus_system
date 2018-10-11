import React, { Component } from 'react';
import Login from '../Authentication/Login/Login';
import { Link } from 'react-router-dom';
import SignUp from '../Authentication/SignUp/SignUp';

class Company extends Component {
  constructor() {
    super();
    this.state = {
      isLogin: true,
    }
  }


  updateState() {
    // const 
    this.setState({
      isLogin: false,
    })
  }


  render() {

    const isLogin = this.state;

    return (
      <div className="App">
        <h1>Company</h1>

        {isLogin ? <Login /> : <SignUp />}


      </div>
    );
  }
}

export default Company;

{/* <Link to="/login"> Login </Link></h5> */ }
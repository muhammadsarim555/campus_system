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


  // here isLogin get false for open signUp panel
  updateStateForSignUp() {
    const { isLogin } = this.state;

    this.setState({
      isLogin: false,
    })
    console.log(isLogin)
    }

  // state update for login panel 
  updateStateForLogin() {
    const { isLogin } = this.state;

    this.setState({
      isLogin: true,
    })
  }

  // this func open login 
  renderLogin() {
    const { isLogin } = this.state;
    return (
      <div>
        <Login />
        <b> Don't Have an account <a onClick={this.updateStateForSignUp.bind(this)}> Sign Up </a></b>

      </div>
    )
  }


  renderSignUp() {
    const { isLogin } = this.state;
    return (
      <div>
        <SignUp />
        <b> Don't Have an account <a onClick={this.updateStateForLogin.bind(this)}> Login </a></b>

      </div>
    )
  }


  render() {

    const isLogin = this.state;
    console.log("I am render")
    return (
      <div className="App">
        <h1>Company</h1>

        {/* {!isLogin ? <SignUp/> : <Login/>} */}
        {this.state.isLogin ? this.renderLogin() : this.renderSignUp()}
        {/* {!isLogin && <SignUp/>} */}
        {/* <button onClick={this.updateState.bind(this)}> CLick for SignUp... </button> */}

      </div>
    );
  }
}

export default Company;

{/* <Link to="/login"> Login </Link></h5> */ }
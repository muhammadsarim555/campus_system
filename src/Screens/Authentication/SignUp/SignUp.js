import React, { Component } from 'react';
import firebase from  '../../../Component/Firebase/Firebase';



  
  const db = firebase.database();
  const auth = firebase.auth();

class SignUp extends Component {
    constructor(){
        super();
        this.state = {
            loginValue : '',
            check: '',

        }
        // this.createNewUser = this.createNewUser.bind(this);
    }

    // createNewUser(){
    //     let {loginValue,check} = this.state;
    //     auth.createUserWithEmailAndPassword(loginValue , check).then((snapshot)=>{
    //         console.log(snapshot , 'snapshot');
    //         const {uid} = auth.currentUser;
    //         console.log(uid , "i am uid <<=")
    //     })
    //     .catch(function(error) {
    //         // Handle Errors here.
    //         var errorCode = error.code;
    //         var errorMessage = error.message;
    //         // ...
    //       });
    // }
    
    checkFunc(){
    console.log("tkhis is working")
    let {loginValue , check} = this.state;
    firebase.auth().createUserWithEmailAndPassword(this.state.loginValue , this.state.check).then((snapshot)=>{
        // console.log(snapshot , 'snapshot');
        // const {uid} = auth.currentUser;
        console.log(snapshot, "i am uid <<=")
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
        console.log(errorCode)
        // ...
      });
  }


    render() {
    const {loginValue , check} = this.state;
        
        return (
            <div className="App">
            <input value={loginValue} 
    onChange={(e) => {this.setState({
      loginValue: e.target.value
    })}
  } />
  <input value={check} 
    onChange={(e) => {this.setState({
        check: e.target.value
    })}
  } />
  <button onClick={this.checkFunc.bind(this)} > Submit </button>
            </div>
        );
    }
}

export default SignUp;

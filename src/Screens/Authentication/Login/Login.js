import React, { Component } from 'react';
import firebase from '../../../Component/Firebase/Firebase';
import Resumes from '../../Resumes/Resumes';




const db = firebase.database();
const auth = firebase.auth();

class Login extends Component {
    constructor() {
        super();
        this.state = {
            loginValue: '',
            check: '',
            user: {},

        }
        // this.createNewUser = this.createNewUser.bind(this);
    }

        
       componentDidMount(){
           this.checkUser();
       } 


       gettingValue(){
        const { loginValue, check } = this.state;
           
           return (
               <div>
                <input type="email" value={loginValue}
                    onChange={(e) => {
                        this.setState({
                            loginValue: e.target.value
                        })
                    }
                    } />
                <input type="password" value={check}
                    onChange={(e) => {
                        this.setState({
                            check: e.target.value
                        })
                    }
                    } />
                <button onClick={this.login.bind(this)} > Login </button>
                   </div>
           )
       }


    login() {
        auth.
            signInWithEmailAndPassword(this.state.loginValue, this.state.check)
            .then((s) => {

                console.log(auth.currentUser.uid)
            }).catch((e) => {
                console.log(e)
            })
    }

    // logout mathod 
    

//  if user is here or not

    checkUser(){
        auth.onAuthStateChanged((user)=>{
            if(user){
                this.setState({
                    user
                })
            }
            else{this.setState({
                user:null
            })}
        })
    }

    render() {
        // console.log(auth.currentUser.uid)
        
        return (
            <div className="App">
               {
                   this.state.user ? (<Resumes/>) : (this.gettingValue())
               }
            </div>
        );
    }
}

export default Login;

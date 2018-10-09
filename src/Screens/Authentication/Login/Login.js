import React, { Component } from 'react';
import firebase from '../../../Component/Firebase/Firebase';



const db = firebase.database();
const auth = firebase.auth();

class Login extends Component {
    constructor() {
        super();
        this.state = {
            loginValue: '',
            check: '',

        }
        // this.createNewUser = this.createNewUser.bind(this);
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

    // logouet
    // auth.signOut()


    render() {
        const { loginValue, check } = this.state;

        return (
            <div className="App">
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
        );
    }
}

export default Login;

import React, { Component } from 'react';
import firebase from '../../../Component/Firebase/Firebase';




const db = firebase.database();
const auth = firebase.auth();

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',

        }
        // this.createNewUser = this.createNewUser.bind(this);
    }


    checkFunc() {
        console.log("tkhis is working")
        let { email, password } = this.state;
        auth.createUserWithEmailAndPassword(email, password).then((snapshot) => {
            console.log(auth.currentUser.uid, "i am uid <===");
            const uid = auth.currentUser.uid;
            let obj = {
                email,
                password,
                uid,
            }
            console.log(email, password)
            db.ref('Admin Panel').child(uid).set(obj);
        })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage)
                console.log(errorCode)
                // ...
            });
    }


    render() {
        const { email, password } = this.state;

        return (
            <div className="App">
                <input value={email}
                    onChange={(e) => {
                        this.setState({
                            email: e.target.value
                        })
                    }
                    } />
                <input type="password" value={password}
                    onChange={(e) => {
                        this.setState({
                            password: e.target.value
                        })
                    }
                    } />
                <button onClick={this.checkFunc.bind(this)} > SignUp </button>
            </div>
        );
    }
}

export default SignUp;

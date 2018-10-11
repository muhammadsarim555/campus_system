import React, { Component } from 'react';
import firebase from '../../Component/Firebase/Firebase';



const db = firebase.database();
const auth = firebase.auth();

class Resumes extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    logOut(){

        auth.signOut();
        console.log("YOu havee been successfully logout");

    }


    render() {
        // console.log(auth.currentUser.uid)
        
        return (
            <div className="App">
            <h1> There will be students Resumes </h1>
            <button onClick={this.logOut.bind(this)}> Logout </button>
            </div>
        );
    }
}

export default Resumes;

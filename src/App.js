import React, { Component } from 'react';
import './App.css';
import Firebase from './Component/Firebase/Firebase';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
    }
  }

  authListener() {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      } else { this.setState({ user: null }) }
    })
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;

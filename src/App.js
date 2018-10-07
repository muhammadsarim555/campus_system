import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark default-color justify-content-between">
  <a className="navbar-brand" href="#">Vocational Training Insitute</a>
  {/* <form className="form-inline my-1"> */}
    {/* <div className="md-form form-sm my-0"> */}
      {/* <input className="form-control form-control-sm mr-sm-2 mb-0" type="text" placeholder="Search" aria-label="Search"/> */}
    {/* </div> */}
    <button className="btn btn-outline-white btn-sm my-0" type="submit">Search</button>
  {/* </form> */}
</nav>
        <button>Admin Login </button>
        <br/>
        <button>Company Login </button>
        <br/>
        <button>Student Login </button>
        <br/>

      </div>
    );
  }
}

export default App;

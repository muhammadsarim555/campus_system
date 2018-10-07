import React, { Component } from 'react';
import { Link, NavbarLink } from 'react-router-dom';
import '../../App.css';



class Navbar extends Component {
  render() {
    return (
      <div className="App">



        <ul>
          <li><Link to="/"> Home </Link></li>
          <li><Link to="/student"> Student Panel </Link></li>
          <li><Link to="/company">Company Panel </Link></li>
          <li><Link to="/admin">Admin Panel </Link></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;

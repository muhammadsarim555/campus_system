import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Student from './Screens/Student Panel/Student';
import Admin from './Screens/Admin Panel/Admin';
import Company from './Screens/Company Panel/Company';
import Navbar from './Component/Navbar/Navbar';
import SignUp from './Screens/Authentication/SignUp/SignUp';
import Login from './Screens/Authentication/Login/Login';

const CustomRouter = () => (
    <Router >
        <div>
            <Navbar />
            <Route exact path="/" component={App} />
            <Route path="/student" component={Student} />
            <Route path="/admin" component={Admin} />
            <Route path="/company" component={Company} />
            <Route path="/signup" component={SignUp}/>
            <Route path="/login" component={Login}/>
        </div>
    </Router>
)

export default CustomRouter;
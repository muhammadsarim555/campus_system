import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Student from './Screens/Student Panel/Student';
import Admin from './Screens/Admin Panel/Admin';
import Company from './Screens/Company Panel/Company';
import Navbar from './Component/Navbar/Navbar';

const CustomRouter = () => (
    <Router >
        <div>
            <Navbar />
            <Route exact path="/" component={App} />
            <Route path="/student" component={Student} />
            <Route path="/admin" component={Admin} />
            <Route path="/company" component={Company} />
        </div>
    </Router>
)

export default CustomRouter;
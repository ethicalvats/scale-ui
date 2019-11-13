import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {Signup} from "./components/Signup";
import Users from "./components/Users";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <div className="header">
      <nav>
          <ul>
            <li>
              <Link to="/">Signup</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container">
          <Switch>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
            <Route path="/">
              <Signup />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;

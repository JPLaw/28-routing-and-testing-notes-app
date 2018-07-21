import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Dashboard from '../dashboard/dashboard';
import './app.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <header>
              <h1>My To Do List</h1>
              <nav className="nav">
                {/* <ul> */}
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/dashboard">My Dashboard</Link></li>
                {/* </ul> */}
              </nav>
            </header>
            <Route
              exact
              path="/"
              component={() => <h3>Welcome</h3>
               }
               />
            <Route
              exact
              path="/dashboard"
              component={Dashboard}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

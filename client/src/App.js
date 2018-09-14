import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Private from './components/Private'
import AuthService from './lib/auth-service'

class App extends Component {
  constructor(props) {
    super(props)
    this.service = new AuthService();
    this.logout = this.logout.bind(this)
  }
  logout() {
    this.service.logout()
  }
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link>{' '}
          <Link to="/signup">Signup</Link>{' '}
          <Link to="/login">Login</Link>{' '}
          <Link to="/logout" onClick={this.logout}>Logout</Link>{' '}
          <Link to="/private">Private page</Link>{' '}
        </nav>
        <h1>App</h1>

        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/private" component={Private} />

      </div>
    );
  }
}

export default App;

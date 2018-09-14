
import React, { Component } from 'react';
import AuthService from '../lib/auth-service';

class Private extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: 'You are not logged!'
    };
    this.service = new AuthService();
  }

  componentDidMount() {
    this.service.private()
      .then(data => {
        this.setState({ message: data.message })
      })
  }

  render() {
    return (
      <div className="message-wrapper">
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default Private;
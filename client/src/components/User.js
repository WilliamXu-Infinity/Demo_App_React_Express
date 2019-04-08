import React, { Component } from 'react';

class User extends Component {
  componentDidMount() {
    fetch('/api/customers')
      .then(res => res.json())
      .then(user => this.setState({user}, () => console.log('Customers fetched..', user)))
  }

  constructor(){
    super()
    this.state = {
      user: {}
    }
  }
  render() {
    return (
      <div>
        <h2>Customers</h2>
        <div>{this.props.user}</div>
      </div>
    );
  }
}

export default User;

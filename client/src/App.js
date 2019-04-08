import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchAllUser } from './actions'
import './App.css';
import HomePage from './components/HomePage'

class App extends Component {
  componentDidMount() {
    this.props.fetchAllUser('/user')
  }

  render() {
    return (
      <div className="App">
        <HomePage/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllUser: () => dispatch(fetchAllUser())
  }
}

export default connect(undefined, mapDispatchToProps)(App)

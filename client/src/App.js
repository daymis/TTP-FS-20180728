import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Portfolio</h1>
        <AppNavbar />
      </div>
    );
  }
}

export default App;
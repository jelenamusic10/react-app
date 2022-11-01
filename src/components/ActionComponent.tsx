import React from 'react';
import logo from '../assets/logo.svg';
import { connect } from 'react-redux';
import '../App.css';

const ActionComponent = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Consulteer React Boilerplate</p>
      </header>
    </div>
  );
};

export default connect(null)(ActionComponent);

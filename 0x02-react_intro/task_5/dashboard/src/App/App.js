import logo from '../assets/holberton-logo.jpg';
import { getFooterCopy, getFullYear } from '../utils/util';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="Holberton logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email"/>
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password"/>
        <button type="button">OK</button>
      </div>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;

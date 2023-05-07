import logo from './holberton-logo.jpg';
import { getFooterCopy, getFullYear } from './util';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="Holberton logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <label for="email">Email: </label>
        <input type="email" name="email"/>
        <label for="password">Password: </label>
        <input type="password" name="password"/>
        <button>OK</button>
      </body>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;

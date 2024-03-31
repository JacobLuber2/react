import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>React is so cool!</code>
        </p>
        <h1>1, 2, 3</h1>
        <p>4, 5, 6</p>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

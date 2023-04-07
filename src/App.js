import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>heading1</h1>
      <p>p</p>
      <ul>
        <li>li1</li>
        <li>li2</li>
        <li>li3</li>
      </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code></code>React is so cool!
        </p>
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

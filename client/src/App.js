import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h3 className="imie">OSKAREK</h3>
        <p className="wheel wheel-left"></p>
        <p className="wheel wheel-right"></p>
        <p></p>
        <p></p>
      </header>
    </div>
  );
}

export default App;

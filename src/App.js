import logo from './logo.svg';
import './App.css';
import { LoadScript } from '@react-google-maps/api';

function App() {
  //const key = 'AIzaSyCITzr5KV2Rbm4TcMWZz61KQTXzYcTUDX0';
  const key = 'AIzaSyB3eiU-iZ06emJ4rDDW8G8mEDS5fD6zn9Q';
  const lib = ["places"];
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
      </header>
      
    </div>
  );
}

export default App;

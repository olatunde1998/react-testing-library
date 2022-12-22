import './App.css';
import { Greet } from 'components/greet/Greet';
import { Application } from 'components/application/Application';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Greet/>
        <Application/>
      </header>
    </div>
  );
}

export default App;

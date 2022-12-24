import './App.css';
import { Greet } from 'components/greet/Greet';
import { Application } from 'components/application/Application';
import { Counter } from 'components/counter/counter';

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
        <Counter/>
      </header>
    </div>
  );
}

export default App;

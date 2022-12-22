import './App.css';
import { Greet } from 'components/greet/Greet';

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
      </header>
    </div>
  );
}

export default App;

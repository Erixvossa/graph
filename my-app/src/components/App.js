import logo from './../logo.svg';
import './../styles/App.css';
import Data from './Data';



function App() {

  const testData = {
    "store": "play",
    "seriesFilter":{
        "app": ["com.percent.royaldice"],
        "dateRel": 7,
        "country": ["US"],
        "category": ["GAME"],
        "collection": ["topgrossing"]
    }
}

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
      <Data props={testData} />
    </div>
  );
}

export default App;

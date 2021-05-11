import logo from './../logo.svg';
import './../styles/App.css';
import Data from './Data';
import DoubleData from './DoubleData';



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

  const testDoubleData = {
    "store": "ios",
    "seriesFilter":{
        "app": ["1085652055"],
        "dateFrom": "2021-01-01",
        "dateTo": "2021-01-07",
        "platform": ["iPhone"],
        "country": ["US"],
        "category": ["ALL"]
    }
  }

  return (
    <div className="App">
      <header className="App-header">

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

      </header>
      {/* <Data props={testData} /> */}
      <div>
        <DoubleData props={testDoubleData} />
        <DoubleData props={testDoubleData} />
      </div>
    </div>
  );
}

export default App;

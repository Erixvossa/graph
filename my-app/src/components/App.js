import './../styles/App.css';
import { DataSeriesGraph } from './DoubleData';
import React from 'react';



function App() {
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


  const testDoubleDataString = JSON.stringify(testDoubleData);

  const [data, setData] = React.useState(testDoubleData);
  // console.log(data);

  function handleSubmit(evt) {
    evt.preventDefault();

    let newData = JSON.parse(document.querySelector('.form_textArea').value)
    // console.log(newData)
    setData(newData);
    // console.log(data);
  }

  

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <div>
        <form className='form'>
          <textarea className='form_textArea' placeholder={testDoubleDataString}>{testDoubleDataString}</textarea>
          <button className='form_submit' type='submit' onClick={handleSubmit}>Нажми меня</button>
        </form>
        <DataSeriesGraph props={data} />
      </div>
    </div>
  );
}

export default App;

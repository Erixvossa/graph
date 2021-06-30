import './../styles/App.css';
import { DataSeriesGraph } from './DoubleData';
import React from 'react';

import {Header} from "./Header";


const App: React.FC = () => {
    const testDoubleData = {"store":"ios","seriesFilter":{"app":["1085652055"],"dateFrom":"2021-01-01","dateTo":"2021-07-07","platform":["iPhone"],"country":["US"],"category":["ALL"]}}



  const testDoubleDataString = JSON.stringify(testDoubleData);

  const [data, setData] = React.useState<{
      store: string;
      seriesFilter: {
          app: string[];
          dateFrom: string;
          dateTo: string;
          platform: string[];
          country: string[];
          category: string[];
      };
  }>(testDoubleData);
  // console.log(data);

  function handleSubmit(evt: { preventDefault: () => void; }) {
    evt.preventDefault();

    let formTextAreaVale: any;
    // @ts-ignore
    formTextAreaVale = document.querySelector('.form_textArea').value;
    let newData = JSON.parse(formTextAreaVale)
    // console.log(newData)
    setData(newData);
    // console.log(data);
  }

  


  return (
    <div className="App">
      <header className="App-header">
          <Header />
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

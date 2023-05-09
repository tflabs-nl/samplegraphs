import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from 'react-apexcharts';
import {ApexOptions} from "apexcharts";
import {FakeData, IEndpointResponse} from "./fakeData/FakeData";

function App() {

    // const endpointData: IEndpointResponse[] = FakeData.getGraphData();

    // endpointData.forEach(function (endpointResponse) {
    //
    // });

    const [apexOptions, setApexOptions] = useState<ApexOptions>({
        yaxis: [
            {
                show: true,
                max: 1,
                min: 0,
                logarithmic: true
            },
            {
                show: true,
                max: 3000,
                min: 0,
                logarithmic: true
            },
        ],

    });

    const [apexSeries, setApexSeries] = useState<ApexAxisChartSeries>([
        {
            type: 'line', // column, area
            name: 'Digital Input 1',
            data: [0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
            color: 'rgba(15,255,0,0.15)'
        },
        {
            type: 'area',
            name: 'CAN Engine RPM',
            data: [0, 600, 3000, 2500, 1500, 600, 600, 600, 0, 0],
            color: '#26a8ff'
        },
    ]);

  return (
    <div className="App">
        <div style={{ maxWidth: '90%', maxHeight: '90%'}}>
            <Chart
                options={apexOptions}
                series={apexSeries}
            />
        </div>
      <header className="App-header">
          <p>Dynamic test:</p>


        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;

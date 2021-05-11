import React from 'react';
import { DualAxes } from '@ant-design/charts';

const Graph = ({ data }) => {
  
    const config = {
    //   data: data,
    //   height: 400,
    //   xField: 'date',
    //   yField: 'value',
    //   point: {
    //     size: 5,
    //     shape: 'diamond',
    //   },
    //   label: {
    //     style: {
    //       fill: '#aaa',
    //     },
    //   },
    // };


    data: [data, data],
    xField: 'date',
    yField: ['selling', 'gestimates'],
    geometryOptions: [
      {
        geometry: 'line',
        color: '#5B8FF9',
      },
      {
        geometry: 'line',
        color: '#5AD8A6',
      },
    ],
  };

    return <DualAxes {...config} />;
  };

  export default Graph;
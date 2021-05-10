import React from 'react';
import { Line } from '@ant-design/charts';

const Graph = ({ data }) => {
  
    const config = {
      data: data,
      height: 400,
      xField: 'date',
      yField: 'value',
      point: {
        size: 5,
        shape: 'diamond',
      },
      label: {
        style: {
          fill: '#aaa',
        },
      },
    };
    return <Line {...config} />;
  };

  export default Graph;
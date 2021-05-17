import React from 'react';
import { DualAxes } from '@ant-design/charts';

export const GraphSeriesGDownloads = ({ data }) => {
  
    const config = {
    data: [data, data],
    xField: 'date',
    yField: ['selling', 'gestimates'],
    meta: {
      date: {
        type: 'time',
      },
    },
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

export const GraphSeriesGRevenue = ({ data }) => {
  
  const config = {
  data: [data, data],
  xField: 'date',
  yField: ['revenue', 'gestimates'],
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

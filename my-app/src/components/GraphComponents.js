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
        connectNulls: true,
      },
      {
        geometry: 'line',
        color: '#5AD8A6',
        connectNulls: true,
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
  meta: {
    date: {
      type: 'time',

    },
  },
  geometryOptions: [
    {
      geometry: 'line',
      color: '#5B8FF9',
      connectNulls: true,
    },
    {
      geometry: 'line',
      color: '#5AD8A6',
      connectNulls: true,
    },
  ],
};

  return <DualAxes {...config} />;
};

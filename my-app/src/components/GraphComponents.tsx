import React from 'react';
import { DualAxes } from '@ant-design/charts';

interface graphSeriesProps {
    data: any;
}

export const GraphSeriesGDownloads = ({ data }: graphSeriesProps) => {
  
    const config = {
    data: [data, data],
    xField: 'date',
    yField: ['selling', 'gestimates'],
    meta: {
      date: {
        type: 'time',
        
      },
          //настройка переворачивающая ось Y для gestimates
    selling: {
      range: [1, 0],
      max: 1500,
      min:1,
    },
    },
    geometryOptions: [
      {
        geometry: 'line',
        color: '#FF0000',
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

export const GraphSeriesGRevenue = ({ data }: graphSeriesProps) => {
  
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

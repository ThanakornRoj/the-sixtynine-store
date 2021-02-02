import React from 'react';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

import { ChartBox, ChartContainer, OverAll } from './style';

import BoxHeader from '../../../components/boxHeader';

const SatisfactionChart = () => {
  const data = [
    { name: 'JAN', uv: 18, amt: 200 },
    { name: 'FEB', uv: 85, amt: 200 },
    { name: 'MAR', uv: 100, amt: 200 },
    { name: 'API', uv: 200, amt: 200 },
  ];
  return (
    <ChartBox>
      <BoxHeader text="Goods & Sales" />
      <ChartContainer>
        <OverAll>Overall Satisfaction (Maximum: 10 Points)</OverAll>
        <AreaChart
          width={430}
          height={120}
          data={data}
          margin={{
            top: 5,
            right: 5,
            left: -28,
            bottom: 15,
          }}
        >
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#F26736" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#FFF7F4" stopOpacity={0.4} />
            </linearGradient>
          </defs>
          <YAxis />
          <Tooltip
            wrapperStyle={{
              width: 100,
              backgroundColor: '#999',
              border: '5px solid #f00',
            }}
          />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="none"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="none"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ChartContainer>
    </ChartBox>
  );
};
export default SatisfactionChart;

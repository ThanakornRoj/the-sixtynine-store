import React from 'react';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

import { ChartBox, ChartContainer } from './style';

import BoxHeader from '../../../components/boxHeader';

const UsageChart = () => {
  const data = [
    { name: 'JAN', uv: 18, pv: 23, amt: 100 },
    { name: 'FEB', uv: 35, pv: 49, amt: 100 },
    { name: 'MAR', uv: 45, pv: 75, amt: 100 },
    { name: 'API', uv: 85, pv: 98, amt: 100 },
  ];
  return (
    <ChartBox>
      <BoxHeader text="User usage time" />
      <ChartContainer>
        <LineChart
          width={420}
          height={159}
          data={data}
          margin={{
            top: 5,
            right: 5,
            left: -28,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#4AAAFF" strokeWidth={2} />
          <Line type="monotone" dataKey="uv" stroke="#F26736" strokeWidth={2} />
        </LineChart>
      </ChartContainer>
    </ChartBox>
  );
};
export default UsageChart;

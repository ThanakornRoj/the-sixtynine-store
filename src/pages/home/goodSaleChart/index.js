import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import { ChartBox, ChartContainer } from "./style";

import BoxHeader from "../../../components/boxHeader";

const GoodSaleChart = () => {
  const data = [
    { name: "JAN", uv: 9.0, pv: 5.0, amt: 9 },
    { name: "FEB", uv: 5.0, pv: 8.0, amt: 9 },
    { name: "MAR", uv: 6.0, pv: 7.0, amt: 9 },
    { name: "API", uv: 8.6, pv: 5.5, amt: 9 },
  ];
  return (
    <ChartBox>
      <BoxHeader text="Goods & Sales" />
      <ChartContainer>
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{
              top: 24,
              right: 30,
              left: -10,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#4AAAFF" barSize={15} />
            <Bar dataKey="uv" fill="#F26736" barSize={15} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </ChartBox>
  );
};
export default GoodSaleChart;

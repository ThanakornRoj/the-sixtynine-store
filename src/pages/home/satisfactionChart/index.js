import React from "react";

import {
  AreaChart,
  Area,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { ChartBox, ChartContainer, OverAll } from "./style";

import BoxHeader from "../../../components/boxHeader";

const SatisfactionChart = () => {
  const data = [
    { name: "JAN", uv: 18, amt: 200 },
    { name: "FEB", uv: 85, amt: 200 },
    { name: "JUNE", uv: 120, amt: 200 },
    { name: "JUNE", uv: 110, amt: 200 },
    { name: "MAR", uv: 150, amt: 200 },
    { name: "MAR", uv: 155, amt: 200 },
    { name: "API", uv: 200, amt: 200 },
  ];
  return (
    <ChartBox>
      <BoxHeader text="Sales summary " />
      <ChartContainer>
        <OverAll>Overall Satisfaction (Maximum: 10 Points)</OverAll>
        <ResponsiveContainer>
          <AreaChart
            height={400}
            data={data}
            margin={{
              top: 0,
              right: 30,
              left: 0,
              bottom: 5,
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
                backgroundColor: "#999",
                border: "5px solid #f00",
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
        </ResponsiveContainer>
      </ChartContainer>
    </ChartBox>
  );
};
export default SatisfactionChart;

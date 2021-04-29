import React from "react";
import { Checkbox } from "antd";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { ChartBox, ChartContainer, HeaderText, Section } from "./style";

const TrendChart = () => {
  const data = [];

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const randomNumber = () => {
    const min = 1;
    const max = 100;
    const rand = min + Math.random() * (max - min);

    return Math.round(rand);
  };

  for (let i = 0; i <= 30; i++) {
    data.push({
      name: i,
      ยอดขาย: randomNumber(),
      อัตราการซื้อ: randomNumber(),
      คำสั่งซื้อ: randomNumber(),
      ยอดเข้าชม: randomNumber(),
      wishList: randomNumber(),
      สินค้าที่อยู่ในตะกร้าสินค้า: randomNumber(),
      amt: randomNumber(),
    });
  }

  return (
    <ChartBox>
      <Section>
        <HeaderText>Trend Graph</HeaderText>
        <Checkbox onChange={onChange}>show previous month</Checkbox>
      </Section>
      <ChartContainer>
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend layout="vertical" verticalAlign="top" align="right" />
            <Line
              yAxisId="left"
              dataKey="ยอดขาย"
              stroke="#fd5c28"
              strokeWidth={2}
              activeDot={{ r: 5 }}
            />
            <Line
              yAxisId="left"
              dataKey="อัตราการซื้อ"
              stroke="#ff5050"
              strokeWidth={2}
              activeDot={{ r: 5 }}
            />
            <Line
              yAxisId="left"
              dataKey="คำสั่งซื้อ"
              stroke="#6600ff"
              strokeWidth={2}
              activeDot={{ r: 5 }}
            />
            <Line
              yAxisId="left"
              dataKey="ยอดเข้าชม"
              stroke="#82ca9d"
              strokeWidth={2}
              activeDot={{ r: 5 }}
            />
            <Line
              yAxisId="left"
              dataKey="wishList"
              stroke="#00ccff"
              strokeWidth={2}
              activeDot={{ r: 5 }}
            />
            <Line
              yAxisId="right"
              dataKey="สินค้าที่อยู่ในตะกร้าสินค้า"
              stroke="#00ccff"
              strokeWidth={2}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </ChartBox>
  );
};

export default TrendChart;

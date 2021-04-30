import React from "react";
import { Checkbox, Space } from "antd";

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

import {
  ChartBox,
  ChartContainer,
  HeaderText,
  Section,
  Flex,
  Left,
  Right,
} from "./style";

const TrendChart = () => {
  const data = [];
  const Legend = [
    {
      text: "ยอดขาย",
      color: "#02479B",
    },
    {
      text: "อัตราการซื้อ",
      color: "#035CC6",
    },
    {
      text: "คำสัี่งซื้อ",
      color: "#2973CA",
    },
    {
      text: "ยอดเข้าชม",
      color: "#2f86dd",
    },
    {
      text: "สินค้าที่อยู่ใน wish list",
      color: "#3494eb",
    },
    {
      text: "สินค้าที่อยู่ใน cart",
      color: "#4ca3ee",
    },
  ];

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
      <Flex>
        <Left>
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
                <Legend />
                <Line
                  yAxisId="left"
                  dataKey="ยอดขาย"
                  stroke="#fd5c28"
                  strokeWidth={3}
                  activeDot={{ r: 5 }}
                />
                <Line
                  yAxisId="left"
                  dataKey="อัตราการซื้อ"
                  stroke="#ffced4"
                  strokeWidth={3}
                  activeDot={{ r: 5 }}
                />
                <Line
                  yAxisId="left"
                  dataKey="คำสั่งซื้อ"
                  stroke="#6600ff"
                  strokeWidth={3}
                  activeDot={{ r: 5 }}
                />
                <Line
                  yAxisId="left"
                  dataKey="ยอดเข้าชม"
                  stroke="#82ca9d"
                  strokeWidth={3}
                  activeDot={{ r: 5 }}
                />
                <Line
                  yAxisId="left"
                  dataKey="wishList"
                  stroke="#00ccff"
                  strokeWidth={3}
                  activeDot={{ r: 5 }}
                />
                <Line
                  yAxisId="right"
                  dataKey="สินค้าที่อยู่ในตะกร้าสินค้า"
                  stroke="#ace9fe"
                  strokeWidth={3}
                  activeDot={{ r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </Left>
        <Right>
          <Space size={24} direction="vertical">
            {Legend.map((data) => (
              <Space size={32} style={{ color: `${data.color}` }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="12" fill="currentColor" />
                </svg>
                <span>{data.text}</span>
              </Space>
            ))}
          </Space>
        </Right>
      </Flex>
    </ChartBox>
  );
};

export default TrendChart;

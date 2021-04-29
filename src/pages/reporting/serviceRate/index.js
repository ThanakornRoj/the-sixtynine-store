import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

import { ChartBox, Flex, Left, Right } from "./style";

import BoxHeader from "../../../components/boxHeader";
import { Space } from "antd";

const ServiceRate = () => {
  const data = [
    { name: "5 stars review", value: 400, percent: 31 },
    { name: "4 stars review", value: 300, percent: 28 },
    { name: "3 stars review", value: 200, percent: 28 },
    { name: "2 stars review", value: 200, percent: 15 },
    { name: "1 stars review", value: 100, percent: 8 },
  ];

  const colors = ["#29CA39", "#99D669", "#FFB800", "#FF8761", "#F24136"];

  return (
    <ChartBox>
      <BoxHeader text="customer service rate" />
      <Flex>
        <Left>
          <Space direction="vertical" size={24}>
            {data.map((data, index) => (
              <Flex style={{ color: colors[index], padding: 0 }}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="12" fill="currentColor" />
                </svg>
                <p>{data.name}</p>
                <p>{data.percent}%</p>
              </Flex>
            ))}
          </Space>
        </Left>
        <Right>
          <ResponsiveContainer height="80%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={50}
                outerRadius={100}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <p>1,947 review</p>
        </Right>
      </Flex>
    </ChartBox>
  );
};

export default ServiceRate;

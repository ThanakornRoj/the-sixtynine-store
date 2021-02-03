import { Tooltip, Progress } from "antd";
import React from "react";

import { ChartBox, ChartContainer, StatusExpand, Status } from "./style";

import BoxHeader from "../../../components/boxHeader";
import Income from "../../../icons/income.svg";
import Expend from "../../../icons/expend.svg";

const ProgressChart = () => {
  const data = [
    {
      percent: 70,
      text: "Text",
    },
    {
      percent: 60,
      text: "Text",
    },
    {
      percent: 60,
      text: "Text",
    },
    {
      percent: 60,
      text: "Text",
    },
    {
      percent: 60,
      text: "Text",
    },
    {
      percent: 60,
      text: "Text",
    },
  ];
  return (
    <ChartBox>
      <BoxHeader text="Income in each category" />
      <StatusExpand>
        <Status style={{ marginRight: "16px" }}>
          <img src={Income} alt="" />
          <p>Income</p>
        </Status>

        <Status>
          <img src={Expend} alt="" />
          <p>Expenditure</p>
        </Status>
      </StatusExpand>

      <ChartContainer>
        {data.map((data) => (
          <div style={{ padding: "0 35px" }}>
            <Tooltip title="3 done / 3 in progress / 4 to do">
              <Progress
                type="dashboard"
                percent={data.percent}
                strokeColor={{
                  "51%": "#4aaaff",
                  "50%": "#F26736",
                }}
                gapDegree={0}
                showInfo={false}
                strokeWidth={15}
                strokeLinecap="square"
                width={105}
              />
            </Tooltip>
            <p style={{ textAlign: "center", marginTop: "10px" }}>
              {data.text}
            </p>
          </div>
        ))}
      </ChartContainer>
    </ChartBox>
  );
};

export default ProgressChart;

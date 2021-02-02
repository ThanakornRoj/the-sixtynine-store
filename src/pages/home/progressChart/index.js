import { Tooltip, Progress } from 'antd';
import React from 'react';

import { ChartBox, ChartContainer, StatusExpand, Status } from './style';

import BoxHeader from '../../../components/boxHeader';
import Income from '../../../icons/income.svg';
import Expend from '../../../icons/expend.svg';

const ProgressChart = () => {
  const data = [
    {
      percent: 100,
      text: 'text',
    },
    {
      percent: 60,
      text: 'text',
    },
    {
      percent: 60,
      text: 'text',
    },
    {
      percent: 60,
      text: 'text',
    },
    {
      percent: 60,
      text: 'text',
    },
    {
      percent: 60,
      text: 'text',
    },
  ];
  return (
    <ChartBox>
      <BoxHeader text="Income in each category" />
      <StatusExpand>
        <Status style={{ marginRight: '16px' }}>
          <img src={Income} />
          <p>Income</p>
        </Status>

        <Status>
          <img src={Expend} />
          <p>Expenditure</p>
        </Status>
      </StatusExpand>

      <ChartContainer>
        {data.map((data) => (
          <div style={{ padding: '0 40px' }}>
            <Tooltip>
              <Progress
                type="dashboard"
                percent={75}
                success={{ percent: 30, stroke: '#F26736' }}
                gapDegree={0}
                strokeWidth={12}
                strokeColor="#4aaaff"
                strokeLinecap="square"
              />
            </Tooltip>
            <p style={{ textAlign: 'center', marginTop: '10px' }}>
              {data.text}
            </p>
          </div>
        ))}
      </ChartContainer>
    </ChartBox>
  );
};

export default ProgressChart;

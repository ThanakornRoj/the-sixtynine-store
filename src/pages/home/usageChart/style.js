import styled from '@emotion/styled';

export const ChartBox = styled.div`
  margin-top: 24px;
  background: #fff;
  border-radius: 6px;
  box-shadow: 1px 1px 144px rgba(0, 0, 0, 0.04);
`;

export const ChartContainer = styled.div`
  padding: 0 24px;
  padding-top: 30px;
  padding-bottom: 10px;

  .recharts-default-legend {
    display: none;
  }

  .recharts-cartesian-axis-line,
  .recharts-cartesian-axis-tick-line {
    display: none;
  }

  .recharts-dot {
    fill: red;
  }
`;

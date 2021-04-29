import styled from "@emotion/styled";

export const ChartBox = styled.div`
  background: #fff;
  border-radius: 6px;
`;

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 14px 24px;

  .ant-checkbox-inner {
    width: 16px;
    height: 16px;
  }

  .ant-checkbox + span {
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 600;
  }
`;

export const HeaderText = styled.h1`
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 15.48px;
  text-transform: uppercase;
  margin-bottom: 0;
`;

export const ChartContainer = styled.div`
  height: 400px;
  padding: 24px;

  .recharts-default-legend {
    display: none;
  }

  .recharts-cartesian-axis-line,
  .recharts-cartesian-axis-tick-line {
    display: none;
  }
`;

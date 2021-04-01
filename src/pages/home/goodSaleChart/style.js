import styled from "@emotion/styled";

export const ChartBox = styled.div`
  background: #fff;
  border-radius: 6px;
  box-shadow: 1px 1px 144px rgba(0, 0, 0, 0.04);
  height: 100%;
  min-height: 280px;
`;

export const ChartContainer = styled.div`
  height: 100%;
  max-height: 350px;
  padding-bottom: 5px;

  .recharts-default-legend {
    display: none;
  }

  .recharts-cartesian-axis-line,
  .recharts-cartesian-axis-tick-line {
    display: none;
  }
`;

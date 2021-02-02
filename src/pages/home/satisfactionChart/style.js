import styled from '@emotion/styled';

export const ChartBox = styled.div`
  background: #fff;
  border-radius: 6px;
  box-shadow: 1px 1px 144px rgba(0, 0, 0, 0.04);
  height: 100%;
`;

export const ChartContainer = styled.div`
  padding: 0 24px;
  padding-top: 11px;
  padding-bottom: 20px;

  .recharts-default-legend {
    display: none;
  }

  .recharts-cartesian-axis-line,
  .recharts-cartesian-axis-tick-line {
    display: none;
  }

  .recharts-tooltip-wrapper
    .recharts-tooltip-wrapper-right
    .recharts-tooltip-wrapper-bottom {
    visibility: visible !important;
  }
`;

export const OverAll = styled.p`
  font-size: 10px;
  font-weight: 500;
  margin-bottom: 15px;
`;

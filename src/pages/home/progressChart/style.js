import styled from "@emotion/styled";

export const ChartBox = styled.div`
  background: #fff;
  border-radius: 6px;
  box-shadow: 1px 1px 144px rgba(0, 0, 0, 0.04);
`;

export const ChartContainer = styled.div`
  padding: 0 24px;
  display: flex;
  justify-content: center;

  p {
    font-weight: 600;
  }

  .ant-progress-circle-path {
    stroke-dashoffset: -11px !important;
  }

  .ant-progress {
    transform: rotate(-10deg);
  }
`;

export const StatusExpand = styled.div`
  width: 100%;
  padding: 16px 24px;
  display: flex;
  justify-content: flex-end;
`;

export const Status = styled.div`
  display: flex;
  font-size: 12px;
  font-weight: 600;

  img {
    margin-right: 8px;
  }

  p {
    margin-bottom: 0;
  }
`;

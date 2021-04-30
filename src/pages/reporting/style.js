import styled from "@emotion/styled";
import { Input } from "antd";

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;

  .ant-radio-button-wrapper:first-child {
    border-radius: 6px 0 0 6px;
  }

  .ant-radio-button-wrapper:last-child {
    border-radius: 0 6px 6px 0;
  }

  .ant-radio-button-wrapper {
    height: 38px;
    padding: 0 17px;
    padding-top: 2px;
    box-shadow: 1px 1px 24px rgba(0, 0, 0, 0.06);
  }

  .ant-radio-button-wrapper:hover {
    color: #f26736;
  }

  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled)::before {
    background-color: #f26736;
  }

  .ant-radio-button-wrapper-checked:not([class*=" ant-radio-button-wrapper-disabled"]).ant-radio-button-wrapper:first-child {
    border-color: #f26736;
  }

  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover {
    color: #f26736;
    border-color: #f26736;
  }

  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    color: #f26736;
    border-color: #f26736;
  }

  .ant-picker {
    margin-left: 16px;
    border: none;
    border-radius: 6px;
    box-shadow: 1px 1px 24px rgba(0, 0, 0, 0.06);
  }

  .ant-picker-input > input {
    font-size: 0.75rem;
    font-weight: 700;
    text-align: center;
  }
`;

export const ButtonFilter = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const StyleInput = styled(Input)`
  width: 241px;
  height: 38px;
  border-radius: 6px;
  box-shadow: 1px 1px 21px rgba(0, 0, 0, 0.06);
  margin-left: 24px;

  :hover,
  :focus {
    border-color: #fd5c28;
    box-shadow: 1px 1px 21px rgba(0, 0, 0, 0.06);
  }
`;

export const SaleDetailContainer = styled.div`
  margin: 24px 0;
`;

export const TrendChartContainer = styled.div`
  min-height: 400px;
`;

export const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  margin-top: 24px;
`;

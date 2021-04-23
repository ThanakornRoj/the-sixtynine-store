import styled from "@emotion/styled";
import { Button } from "antd";

export const Container = styled.div`
  position: relative;
  min-height: 81vh;
  background-color: #fff;
  padding: 32px;
  margin-top: 32px;

  .flex {
    display: flex;
    align-items: center;
  }

  .button-contain {
    display: flex;
    justify-content: flex-end;
  }

  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border: 1px solid #999999;
    border-radius: 3px;
  }

  .ant-select-focused {
    border-color: #fd5c28;
    box-shadow: none;
  }

  .ant-select:not(.ant-select-disabled):hover .ant-select-selector {
    border-color: #fd5c28;
  }

  .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    border-color: #fd5c28;
    box-shadow: none;
    height: 100%;
  }

  .ant-select-single.ant-select-lg:not(.ant-select-customize-input)
    .ant-select-selector::after,
  .ant-select-single.ant-select-lg:not(.ant-select-customize-input)
    .ant-select-selector
    .ant-select-selection-item,
  .ant-select-single.ant-select-lg:not(.ant-select-customize-input)
    .ant-select-selector
    .ant-select-selection-placeholder {
    text-transform: uppercase;
    font-size: 12px;
  }
`;

export const CancelButton = styled(Button)`
  width: 104px;
  height: 40px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  border-color: #999999;
  border-radius: 3px;
  background-color: #fff;

  :hover,
  :focus {
    color: #fff;
    background-color: #333333;
    border-color: #333333;
  }
`;

export const NextButton = styled(Button)`
  width: 104px;
  height: 40px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  border-color: #fd5c28;
  border-radius: 3px;
  color: #fff;
  background-color: #fd5c28;

  :hover,
  :focus {
    color: #fff;
    background-color: #333333;
    border-color: #333333;
  }
`;

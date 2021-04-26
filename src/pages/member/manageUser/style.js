import styled from "@emotion/styled";
import { Button, Input } from "antd";

export const Container = styled.div`
  .ant-table-wrapper {
    background: #ffff;
    box-shadow: 1px 1px 144px rgba(0, 0, 0, 0.04);
  }
  .ant-table-thead > tr > th {
    font-weight: 600;
    background: #ffff;
    text-transform: uppercase;
  }

  .ant-table-column-sorters > span {
    padding-left: 32px;
  }

  .ant-table-column-sorter-up.active,
  .ant-table-column-sorter-down.active {
    color: #fd5c28;
  }

  td.ant-table-column-sort {
    background: #ffff;
  }

  .ant-table-tbody > tr.ant-table-row:hover > td {
    font-weight: 400;
  }

  .ant-table-cell {
    padding-left: 48px;
  }

  .ant-table-pagination-right {
    margin: 16px 32px;
  }

  .ant-table-tbody > tr.ant-table-row-selected > td {
    background: #fae9e7;
  }

  .ant-table-tbody > tr.ant-table-row-selected:hover > td {
    background: #fead93;
  }

  .ant-checkbox-indeterminate .ant-checkbox-inner::after {
    background-color: #fd5c28;
  }

  .ant-input-affix-wrapper:focus {
    border-color: #fd5c28;
  }

  .ant-space-item {
    display: flex;
    align-items: center;
  }

  svg:hover {
    color: #fd5c28;
    transform: scale(1.05, 1.05);
    transition: 0.3s;
  }
`;

export const HeaderSection = styled.div`
  margin-top: 28px;
  margin-bottom: 16px;
  display: flex;
  justify-content: flex-end;

  .ant-picker {
    border: none;
    height: 38px;
    border-radius: 3px;
    box-shadow: 1px 1px 24px rgba(0, 0, 0, 0.06);
  }

  .ant-picker-large .ant-picker-input > input {
    font-size: 12px;
    font-weight: 600;
  }

  .ant-picker:hover,
  .ant-picker-focused {
    border-color: #f26736;
    box-shadow: 0 0 0 2px rgb(246, 81, 59, 0.2);
  }

  .ant-picker-range .ant-picker-active-bar {
    background: #f26736;
  }

  .ant-select {
    height: 38px;
    width: 109px;
    border-radius: 3px;
    background: #fff;
    border: none;
    box-shadow: 1px 1px 24px rgba(0, 0, 0, 0.06);
  }

  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border: none;
    border-radius: 3px;
  }

  .ant-select-single.ant-select-show-arrow .ant-select-selection-item,
  .ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder {
    padding-top: 5px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
  }

  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    height: 100%;
  }

  .ant-select-focused {
    border-color: #fd5c28;
  }

  .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    border-color: #fd5c28;
    box-shadow: none;
    height: 100%;
  }
`;

export const StyleInput = styled(Input)`
  width: 241px;
  height: 38px;
  border-radius: 3px;
  box-shadow: 1px 1px 24px rgba(0, 0, 0, 0.06);
  margin-left: 24px;

  :hover,
  :focus {
    border-color: #fd5c28;
  }
`;

export const AddUser = styled(Button)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 161px;
  height: 38px;
  background-color: #fd5c28;
  border-color: #fd5c28;
  font-size: 12px;
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;
  margin-right: 24px;

  :hover,
  :focus {
    border-color: #333333;
    background-color: #333333;
    color: #fff;
  }
`;

export const EditButton = styled(Button)`
  width: 78px;
  height: 32px;
  border-radius: 3px;
  border: 1px solid #333333;
  color: #333333;
  font-size: 0.813rem;
  font-weight: 600;
  text-transform: uppercase;

  :hover,
  :focus {
    color: #fff;
    background: #fd5c28;
    border-color: #fd5c28;
  }
`;

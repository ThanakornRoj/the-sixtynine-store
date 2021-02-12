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
  }

  table tr th.ant-table-selection-column,
  table tr td.ant-table-selection-column {
    padding-left: 32px;
    padding-right: 64px;
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
`;

export const DetailButton = styled(Button)`
  width: 78px;
  height: 32px;
  border-radius: 3px;
  border: 1px solid #fd5c28;
  color: #fd5c28;
  font-size: 12px;
  font-weight: 700;

  :hover,
  :focus {
    color: #fff;
    background: #fd5c28;
    border-color: #fd5c28;
  }
`;

export const DeleteButton = styled(Button)`
  width: 82px;
  height: 38px;
  border-radius: 3px;
  border: none;
  background: #fdf0eb;
  font-size: 12px;
  font-weight: 600;
  color: #fd5c28;
  box-shadow: 1px 1px 24px rgba(0, 0, 0, 0.06);

  :hover,
  :focus {
    color: #fff;
    background: #fd5c28;
    border-color: #fd5c28;
  }
`;

export const HeaderSection = styled.div`
  margin-top: 28px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;

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
  box-shadow: 1px 1px 21px rgba(0, 0, 0, 0.06);
  margin-left: 24px;

  :hover,
  :focus {
    border-color: #fd5c28;
    box-shadow: 1px 1px 21px rgba(0, 0, 0, 0.06);
  }
`;

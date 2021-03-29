import styled from "@emotion/styled";

export const Container = styled.div`
  .ant-table {
    padding: 0 32px;
    min-height: 69vh;
  }

  .ant-table-wrapper {
    background: #ffff;
    box-shadow: 1px 1px 144px rgba(0, 0, 0, 0.04);
  }
  .ant-table-thead > tr > th {
    font-weight: 600;
    background: #ffff;
    border-bottom: none;
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

  .ant-tag-orange {
    border-color: #fd5c28;
    color: #fd5c28;
    background-color: #fdf0eb;
    border-radius: 5px;
  }
`;

export const HeaderSection = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
  margin-bottom: 16px;

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
    font-size: 12px;
    font-weight: 700;
    text-align: center;
  }
`;

export const ButtonFilter = styled.div`
  display: flex;
  justify-content: space-around;
`;

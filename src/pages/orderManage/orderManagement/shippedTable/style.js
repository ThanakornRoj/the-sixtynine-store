import styled from "@emotion/styled";
import { Button } from "antd";

export const Container = styled.div`
  .ant-table {
    padding: 0 32px;
  }

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

  .ant-tag-orange {
    border-color: #fd5c28;
    color: #fd5c28;
    background-color: #fdf0eb;
    border-radius: 5px;
  }

  .ant-table-thead > tr > th {
    text-transform: uppercase;
  }

  .action {
    display: flex;
    align-items: center;

    svg:hover {
      color: #fd5c28;
      transition: 0.5s;
    }
  }
`;

export const ViewButton = styled(Button)`
  width: 78px;
  height: 32px;
  border-radius: 3px;
  border: 1.5px solid #333333;
  color: #333333;

  :hover,
  :focus {
    color: #fff;
    background: #fd5c28;
    border-color: #fd5c28;
  }
`;

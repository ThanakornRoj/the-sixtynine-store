import styled from "@emotion/styled";
import { Button, Row, Space } from "antd";

export const ContentContainer = styled.div`
  margin-top: 32px;

  .ant-table-thead > tr > th {
    font-weight: 600;
    background: #ffff;
    border-bottom: none;
    padding-left: 32px;
    text-transform: uppercase;
  }

  .ant-table-tbody > tr > td {
    padding-left: 32px;
  }

  .ant-table-wrapper {
    background: #ffff;
    box-shadow: 1px 1px 144px rgba(0, 0, 0, 0.04);
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

  .ant-table-container table > thead > tr:first-child th:last-child {
    text-align: right;
    padding-right: 42px;
  }

  .button-contain {
    display: flex;
    justify-content: flex-end;
    margin-top: 24px;
  }
`;

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const OrderNumber = styled(Row)`
  margin-right: 12px;

  .text-header {
    font-size: 1.125rem;
    font-weight: 700;
    text-align: right;
  }

  .text-order-number {
    font-size: 0.875rem;
    font-weight: 700;
    text-align: right;
    color: #fd5c28;
  }
`;

export const ResultContainer = styled.div`
  background: #fff;
  padding: 32px 42px;

  .ant-divider-horizontal {
    margin: 15px 0;
  }
`;

export const ResultSection = styled(Space)`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 15px;

  p {
    text-transform: uppercase;
    font-weight: 700;
    text-align: right;
    margin-bottom: 0;
  }

  .flex {
    display: flex;
    justify-content: space-between;
  }

  .ant-space-item {
    width: 23%;
  }
`;

export const DoneButton = styled(Button)`
  width: 82px;
  height: 38px;
  border-radius: 3px;
  border: none;
  background: #fd5c28;
  font-size: 12px;
  font-weight: 600;
  color: #fff;
  box-shadow: 1px 1px 24px rgba(0, 0, 0, 0.06);

  :hover {
    color: #fff;
    background: #333333;
    border-color: #333333;
  }

  :focus {
    color: #fff;
    background: #fd5c28;
    border-color: #fd5c28;
  }
`;

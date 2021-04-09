import styled from "@emotion/styled";
import { Button, Modal } from "antd";

export const Container = styled.div`
  .ant-table-wrapper {
    background: #ffff;
    box-shadow: 1px 1px 144px rgba(0, 0, 0, 0.04);
  }

  .ant-table-thead > tr > th {
    font-weight: 600;
    background: #ffff;
    border-bottom: none;
    padding-left: 32px;
  }

  .ant-table-tbody > tr > td {
    padding-left: 32px;
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

  svg:hover {
    color: #fd5c28;
    transform: scale(1.05, 1.05);
    transition: 0.3s;
  }
`;

export const HeaderSection = styled.div`
  margin-bottom: 24px;
`;

export const ViewButton = styled(Button)`
  width: 78px;
  height: 32px;
  border-radius: 3px;
  border: 1px solid #333333;
  color: #333333;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;

  :hover,
  :focus {
    color: #fff;
    background: #fd5c28;
    border-color: #fd5c28;
  }
`;

export const ConfirmButton = styled(Button)`
  width: 100%;
  max-width: 180px;
  height: 44px;
  border: 1px solid #fd5c28;
  font-weight: 700;
  color: #fd5c28;

  :hover,
  :focus {
    color: #fff;
    background-color: #fd5c28;
    border-color: #fd5c28;
  }
`;

export const CancelButton = styled(Button)`
  width: 100%;
  max-width: 180px;
  height: 44px;
  border: none;
  background-color: #fd5c28;
  font-weight: 700;
  color: #fff;
  margin-left: 10px;

  :hover,
  :focus {
    color: #fd5c28;
    background-color: #fff;
    border: 1px solid #fd5c28;
  }
`;

export const StyleModal = styled(Modal)`
  .content-contain {
    padding: 24px;
    text-align: center;
  }

  .button-contain {
    display: flex;
    justify-content: center;
  }

  .header {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 24px;
  }

  .description {
    font-size: 14px;
    font-weight: 300;
    margin-bottom: 15px;
  }
`;

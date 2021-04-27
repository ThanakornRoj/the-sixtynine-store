import styled from "@emotion/styled";
import { Button } from "antd";

export const ContentContainer = styled.div`
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

  .ant-table-tbody > tr.ant-table-row:hover > td {
    font-weight: 400;
  }

  .ant-table-pagination-right {
    margin: 16px 32px;
  }
`;

export const HeaderSection = styled.div`
  margin-bottom: 24px;

  .button-align {
    display: flex;
    justify-content: flex-end;
    margin-top: 24px;
  }
`;

export const UploadBanner = styled(Button)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 44px;
  border: none;
  background-color: #fd5c28;
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;

  p {
    margin-bottom: 0;
    margin-left: 10px;
  }

  :hover,
  :focus {
    color: #fd5c28;
    background-color: #fff;
    border: 1px solid #fd5c28;
  }
`;

export const ViewButton = styled(Button)`
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

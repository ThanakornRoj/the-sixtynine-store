import styled from "@emotion/styled";
import { Button, Input } from "antd";

export const Container = styled.div`
  .ant-table-wrapper {
    background: #ffff;
    box-shadow: 1px 1px 144px rgba(0, 0, 0, 0.04);
  }

  .ant-table {
    min-height: 700px;
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

  .ant-table-thead > tr > th {
    text-transform: uppercase;
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

export const AssignButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 38px;
  width: 165px;
  border-radius: 3px;
  background: #fdf0eb;
  box-shadow: 1px 1px 24px rgba(0, 0, 0, 0.06);
  font-size: 12px;
  font-weight: 600;
  color: #fd5c28;
  text-transform: uppercase;

  p {
    margin-bottom: 0;
    margin-left: 12px;
  }

  :hover,
  :focus {
    color: #fff;
    background: #fd5c28;
    border-color: #fd5c28;
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
    transform: scale(1.1, 1.1);
    color: #fff;
    background: #fd5c28;
    border-color: #fd5c28;
  }

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

export const ModalHeader = styled.div`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 7px;
`;

export const ModalContainer = styled.div`
  text-align: center;

  p {
    margin-bottom: 0;
  }

  .flex {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin-top: 5px;
  }
`;

export const Text = styled.p`
  font-size: 10px;
  font-weight: 300;
`;

export const UserText = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #75ba68;
  margin-right: 24px;
`;

export const AdminText = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #fab300;
  margin-left: 24px;
`;

export const CancelButton = styled(Button)`
  width: 100%;
  max-width: 180px;
  height: 40px;
  border: 1px solid #fd5c28;
  border-radius: 3px;
  font-size: 12px;
  font-weight: 700;
  color: #fd5c28;

  :hover,
  :focus {
    color: #fff;
    background: #fd5c28;
    border-color: #fd5c28;
  }

  @media (max-width: 524.98px) {
    max-width: 140;
  }
`;

export const ConfirmButton = styled(Button)`
  width: 100%;
  max-width: 180px;
  height: 40px;
  background: #fd5c28;
  border: none;
  border-radius: 3px;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  margin-left: 10px;
  text-transform: uppercase;

  :hover {
    background: #ff5c28;
    border-color: #ff5c28;
    color: #fff;
    transform: scale(1.1, 1.1);
  }

  :focus {
    background: #ff5c28;
    border-color: #ff5c28;
    color: #fff;
  }
`;

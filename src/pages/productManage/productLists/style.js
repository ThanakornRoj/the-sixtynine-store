import styled from "@emotion/styled";
import { Button } from "antd";

export const Container = styled.div`
  font-size: 12px;

  .ant-table-tbody {
    font-size: 12px;
  }

  .ant-table table {
    padding: 0 24px;
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
`;

export const EditButton = styled(Button)`
  width: 78px;
  height: 32px;
  border-radius: 3px;
  border: 1px solid #333333;
  color: #333333;
  font-size: 12px;
  font-weight: 700;
  margin-right: 15px;

  :hover,
  :focus {
    color: #fff;
    background: #fd5c28;
    border-color: #fd5c28;
  }
`;

export const AddProduct = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 38px;
  width: 155px;
  border: none;
  background: #fd5c28;
  box-shadow: 1px 1px 24px rgba(0, 0, 0, 0.06);
  border-radius: 3px;
  font-size: 12px;
  font-weight: 600;
  color: #fff;

  p {
    margin-left: 10px;
    margin-bottom: 0;
  }

  :hover,
  :focus {
    color: #fff;
    background: #fd5c28;
    transform: scale(1.1, 1.1);
  }
`;

export const HeaderSection = styled.div`
  margin-top: 24px;
  margin-bottom: 16px;
  display: flex;
  justify-content: flex-end;
`;

export const ContentContainer = styled.div`
  padding: 0 12px;
  padding-bottom: 22px;
`;

export const CategoryTag = styled.p`
  display: flex;
  justify-content: center;
  margin-bottom: 0;
  background: #fdf0eb;
  padding: 5px;
  color: #fd5c28;
  border-radius: 3px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;

  color: #333333;

  svg {
    color: #333333;
  }

  svg:hover,
  svg:focus {
    color: #fd5c28;
  }
`;

export const ProductHeader = styled.div`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 48px 0;
`;

export const LeftContent = styled.div`
  margin-right: 32px;
`;

export const RightContent = styled.div`
  font-size: 12px;
  font-weight: 700;

  .normal {
    font-weight: 400;
  }

  .tag {
    display: flex;
    justify-content: center;
    background: #fdf0eb;
    padding: 5px;
    color: #fd5c28;
    border-radius: 3px;
    margin-left: 24px;
    font-weight: 400;
  }
`;

export const ConfirmButton = styled.div`
  display: flex;
  justify-content: center;
  width: 150px;
  height: 38px;
  border: 1px solid #333333;
  border-radius: 3px;
  color: #333333;
  font-size: 24px;
  font-weight: 700;

  :hover,
  :focus {
    background-color: #fd5c28;
    color: #fff;
    border-color: #fd5c28;
    transition: 0.5s;
  }
`;

export const CancelButton = styled.div`
  display: flex;
  justify-content: center;
  width: 150px;
  height: 38px;
  border: none;
  border-radius: 3px;
  background-color: #fd5c28;
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  margin-left: 24px;

  :hover,
  :focus {
    background-color: #333333;
    color: #fff;
    transition: 0.5s;
  }
`;

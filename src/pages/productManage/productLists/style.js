import styled from "@emotion/styled";
import { Button } from "antd";

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

export const CategoryButton = styled(Button)`
  width: 82px;
  height: 38px;
  border-radius: 3px;
  margin-left: 12px;
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
  justify-content: space-between;
`;

export const Flex = styled.div`
  display: flex;
`;

export const LeftContent = styled.div`
  width: 70%;
  margin-right: 24px;
`;

export const RightContent = styled.div`
  width: 30%;
  height: 100%;
  background: #ffffff;
  box-shadow: 1px 1px 144px rgba(0, 0, 0, 0.04);
  border-radius: 3px;
  margin-top: 24px;
`;

export const ContentContainer = styled.div`
  padding: 0 12px;
  padding-bottom: 22px;
`;

export const CategoriesBox = styled.div`
  border-bottom: 1px solid #ededed;
  padding: 17px 14px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;

  p {
    margin-bottom: 0;
    cursor: pointer;
  }

  img {
    width: 20px;
    height: auto;
    margin-right: 10px;
  }

  p:hover {
    text-decoration: underline;
  }

  img:hover {
    transform: scale(1.1, 1.1);
  }

  span {
    color: #fd5c28;
    margin-left: 5px;
  }
`;

export const DeleteCategory = styled(Button)`
  width: 100%;
  height: 38px;
  background: #ededed;
  color: #999999;
  box-shadow: 1px 1px 24px rgba(0, 0, 0, 0.06);
  border-radius: 3px;
  border: none;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;

  :hover,
  :focus {
    background: #333333;
    color: #fff;
  }
`;

export const NewCategory = styled(Button)`
  margin-top: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 38px;
  width: 100%;
  border: none;
  background: #fdf0eb;
  box-shadow: 1px 1px 24px rgba(0, 0, 0, 0.06);
  border-radius: 3px;
  font-size: 12px;
  font-weight: 600;
  color: #fd5c28;
  text-transform: uppercase;

  p {
    margin-left: 10px;
    margin-bottom: 0;
  }

  :hover,
  :focus {
    color: #fff;
    background: #fd5c28;
  }
`;

export const CancelButton = styled(Button)`
  height: 38px;
  width: 100%;
  border: none;
  background: #fdf0eb;
  box-shadow: 1px 1px 24px rgba(0, 0, 0, 0.06);
  border-radius: 3px;
  font-size: 12px;
  font-weight: 600;
  color: #fd5c28;
  text-transform: uppercase;

  :hover,
  :focus {
    color: #fff;
    background: #fd5c28;
  }
`;

import styled from "@emotion/styled";
import { Button, Input, Select, Space } from "antd";

export const Container = styled.div`
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border: 1px solid #c4c4c4;
    border-radius: 3px;
    height: 38px;
    width: 100%;
    background-color: #fff;
  }

  .ant-input {
    border: 1px solid #c4c4c4;
    border-radius: 3px;
    width: 100%;
    background-color: #fff;
  }

  .ant-select-single.ant-select-show-arrow .ant-select-selection-item,
  .ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder {
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
    display: flex;
    align-items: center;
  }
`;

export const StyleSelect = styled(Select)``;

export const ContentContainer = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 32px;
  margin-top: 24px;
  min-height: 82vh;
  position: relative;
`;

export const Flex = styled.div`
  display: flex;

  .form-row {
    margin-bottom: 32px;
  }

  .form-col {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

export const Left = styled.div`
  width: 50%;
  margin-right: 32px;
`;

export const Right = styled.div`
  width: 50%;
`;

export const InputHeader = styled.p`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const StyleInput = styled(Input)`
  border: 1px solid #c4c4c4;
  border-radius: 3px;
  height: 38px;
  background-color: #fff;
`;

export const AddProductButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 38px;
  width: 182px;
  border: none;
  background: #fd5c28;
  border-radius: 3px;
  font-size: 12px;
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;

  p {
    margin-left: 10px;
    margin-bottom: 0;
  }

  :hover,
  :focus {
    color: #fff;
    background: #fd5c28;
    transform: scale(1.05, 1.05);
    transition: 0.3s;
  }
`;

export const BackButton = styled(Button)`
  width: 150px;
  height: 38px;
  border: 1px solid #333333;
  border-radius: 3px;
  font-size: 12px;
  font-weight: 700;
  color: #333333;
  text-transform: uppercase;

  :hover,
  :focus {
    background-color: #fd5c28;
    border-color: #fd5c28;
    color: #fff;
  }
`;

export const SaveButton = styled(Button)`
  width: 150px;
  height: 38px;
  border: none;
  border-radius: 3px;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  background-color: #fd5c28;
  margin-left: 15px;
  text-transform: uppercase;

  :hover,
  :focus {
    transform: scale(1.05, 1.05);
    transition: 0.5s;
    background-color: #fd5c28;
    color: #fff;
  }
`;

export const UploadProductImage = styled(Space)`
  display: flex;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  bottom: 32px;
  right: 32px;
`;

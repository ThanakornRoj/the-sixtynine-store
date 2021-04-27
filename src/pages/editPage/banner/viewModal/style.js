import styled from "@emotion/styled";
import { Button, Modal } from "antd";

export const StyleModal = styled(Modal)`
  .ant-upload-list-picture-card-container {
    width: 100%;
    height: 400px;
  }

  .ant-upload.ant-upload-select-picture-card {
    width: 100%;
    height: 400px;
    border: 2px dashed #d9d9d9;
  }

  .ant-upload-list-picture-card .ant-upload-list-item-actions {
    display: flex;
    align-items: center;
  }

  .ant-btn-icon-only.ant-btn-sm {
    width: 50px;
  }

  .button-align {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
  }

  svg {
    transform: scale(1.5, 1.5);
  }

  h2 {
    text-transform: uppercase;
    font-weight: 600;
  }
`;

export const DeleteButton = styled(Button)`
  width: 100%;
  max-width: 180px;
  height: 44px;
  border: none;
  background-color: #fd5c28;
  font-weight: 700;
  color: #fff;
  margin-right: 10px;

  :hover,
  :focus {
    color: #fd5c28;
    background-color: #fff;
    border: 1px solid #fd5c28;
  }
`;

export const SaveButton = styled(Button)`
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

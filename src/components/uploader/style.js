import styled from "@emotion/styled";
import { Modal } from "antd";

export const UploadContainer = styled.div`
  .bottom-text {
    margin-top: 26px;
    width: 456px;
    word-wrap: break-word;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    color: #9a9a9a;
  }

  .ant-upload.ant-upload-select-picture-card {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    border: 2px dashed #c4c4c4;

    .color {
      color: #9a9a9a;
    }
  }

  .ant-upload.ant-upload-select-picture-card:hover {
    border-color: #fd5c28;

    .color {
      color: #fd5c28;
    }
  }

  .ant-upload-list-picture-card {
    top: 30%;
  }

  .ant-upload-list-picture-card-container {
    width: 82px;
    height: 82px;
  }

  .ant-upload-list-picture-card .ant-upload-list-item {
    border: 1px solid #c4c4c4;
    border-radius: 10px;
  }

  .ant-upload-list-picture-card .ant-upload-list-item:hover {
    border-color: #fd5c28;
  }
`;

export const StyledModal = styled(Modal)`
  .ant-modal-content {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
  }

  .ant-modal-body {
    text-align: center;
  }
`;

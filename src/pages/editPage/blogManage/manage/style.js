import styled from "@emotion/styled";
import { Button, Input } from "antd";

export const Container = styled.div`
  background-color: #fff;
  border-radius: 3px;

  .ant-upload.ant-upload-drag {
    border: 2px dashed #c4c4c4;
    border-radius: 5px;
  }

  .ant-upload-text {
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
  }

  .ant-upload.ant-upload-drag:not(.ant-upload-disabled):hover {
    border-color: #fd5c28;
  }

  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border: 1px solid #c4c4c4;
    border-radius: 3px;
    height: 40px;
  }

  .ant-select-focused:not(.ant-select-disabled).ant.ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    border-color: #fd5c28 !important;
    box-shadow: none;
  }

  .form-row {
    margin-bottom: 32px;
  }

  .rdw-editor-wrapper {
    border: 1px solid #c4c4c4;
    border-radius: 3px;
  }

  .rdw-editor-toolbar {
    padding: 10px;
    border: none;
    border-bottom: 1px solid #c4c4c4;
  }

  .rdw-editor-main {
    padding: 15px;
    min-height: 400px;
    cursor: context-menu;
  }
`;

export const ContentContainer = styled.div`
  width: 60%;
  padding: 24px 0;
  margin: 0 auto;
`;

export const FormHeader = styled.p`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const HeaderSection = styled.div`
  margin-bottom: 24px;
`;

export const StyleInput = styled(Input)`
  width: 100%;
  height: 40px;
  border: 1px solid #c4c4c4;
  border-radius: 3px;

  :hover,
  :focus {
    border-color: #fd5c28;
    box-shadow: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 24px;
  padding-bottom: 24px;
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

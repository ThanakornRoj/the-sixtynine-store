import styled from "@emotion/styled";
import { Button, Input, Modal } from "antd";

export const StyleModal = styled(Modal)`
  h2 {
    font-weight: 600;
    text-align: center;
  }

  .header {
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    margin-top: 24px;
  }

  .button-align {
    display: flex;
    justify-content: center;
    margin-top: 24px;
  }
`;

export const CancelButton = styled(Button)`
  width: 210px;
  height: 44px;
  border-radius: 3px;
  border: 1px solid #fd5c28;
  color: #fd5c28;
  font-size: 0.813rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-right: 10px;

  :hover,
  :focus {
    color: #fff;
    background: #fd5c28;
    border-color: #fd5c28;
  }
`;

export const ConfirmButton = styled(Button)`
  width: 210px;
  height: 44px;
  border-radius: 3px;
  border: 1px solid #fd5c28;
  background-color: #fd5c28;
  color: #fff;
  font-size: 0.813rem;
  font-weight: 600;
  text-transform: uppercase;

  :hover,
  :focus {
    background: #333333;
    color: #fff;
    border-color: #333333;
  }
`;

export const StyleInput = styled(Input)`
  width: 100%;
  height: 44px;
  border: 1px solid #c4c4c4;
  border-radius: 3px;

  :hover,
  :focus {
    border-color: #fd5c28;
    box-shadow: none;
  }
`;

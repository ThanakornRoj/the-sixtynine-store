import styled from "@emotion/styled";
import { Button } from "antd";

export const DetailButton = styled(Button)`
  width: 78px;
  height: 32px;
  border-radius: 3px;
  border: 1.5px solid #333333;
  color: #333333;

  :hover,
  :focus {
    color: #fff;
    background: #fd5c28;
    border-color: #fd5c28;
  }
`;

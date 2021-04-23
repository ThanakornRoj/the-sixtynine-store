import styled from "@emotion/styled";
import { Button } from "antd";

export const Container = styled.div`
  .align-items {
    display: flex;
    align-items: center;
  }

  svg:hover {
    color: #fd5c28;
    transform: scale(1.05, 1.05);
    transition: 0.3s;
  }
`;

export const DetailButton = styled(Button)`
  width: 78px;
  height: 32px;
  border-radius: 3px;
  border: 1.5px solid #333333;
  color: #333333;
  font-size: 0.813rem;
  font-weight: 600;

  :hover,
  :focus {
    color: #fff;
    background: #fd5c28;
    border-color: #fd5c28;
  }
`;

export const ViewButton = styled(Button)`
  width: 78px;
  height: 32px;
  border-radius: 3px;
  border: 1.5px solid #333333;
  color: #333333;
  font-size: 0.813rem;
  font-weight: 600;

  :hover,
  :focus {
    color: #fff;
    background: #fd5c28;
    border-color: #fd5c28;
  }
`;

import styled from "@emotion/styled";
import { Input } from "antd";

export const FormContainer = styled.div`
  border-bottom: 1px solid #999999;
  padding: 10px 15px;

  .header {
    font-size: 0.75rem;
    font-weight: 600;
    color: #999999;
    margin-bottom: 0;
  }

  .bank-logo-contain {
    display: flex;
    justify-content: center;
    padding: 32px 0;

    p {
      margin-bottom: 10px;
      text-transform: uppercase;
      font-size: 0.75rem;
      font-weight: 600;
    }
  }
`;

export const Flex = styled.div`
  display: flex;
`;

export const Text = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 0;
`;

export const StyleInput = styled(Input)`
  width: 100%;
  height: 38px;
  border-color: #999999;
  border-radius: 3px;

  :hover,
  :focus {
    box-shadow: none;
    border-color: #fd5c28;
  }
`;

export const PaymentBox = styled.div`
  width: 300px;
  height: 65px;
  display: flex;
  justify-content: center;
  border: 1px solid #999999;
  border-radius: 3px;
  padding: 10px;
  cursor: pointer;

  :hover {
    border: 1.5px solid #fd5c28;
    overflow: hidden;

    img {
      transform: scale(1.05, 1.05);
      transition: 0.3s;
    }
  }
`;

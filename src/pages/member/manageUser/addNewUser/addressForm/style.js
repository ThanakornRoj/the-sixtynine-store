import styled from "@emotion/styled";
import { Input } from "antd";

export const Text = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 0;
`;

export const FormContainer = styled.div`
  border-bottom: 1px solid #999999;
  padding: 10px 15px;

  .header {
    font-size: 0.75rem;
    font-weight: 600;
    color: #999999;
    margin-bottom: 0;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  padding: 32px 0;
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

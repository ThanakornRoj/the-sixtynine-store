import styled from "@emotion/styled";
import { Button, Input } from "antd";

export const UploadButton = styled(Button)`
  width: 104px;
  height: 40px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  border-color: #999999;
  border-radius: 3px;
  background-color: #fff;

  :hover,
  :focus {
    color: #fff;
    background-color: #333333;
    border-color: #333333;
  }
`;

export const UploadSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #999999;
  padding-bottom: 32px;

  img {
    margin-right: 24px;
  }

  .left-contain {
    display: flex;
    align-items: center;
  }

  .right-contain {
    .text {
      font-size: 0.75rem;
      font-weight: 600;
      color: #999999;
      margin-left: 15px;
    }
  }
`;

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

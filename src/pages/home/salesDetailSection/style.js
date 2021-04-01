import styled from "@emotion/styled";
import { Button } from "antd";

export const ContentContainer = styled.div`
  margin-top: 24px;
`;

export const Flex = styled.div`
  display: flex;
  margin-top: 24px;
`;

export const LeftContent = styled.div`
  margin-right: 24px;
  width: 50%;
`;

export const RightContent = styled.div`
  width: 49%;
`;

export const SalesSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 17px;
`;

export const SalesBox = styled.div`
  text-transform: uppercase;
  height: 129px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  color: #c4c4c4;
  padding: 14px 24px;
  width: 100%;
  background: #fff;
  border-radius: 6px;
  box-shadow: 1px 1px 144px rgba(0, 0, 0, 0.04);

  p {
    margin-bottom: 0;
  }

  .number-data {
    font-size: 20px;
    font-weight: 600;
    color: #333333;
  }
`;

export const ProductListSection = styled.div`
  background: #fff;
  box-shadow: 1px 1px 144px rgba(0, 0, 0, 0.04);
  margin-top: 24px;
`;

export const ShowAllProduct = styled.div`
  text-align: center;
  padding: 16px 0;
  font-size: 12px;
  font-weight: 600;
  color: #999999;

  p {
    margin-bottom: 0;
    cursor: pointer;
  }

  p:hover {
    color: #f26736;
  }
`;

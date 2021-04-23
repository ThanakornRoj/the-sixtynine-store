import styled from "@emotion/styled";
import { Button } from "antd";

export const ProductContainer = styled.div`
  padding: 0 24px;
  margin-top: 15px;
`;

export const ScrollContainer = styled.div`
  height: 660px;
  overflow: auto;

  p {
    margin-bottom: 0;
  }

  ::-webkit-scrollbar {
    width: 3px;
    background-color: #e6e6e6;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 100%;
    background-color: #c4c4c4;
  }
`;

export const ProductBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ededed;
  padding-right: 40px;

  img {
    width: 70px;
    height: auto;
  }

  .number {
    font-size: 12px;
    font-weight: 600;
    margin-left: 14px;
    margin-right: 32px;
  }

  .product-detail {
    display: flex;
    align-items: center;
  }

  .image-layouts {
    width: 70px;
    height: 70px;
    object-fit: cover;
  }

  .product-name {
    margin-left: 32px;
    font-size: 12px;
    font-weight: 700;
  }

  .description {
    font-size: 10px;
    font-weight: 300;
  }

  .price {
    font-size: 12px;
    font-weight: 600;
    margin-left: 40px;
  }

  .view {
    font-size: 12px;
    font-weight: 600;
    margin-left: 40px;
  }

  .price-text {
    font-size: 10px;
    font-weight: 500;
    color: #999999;
  }
`;

export const ViewButton = styled(Button)`
  width: 93px;
  height: 32px;
  border: 1px solid #333333;
  border-radius: 3px;
  font-size: 0.813rem;
  font-weight: 600;
  color: #333333;
  text-transform: uppercase;

  :hover,
  :focus {
    color: #fff;
    background: #333333;
    border-color: #333333;
  }
`;

export const Menu = styled.div`
  display: flex;
  padding: 24px 14px;

  p {
    margin-bottom: 0;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    color: #bdbdbd;
  }

  p:hover {
    color: #fd5c28;
    transition: 0.5s;
  }

  .second-menu {
    margin-left: 24px;
  }
`;

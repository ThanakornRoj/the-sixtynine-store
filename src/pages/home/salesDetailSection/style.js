import styled from '@emotion/styled';
import { Button } from 'antd';

export const Flex = styled.div`
  display: flex;
  margin-top: 24px;
`;

export const LeftContent = styled.div`
  margin-right: 24px;
  width: 70%;
`;

export const RightContent = styled.div`
  width: 30%;
`;

export const SalesSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 17px;
`;

export const SalesBox = styled.div`
  text-transform: uppercase;
  font-size: 10px;
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
    font-size: 18px;
    font-weight: 600;
    color: #333333;
  }
`;

export const ProductListSection = styled.div`
  background: #fff;
  box-shadow: 1px 1px 144px rgba(0, 0, 0, 0.04);
  margin-top: 24px;
`;

export const ProductContainer = styled.div`
  padding: 0 24px;
  margin-top: 15px;
`;

export const ScrollContainer = styled.div`
  height: 305px;
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
  padding-bottom: 5px;
  border-bottom: 1px solid #ededed;

  .flex {
    display: flex;
    align-items: center;
  }

  img {
    width: 70px;
    height: auto;
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

  .price-text {
    font-size: 10px;
    font-weight: 500;
    color: #999999;
  }
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

export const ViewButton = styled(Button)`
  width: 93px;
  height: 32px;
  border: 1px solid #333333;
  border-radius: 3px;
  font-size: 10px;
  font-weight: 700;
  color: #333333;
  text-transform: uppercase;
  margin-right: 40px;

  :hover,
  :focus {
    color: #fff;
    background: #333333;
    border-color: #333333;
  }
`;

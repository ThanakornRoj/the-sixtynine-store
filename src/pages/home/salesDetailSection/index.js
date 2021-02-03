import React from 'react';

import {
  Flex,
  LeftContent,
  ProductBox,
  ProductContainer,
  ProductListSection,
  RightContent,
  SalesBox,
  SalesSection,
  ScrollContainer,
  ShowAllProduct,
  ViewButton,
} from './style';

import BoxHeader from '../../../components/boxHeader';
import GoodSaleChart from '../goodSaleChart';
import UsageChart from '../usageChart';
import SatisfactionChart from '../satisfactionChart';
import ProgressChart from '../progressChart';

const SaleDetail = () => {
  const salesData = [
    {
      text: 'products',
      number: 1000,
    },
    {
      text: 'sales',
      number: 3000,
    },
    {
      text: 'cost',
      number: 4000,
    },
    {
      text: 'text',
      number: 5000,
    },
  ];

  const productData = [
    {
      name: 'Monitor Samsung LC27',
      description: 'simply dummy text.',
      price: 1000,
      image: 'https://sv1.picz.in.th/images/2021/02/02/odiWVR.png',
    },
    {
      name: 'Monitor Samsung LC27',
      description: 'simply dummy text.',
      price: 1000,
      image: 'https://sv1.picz.in.th/images/2021/02/02/odgM58.png',
    },
    {
      name: 'Monitor Samsung LC27',
      description: 'simply dummy text.',
      price: 1000,
      image: 'https://sv1.picz.in.th/images/2021/02/02/odi0Y0.png',
    },
    {
      name: 'Monitor Samsung LC27',
      description: 'simply dummy text.',
      price: 1000,
      image: 'https://sv1.picz.in.th/images/2021/02/02/odi7iu.png',
    },
    {
      name: 'Monitor Samsung LC27',
      description: 'simply dummy text.',
      price: 1000,
      image: 'https://sv1.picz.in.th/images/2021/02/02/odi7iu.png',
    },
    {
      name: 'Monitor Samsung LC27',
      description: 'simply dummy text.',
      price: 1000,
      image: 'https://sv1.picz.in.th/images/2021/02/02/odiWVR.png',
    },
    {
      name: 'Monitor Samsung LC27',
      description: 'simply dummy text.',
      price: 1000,
      image: 'https://sv1.picz.in.th/images/2021/02/02/odgM58.png',
    },
    {
      name: 'Monitor Samsung LC27',
      description: 'simply dummy text.',
      price: 1000,
      image: 'https://sv1.picz.in.th/images/2021/02/02/odi7iu.png',
    },
  ];

  return (
    <>
      <Flex>
        <LeftContent>
          <SalesSection>
            {salesData.map((data) => (
              <SalesBox>
                <p className="number-data">
                  ${data.number.toLocaleString('en-IN')}
                </p>
                <p>{data.text}</p>
              </SalesBox>
            ))}
          </SalesSection>
          <ProductListSection>
            <BoxHeader text="Top Salling products" />
            <ProductContainer>
              <ScrollContainer>
                {productData.map((data) => (
                  <ProductBox>
                    <div className="flex">
                      <div className="image-layouts">
                        <img src={data.image} />
                      </div>
                      <div className="product-name">
                        <p>{data.name}</p>
                        <p className="description">{data.description}</p>
                      </div>
                      <div className="price">
                        <p>${data.price.toLocaleString('en-IN')}</p>
                        <p className="price-text">Price</p>
                      </div>
                    </div>
                    <ViewButton>view</ViewButton>
                  </ProductBox>
                ))}
              </ScrollContainer>
            </ProductContainer>
            <ShowAllProduct>
              <p>All Products</p>
            </ShowAllProduct>
          </ProductListSection>
        </LeftContent>
        <RightContent>
          <GoodSaleChart />
          <UsageChart />
        </RightContent>
      </Flex>
      <Flex>
        <LeftContent style={{ width: '30%' }}>
          <SatisfactionChart />
        </LeftContent>
        <RightContent style={{ width: '70%' }}>
          <ProgressChart />
        </RightContent>
      </Flex>
    </>
  );
};

export default SaleDetail;

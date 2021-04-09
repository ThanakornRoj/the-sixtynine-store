import React from "react";

import {
  ContentContainer,
  Flex,
  LeftContent,
  ProductListSection,
  RightContent,
  SalesBox,
  SalesSection,
  ShowAllProduct,
} from "./style";

import GoodSaleChart from "../goodSaleChart";
import SatisfactionChart from "../satisfactionChart";
import SaleLists from "../productSaleLists";

const SaleDetail = () => {
  const salesData = [
    {
      text: "products",
      number: 1000,
    },
    {
      text: "sales",
      number: 3000,
    },
    {
      text: "cost",
      number: 4000,
    },
    {
      text: "text",
      number: 5000,
    },
  ];

  return (
    <ContentContainer>
      <SalesSection>
        {salesData.map((data) => (
          <SalesBox>
            <div style={{ textAlign: "center" }}>
              <p className="number-data">
                ${data.number.toLocaleString("en-IN")}
              </p>
              <p>{data.text}</p>
            </div>
          </SalesBox>
        ))}
      </SalesSection>
      <ProductListSection>
        <SaleLists />
        <ShowAllProduct>
          <p>All Products</p>
        </ShowAllProduct>
      </ProductListSection>
      <Flex>
        <LeftContent>
          <GoodSaleChart />
        </LeftContent>
        <RightContent>
          <SatisfactionChart />
        </RightContent>
      </Flex>
    </ContentContainer>
  );
};

export default SaleDetail;

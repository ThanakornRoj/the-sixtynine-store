import React from "react";

import { SalesBox, SalesSection } from "./style";

const SaleDetail = () => {
  const salesData = [
    {
      text: "total sales",
      number: 983000,
    },
    {
      text: "transactions",
      number: 841000,
    },
    {
      text: "gross profit",
      number: 647000,
    },
    {
      text: "Revenue",
      number: 581000,
    },
    {
      text: "orders",
      number: 35669,
    },
    {
      text: "wish list item",
      number: 2469,
    },
    {
      text: "total visit",
      number: 647000,
    },
    {
      text: "cart abandonment",
      number: 581000,
    },
  ];

  return (
    <>
      <SalesSection>
        {salesData.map((data, index) => {
          if (index <= 3) {
            return (
              <SalesBox>
                <div style={{ textAlign: "center" }}>
                  <p className="number-data">
                    ${data.number.toLocaleString("en-US")}
                  </p>
                  <p>{data.text}</p>
                </div>
              </SalesBox>
            );
          } else {
            return (
              <SalesBox>
                <div style={{ textAlign: "center" }}>
                  <p className="number-data">
                    {data.number.toLocaleString("en-US")}
                  </p>
                  <p>{data.text}</p>
                </div>
              </SalesBox>
            );
          }
        })}
      </SalesSection>
    </>
  );
};

export default SaleDetail;

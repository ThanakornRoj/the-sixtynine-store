import React, { useState } from "react";
import { DatePicker, Tabs, Radio } from "antd";
import moment from "moment";

import {
  Container,
  HeaderSection,
  ButtonFilter,
  SalesSection,
  SalesBox,
  MenuContainer,
} from "./style";

import MainLayout from "../../../layouts/mainLayout";
import Header from "../../../components/header";
import AllTable from "./allTable";
import PaymentTable from "./paymentTable";
import ToShipTable from "./toShipTable";
import ShippedTable from "./shippedTable";
import DeliveredTable from "./deliveredTable";
import CancelTable from "./cancelTable";
import RefundTable from "./refundTable";

const { TabPane } = Tabs;

const OrderManagement = () => {
  const [renderOrder, setRenderOrder] = useState("all");
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

  const OnChange = (e) => {
    setRenderOrder(e.target.value);
  };

  const callBack = (key) => {
    console.log(key);
  };

  const salesData = [
    {
      text: "All Order",
      number: 285,
    },
    {
      text: "pending Payment",
      number: 80,
    },
    {
      text: "To Process Shipment",
      number: 50,
    },
    {
      text: "In Process Shipment",
      number: 47,
    },
    {
      text: "Completed Delivery",
      number: 96,
    },
    {
      text: "canceled",
      number: 4,
    },
    {
      text: "return/refund",
      number: 8,
    },
    {
      text: "sold out product",
      number: 15,
    },
  ];

  const MenuTab = [
    {
      menu: "all",
      key: "all",
      component: <AllTable />,
      count: 285,
    },
    {
      menu: "pending payment",
      key: "payment",
      component: <PaymentTable />,
      count: 80,
    },
    {
      menu: "to ship",
      key: "shipping",
      component: <ToShipTable />,
      count: 50,
    },
    {
      menu: "shipped",
      key: "shipped",
      component: <ShippedTable />,
      count: 47,
    },
    {
      menu: "delivered",
      key: "delivered",
      component: <DeliveredTable />,
      count: 96,
    },
    {
      menu: "canceled",
      key: "cancel",
      component: <CancelTable />,
      count: 4,
    },
    {
      menu: "return/refund",
      key: "refund",
      component: <RefundTable />,
      count: 8,
    },
  ];

  return (
    <MainLayout>
      <HeaderSection>
        <Header text="Order Management" />
        <ButtonFilter>
          <DatePicker
            defaultValue={moment("01/01/2021", dateFormatList[0])}
            format={dateFormatList}
          />

          <Radio.Group defaultValue="all" style={{ marginLeft: "15px" }}>
            <Radio.Button value="day" onChange={OnChange}>
              Day
            </Radio.Button>
            <Radio.Button value="week" onChange={OnChange}>
              Week
            </Radio.Button>
            <Radio.Button value="month" onChange={OnChange}>
              Month
            </Radio.Button>
            <Radio.Button value="all" onChange={OnChange}>
              All
            </Radio.Button>
          </Radio.Group>
        </ButtonFilter>
      </HeaderSection>
      <Container>
        <SalesSection>
          {salesData.map((data) => (
            <SalesBox>
              <div style={{ textAlign: "center" }}>
                <p className="number-data">
                  {data.number.toLocaleString("en-IN")}
                </p>
                <p>{data.text}</p>
              </div>
            </SalesBox>
          ))}
        </SalesSection>

        <MenuContainer defaultActiveKey="All" onChange={callBack}>
          {MenuTab.map((menu, index) => (
            <TabPane
              tab={
                <>
                  <span>{menu.menu}</span>
                  <span style={{ marginLeft: "5px" }}>{menu.count}</span>
                </>
              }
              key={menu.key}
            >
              {menu.component}
            </TabPane>
          ))}
        </MenuContainer>
      </Container>
    </MainLayout>
  );
};

export default OrderManagement;

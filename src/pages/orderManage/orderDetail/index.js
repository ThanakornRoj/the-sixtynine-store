import React from "react";

import {
  ContentContainer,
  DoneButton,
  HeaderSection,
  OrderNumber,
  ResultContainer,
  ResultSection,
} from "./style";

import MainLayout from "../../../layouts/mainLayout";
import Header from "../../../components/header";
import { Col, Divider, Table } from "antd";

const OrderDetail = () => {
  var number = 20000.78;
  const renderNumber = (number) => {
    return <span style={{ marginLeft: "10px" }}>{number}</span>;
  };

  const renderNumberFormat = (number) => {
    return <span>{number.toLocaleString()}</span>;
  };

  const renderTotalPrice = (price, result) => {
    return (
      <p
        style={
          result
            ? {
                marginBottom: 0,
                textAlign: "right",
                paddingRight: "29px",
                fontWeight: "700",
              }
            : { marginBottom: 0, textAlign: "right", paddingRight: "29px" }
        }
      >
        {price.toLocaleString()}
      </p>
    );
  };

  const dataSource = [
    {
      key: "1",
      number: renderNumber(1),
      id: "UA33567",
      name: "สินค้า 1",
      quantity: 20,
      price: renderNumberFormat(123456.67),
      discount: "-",
      total: renderTotalPrice(123456.67),
    },
    {
      key: "2",
      number: renderNumber(2),
      id: "UA33567",
      name: "สินค้า 2",
      quantity: 5,
      price: renderNumberFormat(2500.89),
      discount: "-",
      total: renderTotalPrice(2500.89),
    },
    {
      key: "3",
      number: renderNumber(2),
      id: "UA33567",
      name: "สินค้า 3",
      quantity: 7,
      price: renderNumberFormat(17500.43),
      discount: "-",
      total: renderTotalPrice(17500.43),
    },
    {
      key: "4",
      number: renderNumber(4),
      id: "UA33567",
      name: "สินค้า 4",
      quantity: 5,
      price: renderNumberFormat(2500.89),
      discount: "-",
      total: renderTotalPrice(2500.89),
    },
    {
      total: renderTotalPrice(200000.99, true),
    },
  ];

  const columns = [
    {
      title: null,
      dataIndex: "number",
    },
    {
      title: "Product ID",
      dataIndex: "id",
      width: "10%",
    },
    {
      title: "Name",
      dataIndex: "name",

      width: "30%",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
    },
    {
      title: "Price/Unit",
      dataIndex: "price",
    },
    {
      title: "Discount",
      dataIndex: "discount",
    },
    {
      title: "ToTal",
      dataIndex: "total",
    },
  ];

  return (
    <MainLayout>
      <HeaderSection>
        <Header text="Order Detail" />
        <div>
          <OrderNumber>
            <Col className="text-header" span={9}>
              คำสั่งซื้อ
            </Col>
            <Col
              className="text-header"
              style={{ marginLeft: "32px" }}
              span={9}
            >
              6UA38405
            </Col>
          </OrderNumber>
          <OrderNumber style={{ marginRight: 0 }}>
            <Col className="text-order-number" span={9}>
              status:
            </Col>
            <Col
              className="text-order-number"
              style={{ marginLeft: "32px" }}
              span={10}
            >
              จัดส่งเร็จ
            </Col>
          </OrderNumber>
        </div>
      </HeaderSection>
      <ContentContainer>
        <Table dataSource={dataSource} columns={columns} pagination={false} />
        <ResultContainer>
          <ResultSection size={32} align="end" direction="vertical">
            <div className="flex">
              <p>shipping price</p>
              <p>0.00</p>
            </div>
            <div className="flex">
              <p>discount coupon</p>
              <p>0.00</p>
            </div>
            <div className="flex">
              <p>total</p>
              <p>{number.toLocaleString()}</p>
            </div>
          </ResultSection>

          <Divider />
          <Divider />
        </ResultContainer>
        <div className="button-contain">
          <DoneButton>Done</DoneButton>
        </div>
      </ContentContainer>
    </MainLayout>
  );
};

export default OrderDetail;

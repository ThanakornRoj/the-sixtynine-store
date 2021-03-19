import React, { useState } from "react";
import { Table, Select, Modal, Tag } from "antd";
import { Link } from "react-router-dom";

import {
  Container,
  EditButton,
  HeaderSection,
  AddProduct,
  CategoryTag,
  ButtonContainer,
  ProductHeader,
  ModalContainer,
  LeftContent,
  RightContent,
  ConfirmButton,
  CancelButton,
} from "./style";

import MainLayout from "../../../layouts/mainLayout";
import HeaderDashBoard from "../../../components/header";
import ProductMock from "../../../images/manage-product-image.png";

const ProductLists = () => {
  const data = [];
  const [isModalVisibleInfo, setIsModalVisibleInfo] = useState(false);
  const [isModalVisibleDel, setIsModalVisibleDel] = useState(false);

  const showModalInfo = () => {
    setIsModalVisibleInfo(true);
  };

  const handleCancelInfo = () => {
    setIsModalVisibleInfo(false);
  };

  const showModalDel = () => {
    setIsModalVisibleDel(true);
  };

  const handleCancelDel = () => {
    setIsModalVisibleDel(false);
  };

  const columns = [
    {
      title: "Id Item",
      dataIndex: "id",
      sorter: {
        compare: (a, b) => a.id - b.id,
        multiple: 1,
      },
      width: "25%",
    },
    {
      title: "Name",
      dataIndex: "name",
      width: "25%",
    },
    {
      title: "Category",
      dataIndex: "category",

      width: "25%",
    },
    {
      title: "Action",
      dataIndex: "action",
      width: "25%",
    },
  ];

  const Stock = [
    {
      category: "เครื่องเซิฟเวอร์",
      stock: 21,
    },
    {
      category: "เครื่องกระจายสัญญาณ",
      stock: 32,
    },
    {
      category: "จอมอนิเตอร์",
      stock: 105,
    },
    {
      category: "CPU",
      stock: 45,
    },
    {
      category: "อุปกรณ์เสริม",
      stock: 26,
    },
  ];

  const renderModalInfo = () => {
    return (
      <Modal
        title={null}
        footer={null}
        visible={isModalVisibleInfo}
        onCancel={handleCancelInfo}
        centered
      >
        <ProductHeader>ข้อมูลสินค้า</ProductHeader>
        <ModalContainer>
          <LeftContent>
            <img src={ProductMock} alt="" />
          </LeftContent>
          <RightContent>
            <p style={{ marginBottom: "48px" }}>
              ID ITEM <span style={{ marginLeft: "46px" }}>UA44596</span>
            </p>
            <p style={{ marginBottom: "48px" }}>
              NAME <span style={{ marginLeft: "56px" }}>UA44596</span>
            </p>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "0",
              }}
            >
              CATEGORY <span className="tag">เครื่องกระจายสัญญาณ</span>
            </p>
          </RightContent>
        </ModalContainer>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ConfirmButton>แก้ไข</ConfirmButton>
          <CancelButton onClick={() => setIsModalVisibleDel(false)}>
            ยกเลิก
          </CancelButton>
        </div>
      </Modal>
    );
  };

  const renderModalDel = () => {
    return (
      <Modal
        title={null}
        footer={null}
        visible={isModalVisibleDel}
        onCancel={handleCancelDel}
        centered
      >
        <ProductHeader>ลบสินค้าชิ้นนี้</ProductHeader>
        <ModalContainer>
          <LeftContent>
            <img src={ProductMock} alt="" />
          </LeftContent>
          <RightContent>
            <p style={{ marginBottom: "48px" }}>
              ID ITEM <span style={{ marginLeft: "46px" }}>UA44596</span>
            </p>
            <p style={{ marginBottom: "48px" }}>
              NAME <span style={{ marginLeft: "56px" }}>UA44596</span>
            </p>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "0",
              }}
            >
              CATEGORY <span className="tag">เครื่องกระจายสัญญาณ</span>
            </p>
          </RightContent>
        </ModalContainer>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ConfirmButton>ยืนยัน</ConfirmButton>
          <CancelButton onClick={() => setIsModalVisibleDel(false)}>
            ยกเลิก
          </CancelButton>
        </div>
      </Modal>
    );
  };

  const renderButton = () => {
    return (
      <ButtonContainer>
        <Link to="/edit-product">
          <EditButton>Edit</EditButton>
        </Link>
        <div
          onClick={showModalInfo}
          style={{ cursor: "pointer", marginRight: "15px" }}
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="10" cy="10" r="9.5" stroke="currentColor" />
            <path
              d="M10.216 8.028C10.936 8.028 11.248 7.656 11.248 7.152V6.888C11.248 6.384 10.936 6.012 10.216 6.012C9.496 6.012 9.184 6.384 9.184 6.888V7.152C9.184 7.656 9.496 8.028 10.216 8.028ZM9.328 15H11.104V8.7H9.328V15Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div onClick={showModalDel} style={{ cursor: "pointer" }}>
          <svg
            width="22"
            height="25"
            viewBox="0 0 17 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.9 11.9286V15.7857M5.1 4.21429V2.28571C5.1 1.94472 5.2194 1.6177 5.43195 1.37658C5.64449 1.13546 5.93275 1 6.23333 1H10.7667C11.0672 1 11.3555 1.13546 11.5681 1.37658C11.7806 1.6177 11.9 1.94472 11.9 2.28571V4.21429H5.1ZM0 4.85714H17H0ZM1.7 4.85714V17.7143C1.7 18.0553 1.8194 18.3823 2.03195 18.6234C2.24449 18.8645 2.53275 19 2.83333 19H14.1667C14.4672 19 14.7555 18.8645 14.9681 18.6234C15.1806 18.3823 15.3 18.0553 15.3 17.7143V4.85714H1.7ZM8.5 9.35714V15.7857V9.35714ZM5.1 11.9286V15.7857V11.9286Z"
              stroke="currentColor"
            />
          </svg>
        </div>
      </ButtonContainer>
    );
  };

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  for (let i = 0; i < 50; i++) {
    data.push({
      key: i,
      id: `UA${33567 + i}`,
      name: `สินค้าที่ ${i}`,
      category: (
        <Tag color="#fdf0eb" style={{ color: "#fd5c28", borderRadius: "5px" }}>
          เครื่องกระจายสัญญาณ
        </Tag>
      ),
      action: renderButton(),
    });
  }

  return (
    <>
      <MainLayout>
        <HeaderDashBoard text="Product Lists" style={{ padding: "0 32px" }} />

        <Container>
          <HeaderSection>
            <Link to="/add-product">
              <AddProduct>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="5"
                    width="12"
                    height="2"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="7"
                    width="12"
                    height="2"
                    rx="1"
                    transform="rotate(90 7 0)"
                    fill="currentColor"
                  />
                </svg>
                <p>Add Product</p>
              </AddProduct>
            </Link>
          </HeaderSection>
          <Table columns={columns} dataSource={data} onChange={onChange} />
        </Container>
      </MainLayout>

      {renderModalInfo()}
      {renderModalDel()}
    </>
  );
};

export default ProductLists;

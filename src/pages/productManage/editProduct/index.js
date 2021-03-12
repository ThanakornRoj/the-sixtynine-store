import React from "react";
import { Input, Select } from "antd";

import {
  Container,
  ContentContainer,
  Flex,
  InputHeader,
  Left,
  Right,
  StyleInput,
  StyleSelect,
  StyledModal,
  AddProductButton,
  UploadProductImage,
  ButtonContainer,
  BackButton,
  SaveButton,
} from "./style";

import MainLayout from "../../../layouts/mainLayout";
import Header from "../../../components/header";
import Uploader from "../../../components/uploader";

const { TextArea } = Input;
const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const EditProduct = () => {
  const Group = [
    {
      value: "new",
      group: "new product",
    },
    {
      value: "promotion",
      group: "promotion",
    },
    {
      value: "sales",
      group: "to sales",
    },
  ];

  const Category = [
    {
      value: "monitor",
      category: "จอมอนิเตอร์",
    },
    {
      value: "router",
      category: "เครื่องกระจายสัญญาณ",
    },
    {
      value: "sound",
      category: "เครื่องกระจายเสียง",
    },
    {
      value: "server",
      category: "เครื่องเซิฟเวอร์",
    },
    {
      value: "cpu",
      category: "ซีพียู",
    },
    {
      value: "hdd",
      category: "อุปกรณ์จัดเก็บข้อมูล",
    },
    {
      value: "connect",
      category: "อุปกรณ์เชื่อมต่อ",
    },
    {
      value: "gadget",
      category: "อุปกรณ์เสริม",
    },
  ];
  return (
    <MainLayout>
      <Container>
        <Header text="EDIT PRODUCT" />
        <ContentContainer>
          <Flex>
            <Left>
              <div className="form-row">
                <InputHeader>Product Name</InputHeader>
                <StyleInput />
              </div>
              <Flex className="form-row">
                <Left>
                  <InputHeader>Add To Group เพิ่มเข้ากลุ่ม</InputHeader>
                  <StyleSelect style={{ width: "100%" }}>
                    {Group.map((text) => (
                      <Option value={text.value}>{text.group}</Option>
                    ))}
                  </StyleSelect>
                </Left>
                <Right>
                  <InputHeader>Category หมวดหมู่</InputHeader>
                  <StyleSelect style={{ width: "100%" }}>
                    {Category.map((text) => (
                      <Option value={text.value}>{text.category}</Option>
                    ))}
                  </StyleSelect>
                </Right>
              </Flex>
              <div className="form-row">
                <InputHeader>Description รายระเอียด</InputHeader>
                <TextArea rows={7} />
              </div>
            </Left>
            <Right>
              <div className="form-row">
                <InputHeader>Model Info ข้อมูลรุ่น </InputHeader>
                <StyleInput />
              </div>
              <Flex className="form-row">
                <Left>
                  <InputHeader>Add To Group เพิ่มเข้ากลุ่ม</InputHeader>
                  <StyleInput />
                </Left>
                <Right>
                  <InputHeader>Category หมวดหมู่</InputHeader>
                  <StyleInput />
                </Right>
              </Flex>
              <div className="form-row">
                <InputHeader>Option ตัวเลือก</InputHeader>
                <div className="form-col" style={{ marginBottom: "24px" }}>
                  <InputHeader
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      width: "112px",
                      marginRight: "30px",
                      marginBottom: "0",
                    }}
                  >
                    ชื่อประเภทตัวเลือก
                  </InputHeader>
                  <StyleInput />
                </div>
                <div className="form-col" style={{ marginBottom: "24px" }}>
                  <InputHeader
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      width: "110px",
                      marginRight: "32px",
                      marginBottom: "0",
                    }}
                  >
                    ตัวเลือก
                  </InputHeader>
                  <StyleInput />
                </div>
                <div className="form-col">
                  <AddProductButton>
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
                    <p>Add More Option</p>
                  </AddProductButton>
                </div>
              </div>
            </Right>
          </Flex>
          <div>
            <InputHeader>Pictures ภาพสินค้า</InputHeader>
            <UploadProductImage size={32}>
              <Uploader />
              <Uploader />
              <Uploader />
              <Uploader />
              <Uploader />
            </UploadProductImage>
          </div>
          <ButtonContainer>
            <BackButton>Back</BackButton>
            <SaveButton>Save</SaveButton>
          </ButtonContainer>
        </ContentContainer>
      </Container>
    </MainLayout>
  );
};

export default EditProduct;

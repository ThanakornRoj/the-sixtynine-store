import React from "react";
import { Input, Select } from "antd";

import {
  Container,
  ContentContainer,
  Content,
  Flex,
  InputHeader,
  Left,
  Right,
  StyleInput,
  StyleSelect,
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

const AddProduct = () => {
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
        <Header text="ADD PRODUCT" />
        <ContentContainer>
          <Content>
            <div className="form-row">
              <InputHeader>Product Name</InputHeader>
              <StyleInput />
            </div>
            <div className="form-row">
              <InputHeader>Model Info ข้อมูลรุ่น</InputHeader>
              <StyleInput />
            </div>
            <Flex className="form-row">
              <Left>
                <InputHeader>Price ราคา</InputHeader>
                <StyleInput />
              </Left>
              <Right>
                <InputHeader>Inventory จำนวนสินค้าในคลัง</InputHeader>
                <StyleInput />
              </Right>
            </Flex>
            <Flex className="form-row">
              <Left>
                <InputHeader>Add To Group เพิ่มเข้ากลุ่ม</InputHeader>
                <StyleSelect style={{ width: "100%" }} placeholder="GROUP">
                  {Group.map((text) => (
                    <Option value={text.value}>{text.group}</Option>
                  ))}
                </StyleSelect>
              </Left>
              <Right>
                <InputHeader>Category หมวดหมู่</InputHeader>
                <StyleSelect style={{ width: "100%" }} placeholder="CATEGORY">
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
          </Content>

          <ButtonContainer>
            <BackButton>Back</BackButton>
            <SaveButton>Save</SaveButton>
          </ButtonContainer>
        </ContentContainer>
      </Container>
    </MainLayout>
  );
};

export default AddProduct;

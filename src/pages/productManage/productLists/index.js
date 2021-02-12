import React, { useState } from "react";
import { Table, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import {
  Container,
  DetailButton,
  HeaderSection,
  DeleteButton,
  CategoryButton,
  AddProduct,
  Flex,
  LeftContent,
  RightContent,
  CategoriesBox,
  ContentContainer,
  DeleteCategory,
  NewCategory,
  CancelButton,
} from "./style";

import MainLayout from "../../../layouts/mainLayout";
import HeaderDashBoard from "../../../components/header";
import BoxHeader from "../../../components/boxHeader";
import Delete from "../../../icons/del.svg";

const ProductLists = () => {
  const [deleteCategories, setDeleteCategories] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const rowSelection = {
    selectedRowKeys,
    onChange: setSelectedRowKeys,
  };

  const handleDeleteCategories = () => {
    setDeleteCategories(true);
  };

  const columns = [
    {
      title: "Id Item",
      dataIndex: "id",
      sorter: {
        compare: (a, b) => a.id - b.id,
        multiple: 1,
      },
      width: "20%",
    },
    {
      title: "Name",
      dataIndex: "name",
      width: "40%",
    },
    {
      title: "Category",
      dataIndex: "category",

      width: "20%",
    },
    {
      title: "Action",
      dataIndex: "action",
      width: "20%",
    },
  ];

  const data = [];
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

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  for (let i = 0; i < 50; i++) {
    data.push({
      key: i,
      id: `UA${33567 + i}`,
      name: `สินค้าที่ ${i}`,
      category: "เครื่องเซิฟเวอร์",
      action: <DetailButton>Detail</DetailButton>,
    });
  }

  return (
    <MainLayout>
      <HeaderDashBoard text="Product Lists" />

      <Container>
        <Flex>
          <LeftContent>
            <HeaderSection>
              <div>
                {selectedRowKeys.length === 0 ? (
                  <DeleteButton disabled>Delete</DeleteButton>
                ) : (
                  <DeleteButton>Delete</DeleteButton>
                )}
                {selectedRowKeys.length === 0 ? (
                  <CategoryButton disabled>Category</CategoryButton>
                ) : (
                  <CategoryButton>Category</CategoryButton>
                )}
              </div>
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
            </HeaderSection>
            <Table
              rowSelection={rowSelection}
              columns={columns}
              dataSource={data}
              onChange={onChange}
            />
          </LeftContent>
          <RightContent>
            <BoxHeader text="Categories" />
            <ContentContainer>
              {Stock.map((data) => (
                <CategoriesBox>
                  {deleteCategories ? <img src={Delete} alt="" /> : null}
                  <p>
                    {data.category} <span>({data.stock})</span>
                  </p>
                </CategoriesBox>
              ))}

              <div style={{ marginTop: "16px" }}>
                {deleteCategories ? (
                  <CancelButton onClick={() => setDeleteCategories(false)}>
                    cancel
                  </CancelButton>
                ) : (
                  <DeleteCategory onClick={handleDeleteCategories}>
                    Delete categories
                  </DeleteCategory>
                )}
                {deleteCategories ? null : (
                  <NewCategory>
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
                    <p>NEW CATAGORY</p>
                  </NewCategory>
                )}
              </div>
            </ContentContainer>
          </RightContent>
        </Flex>
      </Container>
    </MainLayout>
  );
};

export default ProductLists;

import React, { useState } from "react";
import { Space, Table, Tag } from "antd";

import {
  ContentContainer,
  HeaderSection,
  UploadBanner,
  EditButton,
} from "./style";

import MainLayout from "../../../layouts/mainLayout";
import Header from "../../../components/header";
import DeleteModal from "./deleteModal";
import AddModal from "./addModal";
import EditModal from "./editModal";

const Category = () => {
  const data = [];
  const categoryList = [
    "เครื่องเซิฟเวอร์",
    "เครื่องกระจายเสียง",
    "อุปกรณ์เชื่อมต่อ",
    "จอมอนิเตอร์",
    "อุปกรณ์จัดเก็บข้อมูล",
    "เครื่องเซิฟเวอร์",
    "อุปกรณ์เสริม",
    "เครื่องกระจายสัญญาณ",
    "จอมอนิเตอร์",
  ];
  const [modalDelVisible, setModalDelVisible] = useState(false);
  const [modalAddVisible, setModalAddVisible] = useState(false);
  const [modalEditVisible, setModalEditVisible] = useState(false);

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const handleModalDel = () => {
    setModalDelVisible(true);
  };

  const handleModalAdd = () => {
    setModalAddVisible(true);
  };

  const handleModalEdit = () => {
    setModalEditVisible(true);
  };

  const columns = [
    {
      title: "Category",
      dataIndex: "category",
      sorter: {
        compare: (a, b) => a.id - b.id,
        multiple: 1,
      },
      width: "75%",
    },
    {
      title: "Action",
      dataIndex: "action",
      width: "25%",
    },
  ];

  const renderAction = () => {
    return (
      <Space size={15}>
        <EditButton onClick={handleModalEdit}>Edit</EditButton>
        <svg
          width="23"
          height="23"
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
        <svg
          width="20"
          height="23"
          viewBox="0 0 17 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleModalDel}
        >
          <path
            d="M11.9 11.9286V15.7857M5.1 4.21429V2.28571C5.1 1.94472 5.2194 1.6177 5.43195 1.37658C5.64449 1.13546 5.93275 1 6.23333 1H10.7667C11.0672 1 11.3555 1.13546 11.5681 1.37658C11.7806 1.6177 11.9 1.94472 11.9 2.28571V4.21429H5.1ZM0 4.85714H17H0ZM1.7 4.85714V17.7143C1.7 18.0553 1.8194 18.3823 2.03195 18.6234C2.24449 18.8645 2.53275 19 2.83333 19H14.1667C14.4672 19 14.7555 18.8645 14.9681 18.6234C15.1806 18.3823 15.3 18.0553 15.3 17.7143V4.85714H1.7ZM8.5 9.35714V15.7857V9.35714ZM5.1 11.9286V15.7857V11.9286Z"
            stroke="currentColor"
          />
        </svg>
      </Space>
    );
  };

  for (let i = 0; i < categoryList.length; i++) {
    data.push({
      key: i,
      category: <Tag style={{ marginLeft: "15px" }}>{categoryList[i]}</Tag>,
      action: renderAction(),
    });
  }

  return (
    <MainLayout>
      <HeaderSection>
        <Header text="Category" />
        <div className="button-align">
          <UploadBanner onClick={handleModalAdd}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="5" width="12" height="2" rx="1" fill="currentColor" />
              <rect
                x="7"
                width="12"
                height="2"
                rx="1"
                transform="rotate(90 7 0)"
                fill="currentColor"
              />
            </svg>
            <p>add new category</p>
          </UploadBanner>
        </div>
      </HeaderSection>
      <ContentContainer>
        <Table columns={columns} dataSource={data} onChange={onChange} />
      </ContentContainer>

      <DeleteModal
        visible={modalDelVisible}
        onCancel={() => setModalDelVisible(false)}
      />

      <AddModal
        visible={modalAddVisible}
        onCancel={() => setModalAddVisible(false)}
      />

      <EditModal
        visible={modalEditVisible}
        onCancel={() => setModalEditVisible(false)}
      />
    </MainLayout>
  );
};

export default Category;

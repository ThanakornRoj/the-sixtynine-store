import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Table, Space } from "antd";

import {
  ButtonContainer,
  Container,
  CreateNewButton,
  HeaderSection,
  ViewButton,
  StyleModal,
  ConfirmButton,
  CancelButton,
} from "./style";

import MainLayout from "../../../layouts/mainLayout";
import Header from "../../../components/header";

const BlogManage = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const columns = [
    {
      title: "Date Modified",
      dataIndex: "date",
      sorter: {
        compare: (a, b) => a.id - b.id,
        multiple: 1,
      },
      width: "25%",
    },
    {
      title: "Blog",
      dataIndex: "blog",
      width: "55%",
    },
    {
      title: "Action",
      dataIndex: "action",
      width: "20%",
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const handleModal = () => {
    setModalVisible(true);
  };

  const renderDate = () => {
    return (
      <div style={{ paddingLeft: "15px" }}>
        <span style={{ marginRight: "24px" }}>21-02-28</span>
        <span>12:00:59</span>
      </div>
    );
  };

  const renderButton = () => {
    return (
      <Space size={15}>
        <ViewButton>View</ViewButton>

        <Link to="/blog-manage/edit-blog" style={{ color: "#333333" }}>
          <svg
            width="22"
            height="21"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.9697 2.12336L14.383 0.717908L14.3842 0.716752C14.5462 0.554722 14.8073 0.571213 14.9347 0.705445L14.9401 0.711171L14.9457 0.716752L17.2857 3.05643L17.2913 3.06201L17.297 3.06744C17.4311 3.19459 17.4477 3.45501 17.2863 3.61704C17.2861 3.61724 17.2859 3.61744 17.2857 3.61765L15.8711 5.02437L12.9697 2.12336ZM3.50133 17.4H0.6V14.4989L11.0602 4.03072L13.9616 6.93173L3.50133 17.4Z"
              stroke="currentColor"
              stroke-width="1.2"
            />
          </svg>
        </Link>

        <svg
          width="20"
          height="23"
          viewBox="0 0 17 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleModal}
        >
          <path
            d="M11.9 11.9286V15.7857M5.1 4.21429V2.28571C5.1 1.94472 5.2194 1.6177 5.43195 1.37658C5.64449 1.13546 5.93275 1 6.23333 1H10.7667C11.0672 1 11.3555 1.13546 11.5681 1.37658C11.7806 1.6177 11.9 1.94472 11.9 2.28571V4.21429H5.1ZM0 4.85714H17H0ZM1.7 4.85714V17.7143C1.7 18.0553 1.8194 18.3823 2.03195 18.6234C2.24449 18.8645 2.53275 19 2.83333 19H14.1667C14.4672 19 14.7555 18.8645 14.9681 18.6234C15.1806 18.3823 15.3 18.0553 15.3 17.7143V4.85714H1.7ZM8.5 9.35714V15.7857V9.35714ZM5.1 11.9286V15.7857V11.9286Z"
            stroke="currentColor"
          />
        </svg>
      </Space>
    );
  };

  const renderConfirmModal = () => {
    return (
      <StyleModal
        header={null}
        footer={null}
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
      >
        <div className="content-contain">
          <h1 className="header">ยืนยันการลบ</h1>
          <p className="description">กดปุ่มยืนยันเพื่อลบหน้า “contact”</p>
          <div className="button-contain">
            <ConfirmButton onClick={() => setModalVisible(false)}>
              ยืนยัน
            </ConfirmButton>
            <CancelButton onClick={() => setModalVisible(false)}>
              ยกเลิก
            </CancelButton>
          </div>
        </div>
      </StyleModal>
    );
  };

  const data = [
    {
      key: 1,
      date: renderDate(),
      blog: "lorem Ipsum",
      action: renderButton(),
    },
    {
      key: 2,
      date: renderDate(),
      blog: "lorem Ipsum",
      action: renderButton(),
    },
    {
      key: 3,
      date: renderDate(),
      blog: "lorem Ipsum",
      action: renderButton(),
    },
    {
      key: 4,
      date: renderDate(),
      blog: "lorem Ipsum",
      action: renderButton(),
    },
    {
      key: 5,
      date: renderDate(),
      blog: "lorem Ipsum",
      action: renderButton(),
    },
    {
      key: 6,
      date: renderDate(),
      blog: "lorem Ipsum",
      action: renderButton(),
    },
    {
      key: 7,
      date: renderDate(),
      blog: "lorem Ipsum",
      action: renderButton(),
    },
    {
      key: 8,
      date: renderDate(),
      blog: "lorem Ipsum",
      action: renderButton(),
    },
    {
      key: 9,
      date: renderDate(),
      blog: "lorem Ipsum",
      action: renderButton(),
    },
    {
      key: 10,
      date: renderDate(),
      blog: "lorem Ipsum",
      action: renderButton(),
    },
  ];

  return (
    <>
      <MainLayout>
        <HeaderSection>
          <Header text="Blog" />
        </HeaderSection>
        <ButtonContainer>
          <Link to="/blog-manage/add-blog">
            <CreateNewButton>
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

              <p>create new blog</p>
            </CreateNewButton>
          </Link>
        </ButtonContainer>
        <Container>
          <Table columns={columns} dataSource={data} onChange={onChange} />
        </Container>
      </MainLayout>

      {renderConfirmModal()}
    </>
  );
};

export default BlogManage;

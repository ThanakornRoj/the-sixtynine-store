import React, { useState } from "react";
import { Space, Table } from "antd";
import {
  ConfirmButton,
  Container,
  HeaderSection,
  StyleModal,
  ViewButton,
  CancelButton,
} from "./style";

import MainLayout from "../../layouts/mainLayout";
import Header from "../../components/header";

const EditPage = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const columns = [
    {
      title: "PAGE",
      dataIndex: "page",
      sorter: {
        compare: (a, b) => a.id - b.id,
        multiple: 1,
      },
      width: "75%",
    },
    {
      title: "ACTION",
      dataIndex: "action",
      width: "25%",
    },
  ];

  const renderButton = () => {
    return (
      <Space size={15}>
        <ViewButton>View</ViewButton>
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

  const renderCategoryName = (e) => {
    return (
      <span style={{ paddingLeft: "15px", textTransform: "uppercase" }}>
        {e}
      </span>
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

  const handleModal = () => {
    setModalVisible(true);
  };

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const data = [
    {
      key: 1,
      page: renderCategoryName("HomePage"),
      action: renderButton(),
    },
    {
      key: 2,
      page: renderCategoryName("product list"),
      action: renderButton(),
    },
    {
      key: 3,
      page: renderCategoryName("product"),
      action: renderButton(),
    },
    {
      key: 4,
      page: renderCategoryName("account"),
      action: renderButton(),
    },
    {
      key: 5,
      page: renderCategoryName("blog"),
      action: renderButton(),
    },
    {
      key: 6,
      page: renderCategoryName("contact"),
      action: renderButton(),
    },
    {
      key: 7,
      page: renderCategoryName("payment"),
      action: renderButton(),
    },
  ];

  return (
    <>
      <MainLayout>
        <HeaderSection>
          <Header text="Page lists (ALL)" />
        </HeaderSection>
        <Container>
          <Table columns={columns} dataSource={data} onChange={onChange} />
        </Container>
      </MainLayout>

      {renderConfirmModal()}
    </>
  );
};

export default EditPage;

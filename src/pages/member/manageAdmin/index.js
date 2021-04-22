import React, { useState } from "react";
import { Table, Modal, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import {
  Container,
  DetailButton,
  HeaderSection,
  TagContainer,
  StyleInput,
  AssignButton,
  DoneButton,
  ModalContainer,
  ModalHeader,
  Text,
  UserText,
  AdminText,
  ConfirmButton,
  CancelButton,
} from "./style";

import MainLayout from "../../../layouts/mainLayout";
import HeaderDashBoard from "../../../components/header";

const ManageAdmin = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [assignAdmin, setAssignAdmin] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const columns = [
    {
      title: "Id User",
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
      title: "Last Active",
      dataIndex: "time",
      sorter: {
        compare: (a, b) => a.time - b.time,
        multiple: 1,
      },
      width: "25%",
    },
    {
      title: "Action",
      dataIndex: "action",
      width: "25%",
    },
  ];

  const rowSelection = {
    selectedRowKeys,
    onChange: setSelectedRowKeys,
  };

  const handleShowModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleAssignAdmin = () => {
    setAssignAdmin(true);
  };

  const handleConfirmAssignAdmin = () => {
    setAssignAdmin(false);
  };

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const renderId = (status) => {
    if (status === "admin")
      return (
        <span style={{ color: "#fd5c28", paddingLeft: "15px" }}>UA33567</span>
      );
    else
      return (
        <span style={{ color: "#2973ca", paddingLeft: "15px" }}>UA33567</span>
      );
  };

  const renderAction = () => {
    return (
      <Space size={15}>
        <svg
          width="23"
          height="26"
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
        >
          <path
            d="M11.9 11.9286V15.7857M5.1 4.21429V2.28571C5.1 1.94472 5.2194 1.6177 5.43195 1.37658C5.64449 1.13546 5.93275 1 6.23333 1H10.7667C11.0672 1 11.3555 1.13546 11.5681 1.37658C11.7806 1.6177 11.9 1.94472 11.9 2.28571V4.21429H5.1ZM0 4.85714H17H0ZM1.7 4.85714V17.7143C1.7 18.0553 1.8194 18.3823 2.03195 18.6234C2.24449 18.8645 2.53275 19 2.83333 19H14.1667C14.4672 19 14.7555 18.8645 14.9681 18.6234C15.1806 18.3823 15.3 18.0553 15.3 17.7143V4.85714H1.7ZM8.5 9.35714V15.7857V9.35714ZM5.1 11.9286V15.7857V11.9286Z"
            stroke="currentColor"
          />
        </svg>
      </Space>
    );
  };

  const renderUser = (status) => {
    if (status === "admin") {
      return <span style={{ color: "#fd5c28" }}>แอดมิน 1</span>;
    } else return <span style={{ color: "#2973ca" }}>ผู้ใช้งาน</span>;
  };

  const renderTime = (status) => {
    if (status === "admin") {
      return (
        <div style={{ marginLeft: "15px" }}>
          <span>ใช้งานล่าสุดเมื่อ</span>
          <span style={{ marginLeft: "15px" }}>11:20:21</span>
        </div>
      );
    } else {
      return (
        <div style={{ marginLeft: "15px" }}>
          <span>ออนไลน์</span>
        </div>
      );
    }
  };

  const data = [
    {
      key: 1,
      time: renderTime("admin"),
      id: renderId("admin"),
      name: renderUser("admin"),
      action: renderAction(),
    },
    {
      key: 2,
      time: renderTime("admin"),
      id: renderId("admin"),
      name: renderUser("admin"),
      action: renderAction(),
    },
    {
      key: 3,
      time: renderTime(),
      id: renderId("user"),
      name: renderUser("user"),
      action: renderAction(),
    },
    {
      key: 4,
      time: renderTime(),
      id: renderId("user"),
      name: renderUser("user"),
      action: renderAction(),
    },
    {
      key: 5,
      time: renderTime(),
      id: renderId("user"),
      name: renderUser("user"),
      action: renderAction(),
    },
    {
      key: 6,
      time: renderTime(),
      id: renderId("user"),
      name: renderUser("user"),
      action: renderAction(),
    },
    {
      key: 7,
      time: renderTime("admin"),
      id: renderId("admin"),
      name: renderUser("admin"),
      action: renderAction(),
    },
    {
      key: 8,
      time: renderTime(),
      id: renderId("user"),
      name: renderUser("user"),
      action: renderAction(),
    },
    {
      key: 9,
      time: renderTime(),
      id: renderId("user"),
      name: renderUser("user"),
      action: renderAction(),
    },
    {
      key: 10,
      id: renderId("admin"),
      time: renderTime("admin"),
      name: renderUser("admin"),
      action: renderAction(),
    },
  ];

  return (
    <>
      <MainLayout>
        {assignAdmin ? (
          <HeaderDashBoard text="Assign Admin" />
        ) : (
          <HeaderDashBoard text="Manage Admin" />
        )}
        <HeaderSection>
          <TagContainer>
            <div className="admin-tag align-items">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="12" fill="currentColor" />
              </svg>
              Admin
            </div>
            <div className="user-tag align-items">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="12" fill="currentColor" />
              </svg>
              User
            </div>
          </TagContainer>
          <div style={{ display: "flex" }}>
            <StyleInput placeholder="Id User" suffix={<SearchOutlined />} />
            {assignAdmin ? (
              <DoneButton onClick={handleShowModal}>Done</DoneButton>
            ) : (
              <AssignButton onClick={handleAssignAdmin}>
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

                <p>assign admin</p>
              </AssignButton>
            )}
          </div>
        </HeaderSection>
        <Container>
          <div>
            {assignAdmin ? (
              <Table
                rowSelection={rowSelection}
                columns={columns}
                dataSource={data}
                onChange={onChange}
              />
            ) : (
              <Table columns={columns} dataSource={data} onChange={onChange} />
            )}
          </div>
        </Container>
      </MainLayout>

      <Modal
        header={null}
        footer={null}
        visible={modalVisible}
        onCancel={handleCloseModal}
      >
        <ModalContainer>
          <ModalHeader>ยืนยันการให้สิทธิ์</ModalHeader>
          <Text>
            กดปุ่มยืนยันเพื่อเพิ่ม “ผู้ใช้2 [ID:AM22833]” เป็นผู้ดูแลระบบ
          </Text>

          <div className="flex">
            <UserText>User</UserText>
            <Text>To</Text>
            <AdminText>Admin</AdminText>
          </div>

          <div className="flex" style={{ marginTop: "16px" }}>
            <CancelButton onClick={handleCloseModal}>ยกเลิก</CancelButton>
            <ConfirmButton
              onClick={() => {
                handleCloseModal();
                handleConfirmAssignAdmin();
              }}
            >
              ยืนยัน
            </ConfirmButton>
          </div>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default ManageAdmin;

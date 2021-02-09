import React, { useState } from "react";
import { Table, Modal } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import {
  Container,
  DetailButton,
  HeaderSection,
  DeleteButton,
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

  const handlechanage = (value) => {
    console.log(`selected ${value}`);
  };

  const columns = [
    {
      title: "Id User",
      dataIndex: "id",
      sorter: {
        compare: (a, b) => a.id - b.id,
        multiple: 1,
      },
      width: "16%",
    },
    {
      title: "Name",
      dataIndex: "name",
      width: "16%",
    },
    {
      title: "User Level",
      dataIndex: "level",
      sorter: {
        compare: (a, b) => a.level - b.level,
        multiple: 1,
      },
      width: "35%",
    },
    {
      title: "Time Use",
      dataIndex: "time",
      sorter: {
        compare: (a, b) => a.time - b.time,
        multiple: 1,
      },
      width: "16%",
    },
    {
      title: "Action",
      dataIndex: "action",
      width: "16%",
    },
  ];

  const renderUserLevel = (i) => {
    if (i % 2 === 0) {
      return <p style={{ color: "#75BA68", marginBottom: "0" }}>User</p>;
    } else return <p style={{ color: "#FAB300", marginBottom: "0" }}>Admin</p>;
  };

  const data = [];
  if (assignAdmin === true) {
    for (let i = 0; i < 50; i++) {
      data.push({
        key: i,
        id: `UA${33567 + i}`,
        name: `Edward King ${i}`,
        level: renderUserLevel(i),
        time: "12.00 pm",
        action: <DetailButton>Detail</DetailButton>,
      });
    }
  } else {
    for (let i = 0; i < 4; i++) {
      data.push({
        key: i,
        id: `UA${33567 + i}`,
        name: `Edward King ${i}`,
        level: <p style={{ color: "#FAB300", marginBottom: "0" }}>Admin</p>,
        time: "12.00 pm",
        action: <DetailButton>Detail</DetailButton>,
      });
    }
  }

  return (
    <>
      <MainLayout>
        <HeaderDashBoard text="MEMBER Lists" />
        <HeaderSection>
          <div>
            {assignAdmin ? (
              <DeleteButton>ADD</DeleteButton>
            ) : (
              <DeleteButton disabled>Delete</DeleteButton>
            )}
            <StyleInput placeholder="Id User" suffix={<SearchOutlined />} />
          </div>
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

              <p>assign admin</p>
            </AssignButton>
          )}
        </HeaderSection>
        <Container>
          <div>
            <Table
              rowSelection={rowSelection}
              columns={columns}
              dataSource={data}
              onChange={onChange}
            />
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
          <ModalHeader>confirm assign</ModalHeader>
          <Text>
            We're currently working hard building for something awesome and will
            be back .
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

import React from "react";
import { Table, DatePicker, Space } from "antd";
import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";

import {
  Container,
  AddUser,
  HeaderSection,
  StyleInput,
  EditButton,
} from "./style";

import MainLayout from "../../../layouts/mainLayout";
import HeaderDashBoard from "../../../components/header";

const ManageUser = () => {
  const { RangePicker } = DatePicker;
  const columns = [
    {
      title: "Id User",
      dataIndex: "id",
      width: "25%",
    },
    {
      title: "Name",
      dataIndex: "name",
      width: "25%",
    },
    {
      title: "Last Active",
      dataIndex: "active",
      sorter: {
        compare: (a, b) => a.level - b.level,
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

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const renderAction = () => {
    return (
      <Space size={15}>
        <Link to="/user-info">
          <EditButton>Edit</EditButton>
        </Link>
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

  const renderActive = () => {
    return (
      <div>
        ใช้งานล่าสุดเมื่อ
        <span style={{ marginLeft: "10px" }}>11:20:21</span>
      </div>
    );
  };

  const data = [
    {
      id: "UA33567",
      name: "Lorem Ipsum",
      active: "ออนไลน์",
      action: renderAction(),
    },
    {
      id: "UA33567",
      name: "Lorem Ipsum",
      active: "ออนไลน์",
      action: renderAction(),
    },
    {
      id: "UA33567",
      name: "Lorem Ipsum",
      active: "ออนไลน์",
      action: renderAction(),
    },
    {
      id: "UA33567",
      name: "Lorem Ipsum",
      active: "ออนไลน์",
      action: renderAction(),
    },
    {
      id: "UA33567",
      name: "Lorem Ipsum",
      active: renderActive(),
      action: renderAction(),
    },
    {
      id: "UA33567",
      name: "Lorem Ipsum",
      active: renderActive(),
      action: renderAction(),
    },
    {
      id: "UA33567",
      name: "Lorem Ipsum",
      active: renderActive(),
      action: renderAction(),
    },
    {
      id: "UA33567",
      name: "Lorem Ipsum",
      active: renderActive(),
      action: renderAction(),
    },
    {
      id: "UA33567",
      name: "Lorem Ipsum",
      active: renderActive(),
      action: renderAction(),
    },
    {
      id: "UA33567",
      name: "Lorem Ipsum",
      active: renderActive(),
      action: renderAction(),
    },
  ];

  return (
    <MainLayout>
      <HeaderDashBoard text="manage user" />
      <HeaderSection>
        <Link to="/add-user">
          <AddUser>
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
            <span>Add New User</span>
          </AddUser>
        </Link>

        <RangePicker />
        <StyleInput placeholder="Id User" suffix={<SearchOutlined />} />
      </HeaderSection>
      <Container>
        <div>
          <Table columns={columns} dataSource={data} onChange={onChange} />
        </div>
      </Container>
    </MainLayout>
  );
};

export default ManageUser;

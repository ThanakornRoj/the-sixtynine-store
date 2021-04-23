import React from "react";
import { Table, DatePicker, Tag, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import { Container, HeaderSection, StyleInput, TagContainer } from "./style";

import MainLayout from "../../../layouts/mainLayout";
import HeaderDashBoard from "../../../components/header";

const MemberActivity = () => {
  const { RangePicker } = DatePicker;

  const columns = [
    {
      title: "Time",
      dataIndex: "time",
      sorter: {
        compare: (a, b) => a.id - b.id,
        multiple: 1,
      },
      width: "20%",
    },
    {
      title: "User ID",
      dataIndex: "id",
      sorter: {
        compare: (a, b) => a.level - b.level,
        multiple: 1,
      },
      width: "20%",
    },
    {
      title: "Name",
      dataIndex: "name",
      width: "20%",
    },
    {
      title: "History",
      dataIndex: "history",
      render: (tags) => (
        <>
          {tags.map((tags, index) => {
            return (
              <Tag color="orange" key={tags}>
                {tags}
              </Tag>
            );
          })}
        </>
      ),
      width: "20%",
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

  const renderTime = () => {
    return (
      <div style={{ paddingLeft: "15px" }}>
        <span>2021-02-28 </span>
        <span style={{ marginLeft: "25px" }}>12.08</span>
      </div>
    );
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

  const data = [
    {
      time: renderTime(),
      id: renderId("admin"),
      name: renderUser("admin"),
      history: ["ลบสินค้า"],
      action: renderAction(),
    },
    {
      time: renderTime(),
      id: renderId("admin"),
      name: renderUser("admin"),
      history: ["แก้ไขข้อมูลสินค้า"],
      action: renderAction(),
    },
    {
      time: renderTime(),
      id: renderId("user"),
      name: renderUser("user"),
      history: ["อัพโหลดสลิป"],
      action: renderAction(),
    },
    {
      time: renderTime(),
      id: renderId("user"),
      name: renderUser("user"),
      history: ["อัพโหลดใบเสนอราคา"],
      action: renderAction(),
    },
    {
      time: renderTime(),
      id: renderId("user"),
      name: renderUser("user"),
      history: ["ยกเลิกคำสั่งซื้อ"],
      action: renderAction(),
    },
    {
      time: renderTime(),
      id: renderId("user"),
      name: renderUser("user"),
      history: ["อัพโหลดสลิป"],
      action: renderAction(),
    },
    {
      time: renderTime(),
      id: renderId("admin"),
      name: renderUser("admin"),
      history: ["แก้ไขข้อมูลสินค้า"],
      action: renderAction(),
    },
    {
      time: renderTime(),
      id: renderId("user"),
      name: renderUser("user"),
      history: ["อัพโหลดสลิป"],
      action: renderAction(),
    },
    {
      time: renderTime(),
      id: renderId("user"),
      name: renderUser("user"),
      history: ["อัพโหลดสลิป"],
      action: renderAction(),
    },
    {
      time: renderTime(),
      id: renderId("admin"),
      name: renderUser("admin"),
      history: ["แก้ไขข้อมูลสินค้า"],
      action: renderAction(),
    },
  ];

  return (
    <MainLayout>
      <HeaderDashBoard text="Member Activity" />
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
        <div className="align-items">
          <RangePicker />
          <StyleInput placeholder="USER ID" suffix={<SearchOutlined />} />
        </div>
      </HeaderSection>
      <Container>
        <div>
          <Table columns={columns} dataSource={data} onChange={onChange} />
        </div>
      </Container>
    </MainLayout>
  );
};

export default MemberActivity;

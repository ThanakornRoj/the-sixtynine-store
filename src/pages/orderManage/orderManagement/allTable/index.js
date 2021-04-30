import React from "react";
import { Link } from "react-router-dom";
import { Space, Table, Tag } from "antd";

import { Container, DetailButton, ViewButton } from "./style";

const AllTable = ({ current }) => {
  let currentColumns;

  const allTableColumns = [
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
      title: "Order ID",
      dataIndex: "id",
      width: "20%",
    },
    {
      title: "Name",
      dataIndex: "name",
      width: "20%",
    },
    {
      title: "Status",
      dataIndex: "status",
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

  const tableColumns = [
    {
      title: "Time",
      dataIndex: "time",
      sorter: {
        compare: (a, b) => a.id - b.id,
        multiple: 1,
      },
      width: "16.6%",
    },
    {
      title: "Order ID",
      dataIndex: "id",
      width: "16.6%",
    },
    {
      title: "Name",
      dataIndex: "name",
      width: "16.6%",
    },
    {
      title: "total price",
      dataIndex: "price",
      width: "16.6%",
    },
    {
      title: "Status",
      dataIndex: "status",
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
      width: "16.6%",
    },
    {
      title: "Action",
      dataIndex: "action",
      width: "16.6%",
    },
  ];

  if (current === "all") {
    currentColumns = allTableColumns;
  } else {
    currentColumns = tableColumns;
  }

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

  const renderAction = () => {
    if (current === "all") {
      return (
        <Link to="/order-detail">
          <DetailButton>Detail</DetailButton>
        </Link>
      );
    } else
      return (
        <Space size={10}>
          <Link to="order-detail">
            <ViewButton>View</ViewButton>
          </Link>
          <div className="align-items">
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
          </div>
        </Space>
      );
  };

  const renderTotalPrice = () => {
    var number = 1000000;
    return <span>{number.toLocaleString()}</span>;
  };

  const data = [
    {
      key: 1,
      time: renderTime(),
      id: "UA3356",
      name: "ลูกค้า",
      status: ["คำสั่งถูกยกเลิก"],
      price: renderTotalPrice(),
      action: renderAction(),
    },
    {
      key: 2,
      time: renderTime(),
      id: "UA3357",
      name: "ลูกค้า",
      status: ["คำสั่งซื้อใหม่", "ใบเสนอราคา"],
      price: renderTotalPrice(),
      action: renderAction(),
    },
    {
      key: 3,
      time: renderTime(),
      id: "UA3357",
      name: "ลูกค้า",
      status: ["จัดส่งสำเร็จ"],
      price: renderTotalPrice(),
      action: renderAction(),
    },
    {
      key: 4,
      time: renderTime(),
      id: "UA3357",
      name: "ลูกค้า",
      status: ["คำสั่งซื้อใหม่", "ใบเสนอราคา"],
      price: renderTotalPrice(),
      action: renderAction(),
    },
    {
      key: 5,
      time: renderTime(),
      id: "UA3357",
      name: "ลูกค้า",
      status: ["เตรียมจัดส่ง"],
      price: renderTotalPrice(),
      action: renderAction(),
    },
    {
      key: 6,
      time: renderTime(),
      id: "UA3357",
      name: "ลูกค้า",
      status: ["ยืนยันการชำระเงิน"],
      price: renderTotalPrice(),
      action: renderAction(),
    },
    {
      key: 7,
      time: renderTime(),
      id: "UA3357",
      name: "ลูกค้า",
      status: ["เตรียมจัดส่ง"],
      price: renderTotalPrice(),
      action: renderAction(),
    },
    {
      key: 8,
      time: renderTime(),
      id: "UA3357",
      name: "ลูกค้า",
      status: ["ยืนยันการชำระเงิน"],
      price: renderTotalPrice(),
      action: renderAction(),
    },
    {
      key: 9,
      time: renderTime(),
      id: "UA3357",
      name: "ลูกค้า",
      status: ["คำสั่งซื้อใหม่", "ใบเสนอราคา"],
      price: renderTotalPrice(),
      action: renderAction(),
    },
    {
      key: 10,
      time: renderTime(),
      id: "UA3357",
      name: "ลูกค้า",
      status: ["คำสั่งซื้อใหม่", "ใบเสนอราคา"],
      price: renderTotalPrice(),
      action: renderAction(),
    },
    {
      key: 11,
      time: renderTime(),
      id: "UA3357",
      name: "ลูกค้า",
      status: ["คำสั่งซื้อใหม่", "ใบเสนอราคา"],
      price: renderTotalPrice(),
      action: renderAction(),
    },
  ];

  return (
    <Container>
      <Table columns={currentColumns} dataSource={data} onChange={onChange} />
    </Container>
  );
};

export default AllTable;

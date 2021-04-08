import React from "react";
import { Table } from "antd";

import { Container, ViewButton } from "./style";

const DeliveredTable = () => {
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
      title: "total price",
      dataIndex: "price",
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
      <div>
        <span>2021-02-28 </span>
        <span style={{ marginLeft: "25px" }}>12.08</span>
      </div>
    );
  };

  const renderAction = () => {
    return (
      <div className="action">
        <ViewButton>View</ViewButton>
        <div
          style={{ marginLeft: "15px", display: "flex", alignItems: "center" }}
        >
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
      </div>
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
      price: renderTotalPrice(),
      action: renderAction(),
    },
    {
      key: 2,
      time: renderTime(),
      id: "UA3357",
      name: "ลูกค้า",
      price: renderTotalPrice(),
      action: renderAction(),
    },
    {
      key: 3,
      time: renderTime(),
      id: "UA3357",
      name: "ลูกค้า",
      price: renderTotalPrice(),
      action: renderAction(),
    },
    {
      key: 4,
      time: renderTime(),
      id: "UA3357",
      name: "ลูกค้า",
      price: renderTotalPrice(),
      action: renderAction(),
    },
    {
      key: 5,
      time: renderTime(),
      id: "UA3357",
      name: "ลูกค้า",
      price: renderTotalPrice(),
      action: renderAction(),
    },
    {
      key: 6,
      time: renderTime(),
      id: "UA3357",
      name: "ลูกค้า",
      price: renderTotalPrice(),
      action: renderAction(),
    },
    {
      key: 7,
      time: renderTime(),
      id: "UA3357",
      name: "ลูกค้า",
      price: renderTotalPrice(),
      action: renderAction(),
    },
    {
      key: 8,
      time: renderTime(),
      id: "UA3357",
      name: "ลูกค้า",
      price: renderTotalPrice(),
      action: renderAction(),
    },
    {
      key: 9,
      time: renderTime(),
      id: "UA3357",
      name: "ลูกค้า",
      price: renderTotalPrice(),
      action: renderAction(),
    },
    {
      key: 10,
      time: renderTime(),
      id: "UA3357",
      name: "ลูกค้า",
      price: renderTotalPrice(),
      action: renderAction(),
    },
    {
      key: 11,
      time: renderTime(),
      id: "UA3357",
      name: "ลูกค้า",
      price: renderTotalPrice(),
      action: renderAction(),
    },
  ];

  return (
    <Container>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </Container>
  );
};

export default DeliveredTable;

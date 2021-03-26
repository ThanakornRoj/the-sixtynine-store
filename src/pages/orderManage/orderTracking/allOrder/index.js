import React from "react";
import { Table, Tag } from "antd";

import { DetailButton } from "./style";

const DayOrder = () => {
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

  const data = [
    {
      key: 1,
      time: renderTime(),
      id: "UA3356",
      name: "ลูกค้า",
      status: ["คำสั่งถูกยกเลิก"],
      action: <DetailButton>Detail</DetailButton>,
    },
    {
      key: 2,
      time: renderTime(),
      id: "UA3357",
      name: "ลูกค้า",
      status: ["คำสั่งซื้อใหม่", "ใบเสนอราคา"],
      action: <DetailButton>Detail</DetailButton>,
    },
    {
      key: 3,
      time: renderTime(),
      id: "UA3357",
      name: "ลูกค้า",
      status: ["จัดส่งสำเร็จ"],
      action: <DetailButton>Detail</DetailButton>,
    },
    {
      key: 4,
      time: renderTime(),
      id: "UA3357",
      name: "ลูกค้า",
      status: ["คำสั่งซื้อใหม่", "ใบเสนอราคา"],
      action: <DetailButton>Detail</DetailButton>,
    },
    {
      key: 5,
      time: renderTime(),
      id: "UA3357",
      name: "ลูกค้า",
      status: ["เตรียมจัดส่ง"],
      action: <DetailButton>Detail</DetailButton>,
    },
    {
      key: 6,
      time: renderTime(),
      id: "UA3357",
      name: "ลูกค้า",
      status: ["ยืนยันการชำระเงิน"],
      action: <DetailButton>Detail</DetailButton>,
    },
    {
      key: 7,
      time: renderTime(),
      id: "UA3357",
      name: "ลูกค้า",
      status: ["เตรียมจัดส่ง"],
      action: <DetailButton>Detail</DetailButton>,
    },
    {
      key: 8,
      time: renderTime(),
      id: "UA3357",
      name: "ลูกค้า",
      status: ["ยืนยันการชำระเงิน"],
      action: <DetailButton>Detail</DetailButton>,
    },
    {
      key: 9,
      time: renderTime(),
      id: "UA3357",
      name: "ลูกค้า",
      status: ["คำสั่งซื้อใหม่", "ใบเสนอราคา"],
      action: <DetailButton>Detail</DetailButton>,
    },
    {
      key: 10,
      time: renderTime(),
      id: "UA3357",
      name: "ลูกค้า",
      status: ["คำสั่งซื้อใหม่", "ใบเสนอราคา"],
      action: <DetailButton>Detail</DetailButton>,
    },
    {
      key: 11,
      time: renderTime(),
      id: "UA3357",
      name: "ลูกค้า",
      status: ["คำสั่งซื้อใหม่", "ใบเสนอราคา"],
      action: <DetailButton>Detail</DetailButton>,
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
};

export default DayOrder;

import React, { useState } from "react";
import { Table, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import {
  Container,
  DetailButton,
  HeaderSection,
  DeleteButton,
  StyleInput,
} from "./style";

import MainLayout from "../../../layouts/mainLayout";
import HeaderDashBoard from "../../../components/header";

const ManageUser = () => {
  const { Option } = Select;
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const rowSelection = {
    selectedRowKeys,
    onChange: setSelectedRowKeys,
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

  const data = [];
  for (let i = 0; i < 50; i++) {
    data.push({
      key: i,
      id: `UA${33567 + i}`,
      name: `Edward King ${i}`,
      level: <p style={{ color: "#75BA68", marginBottom: "0" }}>User</p>,
      time: "12.00 pm",
      action: <DetailButton>Detail</DetailButton>,
    });
  }

  return (
    <MainLayout>
      <HeaderDashBoard text="MEMBER Lists" />
      <HeaderSection>
        <div>
          <DeleteButton>Delete</DeleteButton>
          <StyleInput suffix={<SearchOutlined />} />
        </div>
        <div>
          <Select defaultValue="latest">
            <Option value="latest">latest</Option>
          </Select>
          <Select defaultValue="all" style={{ marginLeft: "24px" }}>
            <Option value="all">all</Option>
          </Select>
        </div>
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
  );
};

export default ManageUser;

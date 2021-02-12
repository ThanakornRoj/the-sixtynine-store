import React from "react";
import { Table, Select, DatePicker } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import {
  Container,
  DetailButton,
  flex,
  HeaderSection,
  StyleInput,
} from "./style";

import MainLayout from "../../../layouts/mainLayout";
import HeaderDashBoard from "../../../components/header";

const MemberAction = () => {
  const { Option } = Select;
  const { RangePicker } = DatePicker;
  const data = [];
  const columns = [
    {
      title: "Time",
      dataIndex: "time",
      sorter: {
        compare: (a, b) => a.id - b.id,
        multiple: 1,
      },
      width: "17%",
    },
    {
      title: "Id User",
      dataIndex: "id",
      sorter: {
        compare: (a, b) => a.id - b.id,
        multiple: 1,
      },
      width: "17%",
    },
    {
      title: "Name",
      dataIndex: "name",
      width: "17%",
    },
    {
      title: "User Level",
      dataIndex: "level",
      sorter: {
        compare: (a, b) => a.level - b.level,
        multiple: 1,
      },
      width: "17%",
    },
    {
      title: "History",
      dataIndex: "history",
      sorter: {
        compare: (a, b) => a.time - b.time,
        multiple: 1,
      },
      width: "17%",
    },
    {
      title: "Action",
      dataIndex: "action",
      width: "17%",
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const handlechanage = (value) => {
    console.log(`selected ${value}`);
  };

  const renderUserLevel = (i) => {
    if (i % 2 === 0) {
      return <p style={{ color: "#75BA68", marginBottom: "0" }}>User</p>;
    } else return <p style={{ color: "#FAB300", marginBottom: "0" }}>Admin</p>;
  };

  for (let i = 0; i < 50; i++) {
    data.push({
      key: i,
      time: "2021-02-26  12:00 ",
      id: `UA${33567 + i}`,
      name: `Edward King ${i}`,
      level: renderUserLevel(i),
      history: "Order",
      action: <DetailButton>Detail</DetailButton>,
    });
  }

  return (
    <MainLayout>
      <HeaderDashBoard text="member action" />
      <HeaderSection>
        <flex>
          <RangePicker />
          <StyleInput placeholder="Id User" suffix={<SearchOutlined />} />
        </flex>
        <div>
          <Select defaultValue="all" style={{ marginLeft: "24px" }}>
            <Option value="all">all</Option>
          </Select>
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

export default MemberAction;

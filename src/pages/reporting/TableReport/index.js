import React, { useState } from "react";
import { Space, Table } from "antd";

import { TableContainer, ChartBox } from "./style";

import RankUp from "../../../icons/rank-up.svg";
import RankDown from "../../../icons/rank-down.svg";
import BoxHeader from "../../../components/boxHeader";

const TableReport = ({ table }) => {
  const columnsTopReach = [
    {
      title: "Rank",
      dataIndex: "rank",
      sorter: {
        compare: (a, b) => a.id - b.id,
        multiple: 1,
      },
    },
    {
      title: <span style={{ paddingLeft: "15px" }}>keywords</span>,
      dataIndex: "keywords",
      width: "45%",
    },
    {
      title: <span style={{ paddingLeft: "5px" }}>count</span>,
      dataIndex: "count",
    },
    {
      title: "Weekly Range",
      dataIndex: "weekly",
    },
  ];

  const columnsProduct = [
    {
      title: "Rank",
      dataIndex: "rank",
      sorter: {
        compare: (a, b) => a.id - b.id,
        multiple: 1,
      },
    },
    {
      title: <span style={{ paddingLeft: "15px" }}>product</span>,
      dataIndex: "product",
      width: "45%",
    },
    {
      title: <span style={{ paddingLeft: "5px" }}>sales</span>,
      dataIndex: "sales",
    },
    {
      title: "percentage",
      dataIndex: "percentage",
    },
  ];

  const columnsCategory = [
    {
      title: "Rank",
      dataIndex: "rank",
      sorter: {
        compare: (a, b) => a.id - b.id,
        multiple: 1,
      },
    },
    {
      title: <span style={{ paddingLeft: "15px" }}>category</span>,
      dataIndex: "category",
      width: "45%",
    },
    {
      title: <span style={{ paddingLeft: "5px" }}>sales</span>,
      dataIndex: "sales",
    },
    {
      title: "percentage",
      dataIndex: "percentage",
    },
  ];

  const renderTable = () => {
    if (table === 1)
      return (
        <Table
          columns={columnsTopReach}
          dataSource={Data}
          onChange={onChange}
          pagination={false}
        />
      );
    else if (table === 2)
      return (
        <Table
          columns={columnsProduct}
          dataSource={Data}
          onChange={onChange}
          pagination={false}
        />
      );
    else if (table === 3) {
      return (
        <Table
          columns={columnsCategory}
          dataSource={Data}
          onChange={onChange}
          pagination={false}
        />
      );
    }
  };

  const renderRate = (number) => {
    if (number === 0) {
      return <p>{number}%</p>;
    } else if (number >= 10) {
      return (
        <Space size={15}>
          <p>{number}%</p>
          <img src={RankUp} alt="Mock" />
        </Space>
      );
    } else {
      return (
        <Space size={15}>
          <p>{number}%</p>
          <img src={RankDown} alt="Mock" />
        </Space>
      );
    }
  };

  const Data = [
    {
      key: 1,
      rank: 1,
      keywords: "คำค้นหาอันดับ 1",
      product: "คำค้นหาอันดับ 1",
      category: "คำค้นหาอันดับ 1",
      count: 999,
      sales: 999,
      weekly: renderRate(21),
      percentage: renderRate(21),
    },
    {
      key: 2,
      rank: 2,
      keywords: "คำค้นหาอันดับ 2",
      product: "คำค้นหาอันดับ 2",
      category: "คำค้นหาอันดับ 2",
      count: 999,
      sales: 999,
      weekly: renderRate(12),
      percentage: renderRate(12),
    },
    {
      key: 3,
      rank: 3,
      keywords: "คำค้นหาอันดับ 3",
      product: "คำค้นหาอันดับ 3",
      category: "คำค้นหาอันดับ 3",
      count: 444,
      sales: 444,
      weekly: renderRate(10),
      percentage: renderRate(10),
    },
    {
      key: 4,
      rank: 4,
      keywords: "คำค้นหาอันดับ 4",
      product: "คำค้นหาอันดับ 4",
      category: "คำค้นหาอันดับ 4",
      count: 222,
      sales: 333,
      weekly: renderRate(0),
      percentage: renderRate(0),
    },
    {
      key: 5,
      rank: 5,
      keywords: "คำค้นหาอันดับ 5",
      product: "คำค้นหาอันดับ 5",
      category: "คำค้นหาอันดับ 5",
      count: 999,
      sales: 333,
      weekly: renderRate(-2),
      percentage: renderRate(-2),
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <ChartBox>
      <TableContainer>{renderTable()}</TableContainer>
    </ChartBox>
  );
};

export default TableReport;

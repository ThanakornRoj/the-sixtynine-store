import React, { useState } from "react";
import { Table } from "antd";

import {
  ContentContainer,
  HeaderSection,
  UploadBanner,
  ViewButton,
} from "./style";

import MainLayout from "../../../layouts/mainLayout";
import Header from "../../../components/header";
import ViewBanner from "./viewModal";
const Banner = () => {
  const data = [];
  const [modalVisible, setModalVisible] = useState(false);
  const [edit, setEdit] = useState(false);

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const handleModal = () => {
    setModalVisible(true);
  };

  const closeEdit = () => {
    setEdit(true);
  };

  const openEdit = () => {
    setEdit(false);
  };

  const columns = [
    {
      title: "banner",
      dataIndex: "banner",
      sorter: {
        compare: (a, b) => a.id - b.id,
        multiple: 1,
      },
      width: "75%",
    },
    {
      title: "ACTION",
      dataIndex: "action",
      width: "25%",
    },
  ];

  const renderCategoryName = (text) => {
    return (
      <span style={{ paddingLeft: "15px", textTransform: "uppercase" }}>
        {text}
      </span>
    );
  };

  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      banner: renderCategoryName(`Banner ${i}`),
      action: (
        <ViewButton
          onClick={() => {
            handleModal();
            closeEdit();
          }}
        >
          view
        </ViewButton>
      ),
    });
  }

  return (
    <MainLayout>
      <HeaderSection>
        <Header text="Banner" />
        <div className="button-align">
          <UploadBanner
            onClick={() => {
              handleModal();
              openEdit();
            }}
          >
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
            <p>upload new banner</p>
          </UploadBanner>
        </div>
      </HeaderSection>
      <ContentContainer>
        <Table columns={columns} dataSource={data} onChange={onChange} />
      </ContentContainer>

      <ViewBanner
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        edit={edit}
      />
    </MainLayout>
  );
};

export default Banner;

import React, { useState } from "react";
import { Upload, message, Select } from "antd";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useLocation } from "react-router-dom";

import {
  ButtonContainer,
  CancelButton,
  ConfirmButton,
  Container,
  ContentContainer,
  FormHeader,
  HeaderSection,
  StyleInput,
} from "./style";

import MainLayout from "../../../../layouts/mainLayout";
import Header from "../../../../components/header";

const { Dragger } = Upload;
const { Option } = Select;

const ManageBlogPage = () => {
  const location = useLocation();

  const props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  function uploadImageCallBack(file) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "https://api.imgur.com/3/image");
      xhr.setRequestHeader("Authorization", "Client-ID XXXXX");
      const data = new FormData();
      data.append("image", file);
      xhr.send(data);
      xhr.addEventListener("load", () => {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      });
      xhr.addEventListener("error", () => {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      });
    });
  }

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <MainLayout>
      <HeaderSection>
        {location.pathname === "/blog-manage/edit-blog" ? (
          <Header text="Edit blog" />
        ) : (
          <Header text="Create new blog" />
        )}
      </HeaderSection>
      <Container>
        <ContentContainer>
          <div className="form-row">
            <FormHeader>cover ภาพหน้าปก</FormHeader>
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <svg
                  width="40"
                  height="36"
                  viewBox="0 0 16 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.54"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.3751 4.37916C11.9285 2.21034 10.0149 0.551823 7.65468 0.551823C5.8048 0.551823 4.21007 1.57245 3.4446 3.10338C1.46715 3.35854 0 4.95326 0 6.93072C0 9.03575 1.7223 10.7581 3.82734 10.7581H12.1199C13.906 10.7581 15.3094 9.3547 15.3094 7.56861C15.3094 5.9101 13.9698 4.50674 12.3751 4.37916ZM8.92959 6.29334V8.8449H6.37803V6.29334H4.46436L7.65381 3.10389L10.8433 6.29334H8.92959Z"
                    fill="currentColor"
                  />
                </svg>
              </p>
              <p className="ant-upload-text" style={{ color: "#99999" }}>
                upload cover photo
              </p>
            </Dragger>
          </div>

          <div className="form-row">
            <FormHeader>Title หัวเรือง</FormHeader>
            <StyleInput />
          </div>

          <div className="form-row">
            <FormHeader>Tag แท็ก</FormHeader>
            <Select
              mode="multiple"
              style={{ width: "100%" }}
              defaultValue={["Lorem"]}
              onChange={handleChange}
              optionLabelProp="label"
            >
              <Option value="Lorem" label="Lorem Ipsum">
                <div className="demo-option-label-item">Lorem Ipsum</div>
              </Option>
              <Option value="Lorem2" label="Lorem Ipsum">
                <div className="demo-option-label-item">Lorem Ipsum</div>
              </Option>
              <Option value="Lorem3" label="Lorem Ipsum">
                <div className="demo-option-label-item">Lorem Ipsum</div>
              </Option>
            </Select>
          </div>

          <div>
            <FormHeader>Content เนื้อหา</FormHeader>
            <Editor
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              toolbar={{
                inline: { inDropdown: true },
                list: { inDropdown: true },
                textAlign: { inDropdown: true },
                link: { inDropdown: true },
                history: { inDropdown: true },
                image: {
                  uploadCallback: uploadImageCallBack,
                  alt: { present: true, mandatory: true },
                },
              }}
            />
          </div>
        </ContentContainer>
        <ButtonContainer>
          <ConfirmButton>ยืนยัน</ConfirmButton>
          <CancelButton>ยกเลิก</CancelButton>
        </ButtonContainer>
      </Container>
    </MainLayout>
  );
};

export default ManageBlogPage;

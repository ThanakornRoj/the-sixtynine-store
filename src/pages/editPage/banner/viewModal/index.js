import React, { useState } from "react";
import { Space, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import { DeleteButton, SaveButton, StyleModal } from "./style";

import UploadMock from "../../../../images/banner-mock.png";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const ViewBanner = ({ visible, onCancel, edit }) => {
  const [fileListOne, setFileListOne] = useState([
    {
      url: UploadMock,
    },
  ]);

  const handleChange = (fileList) => {
    setFileListOne(fileList);
  };

  const uploadButton = (
    <div>
      <div>
        <svg
          width="45"
          height="40"
          viewBox="0 0 16 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.54"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.7198 3.90382C12.2733 1.73499 10.3596 0.0764809 7.9994 0.0764809C6.14952 0.0764809 4.5548 1.0971 3.78933 2.62804C1.81187 2.8832 0.344727 4.47792 0.344727 6.45538C0.344727 8.56041 2.06703 10.2827 4.17206 10.2827H12.4646C14.2507 10.2827 15.6541 8.87936 15.6541 7.09327C15.6541 5.43475 14.3145 4.0314 12.7198 3.90382ZM9.27524 5.81821V8.36977H6.72368V5.81821H4.81001L7.99946 2.62876L11.1889 5.81821H9.27524Z"
            fill="currentColor"
          />
        </svg>
        <p
          style={{
            fontSize: "1rem",
            fontWeight: "600",
            color: "#999999",
            textTransform: "uppercase",
            marginTop: "10px",
          }}
        >
          drag & drop here to upload
        </p>
      </div>
    </div>
  );

  return (
    <StyleModal
      header={null}
      footer={null}
      visible={visible}
      onCancel={onCancel}
      width={1000}
    >
      {edit ? <h2>Edit Banner</h2> : <h2>Add New Banner</h2>}
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileListOne}
        onPreview={false}
        onChange={({ fileList }) => handleChange(fileList)}
      >
        {fileListOne.length >= 1 ? null : uploadButton}
      </Upload>
      <div className="button-align">
        {edit ? (
          <DeleteButton>Delete</DeleteButton>
        ) : (
          <DeleteButton onClick={onCancel}>Cancel</DeleteButton>
        )}
        <SaveButton onClick={onCancel}>Save</SaveButton>
      </div>
    </StyleModal>
  );
};

export default ViewBanner;

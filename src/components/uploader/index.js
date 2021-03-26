import React, { useState } from "react";
import { Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import { UploadContainer, StyledModal } from "./style";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const Uploader = () => {
  const [fileListOne, setFileListOne] = useState([]);
  const [fileListTwo, setFileListTwo] = useState([]);
  const [fileListThree, setFileListThree] = useState([]);
  const [fileListFour, setFileListFour] = useState([]);
  const [fileListFive, setFileListFive] = useState([]);
  const [modalFileListVisible, setModalFileListVisible] = useState(false);
  const [imagePreview, setImagePreview] = useState("");

  const uploadButton = (
    <div>
      <div className="color">
        <svg
          width="25"
          height="20"
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
      </div>
    </div>
  );

  const handleChange = (id, fileList) => {
    if (id === 1) {
      setFileListOne(fileList);
    } else if (id === 2) {
      setFileListTwo(fileList);
    } else if (id === 3) {
      setFileListThree(fileList);
    } else if (id === 4) {
      setFileListFour(fileList);
    } else if (id === 5) {
      setFileListFive(fileList);
    }
  };

  const handlePreview = async (id, file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setImagePreview(file.preview);
    setModalFileListVisible(true);
  };

  const handleClose = () => {
    setModalFileListVisible(false);
  };

  const imageStyle = {
    width: "100%",
    maxWidth: "400px",
    height: "auto",
  };

  return (
    <>
      <UploadContainer>
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileListOne}
          onPreview={(file) => handlePreview(1, file)}
          onChange={({ fileList }) => handleChange(1, fileList)}
        >
          {fileListOne.length >= 1 ? null : uploadButton}
        </Upload>
      </UploadContainer>
      <StyledModal
        title={null}
        footer={null}
        visible={modalFileListVisible}
        onCancel={handleClose}
      >
        <img src={imagePreview} style={imageStyle} alt="" />
      </StyledModal>
    </>
  );
};

export default Uploader;

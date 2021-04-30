import React from "react";

import { StyleModal, CancelButton, ConfirmButton, StyleInput } from "./style";

const AddModal = ({ visible, onCancel }) => {
  return (
    <StyleModal
      header={null}
      footer={null}
      visible={visible}
      onCancel={onCancel}
    >
      <h2>เพิ่มหมวดหมู่</h2>
      <div>
        <p className="header">new category</p>
        <StyleInput />
      </div>
      <div className="button-align">
        <CancelButton>ยกเลิก</CancelButton>
        <ConfirmButton>ยืนยัน</ConfirmButton>
      </div>
    </StyleModal>
  );
};

export default AddModal;

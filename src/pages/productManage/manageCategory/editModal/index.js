import React from "react";

import { StyleModal, CancelButton, ConfirmButton, StyleInput } from "./style";

const EditModal = ({ visible, onCancel }) => {
  return (
    <StyleModal
      header={null}
      footer={null}
      visible={visible}
      onCancel={onCancel}
    >
      <h2>แก้ไขหมวดหมู่</h2>
      <div>
        <p className="header">edit category</p>
        <StyleInput />
      </div>
      <div className="button-align">
        <CancelButton>ยกเลิก</CancelButton>
        <ConfirmButton>ยืนยัน</ConfirmButton>
      </div>
    </StyleModal>
  );
};

export default EditModal;

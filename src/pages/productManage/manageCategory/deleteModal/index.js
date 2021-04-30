import React from "react";

import { StyleModal, CancelButton, ConfirmButton } from "./style";

const DeleteModal = ({ visible, onCancel }) => {
  return (
    <StyleModal
      header={null}
      footer={null}
      visible={visible}
      onCancel={onCancel}
    >
      <h2>ยืนยันการลบ</h2>
      <p>กดปุ่มยืนยันเพื่อลบหมวด “เครื่องเซิฟเวอร์”</p>
      <div className="button-align">
        <CancelButton>ยกเลิก</CancelButton>
        <ConfirmButton>ยืนยัน</ConfirmButton>
      </div>
    </StyleModal>
  );
};

export default DeleteModal;

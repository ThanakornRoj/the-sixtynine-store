import React, { useState } from "react";

import { Container, CancelButton, NextButton } from "./style";

import MainLayout from "../../../../layouts/mainLayout";
import Header from "../../../../components/header";

import ProfileForm from "./profileForm";
import AddressForm from "./addressForm";

const AddNewUser = () => {
  const [current, setCurrent] = useState(1);

  const handleChange = () => {
    if (current >= 3) setCurrent(1);
    else setCurrent(current + 1);
  };

  const renderContent = () => {
    switch (current) {
      case 1:
        return <ProfileForm />;
      case 2:
        return <AddressForm />;
      default:
        return <ProfileForm />;
    }
  };

  return (
    <MainLayout>
      <Header text="Add New User" />
      <Container>
        {renderContent()}
        <div className="flex button-contain">
          <CancelButton
            style={{ marginRight: "15px" }}
            onClick={() => setCurrent(1)}
          >
            Cancel
          </CancelButton>
          <NextButton onClick={handleChange}>Next</NextButton>
        </div>
      </Container>
    </MainLayout>
  );
};

export default AddNewUser;

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Container, CancelButton, NextButton } from "./style";

import MainLayout from "../../../../layouts/mainLayout";
import Header from "../../../../components/header";

import ProfileForm from "./profileForm";
import AddressForm from "./addressForm";
import PaymentForm from "./paymentForm";

const AddNewUser = () => {
  const [current, setCurrent] = useState(1);
  const location = useLocation();

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
      case 3:
        return <PaymentForm />;
      default:
        return <ProfileForm />;
    }
  };

  return (
    <MainLayout>
      {location.pathname === "/edit-user" ? (
        <Header text="Edit User" />
      ) : (
        <Header text="Add New User" />
      )}
      <Container>
        {renderContent()}
        <div className="flex button-contain">
          <Link to="/user-info">
            <CancelButton
              style={{ marginRight: "15px" }}
              onClick={() => setCurrent(1)}
            >
              Cancel
            </CancelButton>
          </Link>
          <NextButton onClick={handleChange}>Next</NextButton>
        </div>
      </Container>
    </MainLayout>
  );
};

export default AddNewUser;

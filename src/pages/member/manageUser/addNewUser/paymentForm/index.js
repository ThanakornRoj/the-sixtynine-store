import React from "react";

import { Flex, FormContainer, PaymentBox, StyleInput, Text } from "./style";

import BankingMock from "../../../../../images/banking-mock.png";

const PaymentForm = () => {
  return (
    <>
      <FormContainer>
        <p className="header">Payment Information</p>
        <div className="bank-logo-contain">
          <div>
            <p>Pay With</p>
            <PaymentBox>
              <img src={BankingMock} alt="mockBanking" />
            </PaymentBox>
          </div>
        </div>
      </FormContainer>
      <FormContainer style={{ marginBottom: "203px", border: "none" }}>
        <p className="header">Credit Card</p>
        <div style={{ padding: "32px 0" }}>
          <Flex style={{ marginBottom: "24px" }}>
            <div style={{ width: "70%", marginRight: "24px" }}>
              <Text style={{ marginBottom: "10px" }}>Card Holder Name</Text>
              <StyleInput />
            </div>
            <div style={{ width: "30%" }}>
              <Text style={{ marginBottom: "10px" }}>Exp Date</Text>
              <StyleInput />
            </div>
          </Flex>

          <Flex>
            <div style={{ width: "70%", marginRight: "24px" }}>
              <Text style={{ marginBottom: "10px" }}>Card Holder Name</Text>
              <StyleInput />
            </div>
            <div style={{ width: "30%" }}>
              <Text style={{ marginBottom: "10px" }}>Exp Date</Text>
              <StyleInput />
            </div>
          </Flex>
        </div>
      </FormContainer>
    </>
  );
};

export default PaymentForm;

import React from "react";
import { Select } from "antd";

import { Text, FormContainer, GridContainer, StyleInput } from "./style";

const { Option } = Select;

const AddressForm = () => {
  const address = [
    "address line 1",
    "address line 2",
    "country",
    "start/province",
    "city",
    "zip/postal code",
  ];

  const billAddress = [
    "address line 1",
    "address line 2",
    "country",
    "start/province",
    "city",
    "zip/postal code",
    "vat number",
  ];

  const handleChange = (value) => {
    console.log(value);
  };

  return (
    <>
      <FormContainer>
        <p className="header">Address</p>
        <GridContainer>
          {address.map((input, index) => {
            if (index === 2 || index === 3 || index === 4) {
              return (
                <div>
                  <Text style={{ marginBottom: "10px" }}>{input}</Text>
                  <Select
                    defaultValue="option1"
                    size="large"
                    style={{ width: "100%" }}
                    onChange={handleChange}
                  >
                    <Option value="option1">option</Option>
                    <Option value="option2">option</Option>
                    <Option value="option3">option</Option>
                    <Option value="option4">option</Option>
                  </Select>
                </div>
              );
            } else
              return (
                <div>
                  <Text style={{ marginBottom: "10px" }}>{input}</Text>
                  <StyleInput />
                </div>
              );
          })}
        </GridContainer>
      </FormContainer>
      <FormContainer style={{ borderBottom: "none" }}>
        <p className="header">Billing Address</p>
        <GridContainer>
          {billAddress.map((input, index) => {
            if (index === 2 || index === 3 || index === 4) {
              return (
                <div>
                  <Text style={{ marginBottom: "10px" }}>{input}</Text>
                  <Select
                    defaultValue="option1"
                    size="large"
                    style={{ width: "100%" }}
                    onChange={handleChange}
                  >
                    <Option value="option1">option</Option>
                    <Option value="option2">option</Option>
                    <Option value="option3">option</Option>
                    <Option value="option4">option</Option>
                  </Select>
                </div>
              );
            } else
              return (
                <div>
                  <Text style={{ marginBottom: "10px" }}>{input}</Text>
                  <StyleInput />
                </div>
              );
          })}
        </GridContainer>
      </FormContainer>
    </>
  );
};

export default AddressForm;

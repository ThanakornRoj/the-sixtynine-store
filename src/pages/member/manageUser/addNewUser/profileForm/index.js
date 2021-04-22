import React, { useState } from "react";
import { Select } from "antd";

import {
  UploadSection,
  Text,
  UploadButton,
  GridContainer,
  FormContainer,
  StyleInput,
} from "./style";

import MockAvatar from "../../../../../images/mock-upload-avatar.svg";

const { Option } = Select;

const ProfileForm = () => {
  const [currentType, setCurrentType] = useState();

  const handleChange = (value) => {
    setCurrentType(value);
  };

  const individual = ["user name", "first name", "surname"];
  const company = ["user name", "business name", "headquarter/branch office"];
  const contact = [
    "email address",
    "passwords",
    "confirm passwords",
    "phone number",
    "mobile number",
    "fax",
  ];
  return (
    <>
      <UploadSection>
        <div className="left-contain">
          <img src={MockAvatar} alt="mock-avatar" />
          <div>
            {currentType === "individual" ? (
              <Text>profile picture</Text>
            ) : (
              <Text>company logo</Text>
            )}
            <div className="flex" style={{ marginTop: "15px" }}>
              <UploadButton style={{ marginRight: "15px" }}>
                Upload
              </UploadButton>
              <UploadButton>Remove</UploadButton>
            </div>
          </div>
        </div>

        <div className="right-contain">
          <div className="flex">
            <Text>User Id</Text>
            <span className="text">UA3890</span>
          </div>
          <div className="flex" style={{ marginTop: "15px" }}>
            <Text style={{ marginRight: "31px" }}>Type</Text>
            <Select
              defaultValue="individual"
              size="large"
              style={{ width: 200 }}
              onChange={handleChange}
            >
              <Option value="individual">individual</Option>
              <Option value="company">company</Option>
            </Select>
          </div>
        </div>
      </UploadSection>
      <FormContainer>
        <p className="header">General Information</p>
        <GridContainer>
          {currentType === "individual"
            ? individual.map((input) => (
                <div>
                  <Text style={{ marginBottom: "10px" }}>{input}</Text>
                  <StyleInput />
                </div>
              ))
            : company.map((input) => (
                <div>
                  <Text style={{ marginBottom: "10px" }}>{input}</Text>
                  <StyleInput />
                </div>
              ))}
        </GridContainer>
      </FormContainer>
      <FormContainer style={{ borderBottom: "none" }}>
        <p className="header">Contact</p>
        <GridContainer>
          {contact.map((input) => (
            <div>
              <Text style={{ marginBottom: "10px" }}>{input}</Text>
              <StyleInput />
            </div>
          ))}
        </GridContainer>
      </FormContainer>
    </>
  );
};

export default ProfileForm;

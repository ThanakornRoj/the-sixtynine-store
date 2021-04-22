import React from "react";
import { Link } from "react-router-dom";
import { Space, Row, Col } from "antd";

import {
  ButtonContainer,
  Flex,
  InfoText,
  OtherInfo,
  ProfileInfo,
  Text,
  SaveButton,
  CancelButton,
} from "./style";

import MainLayout from "../../../../layouts/mainLayout";
import Avatar from "../../../../icons/avatar.svg";
import Header from "../../../../components/header";

const UserInfo = () => {
  const renderEdit = () => {
    return (
      <Link to="/edit-user">
        <svg
          width="22"
          height="21"
          viewBox="0 0 19 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.9697 2.12336L14.383 0.717908L14.3842 0.716752C14.5462 0.554722 14.8073 0.571213 14.9347 0.705445L14.9401 0.711171L14.9457 0.716752L17.2857 3.05643L17.2913 3.06201L17.297 3.06744C17.4311 3.19459 17.4477 3.45501 17.2863 3.61704C17.2861 3.61724 17.2859 3.61744 17.2857 3.61765L15.8711 5.02437L12.9697 2.12336ZM3.50133 17.4H0.6V14.4989L11.0602 4.03072L13.9616 6.93173L3.50133 17.4Z"
            stroke="currentColor"
            stroke-width="1.2"
          />
        </svg>
      </Link>
    );
  };

  return (
    <MainLayout>
      <Header text="Profile Information" />
      <ProfileInfo>
        <Flex>
          <div className="left">
            <div>
              <div style={{ textAlign: "center", paddingBottom: "14px" }}>
                <img src={Avatar} alt="mockAvatar" width="110" />
              </div>
              <div className="user-info">
                <Row>
                  <Col span={10}>
                    <Text>User Name</Text>
                  </Col>
                  <Col span={14}>
                    <InfoText>69ltd</InfoText>
                  </Col>
                </Row>

                <Row>
                  <Col span={10}>
                    <Text>Name</Text>
                  </Col>
                  <Col span={14}>
                    <InfoText>THE SIXTY NINE COMMUNICATION</InfoText>
                  </Col>
                </Row>

                <Row>
                  <Col span={10}>
                    <Text>Vat Number</Text>
                  </Col>
                  <Col span={14}>
                    <InfoText>0215559005655</InfoText>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="info">
              {renderEdit()}

              <Text>Contact</Text>
              <Space size={24}>
                <Flex>
                  <Text>Email Address</Text>
                  <InfoText style={{ marginLeft: "15px" }}>
                    info@thesixtynine.co.th
                  </InfoText>
                </Flex>
                <Flex>
                  <Text>Phone Number</Text>
                  <InfoText style={{ marginLeft: "15px" }}>
                    +66 98 485 6088
                  </InfoText>
                </Flex>
                <Flex>
                  <Text>Fax</Text>
                  <InfoText style={{ marginLeft: "15px" }}>
                    +66 98 485 6088
                  </InfoText>
                </Flex>
              </Space>
            </div>
            <div className="info">
              {renderEdit()}

              <Space direction="vertical" size={15}>
                <div>
                  <Text>Address</Text>
                  <InfoText>189/34, HUAI KAPI, MUANG, CHON BURI 20000</InfoText>
                </div>
                <div>
                  <Text>Billing Address</Text>
                  <InfoText>189/34, HUAI KAPI, MUANG, CHON BURI 20000</InfoText>
                </div>
              </Space>
            </div>
            <div className="info" style={{ border: "none" }}>
              {renderEdit()}

              <div>
                <Text>Payment Information</Text>
                <InfoText>link with omise payment gateway</InfoText>
              </div>
            </div>
          </div>
        </Flex>
      </ProfileInfo>

      <div>
        <Text style={{ marginTop: "24px", marginLeft: "10px" }}>Other</Text>
        <OtherInfo>
          <div className="content"></div>
          <ButtonContainer>
            <CancelButton>Cancel</CancelButton>
            <SaveButton>Save</SaveButton>
          </ButtonContainer>
        </OtherInfo>
      </div>
    </MainLayout>
  );
};

export default UserInfo;

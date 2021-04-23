import styled from "@emotion/styled";
import { Button } from "antd";

export const ProfileInfo = styled.div`
  background-color: #fff;
  border-radius: 3px;
  margin-top: 32px;

  svg {
    position: absolute;
    right: 32px;
    top: 24px;
  }

  svg:hover {
    color: #333333;
    transform: scale(1.05, 1.05);
    transition: 0.3s;
  }
`;

export const OtherInfo = styled.div`
  position: relative;
  background-color: #fff;
  padding: 24px;

  .content {
    min-height: 340px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Flex = styled.div`
  display: flex;

  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    border-right: 1px solid #c4c4c4;
    padding: 32px;
  }

  .right {
    width: 80%;
  }

  .user-info {
    margin-top: 15px;
    margin-left: 24px;
  }

  .info {
    padding: 24px 32px;
    border-bottom: 1px solid #c4c4c4;
    position: relative;

    a {
      color: #333333;
    }
  }
`;

export const Text = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
  color: #999999;
  text-transform: uppercase;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const InfoText = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
  color: #333333;
  text-transform: uppercase;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CancelButton = styled(Button)`
  width: 104px;
  height: 40px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  border-color: #999999;
  border-radius: 3px;
  background-color: #fff;
  margin-right: 24px;

  :hover,
  :focus {
    color: #fff;
    background-color: #333333;
    border-color: #333333;
  }
`;

export const SaveButton = styled(Button)`
  width: 104px;
  height: 40px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  border-color: #fd5c28;
  border-radius: 3px;
  color: #fff;
  background-color: #fd5c28;

  :hover,
  :focus {
    color: #fff;
    background-color: #333333;
    border-color: #333333;
  }
`;

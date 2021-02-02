import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  height: 600px;
`;

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .ant-radio-button-wrapper:first-child {
    border-radius: 6px 0 0 6px;
  }

  .ant-radio-button-wrapper:last-child {
    border-radius: 0 6px 6px 0;
  }

  .ant-radio-button-wrapper {
    height: 38px;
    padding: 0 17px;
    padding-top: 2px;
    box-shadow: 1px 1px 24px rgba(0, 0, 0, 0.06);
  }
`;

export const ButtonFilter  = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ContentContainer = styled.div`
`;
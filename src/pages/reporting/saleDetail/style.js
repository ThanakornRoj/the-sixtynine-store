import styled from "@emotion/styled";

export const SalesSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 17px;
`;

export const SalesBox = styled.div`
  text-transform: uppercase;
  height: 129px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  color: #c4c4c4;
  padding: 14px 24px;
  width: 100%;
  background: #fff;
  border-radius: 6px;
  box-shadow: 1px 1px 144px rgba(0, 0, 0, 0.04);

  p {
    margin-bottom: 0;
  }

  .number-data {
    font-size: 20px;
    font-weight: 600;
    color: #333333;
  }
`;

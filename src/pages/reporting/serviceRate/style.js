import styled from "@emotion/styled";

export const Flex = styled.div`
  display: flex;
  padding: 24px;
`;

export const Left = styled.div`
  width: 50%;
  margin-right: 32px;

  p {
    margin-bottom: 0;
    text-transform: uppercase;
    font-weight: 600;
    margin-left: 24px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const Right = styled.div`
  width: 50%;
  height: 280px;
  text-align: center;

  p {
    font-size: 0.75rem;
    font-weight: 600;
    color: #999999;
    text-transform: uppercase;
    margin-top: 20px;
  }
`;

export const ChartBox = styled.div`
  background: #fff;
  border-radius: 6px;
  box-shadow: 1px 1px 144px rgba(0, 0, 0, 0.04);
`;

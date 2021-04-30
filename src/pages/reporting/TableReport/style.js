import styled from "@emotion/styled";

export const ChartBox = styled.div`
  background: #fff;
  border-radius: 6px;
  box-shadow: 1px 1px 144px rgba(0, 0, 0, 0.04);

  p {
    margin-bottom: 0;
  }
`;

export const TableContainer = styled.div`
  .ant-table {
    border-radius: 6px;
  }

  .ant-table-wrapper {
    background: #ffff;
    box-shadow: 1px 1px 144px rgba(0, 0, 0, 0.04);
  }

  .ant-table-thead > tr > th {
    font-size: 0.75rem;
    font-weight: 600;
    background: #ffff;
    border-bottom: none;
    text-transform: uppercase;
  }

  .ant-table-tbody > tr > td {
    padding: 21px 0;
    padding-left: 32px;
  }

  .ant-table-column-sorter-up.active,
  .ant-table-column-sorter-down.active {
    color: #fd5c28;
  }

  td.ant-table-column-sort {
    background: #ffff;
  }

  .ant-table-tbody > tr.ant-table-row:hover > td {
    font-weight: 400;
  }
`;

import React from "react";
import { css, Global } from "@emotion/react";
import "antd/dist/antd.css";

import Router from "./routes";

const App = () => (
  <>
    <Global
      styles={css`
        @font-face {
          font-family: "anuphan";
          src: url("/font/anuphan-regular.ttf");
          font-weight: 400;
          font-display: swap;
        }

        @font-face {
          font-family: "anuphan";
          src: url("/font/anuphan-bold.ttf");
          font-weight: 700;
          font-display: swap;
        }

        @font-face {
          font-family: "anuphan";
          src: url("/font/anuphan-medium.ttf");
          font-weight: 500;
          font-display: swap;
        }

        @font-face {
          font-family: "anuphan";
          src: url("/font/anuphan-extralight.ttf");
          font-weight: 300;
          font-display: swap;
        }

        body {
          margin: 0;
          font-family: "anuphan";
        }

        .ant-picker-cell-in-view.ant-picker-cell-today
          .ant-picker-cell-inner::before {
          border: 1px solid #f26736;
        }

        .ant-picker-cell-in-view.ant-picker-cell-selected
          .ant-picker-cell-inner,
        .ant-picker-cell-in-view.ant-picker-cell-range-start
          .ant-picker-cell-inner,
        .ant-picker-cell-in-view.ant-picker-cell-range-end
          .ant-picker-cell-inner {
          background: #f26736;
        }

        .ant-picker-cell-in-view.ant-picker-cell-range-start:not(.ant-picker-cell-range-start-single)::before {
          background: #fbc9b7;
        }

        .ant-picker-cell-in-view.ant-picker-cell-in-range::before {
          background: #fbc9b7;
        }

        .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover::before,
        .ant-picker-cell-in-view.ant-picker-cell-range-start.ant-picker-cell-range-hover::before,
        .ant-picker-cell-in-view.ant-picker-cell-range-end.ant-picker-cell-range-hover::before,
        .ant-picker-cell-in-view.ant-picker-cell-range-start:not(.ant-picker-cell-range-start-single).ant-picker-cell-range-hover-start::before,
        .ant-picker-cell-in-view.ant-picker-cell-range-end:not(.ant-picker-cell-range-end-single).ant-picker-cell-range-hover-end::before,
        .ant-picker-panel
          > :not(.ant-picker-date-panel)
          .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-start::before,
        .ant-picker-panel
          > :not(.ant-picker-date-panel)
          .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-end::before {
          background: #fbc9b7;
        }

        .ant-select-item-option-content {
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
        }

        .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
          background-color: #fbc9b7;
        }

        .ant-checkbox-input:focus {
          border-color: #fd5c28;
        }

        .ant-checkbox-wrapper:hover .ant-checkbox-inner,
        .ant-checkbox:hover .ant-checkbox-inner,
        .ant-checkbox-input:focus + .ant-checkbox-inner {
          border-color: #fd5c28;
        }

        .ant-checkbox-checked .ant-checkbox-inner {
          background-color: #fd5c28;
          border-color: #fd5c28;
        }

        .ant-checkbox:hover::after,
        .ant-checkbox-wrapper:hover .ant-checkbox::after {
          border: 1px solid #fd5c28 !important;
        }

        .ant-pagination-item {
          border-radius: 5px;
        }

        .ant-pagination-prev .ant-pagination-item-link,
        .ant-pagination-next .ant-pagination-item-link {
          border-radius: 5px;
        }

        .ant-pagination-item-active,
        .ant-pagination-item-active a,
        .ant-pagination-item:hover,
        .ant-pagination-item:focus,
        .ant-pagination-item:focus a,
        .ant-pagination-item:hover a,
        .ant-pagination-item-active:hover,
        .ant-pagination-item-active:focus,
        .ant-pagination-item-active:focus a,
        .ant-pagination-item-active:hover a {
          color: #fd5c28;
          border-color: #fd5c28;
        }

        .ant-pagination-prev:focus .ant-pagination-item-link,
        .ant-pagination-next:focus .ant-pagination-item-link,
        .ant-pagination-prev:hover .ant-pagination-item-link,
        .ant-pagination-next:hover .ant-pagination-item-link {
          color: #fd5c28;
          border-color: #fd5c28;
        }

        .ant-modal-body {
          padding: 48px;
        }
      `}
    />
    <Router />
  </>
);

export default App;

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
      `}
    />
    <Router />
  </>
);

export default App;

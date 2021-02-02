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
      `}
    />
    <Router />
  </>
);

export default App;

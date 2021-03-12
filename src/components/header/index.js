import React from "react";
import { HeaderText } from "./style";
import { useLocation } from "react-router-dom";

const HeaderDashBoard = ({ text }) => {
  const location = useLocation();
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <HeaderText>{text}</HeaderText>
      {location.pathname === "/product-lists" ? (
        <h1
          style={{
            marginBottom: "0",
            marginLeft: "10px",
            color: "#999999",
            fontSize: "24px",
            fontWeight: "600",
          }}
        >
          (ALL)
        </h1>
      ) : null}
    </div>
  );
};

export default HeaderDashBoard;

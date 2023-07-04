import React from "react";
import { ReorderOutlined } from "@mui/icons-material";
import MainComponent from "./MainComponent";

const LoginGoogle = () => {
  return (
    <MainComponent>
      <div className="flow-node-button-layout">
        <div className="flow-node-button-icon">
          <ReorderOutlined sx={{ fontSize: "2.5vw", color: "#999999" }} />
        </div>
        <div className="flow-node-button-text">
          Connect Flow Node to Import to Google Sheets
        </div>
      </div>
    </MainComponent>
  );
};

export default LoginGoogle;

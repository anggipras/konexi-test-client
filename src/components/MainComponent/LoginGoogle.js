import React from "react";
import { Google } from "@mui/icons-material";
import MainComponent from "./MainComponent";

const LoginGoogle = () => {
  return (
    <MainComponent>
      <div className="login-google-layout">
        <div className="login-google-header-layout">
          <div className="login-google-header-left-icon">
            <Google sx={{ fontSize: "2.5vw", color: "#22a864" }} />
          </div>
          <div className="login-google-header-right-layout">
            <div className="login-google-header-right-title">
              Connect Google Account
            </div>
            <div className="login-google-header-right-subtitle">
              Please connect Google Account to use this block
            </div>
          </div>
        </div>
        <div className="login-google-button">Connect</div>
      </div>
    </MainComponent>
  );
};

export default LoginGoogle;

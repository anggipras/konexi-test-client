import React from "react";
import { ReactSVG } from "react-svg";
import "../../assets/css/LoginGoogle.css";
import Google from "../../assets/img/ic_google.svg";
import MainComponent from "./MainComponent";

const LoginGoogle = () => {
  return (
    <MainComponent>
      <div className="login-google-layout">
        <div className="login-google-header-layout">
          <div className="login-google-header-left-icon">
            <ReactSVG
              beforeInjection={(svg) => {
                svg.classList.add("login-google-header-left-icon-content");
                svg.setAttribute("style", "width: 2.5vw; height: 2.5vw;");
              }}
              src={Google}
            />
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

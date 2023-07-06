import React, { useContext } from "react";
import { ReactSVG } from "react-svg";
import "../../assets/css/LoginGoogle.css";
import Google from "../../assets/img/ic_google.svg";
import MainComponent from "./MainComponent";
import MyContext from "../../MyContext";
import Swal from "sweetalert2";

const LoginGoogle = () => {
  const { state, dispatch } = useContext(MyContext);

  const handleLogin = () => {
    Swal.fire({
      icon: "success",
      title: "You are logging with google!",
      showConfirmButton: false,
      timer: 1500,
    });
    dispatch({ type: "LOGIN", payload: true });
  };

  return (
    <template style={{ display: state.loginCond ? "none" : "block" }}>
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
          <div className="login-google-button" onClick={handleLogin}>
            Connect
          </div>
        </div>
      </MainComponent>
    </template>
  );
};

export default LoginGoogle;

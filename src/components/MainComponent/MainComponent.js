import React from "react";
import { ReactSVG } from "react-svg";
import { DeleteOutlined } from "@mui/icons-material";
import Sheets from "../../assets/img/ic_sheets.svg";

const MainComponent = ({ children }) => {
  return (
    <div className="main-component-layout">
      <div className="main-component-header">
        <div className="main-component-header-left">
          <div className="main-component-header-left-icon">
            <ReactSVG
              beforeInjection={(svg) => {
                svg.classList.add("main-component-header-left-icon-content");
                svg.setAttribute("style", "width: 2.5vw; height: 2.5vw;");
              }}
              src={Sheets}
            />
          </div>
          <div className="main-component-header-left-title">
            Export to Google Sheets
          </div>
        </div>
        <div className="main-component-header-right-delete">
          <DeleteOutlined sx={{ fontSize: "2.5vw" }} />
        </div>
      </div>
      {children}
    </div>
  );
};

export default MainComponent;

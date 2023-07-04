import React from "react";
import { DescriptionOutlined, DeleteOutlined } from "@mui/icons-material";

const MainComponent = ({ children }) => {
  return (
    <div className="main-component-layout">
      <div className="main-component-header">
        <div className="main-component-header-left">
          <div className="main-component-header-left-icon">
            <DescriptionOutlined sx={{ fontSize: "2.5vw", color: "#22a864" }} />
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

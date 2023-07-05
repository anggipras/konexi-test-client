import React, { useState, useRef } from "react";
import { ReactSVG } from "react-svg";
import { Close } from "@mui/icons-material";
import "../../assets/css/FileExport.css";
import Sheets from "../../assets/img/ic_sheets.svg";
import ArrowDown from "../../assets/img/ic_down.svg";
import MainComponent from "./MainComponent";
import TabSelection from "../UtilsComponent/TabSelection";

const FileExport = () => {
  const [account] = useState(["guest@example.com", "myaccount@example.com"]);
  const [selectedAccount, setSelectedAccount] = useState("Account Name");
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChangeAccount = (val) => {
    setSelectedAccount(val);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  return (
    <MainComponent>
      <div className="file-export-layout">
        <div className="file-export-account-layout">
          <div className="file-export-account-title">Google Account</div>

          <div class="select-box">
            <div class="select-box__current" tabindex="1">
              <div class="select-box__value">
                <input
                  class="select-box__input"
                  type="radio"
                  id="0"
                  value="1"
                  name="account"
                  checked="checked"
                />
                <p class="select-box__input-text">{selectedAccount}</p>
              </div>
              <div class="select-box__value">
                <input
                  class="select-box__input"
                  type="radio"
                  id="1"
                  value="2"
                  name="account"
                />
                <p class="select-box__input-text">guest@example.com</p>
              </div>
              <div class="select-box__value">
                <input
                  class="select-box__input"
                  type="radio"
                  id="2"
                  value="3"
                  name="account"
                />
                <p class="select-box__input-text">myaccount@example.com</p>
              </div>
              <img class="select-box__icon" src={ArrowDown} alt="Arrow Icon" />
            </div>
            <ul class="select-box__list">
              {account.map((val, idx) => {
                return (
                  <li onClick={() => handleChangeAccount(val)}>
                    <label class="select-box__option" for={idx + 1}>
                      {val}
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="file-export-getfile-layout">
          <div className="file-export-getfile-title">File</div>
          <div className="file-export-getfile-content">
            <div className="file-export-getfile-content-left">
              <ReactSVG
                beforeInjection={(svg) => {
                  svg.classList.add("main-component-header-left-icon-content");
                  svg.setAttribute(
                    "style",
                    "width: 3vw; height: 3vw; cursor: pointer"
                  );
                }}
                src={Sheets}
                onClick={handleClick}
              />
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              {selectedFile && (
                <div className="file-export-getfile-content-left-text">
                  {selectedFile.name}
                </div>
              )}
            </div>
            <div className="file-export-getfile-content-right">
              <TabSelection />
              <div
                style={{ display: selectedFile ? "block" : "none" }}
                className="file-export-getfile-content-right"
                onClick={handleRemoveFile}
              >
                <Close sx={{ fontSize: "2.5vw" }} />
              </div>
            </div>
          </div>
        </div>
        <button disabled={!selectedFile} className="file-export-button">
          Export
        </button>
      </div>
    </MainComponent>
  );
};

export default FileExport;

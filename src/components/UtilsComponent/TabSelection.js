import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import { Search, Check } from "@mui/icons-material";
import "../../assets/css/TabSelection.css";
import ArrowDown from "../../assets/img/ic_down.svg";

const TabSelection = () => {
  const [tabSheet] = useState(["Tab 1", "Tab 2", "Tab 3"]);
  const [selectedTab, setSelectedTab] = useState("Tab 1");

  const handleChangeTab = (val) => {
    setSelectedTab(val);
  };

  return (
    <div class="tabselect-box">
      <div class="tabselect-box__current" tabindex="1">
        <div class="tabselect-box__value">
          <input
            class="tabselect-box__input"
            type="radio"
            id="0"
            value="1"
            name="tabselect"
            checked="checked"
          />
          <p class="tabselect-box__input-text">{selectedTab}</p>
        </div>
        <div class="tabselect-box__value">
          <input
            class="tabselect-box__input"
            type="radio"
            id="1"
            value="2"
            name="tabselect"
          />
          <p class="tabselect-box__input-text">Tab 1</p>
        </div>
        <div class="tabselect-box__value">
          <input
            class="tabselect-box__input"
            type="radio"
            id="2"
            value="3"
            name="tabselect"
          />
          <p class="tabselect-box__input-text">Tab 2</p>
        </div>
        <div class="tabselect-box__value">
          <input
            class="tabselect-box__input"
            type="radio"
            id="3"
            value="4"
            name="tabselect"
          />
          <p class="tabselect-box__input-text">Tab 3</p>
        </div>
        <img class="tabselect-box__icon" src={ArrowDown} alt="Arrow Icon" />
      </div>
      <ul class="tabselect-box__list">
        <li>
          {/* Continue in Search bar */}
          <div>Search</div>
        </li>
        {tabSheet.map((val, idx) => {
          return (
            <li onClick={() => handleChangeTab(val)}>
              <label class="tabselect-box__option" for={idx + 1}>
                {val}
              </label>
              {selectedTab === val ? (
                <Check
                  sx={{
                    fontSize: "1.7vw",
                    color: "#2483f4",
                    marginRight: "1.5vw",
                  }}
                />
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TabSelection;

import React, { useState } from "react";
import { Search, Check } from "@mui/icons-material";
import "../../assets/css/TabSelection.css";
import ArrowDown from "../../assets/img/ic_down.svg";

const TabSelection = ({ sendTab }) => {
  const [tabSheet] = useState(["Tab 1", "Tab 2", "Tab 3"]);
  const [selectedTabSheet, setSelectedTabSheet] = useState([
    "Tab 1",
    "Tab 2",
    "Tab 3",
  ]);
  const [selectedTab, setSelectedTab] = useState("Tab 1");

  const openPopUp = () => {
    const elements = document.getElementsByClassName("tabselect-box__list");
    for (var i = 0; i < elements.length; i++) {
      let element = elements[i];
      element.style.opacity = 1;
    }
  };

  const handleBlur = () => {
    const elements = document.getElementsByClassName("tabselect-box__list");
    for (var i = 0; i < elements.length; i++) {
      let element = elements[i];
      element.style.opacity = 0;
    }
  };

  const handleSearch = (e) => {
    if (e.target.value) {
      const newTabSheet = tabSheet.filter((val) =>
        val.includes(e.target.value)
      );
      setSelectedTabSheet(newTabSheet);
    } else {
      setSelectedTabSheet(tabSheet);
    }
  };

  const handleInsideTab = (val) => {
    const elements = document.getElementsByClassName("tabselect-box__list");
    for (var i = 0; i < elements.length; i++) {
      let element = elements[i];
      if (val === "steadyMenu") {
        element.style.opacity = 1;
      } else {
        element.style.opacity = 0;
        setSelectedTab(val);
        sendTab(val);
        if (val === "Tab 3") {
          setTimeout(() => {
            element.style.opacity = 0;
          }, 10);
        }
      }
    }
  };

  return (
    <div class="tabselect-box" onBlur={() => handleBlur()}>
      <div
        class="tabselect-box__current"
        tabindex="1"
        onClick={() => openPopUp()}
      >
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
        <li onClick={() => handleInsideTab("steadyMenu")}>
          <div class="tabselect-search-container">
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => handleSearch(e)}
            />
            <Search
              className="tabselect-search-container-ic"
              sx={{
                fontSize: "2.5vw",
                color: "#888888",
              }}
            />
          </div>
        </li>
        {selectedTabSheet.map((val, idx) => {
          return (
            <li onClick={() => handleInsideTab(val)}>
              <label class="tabselect-box__option" for={idx + 1}>
                {val}{" "}
                {selectedTab === val ? (
                  <Check
                    sx={{
                      fontSize: "1.7vw",
                      color: "#2483f4",
                    }}
                  />
                ) : null}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TabSelection;

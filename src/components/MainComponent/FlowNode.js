import React from "react";
import { ReactSVG } from "react-svg";
import "../../assets/css/FlowNode.css";
import CoinStack from "../../assets/img/ic_coin.svg";
import MainComponent from "./MainComponent";

const FlowNode = () => {
  return (
    <MainComponent>
      <div className="flow-node-button-layout">
        <div className="flow-node-button-icon">
          <ReactSVG
            beforeInjection={(svg) => {
              svg.classList.add("flow-node-button-icon-content");
              svg.setAttribute("style", "width: 2.5vw; height: 2.5vw;");
            }}
            src={CoinStack}
          />
        </div>
        <div className="flow-node-button-text">
          Connect Flow Node to Import to Google Sheets
        </div>
      </div>
    </MainComponent>
  );
};

export default FlowNode;

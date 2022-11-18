import React from "react";
import "./loadingComponent.styles.scss";

function LoadingComponent() {
  return (
    <div className="loading-div">
      <div className="lds-ellipsis">
        <div key="1"></div>
        <div key="2"></div>
        <div key="3"></div>
      </div>
    </div>
  );
}

export default LoadingComponent;

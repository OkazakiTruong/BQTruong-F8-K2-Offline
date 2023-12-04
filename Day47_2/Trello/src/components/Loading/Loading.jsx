import React from "react";
import "./loading.scss";
import loadingGif from "../../assets/gif/Loading_1.gif";

export default function Loading() {
  return (
    <div className="loading-wrapper">
      <div className="loading">
        <img src={loadingGif} alt="loading-gif" />
      </div>
      <div className="layout"></div>
    </div>
  );
}

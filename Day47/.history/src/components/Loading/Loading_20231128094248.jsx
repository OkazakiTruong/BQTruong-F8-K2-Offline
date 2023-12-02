import React from "react";
import "./loading.scss";
import loadingGif from "../../assets/img/Rolling-1s-200px.gif";

export default function Loading() {
  return (
    <div>
      <img src={loadingGif} />
    </div>
  );
}

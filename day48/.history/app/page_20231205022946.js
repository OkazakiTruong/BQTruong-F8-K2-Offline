import React from "react";
import "./ui/style.scss";
import "./home.scss";

export default function page() {
  return (
    <div className="cv-wrapper">
      <div className="cv-heading">BUI QUANG TRUONG - CV</div>
      <div className="cv-body">
        <div className="cv-body-left">
          <div className="avatar">
            <img src="/img/avatar.png" alt="" />
          </div>
          <div>Developer</div>
        </div>
        <div className="cv-body-right"></div>
      </div>
    </div>
  );
}

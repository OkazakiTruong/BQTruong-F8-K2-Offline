import React from "react";
import "./ui/style.scss";
import "./home.scss";

export default function page() {
  return (
    <div className="cv-wrapper">
      <h1 className="cv-heading">BUI QUANG TRUONG - CV</h1>
      <div className="cv-body">
        <div className="cv-body-left">
          <div className="avatar-wrapper">
            <div className="avatar">
              <img src="/img/avatar.png" alt="" />
            </div>
            <div>Developer</div>
          </div>
          <div className="skill-wrapper">
            <h2 className="skill-heading">Các kỹ năng của tôi</h2>
          </div>
        </div>
        <div className="cv-body-right"></div>
      </div>
    </div>
  );
}

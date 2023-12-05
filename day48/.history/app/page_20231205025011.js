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
            <div>
              <b>Kỹ năng làm việc:</b> HTML5, CSS3, JAVASCRIPT, REACT.JS, REDUX,
              FIGMA, PHOTOSHOP,...
            </div>
            <div>
              <b>Kỹ năng khác:</b> Kỹ năng làm việc nhóm tốt, khả năng tư duy
              logic ở mức khá
            </div>
          </div>
          <div className="history-wrapper">
            <h2 className="history-heading">Lịch sử</h2>
            <div>
              <b>2017-2020</b> Học cấp 3 tại Trung Học Phổ Thông Quất Lâm
            </div>
            <div>
              <b></b> Học đại học tại Đại học Mở Hà Nội
            </div>
          </div>
        </div>
        <div className="cv-body-right">
          <div className="contact-wrapper">
            <div className="contact-heading">Thông tin liên hệ</div>
            <div className="contact-body">
              <ul>
                <li>
                  <b>Phone:</b> <a href="#">0977354956</a>
                </li>
                <li>
                  <b>facebook:</b>
                  <a href="https://www.facebook.com/buiquang.truong.737/">
                    https://www.facebook.com/buiquang.truong.737/
                  </a>
                </li>
                <li>
                  <b>Github:</b>
                  <a>https://github.com/OkazakiTruong</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

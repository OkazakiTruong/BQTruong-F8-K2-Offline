import React from "react";
import "./ui/style.scss";
import "./home.scss";

import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react";
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
          <hr />
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
          <hr />
          <div className="history-wrapper">
            <h2 className="history-heading">Lịch sử</h2>
            <div>
              <b>2017-2020:</b> Học cấp 3 tại Trung Học Phổ Thông Quất Lâm
            </div>
            <div>
              <b>2020-hiện tại:</b> Học đại học tại Đại học Mở Hà Nội
            </div>
          </div>
        </div>
        <div className="cv-body-right">
          <div className="contact-wrapper">
            <div className="contact-heading">Thông tin liên hệ</div>
            <div className="contact-body">
              <ul>
                <li>
                  <b>Phone:</b> <a href="tel:0977354956">0977354956</a>
                </li>
                <li>
                  <b>facebook:</b>
                  <a href="https://www.facebook.com/buiquang.truong.737/">
                    <Box>https://www.facebook.com/buiquang.truong.737/</Box>
                  </a>
                </li>
                <li>
                  <b>Github:</b>
                  <a href="https://github.com/OkazakiTruong">
                    https://github.com/OkazakiTruong
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="project-wrapper">
            <div className="project-heading">Các dự án cá nhân</div>
            <div className="project-item">
              <h2>Trello</h2>
              <p>
                Một dự án trello đơn giản, sử dụng các công nghệ: ReactJs,
                Redux, HTML, CSS, JS
              </p>
              <div className="nav">
                <a href="">Link github</a>
                <a href="">Link demo</a>
              </div>
            </div>
            <div className="project-item">
              <h2>Trello</h2>
              <p>
                Một dự án trello đơn giản, sử dụng các công nghệ: ReactJs, Redux
              </p>
              <div className="nav">
                <a href="">Link github</a>
                <a href="">Link demo</a>
              </div>
            </div>
          </div>
          <hr />

          <div className="hobby-wrapper">
            <div className="hobby-heading">Sở thích cá nhân</div>
            <ul>
              <li>Ngủ</li>
              <li>Ngủ</li>
              <li>Ngủ</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

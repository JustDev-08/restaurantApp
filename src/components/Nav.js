import React from "react";
import "./asset/nav.css";

export default function Nav() {
  return (
    <div className="navbar">
      <div className="navbar-con">
        <div className="logo">
          <img src="https://img.icons8.com/doodle/48/000000/cheese--v1.png" />
          <p>Shesss</p>
        </div>
        <div className="list">
          <ul>
            <a href="#menu">
              <li>เมนู</li>
            </a>
            <a href="#about">
              <li>เกี่ยวกับ</li>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100015122056967">
              <li>ติดต่อ</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

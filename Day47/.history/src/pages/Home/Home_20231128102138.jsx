import React from "react";
import "./home.scss";

export default function Home() {
  return (
    <div className="home-wrapper">
      <div className="todo-column">
        <div className="column-header">
          <input type="text" defaultValue="Column 1" className="column-name" />
          <button className="column-delete-btn">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
        <div className="column-main"></div>
        <div className="column-footer"></div>
      </div>
    </div>
  );
}

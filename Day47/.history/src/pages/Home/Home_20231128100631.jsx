import React from "react";
import "./home.scss";

export default function Home() {
  return (
    <div className="home-wrapper">
      <div className="todo-column">
        <div className="column-header">
          <input type="text" defaultValue="Column 1" />
          <button className="column-delete-btn">Xóa</button>
        </div>
      </div>
    </div>
  );
}

import React, { Component } from "react";

export default class TodoList extends Component {
  render() {
    return (
      <div className="todo-app-item">
        <input className="todo" type="text" value={"new task"} readOnly />
        <div className="btn-group">
          <button className="btn-edit">Sửa</button>
          <button className="btn-delete">Xóa</button>
        </div>
      </div>
    );
  }
}

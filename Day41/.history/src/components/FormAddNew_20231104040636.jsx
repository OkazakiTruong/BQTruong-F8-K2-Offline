import React, { Component } from "react";

export default class FormAddNew extends Component {
  render() {
    return (
      <>
        <form className="todo-app-form">
          <div className="todo-app-input-group">
            <input
              className="input-todo"
              type="text"
              placeholder="Thêm mới một công việc"
            />
            <button className="btn-add">Thêm mới</button>
          </div>
        </form>
      </>
    );
  }
}

import React, { Component } from "react";

export default class FormAddNew extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: "" };
  }
  handleAddNew(e) {
    e.preventDefault();
  }
  render() {
    return (
      <>
        <form className="todo-app-form" onSubmit={this.handleAddNew}>
          <div className="todo-app-input-group">
            <input
              className="input-todo"
              type="text"
              placeholder="Thêm mới một công việc"
              name: "todo"
            />
            <button className="btn-add">Thêm mới</button>
          </div>
        </form>
      </>
    );
  }
}

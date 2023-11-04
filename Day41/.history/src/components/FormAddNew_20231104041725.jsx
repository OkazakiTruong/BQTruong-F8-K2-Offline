import React, { Component } from "react";

export default class FormAddNew extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleAddNew(e) {
    e.preventDefault();
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
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
              name="todo"
              onChange={this.handleChange}
            />
            <button className="btn-add">Thêm mới</button>
          </div>
        </form>
      </>
    );
  }
}

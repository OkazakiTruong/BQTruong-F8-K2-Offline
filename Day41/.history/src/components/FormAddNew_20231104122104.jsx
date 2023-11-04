import React, { Component } from "react";
import { client } from "../client";
export default class FormAddNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrTodo: props.arrTodo,
    };
  }
  getCookieName(lists) {
    let arr = lists.split(";");
    let obj = {};
    arr.forEach((item) => {
      item = item.trim();
      let matchResult = item.match(/(.+)=(.+)/);
      if (matchResult) {
        obj[matchResult[1]] = matchResult[2];
      }
    });
    return obj;
  }
  async handleAddNew(e) {
    e.preventDefault();
    const { request, data } = await client.post("/todos", {
      todo: e.target[0].value,
    });
    console.log(data.data);
    this.setState({ arrTodo: [...arrTodo, data.data] });
  }

  componentDidMount() {}

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

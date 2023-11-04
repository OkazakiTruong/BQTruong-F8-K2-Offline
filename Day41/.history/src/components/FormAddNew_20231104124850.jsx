import React, { Component } from "react";
import { client } from "../client";
import TodoList from "./TodoList";
export default class FormAddNew extends TodoList {
  constructor(props) {
    super(props);
    this.state = {
      arrTodo: props.arrTodo,
      getTodoList: props.getTodoList,
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
  handleAddNew = async (e) => {
    e.preventDefault();
    console.log("this:", this);
    const { response, data } = await client.post("/todos", {
      todo: e.target[0].value,
    });
    console.log(data.data);
    if (response.status === 201 || response.status === 201) {
      let { data, response } = await client.get("/todos");
      if (response.status === 200) {
        this.setState({ arrTodo: data.data.listTodo });
      }
    } else {
      alert("Đã có lỗi xảy ra!");
    }
  };

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

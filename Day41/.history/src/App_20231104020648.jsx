import React, { Component } from "react";
import TodoList from "./components/TodoList";
import { client } from "./client";
import "./assets/scss/app.scss";

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
    console.log("constructor");
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
  async alertToGetApiKey() {
    let cookieObj = this.getCookieName(document.cookie);
    if (!cookieObj.Email || cookieObj.Email === null) {
      email = prompt("Nhập email của bạn!");
    } else {
    }
  }
  componentDidMount() {
    console.log("did mount");
  }
  async getData(email) {
    let { data: apiKey } = await client.get(`/api-key?email=${email}`);
    if (apiKey) {
    }
  }

  render() {
    console.log("render");
    this.alertToGetApiKey();
    return (
      <div className="container">
        <div className="todo-app">
          <h1 className="todo-app-heading">Welcome to todo app</h1>
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
          <div className="todo-app-list">
            <TodoList />
          </div>
        </div>
      </div>
    );
  }
}

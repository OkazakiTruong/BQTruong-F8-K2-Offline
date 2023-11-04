import React, { Component } from "react";
import TodoList from "./components/TodoList";
import { client } from "./client";
import "./assets/scss/app.scss";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      arrTodo: [],
    };
    console.log("constructor");
  }
  isLogin = false;
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
  async getKey(email) {
    const { response, data } = await client.get(`/api-key?email=${email}`);
    return { response, data };
  }
  alertToGetApiKey() {
    let cookieObj = this.getCookieName(document.cookie);
    if (!cookieObj.apiKey || cookieObj.apiKey === null) {
      let email = prompt("Vui lòng nhập email của bạn:");
      if (email) {
        this.getKey(email).then((res) => {
          const { response, data } = res;
          console.log(response);
          if (response.status === 200) {
            let apiKey = data.data.apiKey;
            document.cookie = `Email=${email}`;
            document.cookie = `apiKey=${apiKey}`;
            client.setApiKey(apiKey);
            alert(`Chào mừng quay trở lại! ${email}`);
            this.isLogin = true;
          } else {
            alert("Lỗi vui lòng tải lại trang");
            document.cookie = `apiKey=;expires=${new Date().toUTCString()}`;
            document.cookie = `Email=;expires=${new Date().toUTCString()}`;
            this.isLogin = false;
            setTimeout(() => {
              window.location.reload();
            }, 4000);
          }
        });
      }
    } else {
      let email = cookieObj.Email;
      if (!email) {
        document.cookie = `apiKey=;expires=${new Date().toUTCString()}`;
        document.cookie = `Email=;expires=${new Date().toUTCString()}`;
        Window.location.reload();
        this.isLogin = false;
      } else {
        alert(`Chào mừng quay trở lại ${email}`);
        this.isLogin = true;
      }
    }
  }
  async getTodoList() {
    if (this.isLogin) {
      let { data, response } = await client.get("/todos");
      console.log(data);
    }
  }
  componentDidMount() {}

  render() {
    this.alertToGetApiKey();
    this.getTodoList();
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
            {this.isLogin ? (
              <TodoList />
            ) : (
              <div class="todo-item">Không có todo</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

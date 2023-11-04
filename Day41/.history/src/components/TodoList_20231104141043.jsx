import React, { Component } from "react";
import { client } from "../client";
export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props._id,
      todo: props.todo,
      isCompleted: props.isCompleted,
      getTodoList: props.getTodoList,
      isOnlyRead: true,
      isEditing: "",
    };
  }
  handleDelete = async (e) => {
    if (confirm("Bạn có muốn xóa không?")) {
      const { response } = await client.delete(`/todos/${this.state.id}`);
      if (response.status === 200) {
        alert("Xóa thành công!");
        this.state.getTodoList();
      }
    }
  };
  handleEdit = () => {
    this.setState({ isOnlyRead: false, isEditing: this.state.id });
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleExit = () => {
    this.setState({ isOnlyRead: true, isEditing: "" });
  };
  handleUpdate = async (e) => {
    const { response, data } = await client.patch(`/todos/${this.state.id}`, {
      todo: this.state.todo,
      isCompleted: this.state.isCompleted,
    });
    if (response.status === 200) {
      alert("Update thành công!");
      this.state.getTodoList();
    } else {
      alert("Không ổn rồi! Reaload đi");
      document.cookie = `apiKey=;expires=${new Date().toUTCString()}`;
      document.cookie = `Email=;expires=${new Date().toUTCString()}`;
    }
  };
  render() {
    const { id, todo, isCompleted } = this.state;

    return (
      <div className="todo-app-item">
        <input
          className={isCompleted ? "todo completed" : "todo"}
          type="text"
          value={todo}
          name="todo"
          onChange={this.handleChange}
          readOnly={this.state.isEditing === id ? this.state.isEdit : true}
        />
        <div
          className="btn-group"
          style={{ display: this.state.isEditing === id ? "none" : "flex" }}
        >
          <button className="btn-edit" onClick={this.handleEdit}>
            Sửa
          </button>
          <button className="btn-delete" onClick={this.handleDelete}>
            Xóa
          </button>
        </div>
        <div
          className="edit-group"
          style={{ display: this.state.isEditing === id ? "flex" : "none" }}
        >
          <label>
            <input
              type="checkbox"
              name="isCompleted"
              onChange={this.handleChange}
            />
            Hoàn thành
          </label>

          <div className="btn-group">
            <button className="btn-update" onClick={this.handleUpdate}>
              Update
            </button>
            <button className="btn-exit" onClick={this.handleExit}>
              Thoát
            </button>
            <button className="btn-delete" onClick={this.handleDelete}>
              Xóa
            </button>
          </div>
        </div>
      </div>
    );
  }
}

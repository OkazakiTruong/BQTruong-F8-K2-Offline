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
    const { response } = await client.delete(`/todos/${this.state.id}`);
    if (response.status === 200) {
      alert("Xóa thành công!");
      this.state.getTodoList();
    }
  };
  handleEdit = () => {
    this.setState({ isOnlyRead: false, isEditing: this.state.id });
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { id, todo, isCompleted } = this.state;
    return (
      <div className="todo-app-item">
        <input
          className="todo"
          type="text"
          value={todo}
          name="todo"
          onChange={this.handleChange}
          readOnly={this.state.isEditing === id ? this.state.isEdit : true}
        />
        <div className="btn-group">
          {/* <button className="btn-edit" onClick={this.handleEdit}>
            Sửa
          </button>
          <button className="btn-delete" onClick={this.handleDelete}>
            Xóa
          </button> */}
          <div className="edit-group">
            <input type="checkbox" />
            <div>
              <button className="btn-update">Update</button>
              <button className="btn-exit">Thoát</button>
              <button className="btn-delete">Xóa</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

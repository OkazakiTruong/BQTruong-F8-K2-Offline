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
      isEdit: false,
    };
  }
  handleDelete = async (e) => {
    const { response } = await client.delete(`/todos/${this.state.id}`);
    if (response.status === 200) {
      alert("Xóa thành công!");
      this.state.getTodoList();
    }
  };
  // handleEdit = () => {
  //   this.setState({ isEdit: true });
  // };
  render() {
    const { id, todo, isCompleted } = this.state;
    return (
      <div className="todo-app-item">
        <input className="todo" type="text" value={todo} readOnly={isEdit} />
        <div className="btn-group">
          <button className="btn-edit" onClick={this.handleEdit}>
            Sửa
          </button>
          <button className="btn-delete" onClick={this.handleDelete}>
            Xóa
          </button>
        </div>
      </div>
    );
  }
}

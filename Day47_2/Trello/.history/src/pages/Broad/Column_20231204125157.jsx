import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import Task from "./Task";
import { useDispatch } from "react-redux";
import { postTasksNew } from "../../stores/slices/BroadSlice";

export default function Column({ data, provided, tasks }) {
  const dispatch = useDispatch();
  const handleAddANewTask = () => {
    console.log(tasks);
    const id = Math.floor(Math.random() * 100000) + 1;
    const cloneTasks = [
      ...tasks,
      { id: id, content: `task ${tasks.length}`, column: data.column },
    ];
    dispatch(postTasksNew(cloneTasks, data));
  };
  return (
    <div className="column">
      <div className="column-header" {...provided.dragHandleProps}>
        <h2 className="heading">{data.columnName}</h2>
        <button>Delete</button>
      </div>
      <Droppable droppableId={data.column} type="tasks">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={{
              background: snapshot.isDraggingOver ? "#ccc" : "white",
            }}
            className="column-body"
          >
            {tasks.map((task, index) => {
              if (task.column === data.column) {
                return (
                  <Draggable draggableId={task.id} key={task.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Task data={task} />
                      </div>
                    )}
                  </Draggable>
                );
              }
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <div className="column-footer">
        <button onClick={handleAddANewTask}>+ Add a new task</button>
      </div>
      {provided.placeholder}
    </div>
  );
}

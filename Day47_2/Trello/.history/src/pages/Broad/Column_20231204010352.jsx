import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import Task from "./Task";

export default function Column({ data, provided, tasks }) {
  return (
    <div className="column">
      <div className="column-header" {...provided.dragHandleProps}>
        <h2 className="heading">{data.columnName}</h2>
        <button>Delete</button>
      </div>
      <Droppable droppableId={data.column}>
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
                    {(provided) => <Task />}
                  </Draggable>
                );
              }
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <div className="column-footer">
        <button>+ Add a new task</button>
      </div>
      {provided.placeholder}
    </div>
  );
}

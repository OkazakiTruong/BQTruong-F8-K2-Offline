import React, { useEffect } from "react";
import Header from "../../layout/HeaderLayout/Header";
import { toast } from "react-toastify";
import "./broad.scss";
import { useDispatch } from "react-redux";
import { fetchBroad, postTasks } from "../../stores/slices/BroadSlice";
import { useSelector } from "react-redux";
import { broadSelector } from "../../stores/selectors/selectors";
import Loading from "../../components/Loading/Loading";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Column from "./Column";
import broadSlice from "../../stores/slices/BroadSlice";

export default function Broad() {
  const dispatch = useDispatch();
  const broadState = useSelector(broadSelector);
  useEffect(() => {
    toast.success("Welcome to Trello version 2", {
      autoClose: 2000,
    });
    dispatch(fetchBroad());
  }, []);
  useEffect(() => {
    console.log(broadState);
  });
  const handleDraggingColumn = (e) => {
    console.log(e);
    const reorderedColumn = [...broadState.columns];
    const sourceIndex = e.source.index;
    const destinationIndex = e.destination.index;
    const [removeColumn] = reorderedColumn.splice(sourceIndex, 1);
    reorderedColumn.splice(destinationIndex, 0, removeColumn);
    dispatch(broadSlice.actions.updateColumns(reorderedColumn));
  };
  const handleDraggingTask = (e) => {
    console.log(e);
    const reorderedTask = [...broadState.tasks];
    const sourceIndex = e.source.index;
    const destinationIndex = e.destination.index;
    const destinationId = e.destination.droppableId;
    reorderedTask[sourceIndex] = {
      ...reorderedTask[sourceIndex],
      column: destinationId,
    };
    const [removeTask] = reorderedTask.splice(sourceIndex, 1);
    reorderedTask.splice(destinationIndex, 0, removeTask);

    // const tasksPost = [...broadState.columns].map((column) => {
    //   return reorderedTask.filter((task) => {
    //     return task.column === column.column;
    //   });
    // });
    const column = [...broadState.columns];
    console.log("column", column);
    let tasksPost = [];
    for (let i = 0; i < reorderedTask.length; i++) {
      for (let j = 0; j < column.length; j++) {
        if (reorderedTask[i].column === column[j].column) {
          tasksPost = [
            ...tasksPost,
            {
              column: reorderedTask[i].column,
              content: reorderedTask[i].content,
              columnName: column[j].columnName,
            },
          ];
        } else {
          continue;
        }
      }
    }

    console.log(tasksPost);
    // dispatch(postTasks(tasksPost.flat(Infinity)));
  };
  const handleDragEnd = (e) => {
    if (e.type === "columns") {
      handleDraggingColumn(e);
    }
    if (e.type === "tasks") {
      handleDraggingTask(e);
    }
  };
  const handleAddNewColumn = () => {
    const column = Math.floor(Math.random() * 10000) + 1;
    let newColumn = [
      ...broadState.columns,
      {
        column: `${column}`,
        columnName: `Column ${broadState.columns.length}`,
      },
    ];
    dispatch(broadSlice.actions.updateColumns(newColumn));
  };
  return (
    <div>
      <Header />
      {broadState.status === "loading" ? (
        <Loading />
      ) : (
        <div className="broad-wrapper">
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable
              droppableId="broad"
              type="columns"
              direction="horizontal"
            >
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={{
                    border: snapshot.isDraggingOver
                      ? "1px dotted #372f27"
                      : "none",
                    background: snapshot.isDraggingOver ? "#ccc" : "none",
                  }}
                  className="broad-container"
                >
                  {broadState.columns.map((column, index) => {
                    return (
                      <Draggable
                        draggableId={column.column}
                        index={index}
                        key={column.column}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                          >
                            <Column
                              data={column}
                              provided={provided}
                              tasks={broadState.tasks}
                            />
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <button className="btnNewColumn" onClick={handleAddNewColumn}>
            + Add a new column
          </button>
        </div>
      )}
    </div>
  );
}

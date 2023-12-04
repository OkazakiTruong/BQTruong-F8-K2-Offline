import React, { useEffect } from "react";
import Header from "../../layout/HeaderLayout/Header";
import { toast } from "react-toastify";
import "./broad.scss";
import { useDispatch } from "react-redux";
import { fetchBroad } from "../../stores/slices/BroadSlice";
import { useSelector } from "react-redux";
import { broadSelector } from "../../stores/selectors/selectors";
import Loading from "../../components/Loading/Loading";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Column from "./Column";

export default function Broad() {
  const dispatch = useDispatch();
  const broadState = useSelector(broadSelector);
  useEffect(() => {
    toast.success("Welcome to Trello version 2", {
      autoClose: 2000,
    });
    dispatch(fetchBroad());
  }, []);

  return (
    <div>
      <Header />
      {broadState.status === "loading" ? (
        <Loading />
      ) : (
        <div className="broad-wrapper">
          <DragDropContext
            onDragEnd={() => {
              console.log("drag end");
            }}
          >
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
                  {...broadState.columns.map((column, index) => {
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
                            {...provided.dragHandleProps}
                          >
                            <Column data={column} />
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
          <button className="btnNewColumn">+ Add a new column</button>
        </div>
      )}
    </div>
  );
}

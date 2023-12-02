// ... (existing imports)

export default function Home() {
  const [listColumn, setListColumn] = useState([]);
  const columns = useSelector(columnSelector);

  useEffect(() => {
    setListColumn(columns);
  }, [columns]);

  useEffect(() => {
    localStorage.setItem(
      "columns",
      JSON.stringify(
        listColumn.map((column) => {
          return {
            column: column.column,
            columnName: column.columnName,
          };
        })
      )
    );
  }, [listColumn]);

  const handleAddNewColumn = () => {
    const columnNumber = Math.floor(Math.random() * 10000);
    const columnName = "column" + listColumn.length;
    localStorage.setItem(
      "columns",
      JSON.stringify([
        ...listColumn,
        { column: columnNumber, columnName: columnName },
      ])
    );
    const columnsLocal = JSON.parse(localStorage.getItem("columns"));
    setListColumn(columnsLocal);
  };

  return (
    <div className="home-wrapper">
      <DragDropContext
        onDragEnd={() => {
          console.log("drag end");
        }}
      >
        <Droppable droppableId="ROOT" type="group" direction={"horizontal"}>
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="home-wrapper"
            >
              {listColumn.map((column, index) => {
                return (
                  <Draggable
                    draggableId={column.column}
                    key={column.column}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Column data={column} />
                        {snapshot.isDragging && (
                          <div style={{ display: "none" }}>
                            <Column data={column} />
                          </div>
                        )}
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
      <button className="btnAdd" onClick={handleAddNewColumn}>
        Add new column
      </button>
    </div>
  );
}

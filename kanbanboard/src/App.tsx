import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Column from "./components/Column";

const initialState = [
  {
    title: "Todo",
    backgroundColor: "blue",
    todos: [
      { text: "hello", editable: false, editInput: "" },
      { text: "foo", editable: false, editInput: "" },
    ],
  },
  {
    title: "In Progress",
    backgroundColor: "red",
    todos: [
      { text: "hello", editable: false, editInput: "" },
      { text: "foo", editable: false, editInput: "" },
    ],
  },
  {
    title: "Code Review",
    backgroundColor: "green",
    todos: [
      { text: "hello", editable: false, editInput: "" },
      { text: "foo", editable: false, editInput: "" },
    ],
  },
  {
    title: "Done",
    backgroundColor: "purple",
    todos: [
      { text: "hello", editable: false, editInput: "" },
      { text: "foo", editable: false, editInput: "" },
    ],
  },
];

function App() {
  const [data, setData] = React.useState(initialState);

  const handleAddTodo = (columnIndex: number, value: string) => {
    const nextData = [...data];
    nextData[columnIndex].todos.push({
      text: value,
      editable: false,
      editInput: "",
    });
    setData(nextData);
  };

  const handleDeleteTodo = (columnIndex: number, todoIndex: number) => {
    const nextData = [...data];
    nextData[columnIndex].todos.splice(todoIndex, 1);
    setData(nextData);
  };

  const handlePre = (columnIndex: number, todoIndex: number) => {
    const nextData = [...data];
    if (columnIndex > 0)
      nextData[columnIndex - 1].todos.push(
        nextData[columnIndex].todos.splice(todoIndex, 1)[0]
      );
    setData(nextData);
  };

  const handleNext = (columnIndex: number, todoIndex: number) => {
    const nextData = [...data];
    if (columnIndex < nextData.length - 1)
      nextData[columnIndex + 1].todos.push(
        nextData[columnIndex].todos.splice(todoIndex, 1)[0]
      );
    setData(nextData);
  };

  const handleEditable = (columnIndex: number, todoIndex: number) => {
    const nextData = [...data];
    const currentTodo = nextData[columnIndex].todos[todoIndex];
    currentTodo.editable = true;
    currentTodo.editInput = currentTodo.text;
    setData(nextData);
  };

  const handleEditInput = (
    columnIndex: number,
    todoIndex: number,
    value: string
  ) => {
    const nextData = [...data];
    const currentTodo = nextData[columnIndex].todos[todoIndex];
    currentTodo.editInput = value;
    setData(nextData);
  };

  const handleEditConfirm = (columnIndex: number, todoIndex: number) => {
    const nextData = [...data];
    const currentTodo = nextData[columnIndex].todos[todoIndex];
    currentTodo.text = currentTodo.editInput;
    currentTodo.editInput = "";
    currentTodo.editable = false;
    setData(nextData);
  };

  const handleEditCancel = (columnIndex: number, todoIndex: number) => {
    const nextData = [...data];
    const currentTodo = nextData[columnIndex].todos[todoIndex];
    currentTodo.editInput = "";
    currentTodo.editable = false;
    setData(nextData);
  };

  return (
    <div className="App grid grid-cols-4 gap-12 max-w-4xl mx-auto">
      {data.map((column, colIndex) => (
        <Column
          key={colIndex}
          columnIndex={colIndex}
          column={column}
          handleAddTodo={handleAddTodo}
          handleDeleteTodo={handleDeleteTodo}
          handlePre={handlePre}
          handleNext={handleNext}
          handleEditable={handleEditable}
          handleEditInput={handleEditInput}
          handleEditConfirm={handleEditConfirm}
          handleEditCancel={handleEditCancel}
        />
      ))}
    </div>
  );
}

export default App;

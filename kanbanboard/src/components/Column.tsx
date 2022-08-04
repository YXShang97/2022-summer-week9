import React from "react";
import { IColumn } from "../interfaces";
import Item from "./Item";

type Props = {
  columnIndex: number;
  column: IColumn;
  handleAddTodo: (columnIndex: number, value: string) => void;
  handleDeleteTodo: (columnIndex: number, todoIndex: number) => void;
  handlePre: (columnIndex: number, todoIndex: number) => void;
  handleNext: (columnIndex: number, todoIndex: number) => void;
  handleEditable: (columnIndex: number, todoIndex: number) => void;
  handleEditInput: (
    columnIndex: number,
    todoIndex: number,
    value: string
  ) => void;
  handleEditConfirm: (columnIndex: number, todoIndex: number) => void;
  handleEditCancel: (columnIndex: number, todoIndex: number) => void;
};

const Column = (props: Props) => {
  const [input, setInput] = React.useState("");
  return (
    <div>
      <h1 className={`bg-${props.column.backgroundColor}-500`}>
        {props.column.title}
      </h1>
      {props.column.todos.map((todo, todoIndex) => (
        <Item
          key={todoIndex}
          columnIndex={props.columnIndex}
          todoIndex={todoIndex}
          todo={todo}
          handleDeleteTodo={props.handleDeleteTodo}
          handlePre={props.handlePre}
          handleNext={props.handleNext}
          handleEditable={props.handleEditable}
          handleEditInput={props.handleEditInput}
          handleEditConfirm={props.handleEditConfirm}
          handleEditCancel={props.handleEditCancel}
        />
      ))}
      <div className="grid grid-cols-4">
        <input
          type="text"
          placeholder="Enter some value"
          className="col-span-3"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button
          onClick={() => {
            props.handleAddTodo(props.columnIndex, input);
            setInput("");
          }}
        >
          add
        </button>
      </div>
    </div>
  );
};

export default Column;

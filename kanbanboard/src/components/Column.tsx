import React from "react";
import { IColumn } from "../interfaces";
import Item from "./Item";
import { ArrowRightIcon } from "@heroicons/react/outline";

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
    <div className="Column w-full">
      <h1
        style={{ backgroundColor: props.column.backgroundColor }}
        className={`${props.column.backgroundColor} text-lg font-extrabold text-center text-white font-mono rounded-t-xl py-2`}
      >
        {/* 如何通过`${}`设置className? */}
        {props.column.title}
      </h1>
      <div className="w-full bg-slate-100 h-96 py-1">
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
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Enter some value"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              props.handleAddTodo(props.columnIndex, input);
              setInput("");
            }
          }}
          className="w-full py-2.5 px-4 rounded-b-xl shadow-2xl"
        />
        <ArrowRightIcon
          onClick={() => {
            props.handleAddTodo(props.columnIndex, input);
            setInput("");
          }}
          className="h-6 text-gray-400 absolute right-3 bottom-2.5"
        >
          add
        </ArrowRightIcon>
      </div>
    </div>
  );
};

export default Column;

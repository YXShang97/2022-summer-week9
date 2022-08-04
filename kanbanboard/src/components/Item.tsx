import { Todo } from "../interfaces";

type Props = {
  columnIndex: number;
  todoIndex: number;
  todo: Todo;
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

const Item = (props: Props) => {
  return (
    <div className="Item grid grid-cols-4 justify-between">
      <button
        onClick={() => props.handlePre(props.columnIndex, props.todoIndex)}
      >
        pre
      </button>
      {props.todo.editable ? (
        <input
          value={props.todo.editInput}
          onChange={(event) =>
            props.handleEditInput(
              props.columnIndex,
              props.todoIndex,
              event.target.value
            )
          }
          onKeyDown={(e) => {
            if (e.key === "Enter")
              props.handleEditConfirm(props.columnIndex, props.todoIndex);
          }}
          onBlur={() =>
            props.handleEditCancel(props.columnIndex, props.todoIndex)
          }
        />
      ) : (
        <p
          onClick={() => {
            props.handleEditable(props.columnIndex, props.todoIndex);
          }}
        >
          {props.todo.text}
        </p>
      )}
      <button
        onClick={() => props.handleNext(props.columnIndex, props.todoIndex)}
      >
        next
      </button>
      <button
        onClick={() =>
          props.handleDeleteTodo(props.columnIndex, props.todoIndex)
        }
      >
        delete
      </button>
    </div>
  );
};
export default Item;

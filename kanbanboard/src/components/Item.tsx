import { Todo } from "../interfaces";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  TrashIcon,
} from "@heroicons/react/outline";

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
    <div className="Item flex w-full px-1.5 py-1 hover:space-x-2 group">
      <div className="bg-white rounded-xl w-full flex justify-between items-center py-2.5 px-4 font-bold hover:bg-gray-50 duration-200 cursor-pointer group-hover:w-3/4">
        <ChevronLeftIcon
          onClick={() => props.handlePre(props.columnIndex, props.todoIndex)}
          className="w-5"
        >
          Prev
        </ChevronLeftIcon>
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
        <ChevronRightIcon
          onClick={() => props.handleNext(props.columnIndex, props.todoIndex)}
          className="w-5"
        >
          Next
        </ChevronRightIcon>
      </div>
      <div
        onClick={() =>
          props.handleDeleteTodo(props.columnIndex, props.todoIndex)
        }
        className="w-0 group-hover:w-1/4 flex justify-center items-center duration-75 bg-red-500 rounded-xl"
      >
        <TrashIcon className="h-5 text-white">Delete</TrashIcon>
      </div>
    </div>
  );
};
export default Item;

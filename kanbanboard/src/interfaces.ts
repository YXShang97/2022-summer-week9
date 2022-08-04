export interface Todo {
  text: string;
  editable: boolean;
  editInput: string;
}

export interface IColumn {
  title: string;
  backgroundColor: string;
  todos: Todo[];
}

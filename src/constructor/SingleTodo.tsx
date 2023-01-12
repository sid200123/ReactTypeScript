import React, { useState } from "react";
import { MdCancel, MdDelete, MdDone, MdEdit } from "react-icons/md";
import swal from "sweetalert";
import { Todo } from "../interface/model";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDestroy = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };
  return (
    <form onSubmit={(e) => handleEdit(e, todo.id)}>
      <div className="row px-4 d-flex align-items-center ">
        <div className="col -md-6 d-flex align-items-center">
          {edit ? (
            <div>
              <input
                type="text"
                className="form-control"
                value={editTodo}
                onChange={(e) => {
                  setEditTodo(e.target.value);
                }}
              />
              <button type="submit" className="btn btn-primary d-none">
                Save
              </button>
            </div>
          ) : (
            <span className="w-100">{todo.todo}</span>
          )}
        </div>
        <div className="col-md-2">
          <span
            className="btn btn-secondary"
            onClick={() => {
              if (!edit && !todo.isDone) {
                setEdit(!edit);
              }
              if (!edit && todo.isDone) {
                swal("Error", "Plese Add this task to UnComplteTask", "error");
              }
            }}
          >
            <MdEdit />
          </span>
        </div>
        <div className="col-md-2">
          <button
            className="btn btn-danger"
            onClick={() => handleDestroy(todo.id)}
          >
            <MdDelete />
          </button>
        </div>
        <div className="col-md-2">
          {todo.isDone ? (
            <button
              className="btn btn-danger"
              onClick={() => handleDone(todo.id)}
            >
              <MdCancel />
            </button>
          ) : (
            <button
              className="btn btn-success"
              onClick={() => handleDone(todo.id)}
            >
              <MdDone />
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

export default SingleTodo;

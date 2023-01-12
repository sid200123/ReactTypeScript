import React from "react";
import { Todo } from "../interface/model";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const CompleteTodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div
      className="container mt-4 bg-light p-4 rounded overflow-scroll shadow"
      style={{ height: "30vh",scrollBehavior:"smooth" }}
    >
      <div className="mb-4">CompleteTodoList</div>
      <div className="row">
        {todos.map(
          (todo) =>
            todo.isDone !== false && (
              <div className="col-md-5 m-1 p-2 card">
                <SingleTodo
                  todo={todo}
                  key={todo.id}
                  todos={todos}
                  setTodos={setTodos}
                />
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default CompleteTodoList;

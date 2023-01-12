import React, { useState } from "react";
import CompleteTodoList from "./constructor/CompleteTodoList";
import InputFeild from "./constructor/InputFeild";
import TodoList from "./constructor/TodoList";
import { Todo } from "./interface/model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos((prev) => [
        ...prev,
        {
          id: Date.now(),
          todo: todo,
          isDone: false,
        },
      ]);
      setTodo("");
      console.log(todos);
    }
  };
  return (
    <div className="text-center bg-success pt-3" style={{ height: "100vh" }}>
      <h1 className="text-uppercase text-white">Taskify</h1>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <div className="container">
        <TodoList todos={todos} setTodos={setTodos} />
        <CompleteTodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default App;

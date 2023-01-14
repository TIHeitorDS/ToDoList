import React, { Fragment, useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (todo.text === "") return;
    const newTodo = [todo, ...todos];

    setTodos(newTodo);
  };

  const updatedTodo = (id, modifiedTodo) => {
    if (!modifiedTodo.value) return;

    setTodos((list) =>
      list.map((todo, index) => (index === id ? modifiedTodo : todo))
    );
  };

  const deleteTodo = (todo) => {
    const removedTodo = todos.filter((del) => del !== todo);

    setTodos(removedTodo);
  };

  return (
    <Fragment>
      <TodoForm onSubmit={addTodo} />
      <ul className="">
        <Todo todos={todos} submitTodo={updatedTodo} remove={deleteTodo} />
      </ul>
    </Fragment>
  );
}

import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text) return;
    const newTodo = [todo, ...todos];

    setTodos(newTodo);
  };

  const completeTodo = (id) => {
    let updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = todo.isComplete;
      }
      return todo;
    });

    setTodos(updateTodos);
  };

  const removeTodo = (id) => {
    const delTodo = [...todos].filter((todo) => todo.id !== id);

    setTodos(delTodo);
  };

  const updateTodo = (todoId, todoValue) => {
    if (!todoValue.text) return;

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? todoValue : item))
    );
  };

  return (
    <div>
      <h1>What's the plan today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
    </div>
  );
};

export default TodoList;

import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import TodoForm from "./TodoForm";

const Todo = (props) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    props.updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) return <TodoForm edit={edit} onSubmit={submitUpdate} />;

  return props.todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => props.completeTodo(todo.Id)}>
        {todo.text}
      </div>

      <div className="icons">
        <RiCloseLine
          className="delete-icon"
          onClick={() => props.removeTodo(todo.id)}
        />
        <BiEdit
          className="edit-icon"
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        />
      </div>
    </div>
  ));
};

export default Todo;

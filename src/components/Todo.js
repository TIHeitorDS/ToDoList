import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { TiDelete } from "react-icons/ti";
import TodoForm from "./TodoForm";

export default function Todo(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const editedTodo = (newTodo) => {
    props.submitTodo(edit.id, newTodo);

    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.value !== "") return <TodoForm onSubmit={editedTodo} />;
  return props.todos.map((todo, index) => (
    <li className="todo-row" key={index}>
      {todo.text}
      <div className="icons">
        <button
          className="edit-icon"
          onClick={() => setEdit({ value: todo.text, id: index })}
        >
          <AiFillEdit />
        </button>

        <button
          className="delete-icon"
          onClick={() => {
            props.remove(todo);
          }}
        >
          <TiDelete />
        </button>
      </div>
    </li>
  ));
}

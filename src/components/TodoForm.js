import React, { useState } from "react";

export default function TodoForm(props) {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      text: input,
    });

    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type={"text"}
        placeholder="Add a todo"
        value={input}
        onChange={handleChange}
      ></input>
      <button className="todo-button">Add todo</button>
    </form>
  );
}

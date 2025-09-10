import { useState } from "react";

export default function ToDoInput(props) {
  const { handleAddTodos, todoValue, setToDoValue } = props;

  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setToDoValue(e.target.value);
        }}
        type="text"
        placeholder="Enter a todo...."
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          setToDoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}

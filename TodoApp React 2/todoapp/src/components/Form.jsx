import { useState } from "react";
import styles from "../css/form.module.css";

export default function Form({ todos, setTodos }) {
  //const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(event) {
    event.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <input
        className={styles.formInput}
        onChange={(event) => setTodo({ name: event.target.value, done: false })}
        type="text"
        value={todo.name}
        placeholder="Enter todo item..."
      />
      <button className={styles.formButton} type="submit">
        Add
      </button>
    </form>
  );
}

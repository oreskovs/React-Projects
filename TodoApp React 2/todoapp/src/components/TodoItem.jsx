import styles from "../css/todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function deleteTodo(item) {
    console.log("Todo deleted for item ", item);
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClick(name) {
    const newArr = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );

    setTodos(newArr);
  }

  const className = item.done ? styles.completed : "";

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button onClick={() => deleteTodo(item)} className={styles.deleteBtn}>
            x
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}

import { useState } from "react";

export default function TodoItem({ todo, dispatch }) {
  const [editText, setEditText] = useState(todo.text);

  function handleToggleComplete() {
    dispatch({ type: "toggle-complete", payload: todo.id });
  }

  function handleDelete() {
    dispatch({ type: "delete", payload: todo.id });
  }

  function handleStartEdit() {
    setEditText(todo.text);
    dispatch({ type: "start-edit", payload: todo.id });
  }

  function handleSave() {
    dispatch({
      type: "save-edit",
      payload: { id: todo.id, text: editText },
    });
  }

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggleComplete}
      />

      {!todo.isEditing && (
        <>
          <span className="todo-text">{todo.text}</span>
          <button onClick={handleStartEdit}>Edit</button>
          <button onClick={handleDelete} disabled={!todo.completed}>
            Delete
          </button>
        </>
      )}

      {todo.isEditing && (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      )}
    </li>
  );
}
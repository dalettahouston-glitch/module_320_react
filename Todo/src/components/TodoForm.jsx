import { useState } from "react";

export default function TodoForm({ dispatch }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "add", payload: text });
    setText("");
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
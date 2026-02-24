import TodoItem from "./TodoItem";

export default function TodoList({ todos, dispatch }) {
  if (todos.length === 0) {
    return <p className="empty">No todos yet. Add one above!</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </ul>
  );
}
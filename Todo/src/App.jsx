import { useReducer } from "react";
import { todoReducer } from "./reducers/todoReducer";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./index.css";

export default function App() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <div className="app">
      <h1>To Do List</h1>
      <TodoForm dispatch={dispatch} />
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  );
}
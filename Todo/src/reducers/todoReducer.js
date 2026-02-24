export function todoReducer(state, action) {
  switch (action.type) {
    case "add": {
      const text = action.payload.trim();
      if (!text) return state;
      const newTodo = {
        id: crypto.randomUUID(),
        text,
        completed: false,
        isEditing: false,
      };
      // New todos at the top
      return [newTodo, ...state];
    }

    case "toggle-complete": {
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    }

    case "delete": {
      return state.filter((todo) => todo.id !== action.payload);
    }

    case "start-edit": {
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isEditing: true }
          : todo
      );
    }

    case "save-edit": {
      const { id, text } = action.payload;
      return state.map((todo) =>
        todo.id === id
          ? { ...todo, text: text.trim(), isEditing: false }
          : todo
      );
    }

    default:
      return state;
  }
}
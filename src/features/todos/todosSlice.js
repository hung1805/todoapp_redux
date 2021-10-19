const initialState = [];
const nextTodoId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case "todos/todosAdded":
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          isCompleted: false,
        },
      ];
    case "todos/todosToggled":
      return state.map((todo) => {
        if (todo.id !== action.payload) return todo;
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      });
    default:
      return state;
  }
}

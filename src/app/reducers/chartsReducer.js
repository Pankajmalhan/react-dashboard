import { INITIAL_STATE } from "../store/state";

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TODO_REQUEST":
      return { ...state, loading: true };
    case "ADD_TODO":
      let newToDo = { id: action.payload.id, name: action.payload.name };
      state = { todos: [newToDo, ...state.todos], loading: false };
      return state;

    case "ADD_TODO_FAILURE":
      return { ...state, loading: false };
    case "DELETE_TODO_REQUEST":
      return { ...state, loading: true };
    case "DELETE_TODO":
      let list = state.todos.filter(listItem => listItem.id !== action.payload);
      state = { todos: list, loading: false };
      return state;
    case "DELETE_TODO_FAILURE":
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default reducer;

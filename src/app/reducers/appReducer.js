import { INITIAL_STATE } from "../store/state";
import {
  FETCH_COUNT,
  FETCH_ITEM_FAILURE,
  FETCH_ITEM_REQUEST
} from "../actions/dashBoardActions";

//reducer
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ITEM_REQUEST:
      return { ...state, loading: true };
    case FETCH_COUNT:
      // let newToDo = { id: action.payload.id, name: action.payload.name };
      state = { ...state, count: action.payload, loading: false };
      return state;

    case FETCH_ITEM_FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
};

//Put the selector inside the corresponding reducer
export const getAppDataSelector = state => {
  return state.app;
};
export default reducer;

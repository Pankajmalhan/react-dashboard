import { INITIAL_STATE } from "../store/state";
import { LOAD_JOBS_DATA } from "../actions/appActions";

//reducer
const reducer = (state = INITIAL_STATE.app, action) => {
  switch (action.type) {
    case LOAD_JOBS_DATA:
      return Object.assign({}, state, { jobs: action.payload })
    default:
      return state;
  }
};

//Put the selector inside the corresponding reducer
export const getAppDataSelector = state => {
  return state.app;
};

export const jobsList = state => {
  return state.jobs;
};
export default reducer;


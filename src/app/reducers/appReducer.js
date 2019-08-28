import { INITIAL_STATE } from "../store/state";
import {
  LOAD_JOBS_DATA,
  LOAD_SELECTED_JOB_DATA,
  CHANGE_LOADING_STATUS
} from "../actions/appActions";

//reducer
const reducer = (state = INITIAL_STATE.app, action) => {
  switch (action.type) {
    case LOAD_JOBS_DATA:
      return Object.assign({}, state, { jobs: action.payload })
    case LOAD_SELECTED_JOB_DATA:
      return Object.assign({}, state, { selectedJobData: action.payload })
    case CHANGE_LOADING_STATUS:
      return Object.assign({}, state, { isLoading: action.payload })
    default:
      return state;
  }
};

//Put the selector inside the corresponding reducer
export const getAppDataSelector = state => {
  return state.app;
};

export const jobsList = state => {
  return state.app.jobs;
};

export const getJobData = state => {
  return state.app.selectedJobData;
};

export const getLoadingStatus = state => {
  return state.app.isLoading;
};

export default reducer;


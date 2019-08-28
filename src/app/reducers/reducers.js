import { combineReducers } from "redux";
import reportReducer from "./reportReducer";
import AppReducer from "./appReducer";

const rootReducer = combineReducers({
  report: reportReducer,
  app: AppReducer
});

export default rootReducer;

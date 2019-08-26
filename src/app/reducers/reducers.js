import { combineReducers } from "redux";
import chartReducer from "./chartsReducer";
import menuReducer from "./menuReducer";
import reportReducer from "./reportReducer";
import AppReducer from "./appReducer";

const rootReducer = combineReducers({
  charts: chartReducer,
  menu: menuReducer,
  report: reportReducer,
  app: AppReducer
});

export default rootReducer;

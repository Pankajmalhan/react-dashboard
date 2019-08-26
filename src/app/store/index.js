import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../reducers/reducers";

export default createStore(rootReducer, applyMiddleware(thunk));

// combineReducers({charts:chartReducer,menu:menuReducer,report:reportReducer})

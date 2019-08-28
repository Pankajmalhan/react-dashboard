import { createStore, applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from 'redux-logger';
import rootReducer from "../reducers/reducers";
import { INITIAL_STATE } from "./state";

const loggerMiddleware = createLogger();

var middlewares = []
if (process.env.NODE_ENV == "development") {
    middlewares = [thunk, loggerMiddleware]
} else {
    middlewares = [thunk]
}

const composables = [applyMiddleware(...middlewares),
    window.devToolsExtension ?window.devToolsExtension() : f=>f
    ];
const enhancer = compose(... composables);

export default createStore(rootReducer,INITIAL_STATE, enhancer);


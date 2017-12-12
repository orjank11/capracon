import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import reducer from "./ducks";

const middleware = applyMiddleware(promise(), thunk);

export default createStore(reducer, middleware);

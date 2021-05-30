import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import getArtReducer from "./art/reducers";

const reducers = combineReducers({
  art: getArtReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;

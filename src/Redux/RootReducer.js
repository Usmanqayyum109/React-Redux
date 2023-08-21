import Reducer from "./Reducer";
import { MyReducer } from "./Reducer";

import { combineReducers } from "redux";

const RootReducer = combineReducers({
  Reducer,
  MyReducer,
});

export default RootReducer;

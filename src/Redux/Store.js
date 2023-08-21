import RootReducer from "./RootReducer";

import { createStore } from "redux";

const Store = createStore(RootReducer);

export default Store;

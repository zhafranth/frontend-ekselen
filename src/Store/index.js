import { combineReducers, createStore } from "redux";
import kategoriReducer from "./Reducers/kategoriReducer";
import kelasReducer from "./Reducers/kelasReducer";

const reducer = combineReducers({
  kategoriReducer,
  kelasReducer,
});

const store = createStore(reducer);
export default store;

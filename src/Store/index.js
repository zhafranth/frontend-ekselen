import { combineReducers, createStore } from "redux";
import kategoriReducer from "./Reducers/kategoriReducer";
import kelasReducer from "./Reducers/kelasReducer";
import materiReducer from "./Reducers/materiReducer";
import loginReducer from "./Reducers/loginReducer";

const reducer = combineReducers({
  kategoriReducer,
  kelasReducer,
  materiReducer,
  loginReducer,
});

const store = createStore(reducer);
export default store;

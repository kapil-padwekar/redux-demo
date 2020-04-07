import { combineReducers } from "redux";
import isLoggedReducer from "./isLogged";
import counterReducer from "./counter";

export const rootReducer = combineReducers({
  isLoggedReducer,
  counterReducer,
});

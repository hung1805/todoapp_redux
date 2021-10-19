import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducer";
import { print1, print2, print3 } from "./exampleAddons/middleware";
// let preloadedState;
// const persistedTodoString = localStorage.getItem("todos");
// if (persistedTodoString) {
//   preloadedState = {
//     todos: JSON.parse(persistedTodoString),
//   };
// }
const composedEnhancer = composeWithDevTools(
  applyMiddleware(print1, print2, print3)
);
const store = createStore(rootReducer, composedEnhancer);

export default store;

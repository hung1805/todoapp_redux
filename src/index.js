import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store";
// console.log("Initial State: ", store.getState());

// //subcribe() return a function for unregistering the listener
// const unsubcribe = store.subscribe(() => {
//   console.log("State after dispatch:", store.getState());
// });
store.dispatch({
  type: "todos/todosAdded",
  payload: "Lear about actions",
});
//Dispatch some actions
//To trigger a state change we use dispatch() function. dispatch() take a action as an argument

// store.dispatch({
//   type: "todos/todosAdded",
//   payload: "Learn about the action",
// });
// store.dispatch({
//   type: "todos/todosAdded",
//   payload: "Learn about the store",
// });
// store.dispatch({
//   type: "todos/todosAdded",
//   payload: "Learn about the reducers",
// });
// store.dispatch({
//   type: "todos/todosToggled",
//   payload: 0,
// });
// store.dispatch({
//   type: "todos/todosToggled",
//   payload: 2,
// });
// store.dispatch({
//   type: "filters/statusFilterChanged",
//   payload: "Active",
// });

// //Stop listen to state updates
// unsubcribe();

// store.dispatch({
//   type: "todos/todosAdded",
//   payload: "Learn about the combineReducer",
// });

ReactDOM.render(<App />, document.getElementById("root"));

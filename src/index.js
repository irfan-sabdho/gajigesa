import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  min: 100,
  salary: 5000000,
  step: 100,
  value: 5000000 * 0.5,
  color: "#ffe4d6;",
};

//reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_VALUE":
      return {
        ...state,
        value: action.newValue,
      };
    case "SELECTED_ACC":
      return {
        ...state,
        salary: action.newSalary,
        value: action.newValue,
        color: action.newColor,
      };
    default:
      return state;
  }
};

//store
const storeReducer = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={storeReducer}>
    <App />
  </Provider>
);

reportWebVitals();

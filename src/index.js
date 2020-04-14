import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

const animalsReducerInitialState = {
  animalsList: [],
  currentAnimal: "",
};

const animalsReducer = (state = animalsReducerInitialState, action) => {
  if (action.type === "ADD_ANIMAL") {
    return {
      ...state,
      animalsList: [...state.animalsList, action.payload],
    };
  }

  if (action.type === "SET_CURRENT_ANIMAL") {
    return {
      ...state,
      currentAnimal: action.payload,
    };
  }

  return state;
};

const storeInstance = createStore(combineReducers({ animalsReducer }));

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);

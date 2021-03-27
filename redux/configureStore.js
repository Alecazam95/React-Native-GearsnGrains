import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { pizzas } from "./pizzas";
import { breads } from "./breads";
import { beverages } from "./beverages";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      pizzas,
      breads,
      beverages,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};

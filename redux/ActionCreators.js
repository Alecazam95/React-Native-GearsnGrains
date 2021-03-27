import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

export const fetchPizzas = () => (dispatch) => {
  dispatch(pizzasLoading());

  return fetch(baseUrl + "pizzas")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((pizzas) => dispatch(addPizzas(pizzas)))
    .catch((error) => dispatch(pizzasFailed(error.message)));
};

export const pizzasLoading = () => ({
  type: ActionTypes.PIZZAS_LOADING,
});

export const pizzasFailed = (errMess) => ({
  type: ActionTypes.PIZZAS_FAILED,
  payload: errMess,
});

export const addPizzas = (pizzas) => ({
  type: ActionTypes.ADD_PIZZAS,
  payload: pizzas,
});

export const fetchBreads = () => (dispatch) => {
  dispatch(breadsLoading());

  return fetch(baseUrl + "breads")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((breads) => dispatch(addbreads(breads)))
    .catch((error) => dispatch(breadsFailed(error.message)));
};

export const breadsLoading = () => ({
  type: ActionTypes.BREADS_LOADING,
});

export const breadsFailed = (errMess) => ({
  type: ActionTypes.BREADS_FAILED,
  payload: errMess,
});

export const addbreads = (breads) => ({
  type: ActionTypes.ADD_BREADS,
  payload: breads,
});

export const fetchBeverages = () => (dispatch) => {
  dispatch(beveragesLoading());

  return fetch(baseUrl + "beverages")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((beverages) => dispatch(addbeverages(beverages)))
    .catch((error) => dispatch(beveragesFailed(error.message)));
};

export const beveragesLoading = () => ({
  type: ActionTypes.BEVERAGES_LOADING,
});

export const beveragesFailed = (errMess) => ({
  type: ActionTypes.BEVERAGES_FAILED,
  payload: errMess,
});

export const addbeverages = (beverages) => ({
  type: ActionTypes.ADD_BEVERAGES,
  payload: beverages,
});

export const fetchMenu = () => (dispatch) => {
  dispatch(menuLoading());

  return fetch(baseUrl + "menu")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((menu) => dispatch(addMenu(menu)))
    .catch((error) => dispatch(menuFailed(error.message)));
};

export const menuLoading = () => ({
  type: ActionTypes.MENU_LOADING,
});

export const menuFailed = (errMess) => ({
  type: ActionTypes.MENU_FAILED,
  payload: errMess,
});

export const addMenuItems = (menuItems) => ({
  type: ActionTypes.ADD_MENU,
  payload: menuItems,
});

export const postCart = (menuItemId) => (dispatch) => {
  setTimeout(() => {
    dispatch(addCart(menuItemId));
  });
};

export const addCart = (menuItemId) => ({
  type: ActionTypes.ADD_CART,
  payload: menuItemId,
});

export const deleteCart = (menuItemId) => ({
  type: ActionTypes.DELETE_CART,
  payload: menuItemId,
});

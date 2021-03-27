import * as ActionTypes from "./ActionTypes";

export const pizzas = (
  state = { isLoading: true, errMess: null, pizzas: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_PIZZAS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        pizzas: action.payload,
      };

    case ActionTypes.PIZZAS_LOADING:
      return { ...state, isLoading: true, errMess: null, pizzas: [] };

    case ActionTypes.PIZZAS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};

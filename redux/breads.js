import * as ActionTypes from "./ActionTypes";

export const breads = (
  state = { isLoading: true, errMess: null, breads: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_BREADS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        breads: action.payload,
      };

    case ActionTypes.BREADS_LOADING:
      return { ...state, isLoading: true, errMess: null, breads: [] };

    case ActionTypes.BREADS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};

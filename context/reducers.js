import * as actionTypes from "./actionTypes";

export const initialState = {
  appLanguage: "English",
};

const setLanguage = (state, action) => {
  return { ...state, appLanguage: action.payload };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_LANGUAGE:
      return setLanguage(state, action);
    default:
      return state;
  }
};

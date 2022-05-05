import * as actionTypes from "./actionTypes";

export const changeLanguage = (lang) => {
  return { type: actionTypes.SET_LANGUAGE, payload: lang };
};

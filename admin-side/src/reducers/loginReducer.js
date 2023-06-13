import { LOGIN, LOGIN_FAILED } from "../actions/actionTypes";

const initialState = {
  isLoggedIn: false,
  errorMessage: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;

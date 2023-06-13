import { FETCH_MOVIES, FETCH_MOVIES_FAILED } from "../actions/actionTypes";

const initialState = {
  movies: [],
  errorMessage: "",
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case FETCH_MOVIES_FAILED:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;

import { ADD_MOVIE, ADD_MOVIE_FAILED } from "../actions/actionTypes";

const initialState = {
  newMovie: {},
  errorMessage: "",
};

const addMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        newMovie: action.payload,
      };
    case ADD_MOVIE_FAILED:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default addMovieReducer;

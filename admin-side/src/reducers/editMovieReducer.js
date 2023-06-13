import { EDIT_MOVIE, EDIT_MOVIE_FAILED } from "../actions/actionTypes";

const initialState = {
  movieEditData: {},
  errorMessage: "",
};

const editMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_MOVIE:
      return {
        ...state,
        movieEditData: action.payload,
      };
    case EDIT_MOVIE_FAILED:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default editMovieReducer;

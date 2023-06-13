import { DELETE_MOVIE, DELETE_MOVIE_FAILED } from "../actions/actionTypes";

const initialState = {
  deletedMovie: "",
  errorMessage: "",
};

const deleteMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_MOVIE:
      return {
        ...state,
        deletedMovie: action.payload,
      };
    case DELETE_MOVIE_FAILED:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default deleteMovieReducer;

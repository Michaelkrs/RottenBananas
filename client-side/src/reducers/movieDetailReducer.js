import {
  FETCH_MOVIE_DETAIL,
  FETCH_MOVIE_DETAIL_FAILED,
} from "../actions/actionTypes";

const initialState = {
  movie: {},
  errorMessage: "",
};

const movieDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_DETAIL:
      return {
        ...state,
        movie: action.payload,
      };
    case FETCH_MOVIE_DETAIL_FAILED:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default movieDetailReducer;

import {
  FETCH_MOVIE_CASTS,
  FETCH_MOVIE_DETAIL,
  FETCH_MOVIE_DETAIL_FAILED,
} from "../actions/actionTypes";

const initialState = {
  movieDetail: {},
  castsList: [],
  errorMessage: "",
};

const movieDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_DETAIL:
      return {
        ...state,
        movieDetail: action.payload,
      };
    case FETCH_MOVIE_CASTS:
      return {
        ...state,
        castsList: action.payload,
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

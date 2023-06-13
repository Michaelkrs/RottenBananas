import { FETCH_GENRES, FETCH_GENRES_FAILED } from "../actions/actionTypes";

const initialState = {
  genres: [],
  errorMessage: "",
};

const genreReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case FETCH_GENRES_FAILED:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default genreReducer;

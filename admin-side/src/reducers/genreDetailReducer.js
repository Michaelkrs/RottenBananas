import { GENRE_DETAIL, GENRE_DETAIL_FAILED } from "../actions/actionTypes";

const initialState = {
  genreDetail: {},
  errorMessage: "",
};

const genreDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GENRE_DETAIL:
      return {
        ...state,
        genreDetail: action.payload,
      };
    case GENRE_DETAIL_FAILED:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default genreDetailReducer;

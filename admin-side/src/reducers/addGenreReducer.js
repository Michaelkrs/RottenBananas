import { ADD_GENRE, ADD_GENRE_FAILED } from "../actions/actionTypes";

const initialState = {
  newGenre: {},
  errorMessage: "",
};

const addGenreReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GENRE:
      return {
        ...state,
        newGenre: action.payload,
      };
    case ADD_GENRE_FAILED:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default addGenreReducer;

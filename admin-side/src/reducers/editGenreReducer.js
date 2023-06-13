import { EDIT_GENRE, EDIT_GENRE_FAILED } from "../actions/actionTypes";

const initialState = {
  editedGenre: {},
  errorMessage: "",
};

const editGenreReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_GENRE:
      return {
        ...state,
        editedGenre: action.payload,
      };
    case EDIT_GENRE_FAILED:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default editGenreReducer;

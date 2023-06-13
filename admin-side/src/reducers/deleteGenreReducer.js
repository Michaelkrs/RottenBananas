import { DELETE_GENRE, DELETE_GENRE_FAILED } from "../actions/actionTypes";

const initialState = {
  deleteSuccess: "",
  errorMessage: "",
};

const deleteGenreReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_GENRE:
      return {
        ...state,
        deleteSuccess: action.payload,
      };
    case DELETE_GENRE_FAILED:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default deleteGenreReducer;

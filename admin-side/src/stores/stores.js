import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import movieReducer from "../reducers/movieReducer";
import genreReducer from "../reducers/genreReducer";
import addMovieReducer from "../reducers/addMovieReducer";
import movieDetailReducer from "../reducers/movieDetailReducer";
import editMovieReducer from "../reducers/editMovieReducer";
import deleteMovieReducer from "../reducers/deleteMovieReducer";
import addGenreReducer from "../reducers/addGenreReducer";
import genreDetailReducer from "../reducers/genreDetailReducer";
import editGenreReducer from "../reducers/editGenreReducer";
import deleteGenreReducer from "../reducers/deleteGenreReducer";
import loginReducer from "../reducers/loginReducer";
import registerReducer from "../reducers/registerReducer";
import { CLEAR_STATE } from "../actions/actionTypes";

// combine reducers
const appReducer = combineReducers({
  movies: movieReducer,
  genres: genreReducer,
  addMovie: addMovieReducer,
  movieDetail: movieDetailReducer,
  editMovie: editMovieReducer,
  deleteMovie: deleteMovieReducer,
  addGenre: addGenreReducer,
  genreDetail: genreDetailReducer,
  editGenre: editGenreReducer,
  deleteGenre: deleteGenreReducer,
  login: loginReducer,
  register: registerReducer,
});

const rootReducer = (state, action) => {
  if (action.type === CLEAR_STATE) {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

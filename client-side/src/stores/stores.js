import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import movieReducer from "../reducers/movieReducer";
import movieDetailReducer from "../reducers/movieDetailReducer";

// create reducer combo

const rootReducer = combineReducers({
  movies: movieReducer,
  movieDetail: movieDetailReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

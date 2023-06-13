import {
  FETCH_MOVIES,
  FETCH_MOVIES_FAILED,
  FETCH_MOVIE_DETAIL,
  FETCH_MOVIE_DETAIL_FAILED,
} from "./actionTypes";

// const baseUrl = "http://localhost:3000";
const baseUrl = "https://server-movies.michaelkrs.dev";

// ===== FETCH MOVIES =====

// ACTION
export const moviesAction = (movies) => ({
  type: FETCH_MOVIES,
  payload: movies,
});

export const moviesActionFailed = (error) => ({
  type: FETCH_MOVIES_FAILED,
  payload: error,
});

// MIDDLEWARE
export const fetchMovies = () => async (dispatch) => {
  try {
    const response = await fetch(`${baseUrl}/client/movies`);
    const jsonData = await response.json();

    dispatch(moviesAction(jsonData));
  } catch (error) {
    dispatch(moviesActionFailed(error));
  }
};

// ===== FETCH MOVIE DETAIL =====
export const detailAction = (movie) => ({
  type: FETCH_MOVIE_DETAIL,
  payload: movie,
});

export const detailActionFailed = (error) => ({
  type: FETCH_MOVIE_DETAIL_FAILED,
  payload: error,
});

export const fetchMovieDetail = (id) => async (dispatch) => {
  try {
    const response = await fetch(`${baseUrl}/client/movies/${id}`);
    const jsonData = await response.json();

    dispatch(detailAction(jsonData));
  } catch (error) {
    dispatch(detailActionFailed(error));
  }
};

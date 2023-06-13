import {
  ADD_GENRE,
  ADD_GENRE_FAILED,
  ADD_MOVIE,
  ADD_MOVIE_FAILED,
  DELETE_GENRE,
  DELETE_GENRE_FAILED,
  DELETE_MOVIE,
  DELETE_MOVIE_FAILED,
  EDIT_GENRE,
  EDIT_GENRE_FAILED,
  EDIT_MOVIE,
  EDIT_MOVIE_FAILED,
  FETCH_GENRES,
  FETCH_GENRES_FAILED,
  FETCH_MOVIES,
  FETCH_MOVIES_FAILED,
  FETCH_MOVIE_CASTS,
  FETCH_MOVIE_DETAIL,
  FETCH_MOVIE_DETAIL_FAILED,
  GENRE_DETAIL,
  GENRE_DETAIL_FAILED,
  LOGIN,
  LOGIN_FAILED,
  REGISTER,
  REGISTER_FAILED,
} from "./actionTypes";

// const baseUrl = "http://localhost:3000";
const baseUrl = "https://server-movies.michaelkrs.dev";

// ======= FETCH MOVIES =======
// ACTION
export const moviesAction = (moviesData) => ({
  type: FETCH_MOVIES,
  payload: moviesData,
});

export const moviesFetchError = (error) => ({
  type: FETCH_MOVIES_FAILED,
  payload: error,
});

// MIDDLEWARE
export const fetchMovies = () => async (dispatch) => {
  try {
    const response = await fetch(`${baseUrl}/movies`, {
      method: "GET",
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });
    const jsonData = await response.json();

    if (!response.ok) {
      throw jsonData.error;
    }

    dispatch(moviesAction(jsonData));
  } catch (error) {
    dispatch(moviesFetchError(error));
  }
};

// ======= FETCH GENRES =======
export const genresAction = (genresData) => ({
  type: FETCH_GENRES,
  payload: genresData,
});

export const genresActionError = (genresData) => ({
  type: FETCH_GENRES_FAILED,
  payload: genresData,
});

export const fetchGenres = () => async (dispatch) => {
  try {
    const response = await fetch(`${baseUrl}/genres`, {
      method: "GET",
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });
    const jsonData = await response.json();

    if (!response.ok) {
      throw jsonData.error;
    }

    dispatch(genresAction(jsonData));
  } catch (error) {
    dispatch(genresActionError(error));
  }
};

// ======= ADD MOVIE =======
export const addMovie = (movieData) => ({
  type: ADD_MOVIE,
  payload: movieData,
});

export const addMovieError = (error) => ({
  type: ADD_MOVIE_FAILED,
  payload: error,
});

export const addMovieMiddleware = (data) => async (dispatch) => {
  try {
    const response = await fetch(`${baseUrl}/movies/add`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify(data),
    });

    const jsonData = await response.json();

    if (!response.ok) {
      throw jsonData.error;
    }

    dispatch(addMovie(data));
  } catch (error) {
    dispatch(addMovieError(error));
  }
};

// ======= FETCH MOVIE DETAIL =======
export const detailAction = (movieDetail) => ({
  type: FETCH_MOVIE_DETAIL,
  payload: movieDetail,
});

export const detailCastsAction = (movieDetail) => ({
  type: FETCH_MOVIE_CASTS,
  payload: movieDetail,
});

export const detailActionError = (error) => ({
  type: FETCH_MOVIE_DETAIL_FAILED,
  payload: error,
});

export const fetchMovieDetail = (id) => async (dispatch) => {
  try {
    const response = await fetch(`${baseUrl}/movies/${id}`, {
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });
    const jsonData = await response.json();

    if (!response.ok) {
      throw jsonData.error;
    }

    let movieDetail = { ...jsonData };
    delete movieDetail.Casts;

    dispatch(detailAction(movieDetail));
    dispatch(detailCastsAction(jsonData.Casts));
  } catch (error) {
    dispatch(detailActionError(error));
  }
};

// ======= EDIT MOVIE =======
export const editAction = (movieEditData) => ({
  type: EDIT_MOVIE,
  payload: movieEditData,
});

export const editActionError = (error) => ({
  type: EDIT_MOVIE_FAILED,
  payload: error,
});

export const editMovieMiddleware = (data, id) => async (dispatch) => {
  try {
    const response = await fetch(`${baseUrl}/movies/edit/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify(data),
    });

    const jsonData = await response.json();

    if (!response.ok) {
      throw jsonData.error;
    }

    dispatch(editAction(data));
  } catch (error) {
    dispatch(editActionError(error));
  }
};

// ======= DELETE MOVIE =======
export const deleteAction = (deletedMovie) => ({
  type: DELETE_MOVIE,
  payload: deletedMovie,
});

export const deleteActionError = (error) => ({
  type: DELETE_MOVIE_FAILED,
  payload: error,
});

export const deleteMovie = (id) => async (dispatch) => {
  try {
    const response = await fetch(`${baseUrl}/movies/${id}`, {
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });
    const jsonData = await response.json();

    const resp = await fetch(`${baseUrl}/movies/delete/${id}`, {
      method: "DELETE",
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });

    const data = await resp.json();

    if (!resp.ok) {
      throw data.error;
    }

    dispatch(deleteAction(jsonData));
  } catch (error) {
    dispatch(editActionError(error));
  }
};

// ======= ADD GENRE =======
export const addGenreAction = (newGenre) => ({
  type: ADD_GENRE,
  payload: newGenre,
});

export const addGenreErrorAction = (error) => ({
  type: ADD_GENRE_FAILED,
  payload: error,
});

export const addGenreMiddleware = (data) => async (dispatch) => {
  try {
    const response = await fetch(`${baseUrl}/genres/add`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify(data),
    });

    const jsonData = await response.json();

    if (!response.ok) {
      throw jsonData.error;
    }

    dispatch(addGenreAction(data));
  } catch (error) {
    dispatch(addGenreErrorAction(error));
  }
};

// ======= FETCH GENRE DETAIL =======
export const genreDetailAction = (genre) => ({
  type: GENRE_DETAIL,
  payload: genre,
});

export const genreDetailActionError = (error) => ({
  type: GENRE_DETAIL_FAILED,
  payload: error,
});

export const fetchGenreDetail = (id) => async (dispatch) => {
  try {
    const response = await fetch(`${baseUrl}/genres/${id}`, {
      method: "GET",
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });
    const jsonData = await response.json();

    if (!response.ok) {
      throw jsonData.error;
    }

    dispatch(genreDetailAction(jsonData));
  } catch (error) {
    dispatch(genreDetailActionError(error));
  }
};

// ======= EDIT GENRE =======
export const editGenreAction = (genre) => ({
  type: EDIT_GENRE,
  payload: genre,
});

export const editGenreActionError = (error) => ({
  type: EDIT_GENRE_FAILED,
  payload: error,
});

export const editGenreMiddleware = (data, id) => async (dispatch) => {
  try {
    const response = await fetch(`${baseUrl}/genres/edit/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify(data),
    });
    const jsonData = await response.json();

    if (!response.ok) {
      throw jsonData.error;
    }

    dispatch(editGenreAction(data));
  } catch (error) {
    dispatch(editGenreActionError(error));
  }
};

// ======= DELETE GENRE =======
export const deleteGenreAction = (success) => ({
  type: DELETE_GENRE,
  payload: success,
});

export const deleteGenreActionError = (error) => ({
  type: DELETE_GENRE_FAILED,
  payload: error,
});

export const deleteGenreMiddleware = (id) => async (dispatch) => {
  try {
    const response = await fetch(`${baseUrl}/genres/delete/${id}`, {
      method: "DELETE",
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });

    const jsonData = response.json();

    if (!response.ok) {
      throw jsonData.error;
    }

    dispatch(deleteGenreAction("deleted"));
  } catch (error) {
    dispatch(deleteGenreActionError(error));
  }
};

// ======= LOGIN =======
export const loginAction = () => ({
  type: LOGIN,
});

export const loginActionError = (error) => ({
  type: LOGIN_FAILED,
  payload: error,
});

export const loginMiddleware = (data) => async (dispatch) => {
  try {
    const response = await fetch(`${baseUrl}/login`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const jsonData = await response.json();

    if (!response.ok) {
      throw jsonData.error;
    }

    localStorage.setItem("access_token", jsonData.access_token);

    dispatch(loginAction());
  } catch (error) {
    dispatch(loginActionError(error));
  }
};

// ======= LOGIN =======
export const registerAction = (registered) => ({
  type: REGISTER,
  payload: registered,
});

export const registerActionError = (error) => ({
  type: REGISTER_FAILED,
  payload: error,
});

export const registerMiddleware = (data) => async (dispatch) => {
  try {
    const response = await fetch(`${baseUrl}/register`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify(data),
    });

    const jsonData = await response.json();

    if (!response.ok) {
      throw jsonData.error;
    }

    dispatch(registerAction(jsonData));
  } catch (error) {
    dispatch(registerActionError(error));
  }
};

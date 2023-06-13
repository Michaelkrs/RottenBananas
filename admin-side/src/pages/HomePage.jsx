import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovie, fetchMovies } from "../actions/actionCreators";
import { toast } from "react-toastify";
import { CLEAR_STATE } from "../actions/actionTypes";

function HomePage() {
  const { movies } = useSelector((state) => state.movies);
  const { deletedMovie } = useSelector((state) => state.deleteMovie);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  const navigate = useNavigate();

  const editHandler = (id) => {
    navigate(`/movies/${id}`);
  };

  const deleteHandler = async (id) => {
    await dispatch(deleteMovie(id));
    toast.success("Movie deleted");
  };

  useEffect(() => {
    if (Object.keys(deletedMovie).length > 0) {
      dispatch(fetchMovies());
    }
  }, [deletedMovie]);

  // ERROR HANDLER
  const notify = (msg) => toast.error(msg);
  const { errorMessage } = useSelector((state) => state.movies);

  useEffect(() => {
    if (errorMessage) {
      notify(errorMessage);
    }
  }, [errorMessage]);

  useEffect(() => {
    return () => {
      dispatch({ type: CLEAR_STATE });
    };
  }, []);

  return (
    <>
      <div className="table-responsive table table-hover table-bordered results mt-4 content">
        <h2 style={{ fontWeight: "bold" }}>Movie List</h2>
        <div className="card mb-4">
          <div className="card-body d-flex flex-row p-0 align-items-center justify-content-between">
            <div>List of all movies in the database</div>
            <div>
              <NavLink to="/add">
                <button
                  className="btn btn-primary"
                  style={{ background: "#2b2d42", borderColor: "#2b2d42" }}
                >
                  Add Movie
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <table className="table table-hover table-striped table-bordered">
          <thead
            className="bill-header cs text-light"
            style={{ background: "#2b2d42" }}
          >
            <tr>
              <th id="trs-hd-1" className="">
                No.
              </th>
              <th id="trs-hd-2" className="col-lg-2">
                Image
              </th>
              <th id="trs-hd-3" className="col-lg-2">
                Title
              </th>
              <th id="trs-hd-4" className="col-lg-4">
                Synopsis
              </th>
              <th id="trs-hd-5" className="col-lg-1">
                Genre
              </th>
              <th id="trs-hd-6" className="col-lg-1">
                Author
              </th>
              <th id="trs-hd-5" className="col-lg-2">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, i) => (
              <tr key={movie.id}>
                <td className="align-middle" style={{ textAlign: "center" }}>
                  {i + 1}
                </td>
                <td className="align-middle">
                  <img
                    src={movie.imgUrl}
                    alt=""
                    style={{ maxHeight: "300px", maxWidth: "200px" }}
                  />
                </td>
                <td className="align-middle">{movie.title}</td>
                <td className="align-middle">{movie.synopsis}</td>
                <td className="align-middle" style={{ textAlign: "center" }}>
                  {movie.Genre.name}
                </td>
                <td className="align-middle" style={{ textAlign: "center" }}>
                  {movie.User.email}
                </td>
                <td className="align-middle">
                  <button
                    className="btn btn-success"
                    style={{ marginLeft: "5px" }}
                    onClick={() => editHandler(movie.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    style={{ marginLeft: "5px" }}
                    onClick={() => deleteHandler(movie.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default HomePage;

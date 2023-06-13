import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteGenreMiddleware, fetchGenres } from "../actions/actionCreators";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CLEAR_STATE } from "../actions/actionTypes";

function GenresPage() {
  const { genres } = useSelector((state) => state.genres);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function editHandler(id) {
    navigate(`/genres/edit/${id}`);
  }

  async function deleteHandler(id) {
    await dispatch(deleteGenreMiddleware(id));
    toast.success("Genre deleted");
  }

  useEffect(() => {
    dispatch(fetchGenres());
  }, []);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [genres]);

  // ERROR HANDLER
  const notify = (msg) => toast.error(msg);
  const { errorMessage } = useSelector((state) => state.editGenre);

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
        <h2 style={{ fontWeight: "bold" }}>Genres List</h2>
        <div className="card mb-4">
          <div className="card-body d-flex flex-row p-0 align-items-center justify-content-between">
            <div>List of all genres in the database</div>
            <div>
              <NavLink to="/genres/add">
                <button
                  className="btn btn-primary"
                  style={{ background: "#2b2d42", borderColor: "#2b2d42" }}
                >
                  Add Genre
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
              <th id="trs-hd-2" className="col-lg-9">
                name
              </th>
              <th id="trs-hd-5" className="col-lg-2">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {genres?.map((genre, i) => (
              <tr key={genre.id}>
                <td className="align-middle" style={{ textAlign: "center" }}>
                  {i + 1}
                </td>
                <td className="align-middle">{genre.name}</td>
                <td className="align-middle">
                  <button
                    className="btn btn-success"
                    style={{ marginLeft: "5px" }}
                    onClick={() => editHandler(genre.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    style={{ marginLeft: "5px" }}
                    onClick={() => deleteHandler(genre.id)}
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

export default GenresPage;

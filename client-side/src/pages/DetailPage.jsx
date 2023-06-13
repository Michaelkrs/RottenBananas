import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMovieDetail } from "../actions/actionCreators";
import { toast } from "react-toastify";

function Detail() {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieDetail(id));
  }, []);

  function openNewTab(link) {
    window.open(link, "_blank");
  }

  const { movie } = useSelector((state) => state.movieDetail);

  // ERROR HANDLER
  const notify = (msg) => toast.error(msg);
  const { errorMessage } = useSelector((state) => state.movieDetail);

  useEffect(() => {
    if (errorMessage) {
      notify(errorMessage);
    }
  }, [errorMessage]);

  return (
    <>
      <h1 className="my-3" style={{ textAlign: "center", color: "white" }}></h1>
      <div className="container col-11 border p-3 shadow bg-light">
        <div className="row">
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-12">
                <img className="img-fluid center-block" src={movie?.imgUrl} />
              </div>
            </div>
          </div>
          <div className="col-md-8 content">
            <h1 className="title">{movie?.title}</h1>
            <hr />
            <p>{movie?.synopsis}</p>
            <p style={{ fontSize: "22px" }}>Genre: {movie?.Genre?.name}</p>
            <div className="d-flex justify-content-center">
              <div
                className="border rounded p-1 shadow-sm col-6"
                style={{ textAlign: "center" }}
              >
                <img
                  src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/842495/popcorn-clipart-md.png"
                  style={{ maxHeight: "50px" }}
                />
                <h5>Rating: {movie?.rating}%</h5>
                <a
                  href=""
                  onClick={() => openNewTab(movie?.trailerUrl)}
                  className="btn btn-primary my-2"
                >
                  Go to Trailer &nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-box-arrow-up-right"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="mt-3 border p-1">
              <h4 style={{ textAlign: "center" }}>Top billed casts</h4>
              <div className="d-flex justify-content-around">
                {movie?.Casts?.map((cast) => (
                  <div key={cast.id} style={{ textAlign: "center" }}>
                    <img
                      src={cast.profilePict}
                      className="img-fluid mb-1"
                      style={{
                        height: "140px",
                        width: "140px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />
                    <p style={{ fontSize: "20px" }}>{cast.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;

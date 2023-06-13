import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMovies } from "../actions/actionCreators";
import { toast } from "react-toastify";

function Home() {
  const { movies } = useSelector((state) => state.movies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  // ERROR HANDLER
  const notify = (msg) => toast.error(msg);
  const { errorMessage } = useSelector((state) => state.movies);

  useEffect(() => {
    if (errorMessage) {
      notify(errorMessage);
    }
  }, [errorMessage]);

  return (
    <>
      <div className="container-fluid mt-4" style={{ width: "1400px" }}>
        <div className="row mx-2 gap-3">
          {movies.map((movie) => (
            <div
              className="card rounded-0 p-0 shadow"
              style={{ width: "440px", maxHeight: "220px", overflow: "hidden" }}
              key={movie.id}
            >
              <NavLink
                to={`/movies/${movie.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={movie.imgUrl} className="img-fluid" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title title">{movie.title}</h5>
                      <p
                        className="card-text text-muted content"
                        style={{
                          maxHeight: "100px",
                          display: "-webkit-box",
                          WebkitLineClamp: "3",
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {movie.synopsis}
                      </p>
                      <p
                        className="card-text rounded col-4 text-center"
                        style={{
                          backgroundColor: "#2b2d42",
                          color: "white",
                          fontWeight: "bold",
                        }}
                      >
                        <small className="text-body-secondary">
                          {movie?.Genre.name}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
          ))}

          {/* ============ */}
        </div>
      </div>
    </>
  );
}

export default Home;

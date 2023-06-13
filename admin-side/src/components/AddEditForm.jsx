import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres } from "../actions/actionCreators";
import { useParams } from "react-router-dom";

function AddEditForm({
  formHandler,
  submitForm,
  editData,
  editCasts,
  handleCastChange,
  castsInput,
  addCastField,
}) {
  const { genres } = useSelector((state) => state.genres);

  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, []);

  return (
    <div className="container col-8 border rounded shadow p-4 my-5 content">
      <form className="bootstrap-form-with-validation">
        <h2 className="text-center" style={{ fontWeight: "bold" }}>
          {id ? "Edit Movie" : "Add New Movie"}
        </h2>
        <div className="form-group mb-3">
          <label className="form-label" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            className="form-control"
            type="text"
            name="title"
            onChange={formHandler}
            defaultValue={editData?.title}
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label" htmlFor="imgUrl">
            Image URL
          </label>
          <input
            id="imgUrl"
            className="form-control"
            type="text"
            name="imgUrl"
            onChange={formHandler}
            defaultValue={editData?.imgUrl}
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label" htmlFor="trailerUrl">
            Trailer URL
          </label>
          <input
            id="trailerUrl"
            className="form-control"
            type="text"
            name="trailerUrl"
            onChange={formHandler}
            defaultValue={editData?.trailerUrl}
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label" htmlFor="genreId">
            Genre
          </label>
          <select
            name="genreId"
            id=""
            className="form-select"
            onChange={formHandler}
            defaultValue={editData ? editData.genreId : ""}
          >
            <option value="" disabled>
              ---choose genre---
            </option>
            {genres?.map((genre) => (
              <option value={genre?.id} key={genre?.id}>
                {genre?.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group mb-3">
          <label className="form-label" htmlFor="rating">
            Rating
          </label>
          <input
            id="rating"
            className="form-control"
            type="number"
            name="rating"
            onChange={formHandler}
            defaultValue={editData?.rating}
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label" htmlFor="synopsis">
            Synopsis{" "}
          </label>
          <textarea
            id="synopsis"
            className="form-control"
            name="synopsis"
            onChange={formHandler}
            defaultValue={editData?.synopsis}
          ></textarea>
        </div>

        {castsInput?.map((cast, index) => (
          <div
            className="form-group mb-3 d-flex flex-col justify-content-between"
            key={index}
          >
            <div className="col-5">
              <label htmlFor="name" className="form-label">
                Cast Name
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={(event) => handleCastChange(event, index)}
                defaultValue={cast?.name}
              />
            </div>
            <div className="col-6">
              <label htmlFor="profilePict" className="form-label">
                Photo URL
              </label>
              <input
                type="text"
                className="form-control"
                name="profilePict"
                onChange={(event) => handleCastChange(event, index)}
                defaultValue={cast?.profilePict}
              />
            </div>
          </div>
        ))}

        <div className="form-group mb-3 d-flex justify-content-between">
          <button
            className="btn btn-primary mt-3 col-4"
            type="submit"
            style={{ background: "#2b2d42", borderColor: "#2b2d42" }}
            onClick={submitForm}
          >
            {id ? "Edit Movie" : "Add Movie"}
          </button>
          <button
            className="btn btn-secondary mt-3 col-4"
            onClick={addCastField}
          >
            Add Cast (max 5)
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddEditForm;

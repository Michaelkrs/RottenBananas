import { useParams } from "react-router-dom";

function AddEditGenreForm({ formHandler, submitForm, editGenre }) {
  const { id } = useParams();

  return (
    <div className="container col-5 border rounded shadow p-4 mt-5 content">
      <form className="bootstrap-form-with-validation">
        <h2 className="text-center" style={{ fontWeight: "bold" }}>
          {id ? "Edit Genre" : "Add Genre"}
        </h2>
        <div className="form-group mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className="form-control"
            type="text"
            name="name"
            onChange={formHandler}
            defaultValue={editGenre?.name}
          />
        </div>
        <div className="form-group mb-3">
          <button
            className="btn btn-primary col-3"
            type="submit"
            style={{ background: "#2b2d42", borderColor: "#2b2d42" }}
            onClick={submitForm}
          >
            {id ? "Edit" : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddEditGenreForm;

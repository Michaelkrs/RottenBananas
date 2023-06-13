import { useNavigate, useParams } from "react-router-dom";
import AddEditGenreForm from "../components/AddEditGenreForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  editGenreMiddleware,
  fetchGenreDetail,
} from "../actions/actionCreators";
import { CLEAR_STATE } from "../actions/actionTypes";
import { toast } from "react-toastify";

function EditGenrePage() {
  const { id } = useParams();
  const { genreDetail } = useSelector((state) => state.genreDetail);
  const { editedGenre } = useSelector((state) => state.editGenre);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let [editGenre, setEditGenre] = useState({
    name: "",
  });

  useEffect(() => {
    dispatch(fetchGenreDetail(id));
  }, []);

  useEffect(() => {
    setEditGenre(genreDetail);
  }, [genreDetail]);

  const formHandler = (e) => {
    const input = {
      ...editGenre,
      [e.target.name]: e.target.value,
    };

    setEditGenre(input);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    dispatch(editGenreMiddleware(editGenre, id));
  };

  useEffect(() => {
    if (Object.keys(editedGenre).length > 0) {
      toast.success("Genre edited");
      navigate("/genres");
    }
  }, [editedGenre]);

  // ERROR HANDLER
  const notify = (msg) => toast.error(msg);
  const { errorMessage } = useSelector((state) => state.editGenre);

  useEffect(() => {
    if (errorMessage) {
      if (typeof errorMessage === "object")
        errorMessage.forEach((err) => notify(err));
      else notify(errorMessage);
    }
  }, [errorMessage]);

  useEffect(() => {
    return () => {
      dispatch({ type: CLEAR_STATE });
    };
  }, []);

  return (
    <>
      <AddEditGenreForm
        formHandler={formHandler}
        submitForm={submitForm}
        editGenre={editGenre}
      />
    </>
  );
}

export default EditGenrePage;

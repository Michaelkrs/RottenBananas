import { useEffect, useState } from "react";
import AddEditGenreForm from "../components/AddEditGenreForm";
import { useDispatch, useSelector } from "react-redux";
import { addGenreMiddleware } from "../actions/actionCreators";
import { useNavigate } from "react-router-dom";
import { CLEAR_STATE } from "../actions/actionTypes";
import { toast } from "react-toastify";

function AddGenrePage() {
  const { newGenre } = useSelector((state) => state.addGenre);

  let [genreData, setGenreData] = useState({
    name: "",
  });

  const formHandler = (e) => {
    setGenreData({
      ...genreData,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(addGenreMiddleware(genreData));
  };

  useEffect(() => {
    if (Object.keys(newGenre).length > 0) {
      toast.success("New genre added");
      navigate("/genres");
    }
  }, [newGenre]);

  // ERROR HANDLER
  const notify = (msg) => toast.error(msg);
  const { errorMessage } = useSelector((state) => state.addGenre);

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
      <AddEditGenreForm formHandler={formHandler} submitForm={submitForm} />
    </>
  );
}

export default AddGenrePage;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AddEditForm from "../components/AddEditForm";
import { addMovieMiddleware } from "../actions/actionCreators";
import { toast } from "react-toastify";
import { CLEAR_STATE } from "../actions/actionTypes";

function AddForm() {
  const { newMovie } = useSelector((state) => state.addMovie);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const notifySuccess = () => toast.success("New movie added");

  let [movieData, setMovieData] = useState({
    title: "",
    imgUrl: "",
    genreId: null,
    synopsis: "",
    rating: null,
    trailerUrl: "",
  });

  let [casts, setCastsInput] = useState([
    {
      name: "",
      profilePict: "",
    },
  ]);

  const formHandler = (e) => {
    setMovieData({
      ...movieData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCastChange = (e, index) => {
    let updatedCastsInput = [...casts];
    updatedCastsInput[index][e.target.name] = e.target.value;
    setCastsInput(updatedCastsInput);
  };

  const addCastField = (e) => {
    e.preventDefault();
    if (casts.length < 5) {
      let newCastField = { name: "", profilePict: "" };
      setCastsInput([...casts, newCastField]);
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();

    let toSendMovieData = { ...movieData };
    let toSendCastsData = [...casts];

    toSendMovieData.casts = toSendCastsData;

    dispatch(addMovieMiddleware(toSendMovieData));
  };

  useEffect(() => {
    if (Object.keys(newMovie).length > 0) {
      notifySuccess();
      navigate("/");
    }
  }, [newMovie]);

  // ERROR HANDLER
  const notify = (msg) => toast.error(msg);
  const { errorMessage } = useSelector((state) => state.addMovie);

  useEffect(() => {
    if (errorMessage) {
      if (typeof errorMessage === "object")
        errorMessage.forEach((err) => notify(err));
      else notify(errorMessage);
    }
  }, [errorMessage]);

  // CLEAR STATE
  useEffect(() => {
    return () => {
      dispatch({ type: CLEAR_STATE });
    };
  }, []);

  return (
    <>
      <AddEditForm
        formHandler={formHandler}
        submitForm={submitForm}
        handleCastChange={handleCastChange}
        castsInput={casts}
        addCastField={addCastField}
      />
    </>
  );
}

export default AddForm;

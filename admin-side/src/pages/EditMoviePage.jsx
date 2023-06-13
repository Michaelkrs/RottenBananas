import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import AddEditForm from "../components/AddEditForm";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editMovieMiddleware,
  fetchMovieDetail,
} from "../actions/actionCreators";
import { toast } from "react-toastify";
import { CLEAR_STATE } from "../actions/actionTypes";

function EditForm() {
  const { id } = useParams();
  const { movieDetail, castsList } = useSelector((state) => state.movieDetail);
  const { movieEditData } = useSelector((state) => state.editMovie);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const notifySuccess = () => toast.success("Post edited");

  useEffect(() => {
    dispatch(fetchMovieDetail(id));
  }, []);

  let [editData, setMovieData] = useState({
    title: "",
    imgUrl: "",
    genreId: null,
    synopsis: "",
    rating: null,
    trailerUrl: "",
  });

  let [editCasts, setCastsInput] = useState([
    {
      name: "",
      profilePict: "",
    },
  ]);

  useEffect(() => {
    setMovieData(movieDetail);
    setCastsInput(castsList);
  }, [movieDetail]);

  const addCastField = (e) => {
    e.preventDefault();
    if (editCasts.length < 5) {
      let newCastField = { name: "", profilePict: "" };
      setCastsInput([...editCasts, newCastField]);
    }
  };

  const formHandler = (e) => {
    setMovieData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCastChange = (e, index) => {
    let updatedCastsInput = [...editCasts];
    updatedCastsInput[index][e.target.name] = e.target.value;
    setCastsInput(updatedCastsInput);
  };

  const submitForm = async (e) => {
    e.preventDefault();

    let toSendMovieData = { ...editData };
    let toSendCastsData = [...editCasts];

    toSendMovieData.casts = toSendCastsData;

    dispatch(editMovieMiddleware(toSendMovieData, id));
  };

  useEffect(() => {
    if (Object.keys(movieEditData).length > 0) {
      notifySuccess();
      navigate("/");
    }
  }, [movieEditData]);

  // ERROR HANDLER
  const notify = (msg) => toast.error(msg);
  const { errorMessage } = useSelector((state) => state.editMovie);

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
      <AddEditForm
        editData={editData}
        castsInput={editCasts}
        formHandler={formHandler}
        submitForm={submitForm}
        handleCastChange={handleCastChange}
        addCastField={addCastField}
      />
    </>
  );
}

export default EditForm;

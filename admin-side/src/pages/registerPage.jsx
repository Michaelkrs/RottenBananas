import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerMiddleware } from "../actions/actionCreators";
import { toast } from "react-toastify";
import { CLEAR_STATE } from "../actions/actionTypes";

function RegisterPage() {
  let [adminData, setAdminData] = useState({
    email: "",
    password: "",
    username: "",
    phoneNumber: "",
    address: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formHandler = (e) => {
    setAdminData({
      ...adminData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(registerMiddleware(adminData));
  };

  const { registered } = useSelector((state) => state.register);

  useEffect(() => {
    if (registered.email === adminData.email) {
      toast.success("Admin added");
      navigate("/");
    }
  }, [registered]);

  // ERROR HANDLER
  const notify = (msg) => toast.error(msg);
  const { errorMessage } = useSelector((state) => state.register);

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
      <div className="container col-4 border rounded shadow p-4 mt-5 content">
        <form className="bootstrap-form-with-validation">
          <h2 className="text-center" style={{ fontWeight: "bold" }}>
            Register Admin
          </h2>
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              className="form-control"
              type="text"
              name="email"
              onChange={formHandler}
            />
          </div>
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="username">
              Username (optional)
            </label>
            <input
              id="username"
              className="form-control"
              type="text"
              name="username"
              onChange={formHandler}
            />
          </div>
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              className="form-control"
              type="password"
              name="password"
              onChange={formHandler}
            />
          </div>
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="phoneNumber">
              Phone Number (optional)
            </label>
            <input
              id="phoneNumber"
              className="form-control"
              type="text"
              name="phoneNumber"
              onChange={formHandler}
            />
          </div>
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="address">
              Address (optional)
            </label>
            <input
              id="address"
              className="form-control"
              type="text"
              name="address"
              onChange={formHandler}
            />
          </div>
          <div className="form-group mb-3">
            <button
              className="btn btn-primary col-3"
              type="submit"
              style={{ background: "#2b2d42", borderColor: "#2b2d42" }}
              onClick={submitHandler}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default RegisterPage;

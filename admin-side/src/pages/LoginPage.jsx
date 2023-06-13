import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginMiddleware } from "../actions/actionCreators";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { CLEAR_STATE } from "../actions/actionTypes";

function Login() {
  let [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const loginHandler = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    await dispatch(loginMiddleware(userData));
    navigate("/");
  };

  // ERROR HANDLER
  const notify = (msg) => toast.error(msg);
  const { errorMessage } = useSelector((state) => state.login);

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
      <ToastContainer />
      <section
        className="container my-5 d-flex flex-column align-items-center"
        id="login-section"
      >
        <div className="col-5 d-flex flex-row justify-content-center border rounded-4 p-3 shadow">
          <div className="col-8">
            <div className="d-flex flex-column align-items-center">
              <h2 className="heading content" style={{ fontWeight: "bold" }}>
                RottenBananas
              </h2>
              <h4 className="heading content">Admin Login</h4>
            </div>
            <hr className="opacity-20" />
            <form action="">
              <div className="row mt-3">
                <div className="mb-1 title">
                  <label>Email</label>
                </div>
                <div className="">
                  <input
                    className="form-control"
                    type="text"
                    name="email"
                    onChange={loginHandler}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="mb-1 title">
                  <label>Password</label>
                </div>
                <div className="">
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    onChange={loginHandler}
                  />
                </div>
              </div>
              <div className="row mx-5 my-4">
                <button
                  className="col-10 mx-auto btn btn-primary rounded-3 title"
                  type="submit"
                  style={{ background: "#2b2d42", borderColor: "#2b2d42" }}
                  onClick={submit}
                >
                  Login
                </button>
              </div>
              <hr className="opacity-20" />
              <div
                className="row text-muted content"
                style={{ textAlign: "center", fontSize: "15px" }}
              >
                <p>
                  Access the ultimate movie experience. Log in to take control
                  of our Movies Portal. Edit, create, or delete posts, tags, and
                  categories with just a few clicks.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;

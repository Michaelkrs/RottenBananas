import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router";
import { Provider } from "react-redux";
import router from "./routers";
import store from "./stores/stores";
import "react-toastify/dist/ReactToastify.css";
import "./fonts.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;

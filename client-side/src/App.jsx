// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Login from '../pages/LoginPage'
import "./fonts.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router";
import router from "./routers";
import { Provider } from "react-redux";
import store from "./stores/stores";

function App() {
  // const [movies, setMovies] = useState({
  //   movies: []
  // })

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;

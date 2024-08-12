import React from "react";
import Home from "./Pages/Home";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Home />
    </>
  );
}

export default App;

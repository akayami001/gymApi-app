import React from "react";
import { Route, Routes } from "react-router-dom";
import "./responsive.js";

import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Home/>
  );
}

export default App;

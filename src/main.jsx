import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import Profile from "./pages/Profile.jsx";
import Login from "./pages/Login";
import Register from "./pages/Register";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    {/* <App /> */}
  </Router>
);

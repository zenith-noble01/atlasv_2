import React from "react";
import "./styles/app.scss";
import { Landing, Login, Register } from "./pages";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;

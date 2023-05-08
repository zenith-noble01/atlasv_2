import React, { Suspense } from "react";
import "./styles/app.scss";
import { Landing, Login, Register } from "./pages";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>loading...</div>}>
              <Landing />
            </Suspense>
          }
        />
        <Route
          path="login"
          element={
            <Suspense fallback={<div>loading...</div>}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="register"
          element={
            <Suspense fallback={<div>loading...</div>}>
              <Register />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default App;

import React, { Suspense } from "react";
import "./styles/app.scss";
import { Landing, Login, Register } from "./pages";
import { Routes, Route } from "react-router-dom";
import { Loading } from "./components";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Landing />
            </Suspense>
          }
        />
        <Route
          path="login"
          element={
            <Suspense fallback={<Loading />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="register"
          element={
            <Suspense fallback={<Loading />}>
              <Register />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default App;

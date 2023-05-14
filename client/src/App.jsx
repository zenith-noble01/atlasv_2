import { Suspense } from "react";
import { Landing } from "./pages";
import { Routes, Route } from "react-router-dom";
import "./styles/app.scss";

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Landing />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default App;

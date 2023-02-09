import "./Styles/App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import { Dsidebar } from "./Components";
import {
  Dashboard,
  Courses,
  OneCourse,
  Login,
  CreateAccount,
  TeacherDashboard,
  Forum,
  NewClass,
} from "./Pages";
const App = () => {
  const location = useLocation();
  const pathname = location.pathname.slice(1);

  return (
    <div
      className={
        pathname === "login" ||
        pathname === "register" ||
        pathname === "newclass"
          ? "app no__route"
          : "app"
      }
    >
      {pathname === "login" ||
      pathname === "register" ||
      pathname === "newclass" ? null : (
        <Dsidebar />
      )}
      <div className="">
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<CreateAccount />} />
          <Route path="/assesments" element={<Courses />} />
          <Route path="/assesments/:id" element={<OneCourse />} />
          <Route path="/teacher" element={<TeacherDashboard />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/newclass" element={<NewClass />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

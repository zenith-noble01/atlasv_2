import React, { useEffect } from "react";
import "../Styles/dashboard.scss";
import {
  Courses,
  Greetings,
  RecentCourse,
  SearchBox,
  NumCourse,
  Charts,
} from "../Components/";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("User"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  console.log(user);

  return (
    <div className="app__dashboard">
      <div className="left__container">
        <Greetings user={user} />
        <RecentCourse />
        <Courses />
      </div>
      <div className="right__container">
        <SearchBox user={user} />
        <div>
          <NumCourse />
        </div>
        <div>
          <Charts />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

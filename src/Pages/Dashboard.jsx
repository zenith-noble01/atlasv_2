import React from "react";
import "../Styles/dashboard.scss";
import {
  Courses,
  Greetings,
  RecentCourse,
  SearchBox,
  NumCourse,
  Charts,
} from "../Components/";

const Dashboard = () => {
  return (
    <div className="app__dashboard">
      <div className="left__container">
        <Greetings />
        <RecentCourse />
        <Courses />
      </div>
      <div className="right__container">
        <SearchBox />
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

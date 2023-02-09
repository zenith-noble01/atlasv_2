import React from "react";

const Course = ({ course }) => {
  return (
    <div className="course_content-d" key={course?._id}>
      <img src={course.thumbnail} alt="" />
      <div className="course__cont">
        <p className="coursename">{course.coursename}</p>
        <p>Advanced level</p>
      </div>
    </div>
  );
};

export default Course;

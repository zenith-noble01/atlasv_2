import "../Styles/courses.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { Course, CourseHeader } from "../Components";
import { Link } from "react-router-dom";
// import { multipleCourses } from "../Constants/dummy";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      await axios
        .get("https://atlasv2.onrender.com/api/course")
        .then((res) => {
          setCourses(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    getCourses();
  }, []);

  return (
    <div className="app__courses">
      <CourseHeader />
      <div className="courses__container-conent">
        {courses.map((course) => (
          <Link to={course?._id}>
            <Course course={course} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Courses;

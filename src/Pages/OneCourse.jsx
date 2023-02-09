import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/onecourse.scss";
import axios from "axios";

const OneCourse = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [data, setData] = useState({});
  const [courses, setCourses] = useState([]);

  console.log(path);

  useEffect(() => {
    const fetVideo = async () => {
      axios
        .get(`https://atlasv2.onrender.com/api/course/${path}`)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

    fetVideo();
  }, [path]);

  useEffect(() => {
    const getCourses = async () => {
      await axios
        .get("http://localhost:5000/api/course")
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
    <div className="app__oneCourse">
      <div className="left__course">
        <video src={data?.videoUrl} loop autoPlay />
        <div className="course__action">
          <p>{data?.coursename}</p>
        </div>
      </div>
      <div className="right__course">
        {courses.map((course, index) => (
          <Link to={`/assesments/${course?._id}`}>
            <div key={index} className="right__course-container">
              <img src={course.thumbnail} alt="" />
              <div className="course__content">
                <p>{course?.coursename}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OneCourse;

import React from "react";
import { useState } from "react";
import { courseRoutes, courses } from "../Constants/dummy";
import { flame } from "../Images";
import { AiFillClockCircle } from "react-icons/ai";

const Courses = () => {
  const [isActive, setIsActive] = useState(0);
  return (
    <div className="dashboard__courses">
      <div className="course__header">
        {courseRoutes.map((route, index) => (
          <li
            key={index}
            className={`header__route ${isActive === index ? "active" : null}`}
            onClick={() => setIsActive(index)}
          >
            {route.name}
          </li>
        ))}
      </div>
      <div className="courses__container">
        {courses.map((course, index) => (
          <div className="course__content" key={index}>
            <div className="course__icon"></div>
            <div className="course__wrapper">
              <p>
                {course.courname}
                <span>
                  by {""}
                  {course.by}
                </span>
              </p>
              <div className="timestamp">
                <AiFillClockCircle />
                time
              </div>
              <div className="rating">
                <img src={flame} alt="ajdnajnkjfankjldn" />
                <p>4.4</p>
              </div>
              <button>View course</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;

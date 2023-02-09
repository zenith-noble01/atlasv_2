import React from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { computerIcon, ellipse } from "../Images";

const RecentCourse = () => {
  return (
    <div className="recent__course">
      <div className="course__container">
        <div className="course__icon">
          <img src={computerIcon} alt="computer tic summit" />
        </div>
        <div className="course__content">
          <div className="course__name">
            A-L computer <br /> science
          </div>
          <div className="progress">
            <img src={ellipse} alt="" />

            <p>83%</p>
          </div>
          <div className="cta">
            <button>Continue</button>
          </div>
        </div>
      </div>
      <div className="arrow__container">
        <BsArrowLeftCircle />
        <BsArrowRightCircle />
      </div>
    </div>
  );
};

export default RecentCourse;

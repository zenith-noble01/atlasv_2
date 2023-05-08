import React from "react";
import "../styles/hero.scss";
import { motion } from "framer-motion";
import { slideIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";
import { landing, img1, img2, img3 } from "../assets";

const Hero = () => {
  return (
    <div className="landing__hero">
      <motion.div
        className="hero__left"
        variants={slideIn("left", "tween", 0.2, 1)}
      >
        <div className="left__container">
          <motion.div className="container__text" variants={textVariant()}>
            <h1>
              <span>Revolutionize</span> Your Learning <br />
              <span>Experience</span> with our <br />
              <span>Innovative</span> Educational Tools
            </h1>
              <p>
                Our platform is designed to transform your learning experience
                by providing innovative tools and resources to help you excel in
                your studies. With personalized study plans, engaging practice
                materials, and expert support, our platform empowers you with
                the resources you need to achieve academic success.
              </p>
          </motion.div>
          <motion.button>
            <Link to="/signup">Enroll now</Link>
          </motion.button>
        </div>
      </motion.div>
      <motion.div
        className="hero__right"
        variants={slideIn("right", "tween", 0.2, 1)}
      >
        <div className="circle__girl">
          <img src={landing} alt="" />
        </div>
        <motion.img
          draggable={false}
          variants={slideIn("right", "tween", 0.5, 1)}
          className="img1"
          src={img1}
Shots
          alt=""
        />
        <motion.img
          draggable={false}
          variants={slideIn("right", "tween", 0.5, 1.2)}
          className="img2"
          src={img2}
          alt=""
        />
        <motion.img
          draggable={false}
          variants={slideIn("right", "tween", 0.5, 1.4)}
          className="img3"
          src={img3}
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default Hero;

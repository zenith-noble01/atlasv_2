import React from "react";
import "../styles/hero.scss";
import { motion } from "framer-motion";
import { slideIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";
import { landing, img1, img2, img3 } from "../assets";
import { LoadImg } from "./";
// import  from "blurhash"

const Hero = () => {
  return (
    <div className="landing__hero">
      <motion.div
        className="hero__left"
        variants={slideIn("left", "tween", 0.2, 0.5)}
        animate="show"
        initial="hidden"
      >
        <div className="left__container">
          <motion.div className="container__text" variants={textVariant()}>
            <h1>
              <span>Revolutionize</span> Your Learning <br />
              <span>Experience</span> with our <br />
              <span>Innovative</span> Educational Tools
            </h1>
            <p>
              Our platform is designed to transform your learning experience by
              providing innovative tools and resources to help you excel in your
              studies. With personalized study plans, engaging practice
              materials, and expert support, our platform empowers you with the
              resources you need to achieve academic success.
            </p>
          </motion.div>
          <motion.button>
            <Link to="/signup">Enroll now</Link>
          </motion.button>
        </div>
      </motion.div>
      <motion.div
        className="hero__right"
        variants={slideIn("right", "tween", 0.2, 0.5)}
        animate="show"
        initial="hidden"
      >
        <div className="circle__girl">
          <LoadImg src={landing} height={523} width={450} />
        </div>
        <LoadImg className="img1" src={img1} hieght={20} />
        <LoadImg className="img2" src={img2} hieght={20} />
        <LoadImg className="img3" src={img3} hieght={20} />
      </motion.div>
    </div>
  );
};

export default Hero;

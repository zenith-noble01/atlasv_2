import React from "react";
import { illustration } from "../Images";

const Greetings = () => {
  return (
    <div className="dashboard__greetings">
      <div className="hello__user-content">
        <h1>Hello Zenith</h1>
        <p>It's good to see you again.</p>
      </div>
      <img src={illustration} alt="" />
    </div>
  );
};

export default Greetings;

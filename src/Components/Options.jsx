import React from "react";
import { videoOptions } from "../Constants/dummy";

const Options = () => {
  const handleClick = (option) => {
    console.log(option.name);

    if (option.name === "mic") {
      alert(option.name);
    }
    if (option.name === "video") {
      alert(option.name);
    }
    if (option.name === "call") {
      alert(option.name);
    }
    if (option.name === "scale") {
      alert(option.name);
    }
  };
  return (
    <div className="options">
      {videoOptions.map((option, index) => (
        <div
          className={option?.class ? `option ${option.class}` : "option"}
          onClick={() => handleClick(option)}
          key={index}
        >
          IC
        </div>
      ))}
    </div>
  );
};

export default Options;

import React, { useState } from "react";
import { Blurhash } from "react-blurhash";

const LoadImg = ({ src, className }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(true);
  };
  return (
    <>
      {!isLoading && (
        <Blurhash
          hash="LKO2?U00%2yA#AoMxZj[M{aeWBWV"
          width={400}
          height={300}
          className="mage"
        />
      )}
      <img
        src={src}
        alt="example"
        onLoad={handleImageLoad}
        style={{ display: isLoading ? "block" : "none" }}
        className={className}
        draggable={false}
      />
    </>
  );
};

export default LoadImg;

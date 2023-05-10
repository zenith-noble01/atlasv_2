import React, { useState } from "react";
import { Blurhash } from "react-blurhash";

const LoadImg = ({ src, className, height, width }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(true);
  };

  return (
    <>
      {!isLoading && (
        <Blurhash
          hash="LKO2?U00%2yA#AoMxZj[M{aeWBWV"
          width={width ? width : 40}
          height={height ? height : 40}
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

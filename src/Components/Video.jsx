import React, { useRef } from "react";
import "../Styles/video.scss";
import Options from "./Options";
import { useUserMedia } from "./md";

const CAPTURE_OPTIONS = {
  audio: true,
  video: true,
};

const Video = () => {
  const videoRef = useRef();
  const mediaStream = useUserMedia(CAPTURE_OPTIONS);

  if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
    videoRef.current.srcObject = mediaStream;
  }

  function handleCanPlay() {
    videoRef.current.play();
  }

  return (
    <div className="video">
      <video
        ref={videoRef}
        onCanPlay={handleCanPlay}
        autoPlay
        playsInline
        muted
      />

      <Options />
    </div>
  );
};

export default Video;

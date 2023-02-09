import React from "react";
import "../Styles/videoplayer.scss";
import Messages from "./Messages";
import Navbar from "./Navbar";
import Video from "./Video";

const VideoPlayer = () => {
  return (
    <div className="app__videoplayer">
      <div className="left__player">
        <Navbar />
        <hr />
        <Video />
      </div>
      <Messages />
    </div>
  );
};

export default VideoPlayer;

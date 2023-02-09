import React from "react";
import { Sidebar, VideoPlayer } from "../Components";
import "../Styles/VideoChat.scss";

const Newchat = () => {
  return (
    <div className="app__videochat">
      <div className="video__container">
        <Sidebar />
        <VideoPlayer />
      </div>
    </div>
  );
};

export default Newchat;

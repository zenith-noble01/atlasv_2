import React from "react";
import img from "../Images/1.jpg";

const Participants = () => {
  const participants = [
    {
      name: "zenith-noble",
      icon: img,
    },
    {
      name: "zenith-noble",
      icon: img,
    },
    {
      name: "zenith-noble",
      icon: img,
    },
    {
      name: "zenith-noble",
      icon: img,
    },
    {
      name: "zenith-noble",
      icon: img,
    },
    {
      name: "zenith-noble",
      icon: img,
    },
  ];
  return (
    <div className="participants__container">
      {participants.map((participant, index) => (
        <div className="participant" key={index}>
          <img src={participant.icon} alt="" />
          <div className="participant_infos">
            <p>{participant.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Participants;

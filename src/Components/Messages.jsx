import React, { useState } from "react";
import "../Styles/messages.scss";
import Participants from "./Participants";
import Chat from "./Chat.jsx";

const Messages = () => {
  const messageBar = ["message", "participants"];
  const [isActive, setIsActive] = useState(0);
  return (
    <div className="app__messages">
      <ul className="message__bar">
        {messageBar.map((title, index) => (
          <li
            key={index}
            onClick={() => setIsActive(index)}
            className={isActive === index ? "activeRoute" : null}
          >
            {title}
          </li>
        ))}
      </ul>
      <hr />

      <div className="active__display">
        {isActive === 0 ? <Chat /> : <Participants />}
      </div>
    </div>
  );
};

export default Messages;

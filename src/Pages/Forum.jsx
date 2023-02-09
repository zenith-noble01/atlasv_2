import React, { useState, useEffect } from "react";
import "../Styles/forum.scss";
import axios from "axios";

const Forum = () => {
  const [text, setText] = useState("");
  const [comment, setComment] = useState("");

  const [chats, setChats] = useState([]);

  let route = "http://localhost:5000/api/chat";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text.length <= 0) {
      return alert("text too short");
    }

    await axios
      .post(route, { text })
      .then((res) => {
        setChats([...chats, res.data]);
        setText("");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    const getChats = async () => {
      await axios
        .get(route)
        .then((res) => {
          setChats(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    getChats();
  }, [route]);

  console.log(chats);

  const handleComment = async (chat) => {
    await axios
      .put(`${route}/${chat._id}`, { comment })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="app__forum">
      <div className="forum__header">Forum</div>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="What's on your mind?"
          onChange={(e) => setText(e.target.value)}
          value={text}
        ></textarea>
        <button>Post</button>
      </form>
      <div className="chats__forum">
        {chats?.map((chat) => (
          <div className="chat__form" key={chat?._id}>
            {chat?.text}
            <div className="chat__form-input__container">
              <input
                placeholder="help your mate..."
                onChange={(e) => setComment(e.target.value)}
              />
              <button onClick={() => handleComment(chat)}>Posts</button>
            </div>
            <div className="chat__form-comments">
              {chats?.comment?.map((c, i) => (
                <div className="comment" key={i}>
                  {c?.comment}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;

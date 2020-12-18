import React, { useEffect, useState } from "react";

import { Avatar } from "@material-ui/core";
import "./sidebarChat.scss";

function SidebarChat({ addNewChat, name, lastMzj }) {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  const CreateChat = () => {
    const roomName = prompt("plz enter name for chat");
    if (roomName) {
    }
  };
  // pic(seed);
  return !addNewChat ? (
    <div className="sidebar-chat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="info">
        <h2>{name}</h2>
        <p>{lastMzj}</p>
      </div>
    </div>
  ) : (
    <div className="sidebar-chat" onClick={() => CreateChat()}>
      <h2>Add new Chat</h2>
    </div>
  );
}

export default SidebarChat;

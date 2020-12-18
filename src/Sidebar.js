import React, { useEffect, useState } from "react";

import "./sidebar.scss";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";
import { Link } from "react-router-dom";
import { useStateValue } from "./stateProvider";

function Sidebar() {
  const [data, setData] = useState([]);
  // const [pic, setPic] = useState("");
  // const [mzj, setMzj] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  const getData = () => {
    fetch("/data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        // console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        // console.log(myJson.chat.room);
        // myJson.chat.chats.map((d) => {
        //   // setMzj([...d.]);
        //   console.log(d);
        // });
        setData(myJson.chat.chats);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="sidebar">
      <div className="header">
        <div className="profile">
          <Avatar />
          <span>{user.name}</span>
        </div>
        <div className="headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="search">
        <div className="searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Search or Start new chat" />
        </div>
      </div>
      <div className="chats">
        <SidebarChat addNewChat />
        {data &&
          data.map((d) => (
            <Link to={`/room/${d._id}`} key={d._id}>
              <SidebarChat
                name={d.name}
                lastMzj={d.mzj[d.mzj.length - 1].mzj}
              />
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Sidebar;

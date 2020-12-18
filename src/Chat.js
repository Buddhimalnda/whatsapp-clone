import React, { useEffect, useState } from "react";
import { Avatar, CircularProgress, IconButton } from "@material-ui/core";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./chat.scss";
import { AttachFile, InsertEmoticon, Mic, Search } from "@material-ui/icons";
import { useParams } from "react-router-dom";
import { useStateValue } from "./stateProvider";

function Chat() {
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState("");
  const [data, setData] = useState([]);
  const { roomId } = useParams();
  const [isLoad, setIsLoad] = useState(false);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  useEffect(() => {
    if (roomId) {
      getData();
    }
  }, [roomId]);
  const sendMzj = (e) => {
    e.preventDefault();
    console.log("your typed >>> ", input);
    setInput("");
  };
  // const user = "buddhi";

  const getData = () => {
    try {
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
          console.log(myJson.chat.chats);
          // setData(myJson);
          myJson.chat.chats.map((d) => {
            console.log(roomId);
            if (d._id == roomId) {
              setData(d);
              setIsLoad(true);
            } else console.log("hi");
          });
          console.log(data);
        });
    } catch (e) {
      e.preventDefault();
    }
  };
  if (isLoad)
    return (
      <div className="chat">
        <div className="header">
          <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
          <div className="info">
            <h3>{data.name}</h3>
            <p>{data.mzj[data.mzj.length - 1].time}</p>
          </div>
          <div className="right">
            <IconButton>
              <Search />
            </IconButton>
            <IconButton>
              <AttachFile />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <div className="body">
          {data.mzj.map((d) => (
            <p
              className={`mzj ${user.name == d.user && "reciver"}`}
              key={d._id}
            >
              <span className="name">{d.user}</span>
              {d.mzj}
              <span className="timestamp">{d.time}</span>
            </p>
          ))}
        </div>
        <div className="footer">
          <IconButton>
            <InsertEmoticon />
          </IconButton>
          <form>
            <input
              type="text"
              placeholder="Text Mzj"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={(e) => sendMzj(e)}>Send a mzj</button>
          </form>
          <IconButton>
            <Mic />
          </IconButton>
        </div>
      </div>
    );
  return (
    <div className="loading">
      <CircularProgress />
    </div>
  );
}

export default Chat;

import React, { useEffect, useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./chat.scss";
import { AttachFile, InsertEmoticon, Mic, Search } from "@material-ui/icons";

function Open({}) {
  return (
    <div className="chat">
      <div className="header">
        {/* <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} /> */}
        <div className="info">
          <h3>Wellcome To Edutalkhub WhatsApp Clone</h3>
          <p>2020/12/18</p>
        </div>
        <div className="right">
          <IconButton disabled>
            <Search />
          </IconButton>
          <IconButton disabled>
            <AttachFile />
          </IconButton>
          <IconButton disabled>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="body"></div>
      {/* <div className="footer">
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
      </div> */}
    </div>
  );
}

export default Open;

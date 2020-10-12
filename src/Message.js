import { Avatar } from "@material-ui/core";
import React from "react";

import "./Message.css";

function Message() {
  return (
    <div className="message">
      <Avatar />
      <div className="message__info">
        <h4>
          Rupal<span className="message__timestamp"> timestamp</span>
        </h4>
        <p>This is a message</p>
      </div>
    </div>
  );
}

export default Message;

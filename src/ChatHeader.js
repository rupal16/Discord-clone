import React from "react";

import NotificationsIcon from "@material-ui/icons/Notifications";
import EditLocationIcon from "@material-ui/icons/EditLocation";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import SearchIcon from "@material-ui/icons/Search";
import SendIcon from "@material-ui/icons/Send";
import HelpIcon from "@material-ui/icons/Help";
import { SendRounded } from "@material-ui/icons";

import "./ChatHeader.css";

function ChatHeader({ channelName }) {
  return (
    <div className="chatHeader">
      <div className="chatHeader__left">
        <h3>
          <span className="chatHeader__hash">#</span>
          {channelName}
        </h3>
      </div>
      <div className="chatHeader__right">
        <NotificationsIcon />
        <EditLocationIcon />
        <PeopleAltIcon />
        <div className="chatHeader__search">
          <input placeholder="Search" />
          <SearchIcon />
        </div>

        <SendIcon />
        <HelpIcon />
      </div>
    </div>
  );
}

export default ChatHeader;

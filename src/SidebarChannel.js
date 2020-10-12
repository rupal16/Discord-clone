import React from "react";

import "./SidebarChannel.css";

function SidebarChannel({ id, channelName }) {
  return (
    <div className="sidebarChannel">
      <h4>
        <span className="sidebarChannel__hash">#</span>
        {channelName}
      </h4>
    </div>
  );
}

export default SidebarChannel;

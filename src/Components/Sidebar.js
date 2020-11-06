import React from "react";
import "./Sidebar.css";
import pic from "../static/user.png";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";
function Sidebar() {
  return (
    <div classbar="sidebar">
      <div className="sidebar_header">
        <div className="sidebar_headerRight">
          <Avatar src={pic} />
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

      <div className="sidebar_searchContainer">
        <SearchOutlined />
        <input type="text" placeholder="Search or start a new chat" />
      </div>
      <div className="sidebar_chats">
        <SidebarChat />
        <SidebarChat />

        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;

import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <h1>Welcome Bayer!</h1>
      <div className="icons">
        <SearchIcon className="icon" color="disabled"/>
        <NotificationsIcon className="icon"/>
        <AccountCircleRoundedIcon className="icon" color="" sx={{ fontSize: 50 }} />
        <LogoutRoundedIcon className="icon"/>
      </div>
    </div>
  );
}

export default Header;

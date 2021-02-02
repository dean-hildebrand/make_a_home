import React from "react";
import "../css/Navbar.css";

import HomeIcon from "@material-ui/icons/Home";
import WeekendIcon from "@material-ui/icons/Weekend";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";

function Navbar(props) {
  return (
    <div className="navbar__container">
      <div className="navbar__left">
        <img
          src="https://makeahomect.com/wp-content/uploads/2020/09/MAHLOGO.png"
          alt="logo"
          className="logo"
        />
        <span>
          <HomeIcon fontSize="large" />
          Home
        </span>{" "}
        <span>
          <WeekendIcon fontSize="large" />
          Shop
        </span>{" "}
        <span>
          <ChatBubbleIcon fontSize="large" />
          About
        </span>{" "}
        <span>Contact</span>
      </div>
      <div className="navbar__right">
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
        <PhoneIcon />
        <FavoriteBorderIcon />
        <ShoppingCartIcon />
        <SearchIcon />
      </div>
    </div>
  );
}

export default Navbar;

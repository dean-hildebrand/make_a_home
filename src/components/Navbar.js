import React from "react";
import "../css/Navbar.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

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
import EmailIcon from "@material-ui/icons/Email";
function Navbar(props) {
  return (
    <Router>
      <div className="navbar__container">
        <div className="navbar__left">
          <img
            src="https://makeahomect.com/wp-content/uploads/2020/09/MAHLOGO.png"
            alt="logo"
            className="logo"
          />
          <span>
            <Link to="/">
              <HomeIcon fontSize="large" color="primary" />
            </Link>
            Home
          </span>{" "}
          <span>
            <Link to="/shop">
              <WeekendIcon fontSize="large" color="primary" />
            </Link>
            Shop
          </span>{" "}
          <span>
            <Link to="/about">
              <ChatBubbleIcon fontSize="large" color="primary" />
            </Link>
            About
          </span>{" "}
          <span>
            <Link to="/contact">
              <EmailIcon fontSize="large" color="primary" />
            </Link>
            Contact
          </span>
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
    </Router>
  );
}

export default Navbar;

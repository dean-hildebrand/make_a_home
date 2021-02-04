import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../css/Footer.css";

function Footer(props) {
  return (
    <>
      <div className="footer">
        <div className="summary">
          <h2>Make a Home Furnishings</h2>
          <p>
            Make a Home Furnishings was cultivated from the need to do something
            with the items that were sitting in the warehouse and needed a fresh
            new look.
          </p>
          <p>
            A portion of the proceeds go to help homeless veterans and families
            in need. What a concept!
          </p>
        </div>
        <div className="about">
          <h4>About</h4>
          <ul>
            <li>Company</li>
            <li>Our Story</li>
            <li>Locations</li>
            <li>Team</li>
            <li>Investors</li>
          </ul>
        </div>
        <div className="support">
          <h4>Support</h4>
          <ul>
            <li>Order Status</li>
            <li>Refund Policies</li>
            <li>Complaints</li>
            <li>Help</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="social">
          <h4>Social</h4>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Call</li>
            <li>My Account</li>
          </ul>
        </div>
      </div>
      <div className="copyright-info">
        <div className="company">© Make a Home LLC 2021</div>
        <div className="me">
          <p>Made by Dean Hildebrand</p>
          <a href="https://www.linkedin.com/in/hildebranddean/">
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;

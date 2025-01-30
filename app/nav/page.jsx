// nav/page.jsx
import React from "react";
import "./nav.css";
import Image from "next/image";
import {
  FaSearch,
  FaShoppingCart,
  FaRegHeart,
  FaRegUser,
} from "react-icons/fa";

import logo from "../../public/assets/BrandLogo.png";
// import Menu from "../components/menu";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-box">
        <div className="navbar-container">
          <div className="navbar-logo">
            <Image src={logo} alt="Logo" />
          </div>

          <p className="logo">LOGO</p>

          <div className="navbar-right">
            <ul className="navbar-icons">
              <li>
                <a href="#">
                  <FaSearch />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaShoppingCart />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaRegHeart />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaRegUser />
                </a>
              </li>
            </ul>
            <div className="navbar-lang">
              <span>ENG</span> ▼
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-links">
        {/* <Menu /> */}
        
          <ul>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Stories</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
      </div>
      <div className="navbar-discover">
        <p className="discover">DISCOVER OUR PRODUCTS</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>
    </nav>
  );
};

export default Navbar;

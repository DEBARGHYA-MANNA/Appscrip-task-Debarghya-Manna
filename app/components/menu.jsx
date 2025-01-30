'use client';
import { useState } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuStyles = {
    position: "absolute",
    top: 0,
    right: 0,
    width: "200px",
    height: "100vh",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "transform 0.3s ease",
    transform: isOpen ? "translateX(0)" : "translateX(100%)",
  };

  const buttonStyles = {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: "30px",
    height: "25px",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    zIndex: "100",
  };

  const barStyles = {
    width: "30px",
    height: "4px",
    backgroundColor: "black",
    transition: "all 0.3s ease",
  };

  const bar1Styles = isOpen
    ? { transform: "rotate(45deg)", marginBottom: "0" }
    : {};
  const bar2Styles = isOpen ? { opacity: 0 } : {};
  const bar3Styles = isOpen
    ? { transform: "rotate(-45deg)", marginTop: "0" }
    : {};

  return (
    <div>
      <button onClick={toggleMenu} style={buttonStyles}>
        <div style={{ ...barStyles, ...bar1Styles }}></div>
        <div style={{ ...barStyles, ...bar2Styles }}></div>
        <div style={{ ...barStyles, ...bar3Styles }}></div>
      </button>

      <div style={menuStyles}>
        <a
          href="#"
          style={{
            marginBottom: "20px",
            textDecoration: "none",
            fontSize: "20px",
          }}
        >
          Home
        </a>
        <a
          href="#about"
          style={{
            marginBottom: "20px",
            textDecoration: "none",
            fontSize: "20px",
          }}
        >
          About
        </a>
        <a
          href="#services"
          style={{
            marginBottom: "20px",
            textDecoration: "none",
            fontSize: "20px",
          }}
        >
          Services
        </a>
        <a
          href="#contact"
          style={{
            marginBottom: "20px",
            textDecoration: "none",
            fontSize: "20px",
          }}
        >
          Contact
        </a>
      </div>

      <style jsx>{`
        @media (min-width: 1024px) {
          button {
            display: none;
          }
          div {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Menu;

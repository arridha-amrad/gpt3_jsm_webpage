import logo from "../../assets/GPT-3.svg";
import "./MyNavbar.css";
import CloseIcon from "../../assets/close.svg";
import MenuIcon from "../../assets/menu.svg";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

const MyNavbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <div className="container">
      <div className="navbar">
        <div className="navbar-menu">
          <img src={logo} alt="logo" />
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#home" className="nav-link">
            What is GPT ?
          </a>
          <a href="#home" className="nav-link">
            Open AI
          </a>
          <a href="#home" className="nav-link">
            Case Studies
          </a>
          <a href="#home" className="nav-link">
            Library
          </a>
        </div>
        <div className="navbar-actions">
          <button className="secondary">Sign in</button>
          <button className="primary">Sign up</button>
          <div className="collapsed-menu">
            {isMenuOpen ? (
              <img
                onClick={() => setMenuOpen(false)}
                src={CloseIcon}
                alt="close"
              />
            ) : (
              <img
                onClick={() => setMenuOpen(true)}
                src={MenuIcon}
                alt="menu"
              />
            )}
            <CSSTransition
              unmountOnExit
              in={isMenuOpen}
              timeout={500}
              classNames="alert"
            >
              <div className="menu gradient_bg shadow">
                <a href="#home">Home</a>
                <a href="#home">What is GPT ?</a>
                <a href="#home">Open AI</a>
                <a href="#home">Case Studies</a>
                <a href="#home">Library</a>
                <a href="#home">Sign in</a>
                <a href="#home" className="btn">
                  Sign up
                </a>
              </div>
            </CSSTransition>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyNavbar;

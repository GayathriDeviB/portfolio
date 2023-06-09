import React, { useState } from "react";
import burger from "../../assets/icons/hamburger.svg";
import close from "../../assets/icons/close.svg";
import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  const [sidebarOn, setSidebarOn] = useState(false);
  const Hamburger = (
    <>
      {!sidebarOn ? (
        <img
          src={burger}
          alt="icon"
          width="30px"
          height="30px"
          className="hamimage"
          onClick={(e) => {
            e.preventDefault();
            setSidebarOn(true);
          }}
        />
      ) : (
        <img
          src={close}
          alt="icon"
          width="30px"
          height="30px"
          className="hamimage"
          onClick={(e) => {
            e.preventDefault();
            setSidebarOn(false);
          }}
        />
      )}
    </>
  );
  const Sidebar = (
    <div className="sidebar">
      <div className="sidebar_content">
        <Link to="/">Overview</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/certification">Certification</Link>
      </div>
    </div>
  );
  return (
    <div className="header_main">
      <h2>PORTFOLIO</h2>
      <div className="head1">
        <nav>
          <Link to="/">Overview</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/certification">Certification</Link>
        </nav>
        {Hamburger}
        {sidebarOn && Sidebar}
        <button>HireMe</button>
      </div>
    </div>
  );
};
export default Header;

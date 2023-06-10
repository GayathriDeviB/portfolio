import React from "react";
import "./portfolioprojects.css";
import project from "../../assets/icons/project.png";
import { Link } from "react-router-dom";
const Portfolioprojects = () => {
  return (
    <div className="portfolioprojects_main">
      <h1>PROJECTS</h1>
      <div className="portfolio_allprojects">
        <div className="portfolio_project1">
          <img src={project} alt="icon" />
          <Link to="/medialander">
            <h1>MEDIA LANDER</h1>
          </Link>
        </div>
        <div className="portfolio_project2">
          <img src={project} alt="icon" />
          <Link to="/socialnetwork">
            <h1>SOCIAL NETWORK</h1>
          </Link>
        </div>
        <div className="portfolio_project3">
          <img src={project} alt="icon" />
          <Link to="/portfolioproject">
            <h1>PORTFOLIO</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Portfolioprojects;

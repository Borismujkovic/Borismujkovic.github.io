import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";


const Header = (props) => {
  return (
    <div id="header">
      <div className="logo">
        <img
          src="https://t3.ftcdn.net/jpg/00/98/38/96/240_F_98389694_PMbfpSMjINYa0A7VCiwuwy8ClDcwdB1t.jpg"
          alt="logo"
        />
        <Link to="/" className="backToHome">
          <h2>TV Maze</h2>
        </Link>
      </div>
      <div>
        <h1>Top 50 rated IMDB shows</h1>
      </div>
    </div>
  );
};

export default Header;

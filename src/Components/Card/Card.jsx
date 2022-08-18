import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";


const Card = (props) => {
  return (
    <Link to={`/SinglePage/${props.singleMovie.id}`} className="select">
      <div id="card">
        <img src={props.singleMovie.image.medium} alt="movie-image" />
        <h2>{props.singleMovie.name}</h2>
      </div>
    </Link>
  );
};
export default Card;

import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./SinglePage.scss";
import { useContext } from "react";
import { adminCtx } from "../../context";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const SinglePage = (props) => {
  const { id } = useParams();

  const [show, setShow] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [cast, setCast] = useState([]);

  const fetchShow = () => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => res.json())
      .then((res) => setShow(res));

    fetch(`https://api.tvmaze.com/shows/${id}/seasons`)
      .then((res) => res.json())
      .then((res) => setSeasons(res));

    fetch(`https://api.tvmaze.com/shows/${id}/cast`)
      .then((res) => res.json())
      .then((res) => setCast(res));
  };

  useEffect(() => {
    fetchShow();
  }, []);

  return (
    <div id="singlePage">
      <Header />
      <h1>{show.name}</h1>
      <div className="showInfo">
        <img src={show?.image?.original} alt="" />

        <div className="seasonsCast">
          <div className="seasons">
            <h2>Seasons({seasons.length}):</h2>
            <ul>
              {seasons.map((e) => {
                return (
                  <li>
                    {e.premiereDate} - {e.endDate}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="cast">
            <h2>Cast({cast.length}):</h2>
            <ul>
              {cast.map((e) => {
                return <li>{e.person.name}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="info">
          <h2>Info</h2>
          <p dangerouslySetInnerHTML={{ __html: show.summary }}></p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SinglePage;

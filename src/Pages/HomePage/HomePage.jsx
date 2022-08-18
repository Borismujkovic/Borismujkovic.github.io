import React from "react";
import Header from "../../Components/Header/Header";
import Card from "../../Components/Card/Card";
import Footer from "../../Components/Footer/Footer";
import "./HomePage.scss";
import { useContext } from "react";
import { adminCtx } from "../../context";
import { useState } from "react";

const HomePage = (props) => {
  const { data } = useContext(adminCtx);
  const [search, setSearch] = useState("");
  const [datan, setDatan] = useState([])

  const filteredMovies = (event) => {
    setSearch(event.target.value);
  };
  console.log(datan);

  const fetchData = () => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((response) =>
        setDatan(
          response
            // .sort((a, b) => b.rating.average - a.rating.average)
            // .filter((e, i) => i < 50)
        )
      );
  };

  const filtered = data.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div id="HomePage">
      <Header filteredMovies={filteredMovies}></Header>
      <div className="search">
        <img
          src="https://freesvg.org/storage/img/thumb/Search-icon.png"
          alt=""
        />
        <input type="search" onChange={filteredMovies} />
        <button onClick={fetchData}>klik</button>
      </div>
      <div className="movies-wrapper">
        {filtered.map((e) => (
          <Card singleMovie={e} selectMovie={props.selectMovie} />
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;

import React, { useEffect, useState } from "react";
import HomePage from "./Pages/HomePage/HomePage";
import SinglePage from "./Pages/SinglePage/SinglePage";
import "./Movies.css";
import { AdminProvider } from "./context";
import { Switch, Route } from "react-router-dom";

const Movies = () => {
  const [selectedMovie, setSelectedMovie] = useState([]);
  const [data, setData] = useState([]);
  console.log(data);

  const fetchData = () => {
    fetch("https://api.tvmaze.com/shows", {mode: "cors"})
      .then((res) => res.json())
      .then((response) =>
        setData(
          response
            .sort((a, b) => b.rating.average - a.rating.average)
            .filter((e, i) => i < 50)
        )
      );
  };

  const setSelectMovie = (kliknutiFilm) => {
    setSelectedMovie(kliknutiFilm);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AdminProvider value={{ data, selectedMovie }}>
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage movies={data} selectMovie={setSelectMovie} />
          </Route>
          <Route path="/SinglePage/:id">
            <SinglePage />
          </Route>
        </Switch>
      </div>
    </AdminProvider>
  );
};

export default Movies;

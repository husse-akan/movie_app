import React from "react";
import { Helmet } from "react-helmet-async";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/routes/HomePage";
import FavoriteMovies from "./components/routes/FavoriteMovies"; // Se till att detta är rätt
import MovieDetail from "./components/routes/MovieDetail";

function App() {
  return (
    <Layout>
      <Helmet>
        <title>Movie App</title>
        <meta
          name="description"
          content="Hitta information och beskrivning av dina favoritfilmer."
        />
        <meta name="keywords" content="film, filmer, favoritfilmer, omdbapi" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/favorites" element={<FavoriteMovies />} />
      </Routes>
    </Layout>
  );
}

export default App;

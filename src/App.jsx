import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/routes/HomePage";
import FavoriteMovies from "./components/routes/FavoriteMovies"; // Se till att detta är rätt
import MovieDetail from "./components/routes/MovieDetail";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/favorites" element={<FavoriteMovies />} />
      </Routes>
    </Layout>
  );
}

export default App;

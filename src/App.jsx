// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/routes/HomePage";
import MovieDetail from "./components/routes/FavoriteMovies";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetail />} />{" "}
        {/* Lägg till routen för filmdetaljer */}
      </Routes>
    </Layout>
  );
}

export default App;

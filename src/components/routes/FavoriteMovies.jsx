import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromFavorites } from "../../features/moviesSlice"; // Importera removeFromFavorites

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.movies); // Hämta favoriter

  const handleRemoveFromFavorites = (movie) => {
    dispatch(removeFromFavorites(movie)); // Ta bort film från favoriter
  };

  return (
    <div>
      <h1>Favoritfilmer</h1>
      {favorites.length > 0 ? (
        favorites.map((movie) => (
          <div key={movie.imdbID}>
            <Link to={`/movie/${movie.imdbID}`}>
              <h3>{movie.Title}</h3>
            </Link>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt={movie.Title} />
            <button onClick={() => handleRemoveFromFavorites(movie)}>
              Remove from Favorites
            </button>
          </div>
        ))
      ) : (
        <p>Inga favoriter hittades.</p>
      )}
    </div>
  );
};

export default FavoritesPage;

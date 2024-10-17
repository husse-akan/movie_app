import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  addToFavorites,
  removeFromFavorites,
} from "../../features/moviesSlice"; // Importera actions
import { Link } from "react-router-dom";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const {
    list: movies,
    status,
    error,
    favorites,
  } = useSelector((state) => state.movies);

  const handleSearch = () => {
    console.log("Searching for:", searchTerm); // Debugging
    dispatch(fetchMovies(searchTerm)); // Trigga den asynkrona thunken
  };

  const handleAddToFavorites = (movie) => {
    dispatch(addToFavorites(movie)); // Lägg till film i favoriter
  };

  const handleRemoveFromFavorites = (movie) => {
    dispatch(removeFromFavorites(movie)); // Ta bort film från favoriter
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter movie title"
        />
        <button type="submit">Search</button>
      </form>

      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {status === "succeeded" && (
        <div>
          {Array.isArray(movies) && movies.length > 0 ? (
            movies.map((movie) => (
              <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
                <img src={movie.Poster} alt={movie.Title} />
                {favorites.some((fav) => fav.imdbID === movie.imdbID) ? (
                  <button onClick={() => handleRemoveFromFavorites(movie)}>
                    Remove from Favorites
                  </button>
                ) : (
                  <button
                    id="red-btn"
                    onClick={() => handleAddToFavorites(movie)}
                  >
                    Add to Favorites
                  </button>
                )}
              </Link>
            ))
          ) : (
            <p>Inga filmer hittades.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage;

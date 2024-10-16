import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetail } from "../../features/moviesSlice";

const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movie, status, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovieDetail(id));
  }, [dispatch, id]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div>
      {movie ? (
        <>
          <h2>{movie.Title}</h2>
          <p>{movie.Year}</p>
          <img src={movie.Poster} alt={movie.Title} />
          <p>{movie.Plot}</p>
          {/* Lägg till mer information om filmen här */}
        </>
      ) : (
        <p>Inga detaljer hittades för denna film.</p>
      )}
    </div>
  );
};

export default MovieDetail;

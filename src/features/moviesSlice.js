// src/features/moviesSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (query) => {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=ab456ebd&s=${query}`
    );
    return await response.json();
  }
);

export const fetchMovieDetail = createAsyncThunk(
  "movies/fetchMovieDetail",
  async (id) => {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=ab456ebd&i=${id}`
    );
    return await response.json();
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: { list: [], status: null, movie: null, favorites: [] }, // Lägg till 'favorites'
  reducers: {
    addToFavorites: (state, action) => {
      // Kontrollera om filmen redan finns i favoriter
      const existingMovie = state.favorites.find(
        (movie) => movie.imdbID === action.payload.imdbID
      );
      if (!existingMovie) {
        state.favorites.push(action.payload); // Lägg till filmen i favoriter
      }
    },
    removeFromFavorites: (state, action) => {
      // Filtrera bort filmen från favoriter
      state.favorites = state.favorites.filter(
        (movie) => movie.imdbID !== action.payload.imdbID
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload.Search || []; // Se till att det alltid är en array
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(fetchMovieDetail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovieDetail.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movie = action.payload; // Spara detaljerad film
      })
      .addCase(fetchMovieDetail.rejected, (state) => {
        state.status = "failed";
      });
  },
});

// Exportera actions för att kunna använda dem i komponenterna
export const { addToFavorites, removeFromFavorites } = moviesSlice.actions;

export default moviesSlice.reducer;

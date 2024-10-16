import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk för att hämta filmer baserat på en sökterm
export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (query) => {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=ab456ebd&s=${query}`
    );
    return await response.json();
  }
);

// Async thunk för att hämta detaljerad information om en film baserat på dess ID
export const fetchMovieDetail = createAsyncThunk(
  "movies/fetchMovieDetail",
  async (id) => {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=ab456ebd&i=${id}`
    );
    return await response.json();
  }
);

// Skapa slice för movies med tillstånd för filmlista, favoritfilmer och statusar
const moviesSlice = createSlice({
  name: "movies",
  initialState: { list: [], status: null, movie: null, favorites: [] }, // Lägg till 'favorites' i initialState
  reducers: {
    // Reducer för att lägga till film till favoriter
    addToFavorites: (state, action) => {
      const existingMovie = state.favorites.find(
        (movie) => movie.imdbID === action.payload.imdbID
      );
      if (!existingMovie) {
        state.favorites.push(action.payload); // Lägg till filmen om den inte redan finns
      }
    },
    // Reducer för att ta bort film från favoriter
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        (movie) => movie.imdbID !== action.payload.imdbID
      );
    },
  },
  extraReducers: (builder) => {
    builder
      // Hantera laddning av filmlista
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      // Hantera när filmlistan har laddats klart
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload.Search || []; // Se till att det alltid är en array
      })
      // Hantera fel vid laddning av filmlista
      .addCase(fetchMovies.rejected, (state) => {
        state.status = "failed";
      })
      // Hantera laddning av detaljerad film
      .addCase(fetchMovieDetail.pending, (state) => {
        state.status = "loading";
      })
      // Hantera när detaljerad film har laddats klart
      .addCase(fetchMovieDetail.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movie = action.payload; // Spara detaljerad film
      })
      // Hantera fel vid laddning av detaljerad film
      .addCase(fetchMovieDetail.rejected, (state) => {
        state.status = "failed";
      });
  },
});

// Exportera actions för att använda dem i komponenter
export const { addToFavorites, removeFromFavorites } = moviesSlice.actions;

export default moviesSlice.reducer;

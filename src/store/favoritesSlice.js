import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",

  initialState: {
    movies: [],
  },

  reducers: {
    addFavorite: (state, action) => {
      console.log("Reducer Running", action.payload.title);
      const exists = state.movies.find(
        (movie) => movie.id === action.payload.id
      );

      if (!exists) {
        state.movies.push(action.payload);
      }
      console.log(state.movies);
    },

    removeFavorite: (state, action) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
});

export const {
  addFavorite,
  removeFavorite,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;
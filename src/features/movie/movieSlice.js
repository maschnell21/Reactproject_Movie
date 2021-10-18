// import { createSlice } from "@reduxjs/toolkit";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";
export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${movieText}&type=movie`
    );
    return response.data;
  }
);
export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const seriesText ="Friends";
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${seriesText}&type=series`
    );
    return response.data;
  }
);
export const fetchAsyncMovieOrShowsdetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&i=${id}&Plot=full`
    );
    return response.data;
  }
);
const initialState = {
  movies: {},
  shows: {},
  selectMoviesorShows:{},
};
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // addMovies: (state, { payload }) => {
    //   state.movies = payload;
    // },
    removeSelectedMovieOrShow:(state)=>{
      state.selectMoviesorShows={};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },

    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("fetched Successsfully");
      return { ...state, movies: payload };
    },

    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected");
      // return {...state,movies:payload};
    },

    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("fetched Successsfully shows");
      return { ...state, shows: payload };
    },
    [fetchAsyncMovieOrShowsdetail.fulfilled]: (state, { payload }) => {
      console.log("fetched Successsfully detailes");
      return { ...state,selectMoviesorShows: payload };
    },
  },
});
// export const { addMovies } = movieSlice.actions;
export const {  removeSelectedMovieOrShow} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMoviesOrShows = (state) => state.movies.selectMoviesorShows;
export default movieSlice.reducer;

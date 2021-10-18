import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
// import { addMovies } from "../../features/movie/movieSlice";
import {fetchAsyncMovies, fetchAsyncShows} from "../../features/movie/movieSlice"
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
   dispatch(fetchAsyncMovies());
   dispatch(fetchAsyncShows());
     },[dispatch]);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};
export default Home;

import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movie/movieSlice";
import  MovieCard  from "../MovieCard/MovieCard";
import "./MovieListing.scss";
 const MovieListing = () => {
    const movies = useSelector(getAllMovies);
     console.log(movies);
  
  let renderMovies = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie,index) => (
        <MovieCard key={index} data={movie}/>
    ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  return (
    <div>
      <div className="movie-wrapper">
        <div className="movie-list">
             <div className="movie-container">
              {renderMovies}
              </div>
        </div>
      </div>
    </div>
  );
};
export default MovieListing;
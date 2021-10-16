import React, { useEffect } from "react";
import  MovieListing  from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movie/movieSlice";
// http://www.omdbapi.com/?i=tt3896198&apikey=d93678da
const Home = () => {
  const movieText = "Harry";
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        // .get(`http://www.omdbapi.com/?i=tt3896198&apikey=d93678da`)
        // .get("https://jsonplaceholder.typicode.com/users")
        .catch((err) => {
          console.log("Err:", err);
        });
      //   console.log("data");
      // console.log(response);
      dispatch(addMovies(response.data));
    };
    fetchMovies();
    // console.log("data");
  }, []);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};
export default Home;

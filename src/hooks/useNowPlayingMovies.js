import { useDispatch } from "react-redux";
import { OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const fetchMoviesList = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      OPTIONS
    );
    const json = await response.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    fetchMoviesList();
  }, []);
  return <div></div>;
};

export default useNowPlayingMovies;

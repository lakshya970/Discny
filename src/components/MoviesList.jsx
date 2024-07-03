import React, { useEffect, useState } from "react";
import Globalapi from "../services/Globalapi";
const POSTER_IMAGE_URL = "https://image.tmdb.org/t/p/original/";

function MoviesList({ genreId }) {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    getGenreMovies();
  }, []);
  const getGenreMovies = () => {
    Globalapi.getMoviesByGaneraId(genreId).then((res) => {
      console.log(res.data.results);
      setMovieList(res.data.results);
    });
  };
  return (
    <>
      <div className="flex overflow-x-auto scrollbar-hide gap-8 px-10 py-3 md:py-8">
        {movieList.map((item, index) => (
          <img
            src={POSTER_IMAGE_URL + item.poster_path}
            alt=""
            className="w-[100px] md:w-[200px] rounded-md hover:scale-110 transition-all duration-300 ease-in-out hover:border-[2px] border-gray-200 duration-300 ease-out"
          />
        ))}
      </div>
    </>
  );
}

export default MoviesList;

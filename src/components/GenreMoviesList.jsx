import React from "react";
import GaneraList from "../constent/GaneraList";
import MoviesList from "./MoviesList";

function GenreMoviesList() {
  return (
    <div>
      {GaneraList.map((item, index) => (
        <div>
          <h2 className="text-white text-sm font-semibold px-10 py-5 mt-4 md:text-xl">
            {item.name}
          </h2>
          <MoviesList genreId={item.id} />
        </div>
      ))}
    </div>
  );
}

export default GenreMoviesList;

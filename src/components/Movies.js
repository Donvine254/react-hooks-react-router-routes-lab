import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div >
      <h1 style={{textAlign:"center"}}>Movies Page</h1>
      {movies.map((movie) => {
        return (
          <div key={movie.title}>
            
            <h3>{movie.title}</h3> <h4>{movie.time} minutes</h4> <h4>Genres</h4>
            <ul>
              {movie.genres.map((genre) => (
                <li key={genre}>{genre}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Movies;

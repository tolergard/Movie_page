import { useState, useEffect } from "react";
import SelectedItemView from "../components/SelectedItemView";

function Trending() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOWE5NGFlM2E4OTM1YjZhMmZkY2NiYTdiYzNlOGRhYSIsInN1YiI6IjY1ZjlhNDU5MjRiMzMzMDE4NDdiMGVkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.08GYxUEVUv87LasmHEPGZgVZ31DCr9QCqbexX57bxlI",
    },
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/week?language=en-US",
      options
    )
      .then((response) => response.json())
      .then((result) => {
        setTrendingMovies(result.results || []);
        console.log(result.results);
      })
      .catch((error) =>
        console.error("Error fetching trending movies:", error)
      );
  }, []);

  const itemClick = (item) => {
    setSelectedMovie(item);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {selectedMovie && <SelectedItemView item={selectedMovie} />}
      <div className="grid-layout">
        {trendingMovies.map((movie) => (
          <div
            className="card-container"
            key={movie.id}
            onClick={() => itemClick(movie)}
          >
            <img
              className="poster-img"
              src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`Poster for ${movie.title}`}
            />
            <div className="card-info">
              <p>{new Date(movie.release_date).getFullYear()}</p>
              <h3>{movie.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Trending;

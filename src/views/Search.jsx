import { useState } from "react";
function Search() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const searchMovies = (e) => {
    e.preventDefault();
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOWE5NGFlM2E4OTM1YjZhMmZkY2NiYTdiYzNlOGRhYSIsInN1YiI6IjY1ZjlhNDU5MjRiMzMzMDE4NDdiMGVkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.08GYxUEVUv87LasmHEPGZgVZ31DCr9QCqbexX57bxlI",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/search/multi?include_adult=false&language=en-US&page=1&query=${search}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setResults(response.results);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <form onSubmit={searchMovies}>
        <input
          className="search-input"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search-btn" type="submit">
          <img
            className="magnifying-glass"
            src="./src/assets/search.png"
            alt="search icon"
          ></img>
        </button>
      </form>
      <div className="grid-layout">
        {results.map((item) => (
          <div className="card-container" key={item.id}>
            <img
              className="poster-img"
              src={`http://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={`Poster for ${item.title || item.name}`}
            />
            <div className="card-info">
              <p>{item.media_type === "movie" ? "MOVIE" : "TV"}</p>
              <p>
                {new Date(
                  item.release_date || item.first_air_date
                ).getFullYear()}
              </p>
              <h3>{item.title || item.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Search;

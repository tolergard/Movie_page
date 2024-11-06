import { useState, useEffect } from "react";

function Popular() {
  const [popularSeries, setPopularSeries] = useState([]);

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
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
      options
    )
      .then((response) => response.json())
      .then((result) => {
        setPopularSeries(result.results);
        console.log(result.results);
      })
      .catch((error) => console.error("Error fetching popular series:", error));
  }, []);

  return (
    <>
      <div className="grid-layout">
        {popularSeries.map((series) => (
          <div className="card-container" key={series.id}>
            <img
              className="poster-img"
              src={`http://image.tmdb.org/t/p/w500${series.poster_path}`}
              alt={`Poster for ${series.title}`}
            />
            <div className="card-info">
              <p>{new Date(series.first_air_date).getFullYear()}</p>
              <h3>{series.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Popular;

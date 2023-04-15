import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let moviesList = [
      {
        id: 1,
        title: "The Shawshank Redemption",
        release_date: "1994-09-23",
        runtime: 142,
        mpaa_rating: "R",
        description: "Some long description.",
      },
      {
        id: 2,
        title: "The Godfather",
        release_date: "1972-03-24",
        runtime: 175,
        mpaa_rating: "R",
        description: "Some long description.",
      },
    ];
    setMovies(moviesList);
  }, []);

  return(
    <div>
      <h2>Movies</h2>
      <hr />
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Movie</th>
            <th>Release Date</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((m) => (
            <tr key={m.id}>
              <td>
                <Link to={`/movies/${m.id}`}>{m.title}</Link>
              </td>
              <td>{m.release_date}</td>
              <td>{m.mpaa_rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Movies;
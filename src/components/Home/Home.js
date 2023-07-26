import { moviesList } from "../DummyData/DummyData";
import "./Home.scss";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="headerDiv">
        <h1>Mini Netflix</h1>
      </div>
      <div className="cards">
        {moviesList.map((movie) => (
          <div className="card" key={movie.title}>
            <Link to={`/movie/${encodeURIComponent(movie.title)}`}>
              <img src={movie.posterUrl} alt={movie.title} />
            </Link>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
}

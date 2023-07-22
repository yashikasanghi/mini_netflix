import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Movie.scss";

const MovieDetails = () => {
  const { title } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    fetchMovieDetails(title);
  }, [title]);

  const fetchMovieDetails = async (movieTitle) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?t=${movieTitle}&apikey=6eb88523`
      );
      const data = await response.json();
      setMovieDetails(data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  if (!movieDetails) {
    return <div className="loader"></div>;
  }

  return (
    <div className="movieContainer">
      <img
        className="poster movieSubContainers"
        src={movieDetails.Poster}
        alt={movieDetails.Title}
      />
      <div className="movieDetails movieSubContainers">
        <div style={{ display: "flex" }}>
          <h1>{movieDetails.Title}</h1>
          <div className="ratingsDiv">
            <span className="ratingSpan">
              {movieDetails.imdbRating} <br />
            </span>
            <span className="ratingSource">IMDB Rating</span>
          </div>
        </div>

        <p>{movieDetails.Plot}</p>
        <table>
          <tr>
            <td className="movieDetailsTitle">Director:</td>
            <td>{movieDetails.Director}</td>
          </tr>
          <tr>
            <td className="movieDetailsTitle">Casts:</td>
            <td>{movieDetails.Actors}</td>
          </tr>
          <tr>
            <td className="movieDetailsTitle">Duration:</td>
            <td>{movieDetails.Runtime}</td>
          </tr>
          <tr>
            <td className="movieDetailsTitle">Release Date:</td>
            <td>{movieDetails.Released}</td>
          </tr>
          <tr>
            <td className="movieDetailsTitle">Genres:</td>
            <td>{movieDetails.Genre}</td>
          </tr>
          <tr>
            <td className="movieDetailsTitle">Language:</td>
            <td>{movieDetails.Language}</td>
          </tr>
          <tr>
            <td className="movieDetailsTitle">Awards:</td>
            <td>{movieDetails.Awards}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default MovieDetails;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Movie.scss";

const movieJSON = {
  Title: "The Big Short",
  Year: "2015",
  Rated: "R",
  Released: "23 Dec 2015",
  Runtime: "130 min",
  Genre: "Biography, Comedy, Drama",
  Director: "Adam McKay",
  Writer: "Charles Randolph, Adam McKay, Michael Lewis",
  Actors: "Christian Bale, Steve Carell, Ryan Gosling",
  Plot: "In 2006-2007 a group of investors bet against the United States mortgage market. In their research, they discover how flawed and corrupt the market is.",
  Language: "English",
  Country: "United States",
  Awards: "Won 1 Oscar. 37 wins & 81 nominations total",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNDc4MThhN2EtZjMzNC00ZDJmLThiZTgtNThlY2UxZWMzNjdkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  Ratings: [
    {
      Source: "Internet Movie Database",
      Value: "7.8/10",
    },
    {
      Source: "Rotten Tomatoes",
      Value: "89%",
    },
    {
      Source: "Metacritic",
      Value: "81/100",
    },
  ],
  Metascore: "81",
  imdbRating: "7.8",
  imdbVotes: "450,572",
  imdbID: "tt1596363",
  Type: "movie",
  DVD: "15 Mar 2016",
  BoxOffice: "$70,259,870",
  Production: "N/A",
  Website: "N/A",
  Response: "True",
};

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
    <div>
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
    </div>
  );
};

export default MovieDetails;

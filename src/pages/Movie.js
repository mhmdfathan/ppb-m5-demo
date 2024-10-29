import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import CardBig from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import "./Movie.css";

export default function Movie() {
  const STAR_COLOR = "rgb(220, 117, 21)";
  const STAR_SIZE = 20;

  // Use the same movieData from DetailFilm.js
  const movieData = {
    1: {
      title: "John Wick",
      id: 1,
      rate: 4,
      genre: "Action, Crime",
      img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9._RI_TTW_.jpg",
    },
    2: {
      title: "Oppenheimer",
      id: 2,
      rate: 4,
      genre: "Biography, Drama, History",
      img: "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
    },
    3: {
      title: "The Matrix",
      id: 3,
      rate: 4,
      genre: "Action, Sci-Fi",
      img: "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg",
    },
    // Add more data entries as needed
  };

  return (
    <>
      <p id="movies">Top Movies</p>
      <div className="containerTop">
        {Object.values(movieData).map((item, index) => (
          <Fragment key={item.id}>
            <CardBig
              title={item.title}
              img={item.img}
              genre={item.genre}
              size={STAR_SIZE}
              color={STAR_COLOR}
            />
            {index < Object.values(movieData).length - 1 && (
              <div style={{ marginRight: 20 }} />
            )}
          </Fragment>
        ))}
      </div>
      <div className="rowcoba">
        <div className="column">
          <p id="movies">All Movies</p>
          {Object.values(movieData).map((item, index) => (
            <Fragment key={item.id}>
              <Link to={`/movie/${item.id}`} key={item.id}>
                <CardSmall
                  title={item.title}
                  img={item.img}
                  genre={item.genre}
                  size={STAR_SIZE}
                  color={STAR_COLOR}
                />
              </Link>
              {index < Object.values(movieData).length - 1 && (
                <div style={{ marginBottom: 20 }} />
              )}
            </Fragment>
          ))}
        </div>
        <div className="column">
          <p id="movies">All Movies</p>
          {Object.values(movieData).map((item, index) => (
            <Link to={`/movie/${item.id}`} key={item.id}>
              <Fragment key={item.id}>
                <CardSmall
                  title={item.title}
                  img={item.img}
                  genre={item.genre}
                  size={STAR_SIZE}
                  color={STAR_COLOR}
                />
              </Fragment>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

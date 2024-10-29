import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import CardBig from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import "./Game.css";

export default function Game() {
  const STAR_COLOR = "rgb(220, 117, 21)";
  const STAR_SIZE = 20;

  const gameData = {
    1: {
      title: "The Witcher 3",
      id: 1,
      rate: 5,
      genre: "RPG, Action",
      img: "https://m.media-amazon.com/images/I/81VXaZAH1rL._AC_SY679_.jpg",
    },
    2: {
      title: "Cyberpunk 2077",
      id: 2,
      rate: 4,
      genre: "Action, Sci-Fi",
      img: "https://m.media-amazon.com/images/I/81wXTbk6O3L._AC_SL1500_.jpg",
    },
    3: {
      title: "Red Dead Redemption 2",
      id: 3,
      rate: 5,
      genre: "Action, Adventure",
      img: "https://m.media-amazon.com/images/I/81feyAxiEFL._AC_SY679_.jpg",
    },
  };

  return (
    <>
      <p id="movies">Top Games</p>
      <div className="containerTop">
        {Object.values(gameData).map((item, index) => (
          <Fragment key={item.id}>
            <CardBig
              title={item.title}
              img={item.img}
              genre={item.genre}
              size={STAR_SIZE}
              color={STAR_COLOR}
            />
            {index < Object.values(gameData).length - 1 && (
              <div style={{ marginRight: 20 }} />
            )}
          </Fragment>
        ))}
      </div>
      <div className="rowcoba">
        <div className="column">
          <p id="movies">All Games</p>
          {Object.values(gameData).map((item, index) => (
            <Fragment key={item.id}>
              <Link to={`/game/${item.id}`} key={item.id}>
                <CardSmall
                  title={item.title}
                  img={item.img}
                  genre={item.genre}
                  size={STAR_SIZE}
                  color={STAR_COLOR}
                />
              </Link>
              {index < Object.values(gameData).length - 1 && (
                <div style={{ marginBottom: 20 }} />
              )}
            </Fragment>
          ))}
        </div>
        <div className="column">
          <p id="movies">All Games</p>
          {Object.values(gameData).map((item, index) => (
            <Link to={`/game/${item.id}`} key={item.id}>
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

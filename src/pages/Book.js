import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import CardBig from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import "./Book.css";

export default function Book() {
  const STAR_COLOR = "rgb(220, 117, 21)";
  const STAR_SIZE = 20;

  const bookData = {
    1: {
      title: "To Kill a Mockingbird",
      id: 1,
      rate: 5,
      genre: "Fiction, Drama",
      img: "https://m.media-amazon.com/images/I/81OdwZDKzDL.jpg",
    },
    2: {
      title: "1984",
      id: 2,
      rate: 5,
      genre: "Dystopian, Sci-Fi",
      img: "https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg",
    },
    3: {
      title: "The Great Gatsby",
      id: 3,
      rate: 4,
      genre: "Classic, Fiction",
      img: "https://m.media-amazon.com/images/I/71VZ8AiOsxL.jpg",
    },
  };

  return (
    <>
      <p id="movies">Top Books</p>
      <div className="containerTop">
        {Object.values(bookData).map((item, index) => (
          <Fragment key={item.id}>
            <CardBig
              title={item.title}
              img={item.img}
              genre={item.genre}
              size={STAR_SIZE}
              color={STAR_COLOR}
            />
            {index < Object.values(bookData).length - 1 && (
              <div style={{ marginRight: 20 }} />
            )}
          </Fragment>
        ))}
      </div>
      <div className="rowcoba">
        <div className="column">
          <p id="movies">All Books</p>
          {Object.values(bookData).map((item, index) => (
            <Fragment key={item.id}>
              <Link to={`/book/${item.id}`} key={item.id}>
                <CardSmall
                  title={item.title}
                  img={item.img}
                  genre={item.genre}
                  size={STAR_SIZE}
                  color={STAR_COLOR}
                />
              </Link>
              {index < Object.values(bookData).length - 1 && (
                <div style={{ marginBottom: 20 }} />
              )}
            </Fragment>
          ))}
        </div>
        <div className="column">
          <p id="movies">All Books</p>
          {Object.values(bookData).map((item, index) => (
            <Link to={`/book/${item.id}`} key={item.id}>
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

import React from "react";
import { useParams } from "react-router-dom";
import "./DetailBook.css";

const bookData = {
  1: {
    title: "To Kill a Mockingbird",
    description:
      "To Kill a Mockingbird is a novel by Harper Lee, set in the American South during the 1930s. It addresses issues of racism and injustice through the eyes of a young girl named Scout Finch.",
    genre: "Novel, Coming-of-age",
    img: "https://source.unsplash.com/720x720?book-cover",
  },
  2: {
    title: "1984",
    description:
      "1984 is a dystopian novel by George Orwell, portraying a totalitarian regime where individualism and independent thought are suppressed.",
    genre: "Dystopian, Political Fiction",
    img: "https://source.unsplash.com/720x720?book-cover",
  },
  3: {
    title: "The Great Gatsby",
    description:
      "The Great Gatsby is a novel by F. Scott Fitzgerald, exploring themes of wealth, excess, and the American Dream in the Roaring Twenties.",
    genre: "Novel, Jazz Age",
    img: "https://source.unsplash.com/720x720?book-cover",
  },
  // ... (include data for all books)
};

function DetailBook() {
  const { bookId } = useParams();
  const bookDetail = bookData[bookId];

  if (!bookDetail) {
    return <div className="not-found">Book not found</div>;
  }

  return (
    <div className="detail-book">
      <img
        src={bookDetail.img}
        alt={bookDetail.title}
        className="detail-image"
      />
      <h1 className="detail-title">{bookDetail.title}</h1>
      <p className="detail-description">{bookDetail.description}</p>
      <p className="detail-genre">
        <strong>Genre:</strong> {bookDetail.genre}
      </p>
      {/* Display additional book details as needed */}
    </div>
  );
}

export default DetailBook;

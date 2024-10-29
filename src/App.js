import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { HiHome, HiPlay, HiBookOpen } from "react-icons/hi";
import { MdGroup } from "react-icons/md";
import "./App.css";
import Movie from "./pages/Movie";
import Profile from "./pages/Profile";
import DetailFilm from "./pages/DetailFilm";
import Book from "./pages/Book";
import Game from "./pages/Game";
import DetailGame from "./pages/DetailGame";
import DetailBook from "./pages/DetailBook";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <header>
        <p id="titleGroup">Kelompok 17</p>
      </header>
      <main>
        <Routes>
          <Route path="/movie" element={<Movie />} />
          <Route path="/" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/movie/:movieId" element={<DetailFilm />} />
          <Route path="/book" element={<Book />} />
          <Route path="/game" element={<Game />} />
          <Route path="/game/:gameId" element={<DetailGame />} />
          <Route path="/book/:bookId" element={<DetailBook />} />
        </Routes>
      </main>
      <footer>
        <NavLink to="/movie" className="iconWrapper">
          <HiHome className="icon" /> Movie
        </NavLink>
        <NavLink to="/game" className="iconWrapper">
          <HiPlay className="icon" /> Game
        </NavLink>
        <NavLink to="/book" className="iconWrapper">
          <HiBookOpen className="icon" /> Book
        </NavLink>
        <NavLink to="/profile" className="iconWrapper">
          <MdGroup className="icon" /> Profile
        </NavLink>
      </footer>
    </BrowserRouter>
  );
}

export default App;

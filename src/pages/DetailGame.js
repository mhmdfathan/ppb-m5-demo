import React from "react";
import { useParams } from "react-router-dom";
import "./DetailGame.css";

const gameData = {
  1: {
    title: "The Legend of Zelda: Breath of the Wild",
    description:
      "The Legend of Zelda: Breath of the Wild is an action-adventure game set in an open-world environment, where players control Link and explore the kingdom of Hyrule.",
    genre: "Action-Adventure, Open World",
    img: "https://source.unsplash.com/720x720?videogame",
  },
  2: {
    title: "Red Dead Redemption 2",
    description:
      "Red Dead Redemption 2 is an action-adventure game set in the American Wild West, following the story of Arthur Morgan and the Van der Linde gang.",
    genre: "Action-Adventure, Western",
    img: "https://source.unsplash.com/720x720?videogame",
  },
  3: {
    title: "Grand Theft Auto V",
    description:
      "Grand Theft Auto V is an action-adventure game set in the fictional state of San Andreas, where players control three criminals and engage in various missions and activities.",
    genre: "Action-Adventure, Open World",
    img: "https://source.unsplash.com/720x720?videogame",
  },
  4: {
    title: "Elden Ring",
    description:
      "Elden Ring is an action role-playing game with a rich open world and a dark fantasy setting. Players take on various challenges in a vast and interconnected world.",
    genre: "Action Role-Playing",
    img: "https://source.unsplash.com/720x720?videogame",
  },
  5: {
    title: "God of War",
    description:
      "God of War is an action-adventure game that follows the journey of Kratos and his son Atreus through the realms of Norse mythology.",
    genre: "Action-Adventure",
    img: "https://source.unsplash.com/720x720?videogame",
  },
  6: {
    title: "Horizon Forbidden West",
    description:
      "Horizon Forbidden West is an action role-playing game set in a post-apocalyptic world, where players control Aloy in her quest to uncover the mysteries of the frontier.",
    genre: "Action Role-Playing, Open World",
    img: "https://source.unsplash.com/720x720?videogame",
  },
  7: {
    title: "Death Stranding",
    description:
      "Death Stranding is an action-adventure game that explores themes of isolation and connection in a world transformed by mysterious phenomena.",
    genre: "Action-Adventure",
    img: "https://source.unsplash.com/720x720?videogame",
  },
  8: {
    title: "The Last of Us Part II",
    description:
      "The Last of Us Part II is an action-adventure game that continues the story of Ellie and Joel in a post-apocalyptic world filled with danger and moral choices.",
    genre: "Action-Adventure, Survival Horror",
    img: "https://source.unsplash.com/720x720?videogame",
  },
  9: {
    title: "Ghost of Tsushima",
    description:
      "Ghost of Tsushima is an action-adventure game set in feudal Japan, where players assume the role of Jin Sakai, a samurai turned ghost.",
    genre: "Action-Adventure, Open World",
    img: "https://source.unsplash.com/720x720?videogame",
  },
};

function DetailGame() {
  const { gameId } = useParams();
  const gameDetail = gameData[gameId];

  if (!gameDetail) {
    return <div className="not-found">Game not found</div>;
  }

  return (
    <div className="detail-game">
      <img
        src={gameDetail.img}
        alt={gameDetail.title}
        className="detail-image"
      />
      <h1 className="detail-title">{gameDetail.title}</h1>
      <p className="detail-description">{gameDetail.description}</p>
      <p className="detail-genre">
        <strong>Genre:</strong> {gameDetail.genre}
      </p>
      {/* Tampilkan informasi detail game lainnya sesuai kebutuhan */}
    </div>
  );
}

export default DetailGame;

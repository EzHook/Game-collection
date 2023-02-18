import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Game from './Game';
import './Game.css';
const URL = "http://localhost:5000/games";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data)
}

const Games = () => {
  const [games, setGames] = useState();
  useEffect(() => {
    fetchHandler().then((data)=> setGames(data.Games));
  },[]);

  console.log(games);

  return (
    <div>
      <ul>
        {games && games.map((game, i) => (
          <li key={i}>
            <Game game={game} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Games;
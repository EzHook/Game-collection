import { Button } from '@mui/material';
import axios from 'axios';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Game.css'

const Game = (props) => {
    const {_id, name, developer, image, price, description} = props.game;
    const history = useNavigate();
    const handleDelete = async () => {
     await axios.delete(`http://localhost:5000/games/${_id}`)
      .then((res)=>res.data)
      .then(()=>history("/"))
      .then(()=>history("/games"));
    }

  return (
    <div className='card'>
        <img src={image} alt={name} />
        <article>By {developer}</article>
        <h3>{name}</h3>
        <p>{description}</p>
        <h3>₹{price}</h3>
        <Button LinkComponent={Link} to={`/games/${_id}`} sx={{ mt:"auto" }} variant="contained" color='success' >Update</Button>
        <Button onClick={handleDelete} sx={{ mt:"auto" }} variant="contained" color = 'error' >Delete</Button>
    </div>
  )
}

export default Game;
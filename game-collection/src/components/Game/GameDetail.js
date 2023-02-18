import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const GameDetail = () => {
    const history  = useNavigate();
    const [checked, setChecked] = useState(false);
    const [inputs, setInputs] = useState({});
    const id = useParams().id;

    useEffect(() => {
        const fetchHandler = async() =>{
        await axios.get(`https://game-collection-backend.onrender.com/games/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.game));
        };
        fetchHandler();
    }, [id])

    const sendRequest = async() => {
        await axios.put(`https://game-collection-backend.onrender.com/games/${id}`,{
            name: String(inputs.name),
      developer: String(inputs.developer),
      description: String(inputs.description),
      price: Number(inputs.price),
      image: String(inputs.image),
      availability: Boolean(checked)
        }).then((res) => res.data)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(() => history("/games"))
    }
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value,
          }))
    }

  return (
    <div>
        {inputs && (<form onSubmit={handleSubmit}>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent={"center"}
                maxWidth={600}
                alignContent={"center"}
                alignSelf={"center"}
                marginLeft={"auto"}
                marginRight={"auto"}
                marginTop={3}
                >
                <FormLabel>Name</FormLabel>
                <TextField value={inputs.name} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="name" />
                <FormLabel>Developer</FormLabel>
                <TextField value={inputs.developer} onChange={handleChange}  margin="normal" fullWidth variant="outlined" name="developer" />
                <FormLabel>Description</FormLabel>
                <TextField value={inputs.description} onChange={handleChange}  margin="normal" fullWidth variant="outlined" name="description" />
                <FormLabel>Price</FormLabel>
                <TextField value={inputs.price} onChange={handleChange}  type="number" margin="normal" fullWidth variant="outlined" name="price" />
                <FormLabel>Image</FormLabel>
                <TextField value={inputs.image} onChange={handleChange}  margin="normal" fullWidth variant="outlined" name="image" />
                <FormControlLabel control={<Checkbox checked={checked} onChange={() =>setChecked(!checked)} />} label="Availability" />
                <Button variant="contained" type="submit">Add Game</Button>
            </Box>
        </form>)}
    </div>
  )
}


export default GameDetail

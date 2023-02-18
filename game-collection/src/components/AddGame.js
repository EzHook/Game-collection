import {Box, Button, FormLabel, TextField, FormControlLabel, Checkbox } from "@mui/material"
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddGame = () => {
  const history = useNavigate();
  const [checked, setChecked] = useState(false);
  const [inputs, setInputs] = useState({
    name:"",
    developer:"",
    description:"",
    price:"",
    image:"",
  })
  
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value,
    }))
  };

  const sendRequest = async() => {
  await axios.post("http://localhost:5000/games", {
      name: String(inputs.name),
      developer: String(inputs.developer),
      description: String(inputs.description),
      price: Number(inputs.price),
      image: String(inputs.image),
      availability: Boolean(checked)
    }).then(res => res.data);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, checked);
    sendRequest().then(() => history('/games'));
  }

  return (
    <form onSubmit={handleSubmit}>
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
    </form>
  )
}

export default AddGame;
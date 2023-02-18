import { Box,Typography } from '@mui/material'
import React from 'react';
import mern from './assets/mern-stack.png';

const About = () => {
  return (
    <div className='about'>
        <Box display="flex" flexDirection="column" alignItems="center">
          <img src={mern} alt="mern" />
          <Typography variant='h2' style={{align: 'left'}}>Game Collections</Typography>
          <Typography variant='p'>
            This web application was developed by EzHook
            <br/>
            just for is interest in gaming from really young age.
            <br/>
            He played alot of games when he was a kid and still does.
            <br/>
            This Application is developed using MERN stack
            <br/>
            and it has all CRUD functionality.such application
            <br/>
            are best suited for new startups as
            <br/>
            that such application can be developed in
            <br/> 
            hours they also assure you excellent scalability.
          </Typography>
        </Box>
    </div>
  )
}

export default About
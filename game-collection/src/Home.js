import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button sx={{marginTop: 20}} LinkComponent={Link} to="/games" variant='contained' color='primary'>
          <Typography variant='h1'>View Games</Typography>
        </Button>
      </Box>
    </div>
  )
}

export default Home
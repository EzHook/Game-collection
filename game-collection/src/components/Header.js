import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [value, setValue] = useState();
  return (
    <div>
        <AppBar position='sticky'>
            <Toolbar >
                <NavLink to="/" style={{color: "white",
                textDecorationLine: 'none'}}>
                <Typography>
                    <SportsEsportsIcon
                     sx={{mr:2}} />
                    GAME COLLECTIONS
                </Typography></NavLink>
                <Tabs
            sx={{ml:"auto"}}
            value={value}
            indicatorColor='secondary'
            textColor='inherit'
            onChange={(e,val) => setValue(val)}
             >
                <Tab LinkComponent={NavLink} to="/add" label='Add Game' />
                <Tab LinkComponent={NavLink} to="/games" label='Games' />
                <Tab LinkComponent={NavLink} to="/about" label='About us' />
            </Tabs>
            </Toolbar>
           
        </AppBar>
    </div>
  )
}

export default Header;
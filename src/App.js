import React from 'react';
import './App.css';
import FilmGrid from './FilmGrid';
import { AppBar, Toolbar, Typography } from '@mui/material';


function App() {

  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
        <Typography 
          variant="h5" 
          noWrap 
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
         >Studio Ghibli Film Index
        </Typography>
        </Toolbar>
      </AppBar>
      <FilmGrid />
    </div>
  );
}

export default App;

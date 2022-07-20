import React, { useState } from 'react';
import './App.css';
import FilmCards from './FilmCards';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Login from './login';
import useToken from './useToken';
import useFetch from './useFetch';
import AddToFavorites from './AddToFavorites';
import RemoveFavorites from './RemoveFavorites';

function App() {
  const films = useFetch();
  const { token, setToken } = useToken();
  const [favorites, setFavorites] = useState([]);

  if (!token) {
    return <Login setToken={setToken} />
  }

  function handleAddFavorite(film, favorites) {
    if (favorites.includes(film)) {
      let favoriteList = favorites;
    } else {
      let favoriteList = [...favorites, film];
      setFavorites(favoriteList);
    }
  };

  function removeFavoriteMovie(film) {
    const favoriteList = favorites.filter(
    (favorite) => favorite.id !== film.id
    );
    setFavorites(favoriteList);
  }

  return (
    <div>
      <AppBar position="sticky" className='menu'>
        <Toolbar>
        <Typography 
          variant="h5" 
          noWrap 
          component="div"
         >Studio Ghibli Film Index
        </Typography>
        </Toolbar>
      </AppBar>
      <FilmCards favorites={favorites} films={films} favoriteComponent={AddToFavorites} handleFavoritesClick={handleAddFavorite} />
      <div>
        <Typography 
          variant="h5" 
          noWrap 
          component="div"
        >
          Favorites
        </Typography>
      </div>
      <div>
        <FilmCards films={favorites} favoriteComponent={RemoveFavorites} handleFavoritesClick={removeFavoriteMovie} />
      </div>
    </div>
  );
}

export default App

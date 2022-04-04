import React, { useState, useEffect } from 'react';
import { Grid, RadioGroup, Radio, FormControlLabel } from '@mui/material';
import FilmCards from './FilmCards';
import SearchBar from './SearchBar';


function FilmGrid() {
    const [ films, setFilms ] = useState([]);
    const [ query, setQuery ] = useState("");
    const [ sortBy, setSortBy ] = useState("");
    const [watchedMovies, setWatchedMovies] = useState([]);

  async function getFilms() {
    const url = 'https://ghibliapi.herokuapp.com/films';
    const response = await fetch(url);
    const jsonData = await response.json();
    setFilms(jsonData);
    }
  
  const getFilteredFilms = (query, films) => {
    if (!query) {
      return films;
    }
    return films.filter(film => film.title.toLowerCase().includes(query.toLowerCase()))
  }

  useEffect(() => {
    getFilms();
  }, []);

  const filteredFilms = getFilteredFilms(query, films);

  const getSortedFilms = (sortBy, filteredFilms) => {
    if (sortBy === "all" || sortBy === "") {
        return films;
    } else if (sortBy === "watched") {
        return watchedMovies;
    } else if (sortBy === "unwatched") {
        return unwatchedMovies;
    }
  }

  const sortedFilms = getSortedFilms(sortBy, films);

  function handleCheckBoxChange(event) {
    if (event.target.checked) {
        if (!watchedMovies.includes(event.target.value)) {
        setWatchedMovies([...watchedMovies, event.target.value])
        
    } else {
        setWatchedMovies([...watchedMovies, watchedMovies.filter(value => value !== event.target.value)]);
    }
}
    console.log(watchedMovies);
}

function getUnwatchedMovies(watchedMovies, films) {
  return films.filter(function(obj) { return watchedMovies.indexOf(obj) === -1; });
}

const unwatchedMovies = getUnwatchedMovies(watchedMovies, films);

    return(
        <>
        <SearchBar onKeyUp={(event) => {
          setQuery(event.target.value);
        }} />
        <RadioGroup 
          row
          value={sortBy}
          onChange={(event) => {
            setSortBy(event.target.value)
          }}
        >
        <FormControlLabel value="all" control={<Radio />} label="All Movies" />
        <FormControlLabel value="watched" control={<Radio />} label="Watched Movies" />
        <FormControlLabel value="unwatched" control={<Radio />} label="Unwatched Movies" />
        </RadioGroup>

        <Grid sx={{ fontFamily: 'Gothic A1'}} container spacing={4}
            direction="row"
            justifyContent="space=evenly"
            alignItems="center"
        >
          <FilmCards filteredFilms={sortedFilms} handleCheckBoxChange={handleCheckBoxChange} />
        </Grid>
        </>
    )
}
export default FilmGrid;
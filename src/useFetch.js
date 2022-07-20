import { useState, useEffect } from 'react';

export default function useFetch() {
    const [films, setFilms] = useState([]);

async function getFilms() {
    const url = 'https://ghibliapi.herokuapp.com/films';
    const response = await fetch(url);
    const jsonData = await response.json();
    setFilms(jsonData);
}

  useEffect(() => {
    getFilms();
  }, [])

  return films;
};
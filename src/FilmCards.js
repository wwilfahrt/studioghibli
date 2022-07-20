import React, { useState } from 'react';
import { Grid, Card, CardMedia, CardActions, Button, ButtonGroup } from '@mui/material';
import { Info } from '@mui/icons-material';
import './FilmCards.css';
import MoreInfoDropdown from './MoreInfoDropdown';


const FilmCards = (props) => {
    const films = props.films;
    const favorites = props.favorites;
    const [moreInfo, setMoreInfo] = useState({});
    const FavoritesComponent = props.favoriteComponent;

    function moreInfoHandler(id) {
        setMoreInfo(state => ({
            ...state,
            [id]: !state[id]
        }));
    };

    return (
        <div className="container">
        {
        films.map(film => 
            <Grid item xs={6} sm={4} md={3} key={film.id}>
                <Card className="card" key={film.id}>
                    <CardMedia
            className="movieposter"
            component="img"
            alt="movie poster"
            image={film.image} />
        <CardActions>
            <ButtonGroup>
            {!moreInfo[film.id] && <Button variant="outlined" onClick={() => (moreInfoHandler(film.id))}>
                More Info
                <span>
                <Info className="info" />
                </span>
            </Button>}
            <Button variant="outlined" size="small" className="favorite" onClick={() => props.handleFavoritesClick(film, favorites)}>
            <FavoritesComponent film={film} />
            </Button>
            </ButtonGroup>
        </CardActions>
            {moreInfo[film.id] && <MoreInfoDropdown handleClose={moreInfoHandler} id={film.id} title={film.title} director={film.director} originaltitle={film.original_title} releasedate={film.release_date} />}
    </Card>
            </Grid>
        )}
        </div>
    )
}
export default FilmCards;
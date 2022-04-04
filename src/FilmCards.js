import React, { useState } from 'react';
import { Grid, Card, CardMedia, CardActions, Button, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import EachFilmInfo from './EachFilmInfo';

const FilmCards = (props) => {
    const [moreInfo, setMoreInfo] = useState({});
    const films = props.filteredFilms;

    function moreInfoHandler(id) {
        setMoreInfo(state => ({
            ...state,
            [id]: !state[id]
        }));
    };
    
    return (
        <>
        {
        films.map(film => 
            <Grid item xs={6} sm={4} md={3} key={film.id}>
                <Card variant="outlined" >
                    <CardMedia
                        component="img"
                        alt="movie poster"
                        height="100%"
                        width="66%"
                        image={film.image} />
                    <CardActions>
                        <Button size="small" variant="outlined" onClick={() => (moreInfoHandler(film.id))}>More Info</Button>
                        <FormGroup>
                            <FormControlLabel id={film.title} value={film.title} control={<Checkbox />} label="Watched" sx={{ marginLeft: '20px' }} onChange={props.handleCheckBoxChange}  />
                        </FormGroup>
                    </CardActions>
                    {moreInfo[film.id] && <EachFilmInfo title={film.title} director={film.director} originaltitle={film.original_title} releasedate={film.release_date} description={film.description} />}
                </Card>
            </Grid>
            
        )}
        </>
    )
}
export default FilmCards;
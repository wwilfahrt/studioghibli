import React from 'react';
import { Typography, CardContent } from '@mui/material';

const EachFilmInfo = (props) => {



    return (
        <CardContent>
            <Typography>{props.title}</Typography>
            <Typography>Directed by: {props.director}</Typography>
            <Typography>Original Title: {props.originaltitle}</Typography>
            <Typography>Release in: {props.releasedate}</Typography>
            <Typography>{props.description}</Typography>
        </CardContent>
    )
}

export default EachFilmInfo;
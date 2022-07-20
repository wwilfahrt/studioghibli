import React from 'react';
import { CardContent, Button, Typography } from '@mui/material';

const MoreInfoDropdown = (props) => {
    const id = props.id;


    return (
        <CardContent>
            <Button size="small" variant="outlined" onClick={() => (props.handleClose(id))} >Close</Button>
            <Typography>{props.title}</Typography>
            <Typography>Directed by: {props.director}</Typography>
            <Typography>Original Title: {props.originaltitle}</Typography>
            <Typography>Released in: {props.releasedate}</Typography>
        </CardContent>
    )
}

export default MoreInfoDropdown;
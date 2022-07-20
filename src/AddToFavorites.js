import React from 'react';
import './AddToFavorites.css';
import { Typography } from '@mui/material';
import { Favorite } from '@mui/icons-material';

export default function AddToFavorites() {

    return (
        <div className="faveContainer">
        <Typography>Add to Favorites</Typography>
        <Favorite className="heart" />
        </div>
    )
}
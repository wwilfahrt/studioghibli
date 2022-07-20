import React from 'react';
import { Typography } from '@mui/material';
import { HeartBroken } from '@mui/icons-material';


export default function RemoveFavorites() {

    return (
        <div className="faveContainer">
        <Typography>Remove from Favorites</Typography>
        <HeartBroken className="heart" />
        </div>
    )
}
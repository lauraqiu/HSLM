import React from 'react';
import {useStyles} from '../styles/AdventureClass';
import Grid from '@material-ui/core/Grid';

const AdventurePicture = (props) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.pictureGrid}> 
            <img item src={props.image} alt='dogBackground' className={classes.picture}/>
            <h2 item className={classes.text}>{props.text}</h2>
        </Grid>
    )
}

export default AdventurePicture;
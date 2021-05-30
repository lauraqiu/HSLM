import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles } from '../styles/PetOfTheDayClasses.js';
import PetImage from '../images/PetoftheDay.png'

function PetOfTheDay(){
    const classes = useStyles();
    return(
        <Grid container className={classes.petContainer}>
            <img item className={classes.petImage} src={PetImage} alt='Pet of the Day'/>
            <Grid container item className={classes.petInfo}>
                <h2 item className={classes.petTitle}>Pet of the Day</h2>
                <p item className={classes.petText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                    pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            </Grid>
        </Grid>
    )
}

export default PetOfTheDay;

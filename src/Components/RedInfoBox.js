import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useHomeStyles } from '../styles/RedInfoBoxClasses.js';

function HomeComponents(){
    const classes = useHomeStyles();
    return(
        <div className={classes.wrapper}>    
                <Grid container className={classes.frontRectangle}>
                    <div container className={classes.textContainer}>
                        <h1 item className={classes.textTitle}>News & Updates</h1>
                        <h2 item className={classes.text}>National Pet Day is coming up soon! Check out our HSLM page for details on how to receive free pet trees, etc.</h2>
                        <h2 item className={classes.text}>Enter our monthly giveaway!</h2>
                    </div>
                </Grid>
                <div container className={classes.backRectangle}></div> 
        </div>
    )
}

export default HomeComponents;

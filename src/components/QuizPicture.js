import React from 'react';
import {useStyles} from '../styles/QuizPictureClasses.js';
import Grid from '@material-ui/core/Grid';

const QuizPicture = (props) => {

    const classes = useStyles();

    return (
        <Grid container className={classes.root}> 
            <img item src={props.image} alt='dogs' className={classes.picture}/>
            <h2 item className={classes.text}>{props.text}</h2>
        </Grid>
    )
}
export default QuizPicture;
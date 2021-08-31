import React from 'react';
import NavBar from '../components/NavBar.js';
import {useStyles} from '../styles/videos1234.js';
import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player';

const Video2 = () => {
    const classes = useStyles();
        
    return (
        <div className={classes.root}> 
            <NavBar/>
            <Grid container className={classes.topDiv}>
            <h1 item className={classes.title}>12 Harmful Things You Do To Your Dog Without Realizing It</h1>
            <ReactPlayer url="https://www.youtube.com/watch?v=-G16EX6b8Xg"/>
            </Grid>
        </div>  
        )
}
export default Video2;
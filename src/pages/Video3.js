import React from 'react';
import NavBar from '../components/NavBar.js';
import {useStyles} from '../styles/videos1234.js';
import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player';

const Video3 = () => {
    const classes = useStyles();
        
    return (
        <div className={classes.root}> 
            <NavBar/>
            <Grid container className={classes.topDiv}>
            <h1 item className={classes.title}>How To Take Care of Your Pet</h1>
            <ReactPlayer url="https://www.youtube.com/watch?v=ppGjUDWMgIg"/>
            </Grid>
        </div>  
        )
}
export default Video3;
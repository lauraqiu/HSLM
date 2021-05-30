import React from 'react';
import NavBar from '../components/NavBar.js';
import {useStyles} from '../styles/AdventureClass.js';
import dogBackground from '../images/dogBackground.png';
import Grid from '@material-ui/core/Grid';
import AdventurePicture from '../components/AdventurePicture.js.js'


const AdventurePage = () => {
    const classes = useStyles();
        
    return (
        <div className={classes.root}> 
            <NavBar/>
            <Grid container className={classes.topDiv}>
                <h1>Choose Your Own Adventure</h1>
                <Grid className={classes.adventureGrid}>
                    <AdventurePicture image={dogBackground}/>
                    <AdventurePicture image={dogBackground}/>
                    <AdventurePicture image={dogBackground}/>
                </Grid>

            </Grid>
        </div>  
        )
}
export default AdventurePage;
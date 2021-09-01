import React from 'react';
import NavBar from '../components/NavBar.js';
import {useStyles} from '../styles/HomeClasses.js';
import Grid from '@material-ui/core/Grid';
import Mascot from '../images/Mascot.png';
import PetOfTheDay from '../components/PetOfTheDay.js';
import RedInfoBox from '../components/RedInfoBox.js';
import SpeechBubble from '../components/SpeechBubble.js'

const HomePage = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}> 
            <NavBar/>
            <Grid container className={classes.topDiv}>
                <div item container className={classes.welcomeContainer}>
                    <h1 item className={classes.welcome}>Welcome to HSLM's Pet Club!</h1>
                </div>
                {/* Pet of the Day */}
                <RedInfoBox item/>
                <PetOfTheDay item/>
            </Grid>
            {/* Fun Fact of the Day */}
            <Grid className={classes.bottomDiv}>
                <h1 className={classes.funFact}>Fun Fact about HSLM!</h1>
                <Grid container item className={classes.mascotDiv}>
                    <img item className={classes.mascot} src={Mascot} alt='mascot'/>
                    <SpeechBubble item/>
                </Grid>
            </Grid>
        </div>
    )
}
export default HomePage;
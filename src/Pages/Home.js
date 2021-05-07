import React from 'react';
import NavBar from '../Components/NavBar.js';
import {useStyles} from '../styles/HomeClasses.js';
import Grid from '@material-ui/core/Grid';
import Mascot from '../images/mascot.png';
import PetOfTheDay from '../Components/PetOfTheDay.js';
import RedInfoBox from '../Components/RedInfoBox.js';
import SpeechBubble from '../Components/SpeechBubble.js'

const HomePage = () => {

    const classes = useStyles();

    const NavOptions = [
        {label: 'Home'},
        {label: 'Quizzes'},
        {label: 'Choose Your Own Adventure'},
        {label: 'Videos'},
        {label: 'Contact Us!'}
        ]

    return (
        <div className={classes.root}> 
            <NavBar options={NavOptions}/>
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
                <h1 className={classes.funFact}>Fun Fact of the Day!</h1>
                <Grid container item className={classes.mascotDiv}>
                    <img item className={classes.mascot} src={Mascot} alt='mascot'/>
                    <SpeechBubble item/>
                </Grid>
            </Grid>
        </div>
    )
}
export default HomePage;
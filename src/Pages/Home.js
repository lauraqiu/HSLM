import React from 'react';
import NavBar from '../Components/NavBar.js';
import {useStyles} from '../styles/HomeClasses.js';
import Grid from '@material-ui/core/Grid';
import mascot from '../images/Mascot.png';
import PetOfTheDay from '../Components/PetOfTheDay.js';
import RedInfoBox from '../Components/RedInfoBox.js';

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
                <h1 item className={classes.welcome}>Welcome to HSLM's Pet Club!</h1>
                {/* Pet of the Day */}
                <RedInfoBox item/>
                <PetOfTheDay item/>
            </Grid>
            {/* Fun Fact of the Day */}
            <div className={classes.bottomDiv}>
                <h1 className={classes.funFact}>Fun Fact of the Day!</h1>
                <img className={classes.mascot} src={mascot} alt='mascot'/>
                {/* Add Blue bubble */}
            </div>
        </div>
    )
}
export default HomePage;
import React from 'react';
import NavBar from '../Components/NavBar.js';
import {useStyles} from '../styles/HomeClasses.js';
import Grid from '@material-ui/core/Grid';
import mascot from '../images/Mascot.png';
import petOfTheDay from '../images/PetoftheDay.png';

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
                {/* Add Red Bubble */}
                <Grid container className={classes.petContainer}>
                    <img item className={classes.petImage} src={petOfTheDay} alt='Pet of the Day'/>
                    <Grid container item className={classes.petInfo}>
                        <h2 item className={classes.petTitle}>Pet of the Day</h2>
                        <p item className={classes.petText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                            pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    </Grid>
                </Grid>
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
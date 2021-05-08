import React from 'react';
import NavBar from '../Components/NavBar.js';
import {useStyles} from '../styles/QuizzesClasses.js';
import Grid from '@material-ui/core/Grid';
import QuizPicture from '../Components/QuizPicture.js'
import dogs from '../images/quiz-dogs.png';


const Quizzes = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}> 
            <NavBar/>
            <Grid container className={classes.topDiv}>
                <h1 item className={classes.title}>Quizzes</h1>
                <Grid className={classes.quizContainer}>
                    <QuizPicture image={dogs} text='Pet Personality Quiz'/>
                    <QuizPicture image={dogs} text='Pet Personality Quiz'/>
                    <QuizPicture image={dogs} text='Pet Personality Quiz'/>
                    <QuizPicture image={dogs} text='Pet Personality Quiz'/>
                </Grid>
            </Grid>
        </div>
    )
}
export default Quizzes;
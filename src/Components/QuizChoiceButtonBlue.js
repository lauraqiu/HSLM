import React from 'react';
import {quizStyles} from '../styles/QuizClasses.js';

const QuizChoiceButton = (props) => {
  const classes = quizStyles();
  return (
    <div container className={classes.buttonContainer}> 
        <h2 item className={classes.button}>Start</h2></div>
      );}

export default QuizChoiceButton;
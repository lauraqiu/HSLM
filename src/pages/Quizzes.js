import React from "react";
import NavBar from "../components/NavBar.js";
import { useStyles } from "../styles/QuizzesClasses.js";
import Grid from "@material-ui/core/Grid";
import QuizPicture from "../components/QuizPicture.js";
import Q3Thumbnail from "../images/QuizThumbnails/Q3Thumbnail.jpg";
import Q4Thumbnail from "../images/QuizThumbnails/Q4Thumbnail.jpg";
import dogs from "../images/QuizThumbnails/quiz-dogs.png";
import { Link } from "react-router-dom";

const Quizzes = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar />
      <Grid container className={classes.topDiv}>
        <h1 item className={classes.title}>
          Quizzes
        </h1>
        <Grid className={classes.quizContainer}>
          <Link to="/quiz1" className={classes.link}>
            <QuizPicture image={dogs} text="Colours Quiz" />
          </Link>
          <Link to="/quiz2" className={classes.link}>
            <QuizPicture image={dogs} text="Baking a Cookie" />
          </Link>
          <Link to="/quiz3" className={classes.link}>
            <QuizPicture image={Q3Thumbnail} text="What Pet is Right For you?" />
          </Link>
          <Link to="/quiz4" className={classes.link}>
            <QuizPicture image={Q4Thumbnail} text="What Type of Dog Should You Get?" />
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};
export default Quizzes;

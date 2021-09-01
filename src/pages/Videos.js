import React from "react";
import NavBar from "../components/NavBar.js";
import { useStyles } from "../styles/QuizzesClasses.js";
import Grid from "@material-ui/core/Grid";
import QuizPicture from "../components/QuizPicture.js";
import { Link } from "react-router-dom";
import vid1thumb from "../images/vidThumbnails/vid1thumb.png";
import vid2thumb from "../images/vidThumbnails/vid2thumb.png";
import vid3thumb from "../images/vidThumbnails/vid3thumb.png";
import vid4thumb from "../images/vidThumbnails/vid4thumb.png";

const VideosPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar />
      <Grid container className={classes.topDiv}>
        <h1 item className={classes.title}>
          Videos
        </h1>
        <Grid className={classes.quizContainer}>
          <Link to="/video1" className={classes.link}>
            <QuizPicture image={vid1thumb} text="How to Groom Your Dog" />
          </Link>
          <Link to="/video2" className={classes.link}>
            <QuizPicture image={vid2thumb} text="12 Harmful Things You Do To Your Dog Without Realizing It" />
          </Link>
          <Link to="/video3" className={classes.link}>
            <QuizPicture image={vid3thumb} text="How To Take Care of Your Pet" />
          </Link>
          <Link to="/video4" className={classes.link}>
            <QuizPicture image={vid4thumb} text="What A Dog's Sleeping Position Means" />
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};
export default VideosPage;

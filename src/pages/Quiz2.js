import React from "react";
import NavBar from "../components/NavBar.js";
import { useStyles } from "../styles/PlayQuizClasses.js";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import ReactBuzzFeedQuiz from "react-buzzfeed-quiz";
import Quiz2Q1O1 from "../images/Quiz2/Q1doughA.png";
import Quiz2Q1O2 from "../images/Quiz2/Q1doughB.png";
import Quiz2Q1O3 from "../images/Quiz2/Q1doughC.png";
import Quiz2Q1O4 from "../images/Quiz2/Q1doughD.png";
import Quiz2Q2O1 from "../images/Quiz2/Q2ToppingsA.png";
import Quiz2Q2O2 from "../images/Quiz2/Q2ToppingsB.png";
import Quiz2Q2O3 from "../images/Quiz2/Q2ToppingsC.png";
import Quiz2Q2O4 from "../images/Quiz2/Q2ToppingsD.png";
import Quiz2Q3O1 from "../images/Quiz2/Q3textureA.png";
import Quiz2Q3O2 from "../images/Quiz2/Q3textureB.png";
import Quiz2Q3O3 from "../images/Quiz2/Q3textureC.png";
import Quiz2Q3O4 from "../images/Quiz2/Q3textureD.png";
import Quiz2Q4O1 from "../images/Quiz2/Q4tempA.png";
import Quiz2Q4O2 from "../images/Quiz2/Q4tempB.png";
import Quiz2Q4O3 from "../images/Quiz1/15.jpg"; // add option
import Quiz2Q4O4 from "../images/Quiz1/16.jpg"; // add option
import Quiz2Q5O1 from "../images/Quiz2/Q5whoA.png";
import Quiz2Q5O2 from "../images/Quiz2/Q5whoB.png";
import Quiz2Q5O3 from "../images/Quiz2/Q5whoC.png";
import Quiz2Q5O4 from "../images/Quiz1/20.jpg"; // add option
const Quiz = styled(ReactBuzzFeedQuiz)([]);

const Quizzes = () => {
  const classes = useStyles();

  return (
    <div>
      <NavBar />
      <Grid container className={classes.page}>
        <Quiz
          title={"Your title goes here."} // quiz title name needed
          description={"Build a cookie and we’ll tell you a name!"}
          byline={false}
          autoScroll={true}
          facebookShareButton={true}
          facebookShareLink={"www.yourlink.com"}
          twitterShareButton={true}
          twitterShareLink={"www.yourlink.com"}
          copyShareButton={true}
          copyShareLink={"This text was copied using the copyShareLink prop."}
          questions={[
            {
              question: "What cookie dough?",
              questionRelativeToImage: "overlap",
              answerArrangement: "tile",
              answers: [
                {
                  backgroundImageSrc: Quiz2Q1O1,
                  resultID: 0,
                },
                {
                  backgroundImageSrc: Quiz2Q1O2,
                  resultID: 1,
                },
                {
                  backgroundImageSrc: Quiz2Q1O3,
                  resultID: 2,
                },
                {
                  backgroundImageSrc: Quiz2Q1O4,
                  resultID: 3,
                },
              ],
            },
            {
              question: "What goes inside your cookie?",
              questionRelativeToImage: "overlap",
              answerArrangement: "tile",
              answers: [
                {
                  backgroundImageSrc: Quiz2Q2O1,
                  resultID: 0,
                },
                {
                  backgroundImageSrc: Quiz2Q2O2,
                  resultID: 1,
                },
                {
                  backgroundImageSrc: Quiz2Q2O3,
                  resultID: 2,
                },
                {
                  backgroundImageSrc: Quiz2Q2O4,
                  resultID: 3,
                },
              ],
            },
            {
              question: "What texture do you like?",
              questionRelativeToImage: "overlap",
              answerArrangement: "tile",
              answers: [
                {
                  backgroundImageSrc: Quiz2Q3O1,
                  resultID: 0,
                },
                {
                  backgroundImageSrc: Quiz2Q3O2,
                  resultID: 1,
                },
                {
                  backgroundImageSrc: Quiz2Q3O3,
                  resultID: 2,
                },
                {
                  backgroundImageSrc: Quiz2Q3O4,
                  resultID: 3,
                },
              ],
            },
            {
              question: "Do you like your cookies cool or warm?",
              questionRelativeToImage: "overlap",
              answerArrangement: "tile",
              answers: [
                {
                  backgroundImageSrc: Quiz2Q4O1,
                  resultID: 0, 
                },
                {
                  backgroundImageSrc: Quiz2Q4O2,
                  resultID: 1,
                },
                {
                  backgroundImageSrc: Quiz2Q4O3,
                  resultID: 2,
                },
                {
                  backgroundImageSrc: Quiz2Q4O4,
                  resultID: 3,
                },
              ],
            },
            {
              question: "Who are you baking it with?",
              questionRelativeToImage: "overlap",
              answerArrangement: "tile",
              answers: [
                {
                  backgroundImageSrc: Quiz2Q5O1,
                  resultID: 0,
                },
                {
                  backgroundImageSrc: Quiz2Q5O2,
                  resultID: 1,
                },
                {
                  backgroundImageSrc: Quiz2Q5O3,
                  resultID: 2,
                },
                {
                  backgroundImageSrc: Quiz2Q5O4,
                  resultID: 3,
                },
              ],
            },
          ]}
          results={[
            {
              title: "Your first result title goes here",
              description:
                "You like to go with the flow. Cats love to keep to a routine.",
              imageAttribution: "Your photo attribution text goes here",
              resultID: 0,
            },
            {
              title: "Your second result title goes here",
              description:
                "You’re very adventurous. What better way to explore than with a furry companion like a dog?",
              resultID: 1,
            },
            {
              title: "Your third result title goes here",
              description:
                "You’re free spirited. What better way than with a cute rabbit by your side!",
              resultID: 2,
            },
            {
              title: "Your third result title goes here",
              description:
                "You’re very down to earth! You like to keep things simple and what better way to do so then with a nice furry animal like a mouse of a guinea pig?",
              resultID: 3,
            },
          ]}
        />
      </Grid>
    </div>
  );
};
export default Quizzes;

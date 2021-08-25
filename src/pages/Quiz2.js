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
import Quiz2Q4O1 from "../images/Quiz2/Q4A.jpg";
import Quiz2Q4O2 from "../images/Quiz2/Q4B.png";
import Quiz2Q4O3 from "../images/Quiz2/Q4C.jpg"; 
import Quiz2Q4O4 from "../images/Quiz2/Q4D.jpg";
import Quiz2Q5O1 from "../images/Quiz2/Q5A.png";
import Quiz2Q5O2 from "../images/Quiz2/Q5B.png";
import Quiz2Q5O3 from "../images/Quiz2/Q5C.png";
import Quiz2Q5O4 from "../images/Quiz2/Q5D.jpg"; 
import Quiz2A1 from "../images/Quiz2/Answer1.jpg";
import Quiz2A2 from "../images/Quiz2/Answer2.jpg";
import Quiz2A3 from "../images/Quiz2/Answer3.jpg";
import Quiz2A4 from "../images/Quiz2/Answer4.jpg";
const Quiz = styled(ReactBuzzFeedQuiz)([]);

const Quizzes = () => {
  const classes = useStyles();

  return (
    <div>
      <NavBar />
      <Grid container className={classes.page}>
        <Quiz
          title={"Choose a name for a pet!"} 
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
              question: "What tool will you be using?",
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
              title: "Charlie or Coco",
              resultImageSrc: Quiz2A1,
              description:
                "A great name for your fluffy pet should be Charlie or Coco!",
              resultID: 0,
            },
            {
              title: "Buddy or Bailey",
              resultImageSrc: Quiz2A2,
              description:
                "A great name for your fluffy pet should be Buddy or Bailey!",
              resultID: 1,
            },
            {
              title: "Toby or Bella",
              resultImageSrc: Quiz2A3,
              description:
                "A great name for your fluffy pet should be Toby or Bella!",
              resultID: 2,
            },
            {
              title: "Chip or Alfie",
              resultImageSrc: Quiz2A4,
              description:
                "A great name for your fluffy pet should be Chip or Alfie!",
              resultID: 3,
            },
          ]}
        />
      </Grid>
    </div>
  );
};
export default Quizzes;

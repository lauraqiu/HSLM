import React from "react";
import NavBar from "../components/NavBar.js";
import { useStyles } from "../styles/PlayQuizClasses.js";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import ReactBuzzFeedQuiz from "react-buzzfeed-quiz";
import Quiz1Q1O1 from "../images/Quiz1/1.jpg";
import Quiz1Q1O2 from "../images/Quiz1/2.jpg";
import Quiz1Q1O3 from "../images/Quiz1/3.jpg";
import Quiz1Q1O4 from "../images/Quiz1/4.jpg";
import Quiz1Q2O1 from "../images/Quiz1/5.jpg";
import Quiz1Q2O2 from "../images/Quiz1/6.png";
import Quiz1Q2O3 from "../images/Quiz1/7.jpg";
import Quiz1Q2O4 from "../images/Quiz1/8.jpg";
import Quiz1Q3O1 from "../images/Quiz1/9.jpg";
import Quiz1Q3O2 from "../images/Quiz1/10.jpg";
import Quiz1Q3O3 from "../images/Quiz1/11.jpg";
import Quiz1Q3O4 from "../images/Quiz1/12.jpg";
import Quiz1Q4O1 from "../images/Quiz1/13.jpg";
import Quiz1Q4O2 from "../images/Quiz1/14.jpg";
import Quiz1Q4O3 from "../images/Quiz1/15.jpg";
import Quiz1Q4O4 from "../images/Quiz1/16.jpg";
import Quiz1Q5O1 from "../images/Quiz1/17.png";
import Quiz1Q5O2 from "../images/Quiz1/18.png";
import Quiz1Q5O3 from "../images/Quiz1/19.png";
import Quiz1Q5O4 from "../images/Quiz1/20.jpg";
import Quiz1A1 from "../images/Quiz1/Answer1.jpg";
import Quiz1A2 from "../images/Quiz1/Answer2.jpg";
import Quiz1A3 from "../images/Quiz1/Answer3.jpg";
import Quiz1A4 from "../images/Quiz1/Answer4.jpg";
const Quiz = styled(ReactBuzzFeedQuiz)([]);

const Quizzes = () => {
  const classes = useStyles();

  return (
    <div>
      <NavBar />
      <Grid container className={classes.page}>
        <Quiz
          title={"What type of pet should you get?"} 
          description={
            "Choose a picture in every colour and we’ll tell you a type!"
          }
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
              question: "Black",
              questionRelativeToImage: "overlap",
              answerArrangement: "tile",
              answers: [
                {
                  backgroundImageSrc: Quiz1Q1O1,
                  resultID: 0,
                },
                {
                  backgroundImageSrc: Quiz1Q1O2,
                  resultID: 1,
                },
                {
                  backgroundImageSrc: Quiz1Q1O3,
                  resultID: 2,
                },
                {
                  backgroundImageSrc: Quiz1Q1O4,
                  resultID: 3,
                },
              ],
            },
            {
              question: "White",
              backgroundColor: "White",
              fontColor: "Black",
              questionRelativeToImage: "overlap",
              answerArrangement: "tile",
              answers: [
                {
                  backgroundImageSrc: Quiz1Q2O1,
                  resultID: 0,
                },
                {
                  backgroundImageSrc: Quiz1Q2O2,
                  resultID: 1,
                },
                {
                  backgroundImageSrc: Quiz1Q2O3,
                  resultID: 2,
                },
                {
                  backgroundImageSrc: Quiz1Q2O4,
                  resultID: 3,
                },
              ],
            },
            {
              question: "Green",
              backgroundColor: "#2BD535",
              questionRelativeToImage: "overlap",
              answerArrangement: "tile",
              answers: [
                {
                  backgroundImageSrc: Quiz1Q3O1,
                  resultID: 0,
                },
                {
                  backgroundImageSrc: Quiz1Q3O2,
                  resultID: 1,
                },
                {
                  backgroundImageSrc: Quiz1Q3O3,
                  resultID: 2,
                },
                {
                  backgroundImageSrc: Quiz1Q3O4,
                  resultID: 3,
                },
              ],
            },
            {
              question: "Pink",
              backgroundColor: "Pink",
              questionRelativeToImage: "overlap",
              answerArrangement: "tile",
              answers: [
                {
                  backgroundImageSrc: Quiz1Q4O1,
                  resultID: 0,
                },
                {
                  backgroundImageSrc: Quiz1Q4O2,
                  resultID: 1,
                },
                {
                  backgroundImageSrc: Quiz1Q4O3,
                  resultID: 2,
                },
                {
                  backgroundImageSrc: Quiz1Q4O4,
                  resultID: 3,
                },
              ],
            },
            {
              question: "Blue",
              backgroundColor: "#3CC8FF",
              questionRelativeToImage: "overlap",
              answerArrangement: "tile",
              answers: [
                {
                  backgroundImageSrc: Quiz1Q5O1,
                  resultID: 0,
                },
                {
                  backgroundImageSrc: Quiz1Q5O2,
                  resultID: 1,
                },
                {
                  backgroundImageSrc: Quiz1Q5O3,
                  resultID: 2,
                },
                {
                  backgroundImageSrc: Quiz1Q5O4,
                  resultID: 3,
                },
              ],
            },
          ]}
          results={[
            {
              title: "Cat",
              description:
                "You like to go with the flow. Cats love to keep to a routine.",
              resultImageSrc: Quiz1A1,
              resultID: 0,
            },
            {
              title: "Dog",
              description:
                "You’re very adventurous. What better way to explore than with a furry companion like a dog?",
                resultImageSrc: Quiz1A2,
                resultID: 1,
            },
            {
              title: "Rabbit",
              description:
                "You’re free spirited. What better way than with a cute rabbit by your side!",
                resultImageSrc: Quiz1A3,
                resultID: 2,
            },
            {
              title: "Guinea Pig",
              description:
                "You’re very down to earth! You like to keep things simple and what better way to do so then with a nice furry animal like a mouse of a guinea pig?",
                resultImageSrc: Quiz1A4,
                resultID: 3,
            },
          ]}
        />
      </Grid>
    </div>
  );
};
export default Quizzes;

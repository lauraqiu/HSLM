import React from "react";
import NavBar from "../components/NavBar.js";
import { useStyles } from "../styles/PlayQuizClasses.js";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import ReactBuzzFeedQuiz from "react-buzzfeed-quiz";
import Quiz4Q1O1 from "../images/Quiz4/1a.jpg";
import Quiz4Q1O2 from "../images/Quiz4/1b.jpg";
import Quiz4Q1O3 from "../images/Quiz4/1c.jpg";
import Quiz4Q1O4 from "../images/Quiz4/1d.jpg";
import Quiz4Q2O1 from "../images/Quiz4/2a.jpg";
import Quiz4Q2O2 from "../images/Quiz4/2b.jpg";
import Quiz4Q2O3 from "../images/Quiz4/2c.jpg";
import Quiz4Q2O4 from "../images/Quiz4/2d.jpg";
import Quiz4Q3O1 from "../images/Quiz4/3a.jpg";
import Quiz4Q3O2 from "../images/Quiz4/3b.jpg";
import Quiz4Q3O3 from "../images/Quiz4/3c.jpg";
import Quiz4Q3O4 from "../images/Quiz4/3d.jpg";
import Quiz4Q4O1 from "../images/Quiz4/4a.jpg";
import Quiz4Q4O2 from "../images/Quiz4/4b.jpg";
import Quiz4Q4O3 from "../images/Quiz4/4c.jpg";
import Quiz4Q4O4 from "../images/Quiz4/4d.jpg";
import Quiz4Q5O1 from "../images/Quiz4/5a.jpg";
import Quiz4Q5O2 from "../images/Quiz4/5b.jpg";
import Quiz4Q5O3 from "../images/Quiz4/5c.jpg";
import Quiz4Q5O4 from "../images/Quiz4/5d.jpg";
import Quiz4Q1 from "../images/Quiz4/Q1.webp";
import Quiz4Q2 from "../images/Quiz4/Q2.webp";
import Quiz4Q3 from "../images/Quiz4/Q3.webp";
import Quiz4Q4 from "../images/Quiz4/Q4.webp";
import Quiz4Q5 from "../images/Quiz4/Q5.webp";
import Quiz4A1 from "../images/Quiz4/Answer1.webp";
import Quiz4A2 from "../images/Quiz4/Answer2.webp";
import Quiz4A3 from "../images/Quiz4/Answer3.webp";
import Quiz4A4 from "../images/Quiz4/Answer4.webp";
const Quiz = styled(ReactBuzzFeedQuiz)([]);

const Quizzes = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar />
      <Grid container className={classes.page}>
        <Quiz
          title={"Pick a 5-course meal to determine what type of dog you should get!"} // quiz title name needed
          description={"Pick your favourite foods and we’ll tell you what type of dog to get!"}
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
              question: "Small snack",
              questionRelativeToImage: "overlap",
              answerArrangement: "tile",
              backgroundImageSrc: Quiz4Q1,
              answers: [
                {
                  backgroundImageSrc: Quiz4Q1O1,
                  resultID: 0,
                },
                {
                  backgroundImageSrc: Quiz4Q1O2,
                  resultID: 1,
                },
                {
                  backgroundImageSrc: Quiz4Q1O3,
                  resultID: 2,
                },
                {
                  backgroundImageSrc: Quiz4Q1O4,
                  resultID: 3,
                },
              ],
            },
            {
              question: "Appetizer",
              questionRelativeToImage: "overlap",
              answerArrangement: "tile",
              backgroundImageSrc: Quiz4Q2,
              answers: [
                {
                  backgroundImageSrc: Quiz4Q2O1,
                  resultID: 0,
                },
                {
                  backgroundImageSrc: Quiz4Q2O2,
                  resultID: 1,
                },
                {
                  backgroundImageSrc: Quiz4Q2O3,
                  resultID: 2,
                },
                {
                  backgroundImageSrc: Quiz4Q2O4,
                  resultID: 3,
                },
              ],
            },
            {
              question: "Soup",
              questionRelativeToImage: "overlap",
              answerArrangement: "tile",
              backgroundImageSrc: Quiz4Q3,
              answers: [
                {
                  backgroundImageSrc: Quiz4Q3O1,
                  resultID: 0,
                },
                {
                  backgroundImageSrc: Quiz4Q3O2,
                  resultID: 1,
                },
                {
                  backgroundImageSrc: Quiz4Q3O3,
                  resultID: 2,
                },
                {
                  backgroundImageSrc: Quiz4Q3O4,
                  resultID: 3,
                },
              ],
            },
            {
              question: "Main",
              questionRelativeToImage: "overlap",
              answerArrangement: "tile",
              backgroundImageSrc: Quiz4Q4,
              answers: [
                {
                  backgroundImageSrc: Quiz4Q4O1,
                  resultID: 0,
                },
                {
                  backgroundImageSrc: Quiz4Q4O2,
                  resultID: 1,
                },
                {
                  backgroundImageSrc: Quiz4Q4O3,
                  resultID: 2,
                },
                {
                  backgroundImageSrc: Quiz4Q4O4,
                  resultID: 3,
                },
              ],
            },
            {
              question: "Dessert",
              questionRelativeToImage: "overlap",
              answerArrangement: "tile",
              backgroundImageSrc: Quiz4Q5,
              answers: [
                {
                  backgroundImageSrc: Quiz4Q5O1,
                  resultID: 0,
                },
                {
                  backgroundImageSrc: Quiz4Q5O2,
                  resultID: 1,
                },
                {
                  backgroundImageSrc: Quiz4Q5O3,
                  resultID: 2,
                },
                {
                  backgroundImageSrc: Quiz4Q5O4,
                  resultID: 3,
                },
              ],
            },
          ]}
          results={[
            {
              title: "Shiba Inu",
              description:
                " ",
              resultImageSrc: Quiz4A1,
              resultID: 0,
            },
            {
              title: "Golden retriever",
              description:
                " ",
                resultImageSrc: Quiz4A2,
                resultID: 1,
            },
            {
              title: "German shepherd",
              description:
                " ",
                resultImageSrc: Quiz4A3,
                resultID: 2,
            },
            {
              title: "Husky",
              description:
                " ",
                resultImageSrc: Quiz4A4,
                resultID: 3,
            },
          ]}
        />
      </Grid>
    </div>
  );
};
export default Quizzes;

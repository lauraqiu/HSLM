import React from "react";
import NavBar from "../components/NavBar.js";
import { useStyles } from "../styles/PlayQuizClasses.js";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import ReactBuzzFeedQuiz from "react-buzzfeed-quiz";
import Quiz4Q1O1 from "../images/Quiz4/image1.jpg";
import Quiz4Q1O2 from "../images/Quiz4/image2.jpg";
import Quiz4Q1O3 from "../images/Quiz4/image3.jpg";
import Quiz4Q1O4 from "../images/Quiz4/image4.jpg";
import Quiz4Q2O1 from "../images/Quiz4/image5.jpg";
import Quiz4Q2O2 from "../images/Quiz4/image6.jpg";
import Quiz4Q2O3 from "../images/Quiz4/image7.jpg";
import Quiz4Q2O4 from "../images/Quiz4/image8.jpg";
import Quiz4Q3O1 from "../images/Quiz4/image9.jpg";
import Quiz4Q3O2 from "../images/Quiz4/image10.jpg";
import Quiz4Q3O3 from "../images/Quiz4/image11.jpg";
import Quiz4Q3O4 from "../images/Quiz4/image12.jpg";
import Quiz4Q4O1 from "../images/Quiz4/image13.jpg";
import Quiz4Q4O2 from "../images/Quiz4/image14.jpg";
import Quiz4Q4O3 from "../images/Quiz4/image15.jpg";
import Quiz4Q4O4 from "../images/Quiz4/image16.jpg";
import Quiz4Q5O1 from "../images/Quiz4/image17.jpg";
import Quiz4Q5O2 from "../images/Quiz4/image18.jpg";
import Quiz4Q5O3 from "../images/Quiz4/image19.jpg";
import Quiz4Q5O4 from "../images/Quiz4/image20.jpg";
const Quiz = styled(ReactBuzzFeedQuiz)([]);

const Quizzes = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar />
      <Grid container className={classes.page}>
        <Quiz
          title={"Pick a 5-course meal to determine what type of dog you should get"} // quiz title name needed
          description={"description needed"}
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
                "You like to go with the flow. Cats love to keep to a routine.",
              imageAttribution: "Your photo attribution text goes here",
              resultID: 0,
            },
            {
              title: "Golden retriever",
              description:
                "You’re very adventurous. What better way to explore than with a furry companion like a dog?",
              resultID: 1,
            },
            {
              title: "German shepherd",
              description:
                "You’re free spirited. What better way than with a cute rabbit by your side!",
              resultID: 2,
            },
            {
              title: "Husky",
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

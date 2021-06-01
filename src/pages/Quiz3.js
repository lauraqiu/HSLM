import React from "react";
import NavBar from "../components/NavBar.js";
import { useStyles } from "../styles/PlayQuizClasses.js";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import ReactBuzzFeedQuiz from "react-buzzfeed-quiz";
import Quiz3Q1 from "../images/Quiz3/Q1.jpg";
import Quiz3Q2 from "../images/Quiz3/Q2.webp";
import Quiz3Q3 from "../images/Quiz3/Q3.webp";
import Quiz3Q4 from "../images/Quiz3/Q4.webp";
import Quiz3Q5 from "../images/Quiz3/Q5.jpg";
import Quiz3A1 from "../images/Quiz3/AnswerA.jpg";
import Quiz3A2 from "../images/Quiz3/AnswerB.jpg";
import Quiz3A3 from "../images/Quiz3/AnswerC.jpg";
import Quiz3A4 from "../images/Quiz3/AnswerD.jpg";
const Quiz = styled(ReactBuzzFeedQuiz)([]);

const Quizzes = () => {
  const classes = useStyles();

  return (
    <div>
      <NavBar />
      <Grid container className={classes.page}>
        <Quiz
          title={"What type of pet animal should you get?"}
          description={"Find out what type of pet best suits your lifestyle and personality!"}
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
              question: "How would you describe yourself?",
              questionRelativeToImage: "overlap",
              answerArrangement: "row",
              backgroundImageSrc: Quiz3Q1,
              answers: [
                {
                  answer: "I like to run around and stay active",
                  resultID: 0,
                },
                {
                  answer: "I’m lazy",
                  resultID: 1,
                },
                {
                  answer: "I like action movies",
                  resultID: 2,
                },
                {
                  answer: "I like to collect unique and unusual things",
                  resultID: 3,
                },
              ],
            },
            {
              question: "How much time do you have to take care of your pet?",
              questionRelativeToImage: "overlap",
              answerArrangement: "row",
              backgroundImageSrc: Quiz3Q2,
              answers: [
                {
                  answer: "I will play with it everyday",
                  resultID: 0,
                },
                {
                  answer: "I will play with it sometimes",
                  resultID: 1,
                },
                {
                  answer: "I will play with it 1 hour a day",
                  resultID: 2,
                },
                {
                  answer: "I don’t have time",
                  resultID: 3,
                },
              ],
            },
            {
              question: "How much space do you have for your pet?",
              questionRelativeToImage: "overlap",
              answerArrangement: "row",
              backgroundImageSrc: Quiz3Q3,
              answers: [
                {
                  answer: "An entire house and a backyard",
                  resultID: 0,
                },
                {
                  answer: "An entire house",
                  resultID: 1,
                },
                {
                  answer: "A small table",
                  resultID: 2,
                },
                {
                  answer: "A room",
                  resultID: 3,
                },
              ],
            },
            {
              question: "How would you react if your pet broke something you really like?",
              questionRelativeToImage: "overlap",
              answerArrangement: "row",
              backgroundImageSrc: Quiz3Q4,
              answers: [
                {
                  answer: "It would both me a little",
                  resultID: 0,
                },
                {
                  answer: "It doesn’t bother me at all",
                  resultID: 1,
                },
                {
                  answer: "I would be super angry and want to give away my pet",
                  resultID: 2,
                },
                {
                  answer: "I would get mad but eventually get over it",
                  resultID: 3,
                },
              ],
            },
            {
              question: "How responsible are you?",
              questionRelativeToImage: "overlap",
              answerArrangement: "row",
              backgroundImageSrc: Quiz3Q5,
              answers: [
                {
                  answer: "Extremely responsible and organized",
                  resultID: 0,
                },
                {
                  answer: "Somewhat responsible",
                  resultID: 1,
                },
                {
                  answer: "Not very responsible",
                  resultID: 2,
                },
                {
                  answer: "Not responsible at all!",
                  resultID: 3,
                },
              ],
            },
          ]}
          results={[
            {
              title: "Dog",
              description:
                "Dogs are very active and like to run around. However, they require a lot of attention.",
                resultImageSrc: Quiz3A1,
                resultID: 0,
            },
            {
              title: "Cat",
              description:
                "Cats are not very active but still like to have fun once in a while. They are perfect for you if you don’t have a lot of time but you want a pet to interact with.",
                resultImageSrc: Quiz3A2,
                resultID: 1,
            },
            {
              title: "Bird, Guinea Pig, Hamster",
              description:
                "These pets are perfect for you if you don’t have a lot of space! They are also great if you don’t have a lot of time because they don’t require too much attention.",
                resultImageSrc: Quiz3A3,
                resultID: 2,
            },
            {
              title: "Snake, Reptile",
              description:
                "These pets are more uncommon and are definitely unique. They are perfect for you if you don’t have a lot of time because they don’t require much attention.",
                resultImageSrc: Quiz3A4,
                resultID: 3,
            },
          ]}
        />
      </Grid>
    </div>
  );
};
export default Quizzes;

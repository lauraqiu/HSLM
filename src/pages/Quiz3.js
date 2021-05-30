import React from "react";
import NavBar from "../components/NavBar.js";
import { useStyles } from "../styles/PlayQuizClasses.js";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import ReactBuzzFeedQuiz from "react-buzzfeed-quiz";
const Quiz = styled(ReactBuzzFeedQuiz)([]);

const Quizzes = () => {
  const classes = useStyles();

  return (
    <div>
      <NavBar />
      <Grid container className={classes.page}>
        <Quiz
          title={"What kind of pet is right for you?"}
          description={"description here"}
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
              answers: [
                {
                  answer: "I will play with it everyday!",
                  resultID: 0,
                },
                {
                  answer: "I will play with it sometimes",
                  resultID: 1,
                },
                {
                  answer: "1 hour a day",
                  resultID: 2,
                },
                {
                  answer: "I don’t have time!",
                  resultID: 3,
                },
              ],
            },
            {
              question: "How much space do you have for your pet?",
              questionRelativeToImage: "overlap",
              answerArrangement: "row",
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
              answers: [
                {
                  answer: "I would both me a little",
                  resultID: 0,
                },
                {
                  answer: "It doesn’t bother me at all",
                  resultID: 1,
                },
                {
                  answer: "I would be super angry and want to give away my pet!",
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
              title: "dog",
              description:
                "insert description",
              imageAttribution: "Your photo attribution text goes here",
              resultID: 0,
            },
            {
              title: "cat",
              description:
                "insert description",
              resultID: 1,
            },
            {
              title: "bird, guinea pig, hamster",
              description:
                "insert description",
              resultID: 2,
            },
            {
              title: "snake, reptile",
              description:
                "insert description",
              resultID: 3,
            },
          ]}
        />
      </Grid>
    </div>
  );
};
export default Quizzes;

import React, { Component } from "react";
import Feedback from "../feedback/Feedback";
import Section from "../section/Section";

class Main extends Component {
 state = {
  good: 0,
  neutral: 0,
  bad: 0,
 };

 newState = () => {
  this.setState((prevState) => {
   const { good } = prevState;
   return { good: good + 1 };
  });
 };

 countTotalFeedback = () => {
  const { good, neutral, bad } = this.state;
  const total = good + neutral + bad;
  return total;
 };

  countPositiveFeedbackPercentage = () => {
  const { good } = this.state;
  const total = this.countTotalFeedback();
  const positiveFeedback = total ? Math.round((good / total) * 100) : 0;
  return positiveFeedback;
 };
 render() {
  return (
   <main>
    <Section title={"Section-Feedback"}>
     <Feedback
      state={this.state}
      newState={this.newState}
      countTotalFeedback={this.countTotalFeedback}
      countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
     />
    </Section>
   </main>
  );
 }
}
export default Main;

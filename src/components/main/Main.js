import React, { Component } from "react";
import Feedback from "../feedback/Feedback";

class Main extends Component {
 state = {
  good: 0,
  neutral: 0,
  bad: 0,
 };

 onLeaveFeedback = (scoreName) => {
  this.setState((prevState) => {
   const oldValue = prevState[scoreName];
   return { [scoreName]: oldValue + 1 };
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
    <Feedback
     state={this.state}
     onLeaveFeedback={this.onLeaveFeedback}
     countTotalFeedback={this.countTotalFeedback}
     countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
    />
   </main>
  );
 }
}
export default Main;

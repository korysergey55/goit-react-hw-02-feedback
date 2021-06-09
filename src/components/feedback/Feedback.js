import React from 'react';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Statistics from './statistics/Statistics';
const Feedback = ({
 state,
 newState,
 countTotalFeedback,
 countPositiveFeedbackPercentage,
}) => {
 return (
  <>
   <h2 className="title">Please leave feedback</h2>
   <FeedbackOptions
    state={state}
    newState={newState}
    countTotalFeedback={countTotalFeedback}
    countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
   />
   <Statistics
    state={state}
    newState={newState}
    countTotalFeedback={countTotalFeedback}
    countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
   />
  </>
 );
};

export default Feedback;
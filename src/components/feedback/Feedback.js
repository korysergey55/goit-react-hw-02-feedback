import React from 'react';
import Section from './section/Section';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Statistics from './statistics/Statistics';

const Feedback = ({
 state,
 onLeaveFeedback,
 countTotalFeedback,
 countPositiveFeedbackPercentage,
}) => {
 return (
  <>
   <h2 className="title">Please leave feedback</h2>
   <Section title={"Section-Feedback"}>
    <FeedbackOptions
     onLeaveFeedback={onLeaveFeedback}
     
    />
   </Section>
   <Section title={"Section-Statistics"}>
    <Statistics
     state={state}
     onLeaveFeedback={onLeaveFeedback}
     countTotalFeedback={countTotalFeedback}
     countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
    />
   </Section>
  </>
 );
};

export default Feedback;
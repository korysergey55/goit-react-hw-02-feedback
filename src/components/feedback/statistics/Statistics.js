import React from "react";
import Notification from "./notification/Notification";
const Statistics = ({
 state,
 newState,
 countTotalFeedback,
 countPositiveFeedbackPercentage,
}) => {
 return (
  <>
   <h2 className="statistics">Statistics</h2>
   {countTotalFeedback() > 0 ? (
    <>
     <p className="good">:{state.good}</p>
     <p className="neutral">:{state.neutral}</p>
     <p className="bad">:{state.bad}</p>
     <p className="totalStatistics">:{countTotalFeedback()}</p>
     <p className="pozitivPersentege">:{countPositiveFeedbackPercentage()} %</p>
    </>
   ) : (
    <Notification message="No feedback given" />
   )}
  </>
 );
};

export default Statistics;

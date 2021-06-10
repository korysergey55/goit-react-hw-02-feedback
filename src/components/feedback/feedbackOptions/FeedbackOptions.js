import React from 'react';
const FeedbackOptions = ({ onLeaveFeedback }) => {
 return (
  <>
   <button
    type="button"
    className="btnGood"
    onClick={() => {
     onLeaveFeedback('good');
    }}
   >
    Good
   </button>
   <button
    type="button"
    className="btnNeutral"
    onClick={() => {
     onLeaveFeedback("neutral");
    }}
   >
    Neutral
   </button>
   <button
    type="button"
    className="btnBad"
    onClick={() => {
     onLeaveFeedback("bad");
    }}
   >
    Bad
   </button>
  </>
 );
};

export default FeedbackOptions;
import React from 'react';
const FeedbackOptions = ({ state, newState, countTotalFeedback }) => {
 return (
  <>
   <button
    type="button"
    className="btnGood"
    onClick={() => {
     newState(state.good);
    }}
   >
    Good
   </button>
   <button
    type="button"
    className="btnNeutral"
    onClick={() => {
     newState(state.neutral);
    }}
   >
    Neutral
   </button>
   <button
    type="button"
    className="btnBad"
    onClick={() => {
     newState(state.bad);
    }}
   >
    Bad
   </button>
  </>
 );
};

export default FeedbackOptions;
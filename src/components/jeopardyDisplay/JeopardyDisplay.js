import React from "react";

function JeopardyDisplay(props) {
  return (
    <div>
      <div className="Jeopardy">
        <h3>Score: {props.score} Points</h3>
        <strong>Category: </strong>
        {props.category}
        <br />
        <strong>Question: </strong>
        {props.question}
        <br />
        <strong>{props.value} Points</strong>
        <br />
        <br />
      </div>
    </div>
  );
}

export default JeopardyDisplay;

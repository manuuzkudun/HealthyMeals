import React from "react";

const Step = (props) => (
  <div className="step">
    <div className="step__index">{props.index}</div>
    <p className="step__p">{props.text}</p>
  </div>
);

export default Step;

import React from "react";
import Step from "./Step";
import stepsData from "./stepsData.json";

const Steps = () => (
  <section className="steps">
    <div className="steps__container">
      <h2 className="steps__headline">How it works — Simple as 1, 2, 3</h2>
      <div className="steps__row">
        <div className="steps__image">
          <img src="http://placehold.it/50x400" alt="smart phone" />
        </div>
        <div className="steps__list">
          { stepsData.map( (step,index) => (
            <Step key={index} index={index+1} text={step} />
          ))}
          <div className="steps__download">

          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Steps;

import React from "react";
import Step from "./Step";
import style from "./steps.less";
import stepsData from "./stepsData.json";

const Steps = () => (
  <section className="steps">
    <div className="steps__container">
      <h2 className="steps__headline">How it works &mdash; Simple as 1, 2, 3</h2>
      <div className="steps__row">
        <div className="steps__image">
          <img src="./src/components/steps/img/app-iPhone.png" alt="smart phone" />
        </div>
        <div className="steps__list">
          { stepsData.map( (step,index) => (
            <Step key={index} index={index+1} text={step} />
          ))}
          <div className="steps__download">
            <a href="#" className="btn-app">
              <img
                src="./src/components/steps/img/download-app.svg"
                alt="Download from apple store"
                className="steps__btn"
                />
            </a>
            <a href="#">
              <img
                src="./src/components/steps/img/download-app-android.png"
                alt="Download from google play"
                className="steps__btn"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Steps;

import React from "react";
import FeatureItem from "./FeatureItem";
import featuresData from "./featuresData.json";
import style from "./features.less";

const Features = () => (
  <section className="features">
    <div className="features__container">
      <h2 className="features__headline">Get food fast — not fast food</h2>
      <p className="features__p">Hello, we're Omnifood, your new premium food delivery service. We know you're always busy. No time for cooking. So let us take care of that, we're really good at it, we promise!</p>
      <div className="features__list">
        { featuresData.map( (feature,index) => <FeatureItem key={index} feature={feature} />) }
      </div>
    </div>
  </section>
);

export default Features;

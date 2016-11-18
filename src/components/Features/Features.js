import React from "react";
import FeatureItem from "./FeatureItem";

const featuresData = [
  {
    icon: "infite",
    headline: "Up to 365 days/year",
    text: "Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style."
  },
  {
    icon: "stopwatch",
    headline: "Ready in 20 minutes",
    text: "You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy."
  },
  {
    icon: "carrot",
    headline: "100% organic",
    text: "All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!"
  },
  {
    icon: "shop",
    headline: "Order anything",
    text: "We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It's up to you!"
  }
];

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

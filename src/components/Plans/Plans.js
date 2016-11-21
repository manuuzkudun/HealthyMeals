import React from "react";
import plansData from "./plansData.json";
import Plan from "./Plan";

const Plans = () => (
  <section className="plans">
    <div className="plans__container">
    <h2 className="plans_headline">Start eating healthy today</h2>
    <div className="plans_list">
      { plansData.map( (plan, index) => <Plan key={index} data={plan} />) }
    </div>
    </div>
  </section>
);

export default Plans;

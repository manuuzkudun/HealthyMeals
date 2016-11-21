import React from "react";

const Plan = (props) => (
  <div className="plan">
    <div className="plan__head">
      <h3 className="plan__name">{props.data.name}</h3>
      <p className="plan__price">{props.data.price}</p>
      <p className="plan__price-meal">{props.data.priceMeal}</p>
    </div>
    <div className="plan__features">
      <ul> { props.data.features.map( (feature, index) => (
        <li className="plan__feature" key={index}>
            <i className={feature.icon} />
            {feature.text}
        </li>
      ))}
      </ul>
    </div>
    <div className="plan__cta">
      <a className="plan__bttn">Sign Up now</a>
    </div>
  </div>
)

export default Plan;

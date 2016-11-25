import React from "react";

const City = (props) => (
  <div className="city">
    <img src={props.imgUrl} alt={props.name} className="city__img"/>
    <h3 className="city__headline">{props.name}</h3>
    <ul className="city__features"> {
        props.features.map( (feature, index) =>
        <li key={index} className="city__feature">
          <i className={`${feature.icon} city__icon`}></i>
          {feature.text}
        </li>
    )}</ul>

  </div>
)

export default City;

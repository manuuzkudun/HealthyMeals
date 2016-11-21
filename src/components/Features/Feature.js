import React from "react";

const Feature = (props) => (
  <div className="feature">
    <i className={`feature__icon ${props.feature.icon}`}></i>
    <h3 className="feature__headline">{props.feature.headline}</h3>
    <p className="feature__p">{props.feature.text}</p>
  </div>
)

export default Feature;

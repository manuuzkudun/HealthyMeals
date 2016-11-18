import React from "react";

const City = (props) => (
  <div className="city">
    <img src={"http://placehold.it/100x100"} alt={props.name} className="city__img"/>
    <h3 className="city__headline">{props.name}</h3>
  </div>
)

export default City;

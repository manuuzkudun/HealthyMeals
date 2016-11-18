import React from "react";

const FeatureItem = (props) => (
  <div className="feature_item">
    <i className={`feature_item__icon ${props.feature.icon}`}></i>
    <h3 className="feature_item__headline">{props.feature.headline}</h3>
    <p className="feature_item__p">{props.feature.text}</p>
  </div>
)

export default FeatureItem;

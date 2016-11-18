import React from "react";
import City from "./City";
import citiesData from "./citiesData.json";
import style from "./cities.less";

const Cities = () => (
  <section className="cities">
    <div className="cities__container">
      <h2 className="cities__headline">We're currently in these cities</h2>
      <div className="cities__list">
        { citiesData.map( (cityData,index) =>
          <City
            key={index}
            name={cityData.name}
            imgUrl={cityData.imgUrl}
            features={cityData.features}
          />
        )}
      </div>
    </div>
  </section>
);

export default Cities;

import React from "react";
import mealsData from "./mealsData.json";

const MealsSection = () => (
  <section className="meals">
    <div className="meals__container">
      <ul>
        { mealsData.map((meal, index) => (
          <figure key={index} className="meals__photo">
            <img src={meal.url} alt={meal.alt}/>
          </figure>
        ))}
      </ul>
    </div>
  </section>
);

export default MealsSection;

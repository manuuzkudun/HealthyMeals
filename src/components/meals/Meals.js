import React from "react";
import mealsData from "./mealsData.json";
import style from "./meals.less";

const Meals = () => (
  <section className="meals">
    <div className="meals__container">
      <ul>
        { mealsData.map((meal, index) => (
          <li key={index} className="meal">
            <img
              src={meal.imgUrl}
              alt={meal.alt}
              className="meal__img"
              />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Meals;

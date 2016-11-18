import React from "react";

const mealsImgs = [
  {url: "", alt: ""}
];

const MealsSection = () => (
  <section className="meals">
    <div className="meals__container">
      <ul>
        { mealsImgs.map((meal, index) => (
          <figure className="meals__photo">
            <img src={meal.url} alt={meal.alt}/>
          </figure>
        ))}
      </ul>
    </div>
  </section>
);

export default MealsSection;

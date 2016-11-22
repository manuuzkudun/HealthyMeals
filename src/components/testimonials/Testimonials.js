import React from "react";
import Testimonial from "./Testimonial";
import testimonialsData from "./testimonialsData.json";
import style from "./testimonials.less";

const Testimonials = () => (
  <section className="testimonials">
    <div className="testimonials__container">
      <h2 className="testimonials__headline">"Our customers can't live without us"</h2>
      <div className="testimonials__list">
        { testimonialsData.map( (testimonial,index) => <Testimonial data={testimonial} key={index} /> ) }
      </div>
    </div>
  </section>
);

export default Testimonials;

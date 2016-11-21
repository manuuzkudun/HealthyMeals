import React from "react";

const Testimonial = (props) => (
  <div className="testimonial">
    <blockquote>
      <p className="testimonial__p">{props.data.text}</p>
      <cite>
        <img
          src={props.data.user.imgUrl}
          alt={props.data.user.name}
          className="testimonial__img"
        />
        <span>{props.data.user.name}</span>
      </cite>
    </blockquote>
  </div>
);

export default Testimonial;

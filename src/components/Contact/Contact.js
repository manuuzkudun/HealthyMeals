import React from "react";
import style from "./contact.less";

const Contact = () => (
  <section className="contact">
    <div className="contact__container">
      <h2 className="contact__headline">"We're happy to hear from you"</h2>
      <form method="post" className="contact__form">
        <div>
          <label>Name</label>
          <input type="text" placeholder="Your name"></input>
        </div>
        <div>
          <label>Email</label>
          <input type="text" placeholder="Your email"></input>
        </div>
      </form>
    </div>
  </section>
);

export default Contact;

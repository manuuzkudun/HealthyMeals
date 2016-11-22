import React from "react";
import Header from "./header/Header";
import Features from "./features/Features";
import Meals from "./meals/Meals";
import Steps from "./steps/Steps";
import Cities from "./cities/Cities";
import Testimonials from "./testimonials/Testimonials";
import Plans from "./plans/Plans";
import Contact from "./contact/Contact";

const App = () => (
  <div>
    <Header />
    <Features />
    <Meals />
    <Steps />
    <Cities />
    <Testimonials />
    <Plans />
    <Contact />
  </div>
);

export default App;

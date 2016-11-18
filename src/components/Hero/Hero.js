import React from "react";
import MainNav from "./MainNav";
import MainCta from "./MainCta";
import Logo from "./Logo";

const Hero = () => (
  <section className="hero">
    <div className="hero__container">
      <Logo />
      <MainNav />
      <MainCta />
    </div>
  </section>
);

export default Hero;

import React from "react";
import MainNav from "./MainNav";
import MainCta from "./MainCta";
import Logo from "./Logo";
import style from "./header.less";

const Header = () => (
  <header className="header">
    <div className="header__container">
      <Logo />
      <MainNav />
      <MainCta />
    </div>
  </header>
);

export default Header;

import React from 'react';
import { Link, NavLink } from "react-router-dom";
 const Header = () => (
  <header className="header">
    <div className="content-container">
       
      <div className="header__content">
      <img src="/images/bank.png" alt="" />
    <Link className="header__title" to="/">
       <h1>Home</h1>
    </Link>
    <Link className="header__title" to="/aboutus">
       <h1>About</h1>
    </Link>
    <Link className="header__title" to="/contactus">
       <h1>Contact</h1>
    </Link>
    </div>
    </div>
  </header>
);
export default Header;




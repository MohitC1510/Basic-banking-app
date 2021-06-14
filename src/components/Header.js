import React from 'react';
import { Link, NavLink } from "react-router-dom";
import {connect} from 'react-redux'
 const Header = () => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
    <Link className="header__title" to="/Transactions">
       <h1>Transactions</h1>
    </Link>
    <Link className="header__title" to="/Transactions">
       <h1>Transactions</h1>
    </Link>
    <Link className="header__title" to="/Transactions">
       <h1>Transactions</h1>
    </Link>
    <h1>This is mmy home page</h1>
    </div>
    </div>
  </header>
);
export default Header;




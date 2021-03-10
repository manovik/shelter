import React from 'react';
import { NavLink } from "react-router-dom";

const HeaderLink = (props) => {


  // const mainPage = active ? "header__nav-link--active" : "";
  const mainPage = "";
  return (
    <li className="header__nav-item">
      <NavLink exact={props.exact} to={props.to}>
        <div className={`header__nav-link ${mainPage}`}>{props.title}</div>
      </NavLink>
    </li>
  );
};

export default HeaderLink;

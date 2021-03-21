import React from "react";
import { NavLink } from "react-router-dom";

const HeaderLink = (props) => {
  const mainPage = "";
  return (
    <li onClick={props.onClick} className="header__nav-item">
      <NavLink exact={props.exact} to={props.to}>
        <div className={`header__nav-link ${mainPage}`}>{props.title}</div>
      </NavLink>
    </li>
  );
};

export default HeaderLink;

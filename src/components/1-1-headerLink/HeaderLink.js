import React from 'react';
import { Link } from "react-router-dom";

const HeaderLink = (props) => {


  // const mainPage = active ? "header__nav-link--active" : "";
  const mainPage = "";
  return (
    <li className="header__nav-item">
      <Link to={props.to}>
        <div className={`header__nav-link ${mainPage}`}>{props.title}</div>
      </Link>
    </li>
  );
};

export default HeaderLink;

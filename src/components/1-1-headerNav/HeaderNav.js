import React, { useState, useEffect } from "react";
import HeaderLink from "../1-1-headerLink";

const HeaderNav = (props) => {
  const [transform, setTransform] = useState(null);
  const [w, setW] = useState(null);

  useEffect(() => {
    props.visible ? setTransform(0) : setTransform(null);
    props.visible ? setW("100%") : setW("");
  }, [w, props.visible, transform]);

  return (
    <nav className="header__nav-box">
      <ul className="header__nav" style={{transform: `translateX(${transform}%)`, width: w }}>
        <HeaderLink
          onClick={props.isBlurred ? props.onClick : null}
          exact={true}
          to={"/"}
          title={"Home"}
        />
        <HeaderLink
          onClick={props.isBlurred ? props.onClick : null}
          exact={false}
          to={"/pets"}
          title={"Our pets"}
        />
        <HeaderLink
          onClick={props.isBlurred ? props.onClick : null}
          exact={false}
          to={"/help"}
          title={"Help the shelter"}
        />
        <HeaderLink
          onClick={props.isBlurred ? props.onClick : null}
          exact={false}
          to={"/contacts"}
          title={"Contacts"}
        />
      </ul>
    </nav>
  );
};

export default HeaderNav;

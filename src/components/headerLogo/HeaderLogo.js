import { NavLink } from "react-router-dom";

const HeaderLogo = () => {
  return (
    <NavLink exact to={'/'}>
      <div className="header__logo-wrapper">
        <h1 className="header__logo-title">Cozy House</h1>
        <p className="header__logo-subtitle">Shelter for pets in Boston</p>
      </div>
    </NavLink>
  );
};

export default HeaderLogo;

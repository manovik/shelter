const HeaderLink = (props) => {
  const mainPage = props.current ? "header__nav-link--active" : "";
  return (
    <li className="header__nav-item">
      <a className={`header__nav-link ${mainPage}`} href={props.href}>
        {props.title}
      </a>
    </li>
  )
}

export default HeaderLink;
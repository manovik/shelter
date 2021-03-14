// import React from "react";
import './btn.scss'

const ContentButton = (props) => {

  if (props.isLink) {
    const className = props.className + " btn";
    return (
      <a onClick={(e) => e.preventDefault()} className={className} href={props.href}>
        {props.title}
      </a>
    );
  } else {
    let className = "";
    const classes = props.className.split(" ");
    for (let i = 0; i < classes.length; i++) {
      if (classes[i].match(/btn--\w+/)) {
        className = `${[
          ...classes.slice(0, i),
          "btn",
          ...classes.slice(i),
        ].join(" ")}`;
      } else {
        className = `${[
          ...classes,
          "btn"
        ].join(" ")}`;
      }
    }

    return (
      
      <button onClick={props.onClick} className={className} disabled={props.disabled} to={props.to}>
        {props.title}
      </button>
    );
  }
};

ContentButton.defaultProps = {
  isLink: true,
  className: "",
  href: "#",
  title: "Title",
};

export default ContentButton;

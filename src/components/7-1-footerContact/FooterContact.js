import { ReactComponent as Envelope } from "./envelope.svg";
import { ReactComponent as Phone } from "./phone.svg";
import { ReactComponent as Marker } from "./marker.svg";

const FooterContact = (props) => {
  let type = props.type ?? "";
  let pic,
    target = "_self";

  switch (type) {
    case "mail":
      type = "mailto:";
      pic = <Envelope />;
      break;
    case "tel":
      type = "tel:";
      pic = <Phone />;
      break;
    default:
      type = "";
      pic = <Marker />;
      target = "_blank";
  }

  return (
    <div className="footer__contact">
      <div className="footer__contact-img">{pic}</div>
      <a
        className="footer__contact-link"
        href={`${type}${props.link}`}
        target={target}
      >
        {props.text ?? props.link}  
      </a>
    </div>
  );
};

export default FooterContact;

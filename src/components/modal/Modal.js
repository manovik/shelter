import "./modal.scss";

const Modal = (props) => {
  const {
    img,
    type,
    breed,
    name,
    description,
    age,
    inoculations,
    diseases,
    parasites,
    closeModal,
  } = props;

  return (
    <div onClick={closeModal} className="modal">
      <div onClick={(e) => e.stopPropagation()} className="modal__wrapper">
        <button onClick={closeModal} className="modal__close" id="close-modal">
          <svg width="12" height="12" fill="none">
            <path
              d="M7.42618 6.00003L11.7046 1.72158C12.0985 1.32775 12.0985 0.689213 11.7046 0.295433C11.3108 -0.0984027 10.6723 -0.0984027 10.2785 0.295433L5.99998 4.57394L1.72148 0.295377C1.32765 -0.098459 0.68917 -0.098459 0.295334 0.295377C-0.0984448 0.689213 -0.0984448 1.32775 0.295334 1.72153L4.57383 5.99997L0.295334 10.2785C-0.0984448 10.6723 -0.0984448 11.3108 0.295334 11.7046C0.68917 12.0985 1.32765 12.0985 1.72148 11.7046L5.99998 7.42612L10.2785 11.7046C10.6723 12.0985 11.3108 12.0985 11.7046 11.7046C12.0985 11.3108 12.0985 10.6723 11.7046 10.2785L7.42618 6.00003Z"
              fill="#292929"
            />
          </svg>
        </button>
        <div className="modal__img-box">
          <img className="modal__img" src={img} alt={breed} />
        </div>
        <div className="modal__caption-box">
          <h4 className="modal__name">{name}</h4>
          <div className="modal__type">
            <span className="modal__animal">{type}</span> -
            <span className="modal__breed">{breed}</span>
          </div>
          <p className="modal__text" title={description}>
            {description}
          </p>
          <ul className="modal__descr">
            <li className="modal__descr-item">
              <span className="modal__item-caption">Age:</span>
              <span id="age">{age}</span>
            </li>
            <li className="modal__descr-item">
              <span className="modal__item-caption">Inoculations:</span>
              <span id="inoculations">{inoculations}</span>
            </li>
            <li className="modal__descr-item">
              <span className="modal__item-caption">Diseases:</span>
              <span id="diseases">{diseases}</span>
            </li>
            <li className="modal__descr-item">
              <span className="modal__item-caption">Parasites:</span>
              <span id="parasites">{parasites}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;

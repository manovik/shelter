import React from "react";

const checkClasses = (event) => {
  const t = event.target;
  if (t && t.parentElement.classList.contains("cards__box")) {
    for (let key of t.parentElement.children) {
      if (key.classList.contains("cards__btn--active")) {
        key.classList.remove("cards__btn--active");
      }
      t.classList.add("cards__btn--active");
    }
  }
};

const SelectionBar = (props) => {
  return (
    <div className="cards__top">
      <div className="cards__box" onClick={checkClasses}>
        <span className="cards__top-text">Sort by:</span>
        <button
          onClick={() => props.onClick("all")}
          className="cards__btn cards__btn--active"
          type="button"
        >
          All
        </button>
        <button
          onClick={() => props.onClick("dog")}
          className="cards__btn"
          type="button"
        >
          Dogs
        </button>
        <button
          onClick={() => props.onClick("cat")}
          className="cards__btn"
          type="button"
        >
          Cats
        </button>
      </div>
      <div className="cards__box">
        <span className="cards__top-text">Show</span>
        <div className="cards__select-box">
          <select
            onChange={(e) => {
              props.onSelect(e.target.value);
            }}
            className="cards__select"
            name="cardsCount"
            id="cardsCount"
          >
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="all">all</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SelectionBar;
